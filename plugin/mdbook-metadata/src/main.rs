use serde::Deserialize;
use std::{
    collections::HashMap,
    fs::File,
    hash::{DefaultHasher, Hash, Hasher},
    io::{self, Read, Write},
    path::Path,
};

use mdbook::{
    book::Book,
    errors::Error,
    preprocess::{CmdPreprocessor, Preprocessor, PreprocessorContext},
    BookItem,
};

use serde_json::Value as JsonValue;

struct Metadata;

#[derive(Debug, Deserialize)]
struct Frontmatter {
    tags: Option<Vec<String>>,
    contributors: Option<Vec<ContributorRef>>,
}

// A contributor can be referenced in three ways:
// 1. Just an ID string that refers to the contributors.json database
// 2. An object with just the id field
// 3. A role-based contributor reference
#[derive(Debug, Deserialize, Clone)]
#[serde(untagged)]
enum ContributorRef {
    // New: Role-based contributor reference
    RoleRef {
        role: String,
        users: Vec<String>,
    },
    // Simple ID to look up in the contributors database
    Id(String),
    // ID reference in object form
    IdObj {
        id: String,
    }
}

impl ContributorRef {
    // Extract the contributor ID regardless of how it was specified
    fn get_id(&self) -> &str {
        match self {
            Self::Id(id) => id,
            Self::IdObj { id } => id,
            Self::RoleRef { users, .. } => users[0].as_str(),
        }
    }
}

const OUT_DIR: &str = "theme/tags/";
const CONTRIBUTORS_OUT_DIR: &str = "theme/contributors/";

fn main() {
    let mut args = std::env::args().skip(1);

    match args.next().as_deref() {
        Some("supports") => {
            return;
        }
        Some(arg) => {
            eprintln!("Unknown argument: {}", arg);
            std::process::exit(1);
        }
        None => {}
    }

    if let Err(e) = handle_preprocessing() {
        eprintln!("Error: {}", e);
        std::process::exit(1);
    }
}

impl Preprocessor for Metadata {
    // Return the name of the preprocessor
    fn name(&self) -> &str {
        "metadata"
    }
    
    // Process the book to extract and add metadata
    // This function:
    // 1. Creates output directories
    // 2. Loads the contributors database
    // 3. Loads tag colors from the config
    // 4. Processes each chapter to extract tags and contributors
    // 5. Inserts tags and contributors HTML into each chapter
    // 6. Generates CSS and JS files for tags and contributors
    fn run(&self, ctx: &PreprocessorContext, mut book: Book) -> Result<Book, Error> {
        // Create output directories if they don't exist
        if !std::path::Path::new(OUT_DIR).exists() {
            std::fs::create_dir_all(OUT_DIR)?;
        }
        if !std::path::Path::new(CONTRIBUTORS_OUT_DIR).exists() {
            std::fs::create_dir_all(CONTRIBUTORS_OUT_DIR)?;
        }
        
        // Load the contributors database
        let contributors_db = load_contributors_db()?;

        // Load tag colours from the config
        let mut tag_colours: HashMap<String, String> = ctx
            .config
            .get("preprocessor.tags.tag_colors")
            .and_then(|value| value.as_table())
            .map(|table| {
                table
                    .iter()
                    .map(|(tag, colour)| {
                        (
                            tag.to_string(),
                            colour.as_str().unwrap_or_default().to_string(),
                        )
                    })
                    .collect()
            })
            .unwrap_or_default();

        // Load contributor avatars from the config - these will be used as fallbacks
        let contributor_avatars: HashMap<String, String> = ctx
            .config
            .get("preprocessor.tags.contributor_avatars")
            .and_then(|value| value.as_table())
            .map(|table| {
                table
                    .iter()
                    .map(|(contributor, avatar)| {
                        (
                            contributor.to_string(),
                            avatar.as_str().unwrap_or_default().to_string(),
                        )
                    })
                    .collect()
            })
            .unwrap_or_default();

        // Load contributor github profiles from the config - these will be used as fallbacks
        let contributor_github: HashMap<String, String> = ctx
            .config
            .get("preprocessor.tags.contributor_github")
            .and_then(|value| value.as_table())
            .map(|table| {
                table
                    .iter()
                    .map(|(contributor, github)| {
                        (
                            contributor.to_string(),
                            github.as_str().unwrap_or_default().to_string(),
                        )
                    })
                    .collect()
            })
            .unwrap_or_default();

        // Initialize additional contributor social media maps
        let contributor_twitter: HashMap<String, String> = HashMap::new();
        let contributor_websites: HashMap<String, String> = HashMap::new();

        // Extract all tags
        let mut tags_index: HashMap<String, Vec<String>> = HashMap::new();

        // Global collections for contributors and roles
        let mut contributors_index: HashMap<String, Vec<String>> = HashMap::new();
        let mut contributor_roles: HashMap<String, HashMap<String, Vec<String>>> = HashMap::new();

        book.for_each_mut(|item| {
            // Throw away invalid pages
            let BookItem::Chapter(ch) = item else {
                return;
            };

            if ch.is_draft_chapter() {
                return;
            }

            let chapter_path = match ch.path.clone() {
                Some(path) => path,
                None => {
                    return;
                }
            };
            let chapter_path_str = match chapter_path.into_os_string().into_string() {
                Ok(path) => path,
                Err(_) => {
                    return;
                }
            };

            let content = ch.content.clone();
            if !content.starts_with("---") {
                return;
            }

            // Extract frontmatter
            let parts: Vec<&str> = content.splitn(3, "---").collect();
            if parts.len() != 3 {
                eprintln!("Invalid frontmatter in chapter: {}", ch.name);
                return;
            }

            let mut body = parts[2].to_string();
            body = body.trim().to_string();

                let frontmatter_str = parts[1];
    let frontmatter = match serde_yaml::from_str::<Frontmatter>(frontmatter_str) {
        Ok(fm) => fm,
        Err(_) => {
            eprintln!("Error parsing frontmatter in chapter: {}", ch.name);
            return;
        }
    };

            // Process tags if they exist
            if let Some(tags) = &frontmatter.tags {
                for tag in tags {
                    tag_colours
                        .entry(tag.clone())
                        .or_insert_with(|| generate_color(tag));

                    tags_index
                        .entry(tag.clone())
                        .or_default()
                        .push(chapter_path_str.replace(".md", ".html"));
                }

                // Insert tags
                match Self::insert_tags(&mut body, tags.clone()) {
                    Ok(new_body) => body = new_body,
                    Err(e) => {
                        eprintln!("Error processing chapter tags: {} err={}", ch.name, e);
                        return;
                    }
                }
            }

            // Process contributors if they exist
            if let Some(contributors) = &frontmatter.contributors {
                let mut chapter_contributors: Vec<ContributorRef> = Vec::new();
                let mut chapter_roles: HashMap<String, Vec<String>> = HashMap::new();
                
                for contributor_ref in contributors {
                    match contributor_ref {
                        ContributorRef::Id(id) => {
                            chapter_contributors.push(ContributorRef::Id(id.clone()));
                            contributors_index.entry(id.clone())
                                .or_insert_with(Vec::new)
                                .push(chapter_path_str.replace(".md", ".html"));
                        }
                        ContributorRef::IdObj { id } => {
                            chapter_contributors.push(ContributorRef::IdObj { id: id.clone() });
                            contributors_index.entry(id.clone())
                                .or_insert_with(Vec::new)
                                .push(chapter_path_str.replace(".md", ".html"));
                        }
                        ContributorRef::RoleRef { role, users } => {
                            chapter_contributors.push(ContributorRef::RoleRef { 
                                role: role.clone(), 
                                users: users.clone() 
                            });
                            
                            // Add each user to the chapter's contributors list
                            for user in users {
                                contributors_index.entry(user.clone())
                                    .or_insert_with(Vec::new)
                                    .push(chapter_path_str.replace(".md", ".html"));
                                    
                                // Record the role for this user on this chapter
                                chapter_roles.entry(role.clone())
                                    .or_insert_with(Vec::new)
                                    .push(user.clone());
                            }
                        }
                    }
                }
                
                // Store the chapter's role mappings
                if !chapter_roles.is_empty() {
                    contributor_roles.insert(chapter_path_str.replace(".md", ".html"), chapter_roles);
                }

                // Insert contributors
                match Self::insert_contributors(&mut body, chapter_contributors, &contributors_db) {
                    Ok(new_body) => body = new_body,
                    Err(e) => {
                        eprintln!("Error processing chapter contributors: {} err={}", ch.name, e);
                        return;
                    }
                }
            }

            ch.content = body;
        });

        // Save processed tag metadata
        Self::generate_css(&tag_colours)?;
        Self::generate_tags_index(&tags_index)?;

        // Skip CSS generation since we'll use a static CSS file
        // Self::generate_contributors_css(&contributor_avatars)?;
        
        // Use the new function with additional parameters
        generate_contributors_js(
            &contributors_index, 
            &contributor_github, 
            &contributor_avatars,
            &contributor_twitter,
            &contributor_websites,
            &contributor_roles
        )?;

        Ok(book)
    }
}

impl Metadata {
    // Insert tags HTML into the chapter body using the template
    // This adds a tag bar below the chapter title
    fn insert_tags(body: &str, tags: Vec<String>) -> Result<String, Error> {
        // Find the chapter title
        if !body.starts_with("# ") {
            return Err(Error::msg("Chapter title not found"));
        }

        let parts: Vec<&str> = body.splitn(2, "\n").collect();
        if parts.len() != 2 {
            return Err(Error::msg("Chapter title not found"));
        }

        let title = parts[0];
        let body = parts[1];

        // Read the tags template
        let template_path = Path::new("theme/templates/tags.html");
        let mut template = String::new();
        if template_path.exists() {
            let mut file = File::open(template_path)?;
            file.read_to_string(&mut template)?;
        } else {
            // Fallback to hardcoded template if file doesn't exist
            template = String::from("<div class=\"tags\"><!-- TAG_ITEMS_PLACEHOLDER --></div>");
        }
        
        // Read the tag item template
        let tag_item_path = Path::new("theme/templates/tag-item.html");
        let mut tag_item_template = String::new();
        if tag_item_path.exists() {
            let mut file = File::open(tag_item_path)?;
            file.read_to_string(&mut tag_item_template)?;
        } else {
            // Fallback to hardcoded template if file doesn't exist
            tag_item_template = String::from("<span class=\"tag TAG_ID_PLACEHOLDER\">TAG_NAME_PLACEHOLDER</span>");
        }
        
        // Generate tag items HTML
        let tag_items = tags.iter()
            .map(|tag| {
                tag_item_template
                    .replace("TAG_ID_PLACEHOLDER", &name_to_id(tag))
                    .replace("TAG_NAME_PLACEHOLDER", tag)
            })
            .collect::<Vec<_>>()
            .join("");
        
        // Replace placeholder with actual tag items
        let tags_html = template.replace("<!-- TAG_ITEMS_PLACEHOLDER -->", &tag_items);

        // Combine title, tags, and body - ensure tags are properly below the title
        Ok(format!("{}\n{}\n{}", title, tags_html, body))
    }

    // Generate contributor items HTML for specific role
    fn generate_contributor_items(
        contributors: &Vec<ContributorRef>,
        contributors_db: &HashMap<String, JsonValue>,
        role_type: &str,
        item_templates: &Vec<String>
    ) -> String {
        // Extract all user IDs for the specified role
        let mut user_ids: Vec<String> = Vec::new();
        
        for contributor_ref in contributors {
            match contributor_ref {
                ContributorRef::RoleRef { role, users } => {
                    // Only include users for this specific role
                    if role == role_type {
                        for user in users {
                            user_ids.push(user.clone());
                        }
                    }
                },
                // Handle legacy (non-role) contributors - they go into "wrote"
                _ => {
                    if role_type == "wrote" {
                        let id = contributor_ref.get_id().to_string();
                        user_ids.push(id);
                    }
                }
            }
        }
        
        // If no users found for this role, return empty string
        if user_ids.is_empty() {
            return String::new();
        }
        
        // Now generate HTML for each user
        user_ids.iter()
            .map(|user_id| {
                if let Some(db_contributor) = contributors_db.get(user_id) {
                    // Found contributor in database
                    let name = db_contributor
                        .get("name")
                        .and_then(|v| v.as_str())
                        .unwrap_or(user_id);
                    
                    // Get company information if available
                    let company = db_contributor
                        .get("company")
                        .and_then(|v| v.as_str())
                        .unwrap_or("");
                    
                    // Format display name with company if available
                    let display_name = if !company.is_empty() {
                        format!("{} - {}", name, company)
                    } else {
                        name.to_string()
                    };
                
                    let css_id = name_to_id(name);
                    let avatar_url = db_contributor.get("avatar").and_then(|v| v.as_str());
                    let github_url = db_contributor.get("github").and_then(|v| v.as_str());
                    
                    // Choose the appropriate template
                    let template = if github_url.is_some() && avatar_url.is_some() {
                        &item_templates[0] // GitHub + avatar
                    } else if avatar_url.is_some() {
                        &item_templates[1] // Avatar only
                    } else {
                        &item_templates[2] // Basic
                    };
                    
                    // Replace placeholders in the template
                    let mut html = template.replace("CONTRIBUTOR_ID_PLACEHOLDER", &css_id)
                                          .replace("CONTRIBUTOR_NAME_PLACEHOLDER", &display_name);
                    
                    if let Some(avatar) = avatar_url {
                        html = html.replace("AVATAR_URL_PLACEHOLDER", avatar);
                    }
                    
                    if let Some(github) = github_url {
                        html = html.replace("GITHUB_URL_PLACEHOLDER", github);
                    }
                    
                    html
                } else {
                    // Contributor not found in database
                    let css_id = name_to_id(user_id);
                    let template = &item_templates[2]; // Basic template
                    template.replace("CONTRIBUTOR_ID_PLACEHOLDER", &css_id)
                            .replace("CONTRIBUTOR_NAME_PLACEHOLDER", user_id)
                }
            })
            .collect::<Vec<_>>()
            .join("\n")
    }

    // Insert contributors HTML into the chapter body using templates
    fn insert_contributors(
        body: &str, 
        contributors: Vec<ContributorRef>,
        contributors_db: &HashMap<String, JsonValue>
    ) -> Result<String, Error> {
        // Find where to insert contributors
        let parts: Vec<&str> = body.splitn(2, "\n").collect();
        if parts.len() != 2 {
            return Err(Error::msg("Chapter content not properly formatted"));
        }

        let title = parts[0];
        let remaining_body = parts[1].to_string();

        // Read the contributors template
        let template_path = Path::new("theme/templates/contributors-roles.html");
        let mut template = String::new();
        if template_path.exists() {
            let mut file = File::open(template_path)?;
            file.read_to_string(&mut template)?;
        } else {
            // Fallback to hardcoded template if file doesn't exist
            template = String::from("<div class=\"contributors-roles\"><!-- WROTE_CONTRIBUTORS_PLACEHOLDER --><!-- REVIEWED_CONTRIBUTORS_PLACEHOLDER --><!-- FACT_CHECKED_CONTRIBUTORS_PLACEHOLDER --></div>");
        }
        
        // Read the contributor role group template
        let role_group_path = Path::new("theme/templates/contributor-role-group.html");
        let mut role_group_template = String::new();
        if role_group_path.exists() {
            let mut file = File::open(role_group_path)?;
            file.read_to_string(&mut role_group_template)?;
        } else {
            // Fallback to hardcoded template if file doesn't exist
            role_group_template = String::from("<div class=\"contributor-role-group\"><div class=\"contributor-role-label\">ROLE_LABEL_PLACEHOLDER:</div><div class=\"contributor-role-users\"><!-- ROLE_CONTRIBUTORS_PLACEHOLDER --></div></div>");
        }
        
        // Read the contributor item template
        let item_path = Path::new("theme/templates/contributor-item.html");
        let mut item_templates = Vec::new();
        if item_path.exists() {
            let mut file = File::open(item_path)?;
            let mut content = String::new();
            file.read_to_string(&mut content)?;
            
            // Split into separate templates based on comments
            for section in content.split("<!--").skip(1) {
                if let Some(template_text) = section.split("-->").nth(1) {
                    item_templates.push(template_text.trim().to_string());
                }
            }
        }
        
        // If no templates were loaded, use fallbacks
        if item_templates.is_empty() {
            item_templates = vec![
                // With GitHub and avatar
                "<a href=\"GITHUB_URL_PLACEHOLDER\" target=\"_blank\" class=\"contributor CONTRIBUTOR_ID_PLACEHOLDER with-avatar\" style=\"background-image: url('AVATAR_URL_PLACEHOLDER');\">CONTRIBUTOR_NAME_PLACEHOLDER</a>".to_string(),
                // With avatar, no GitHub
                "<span class=\"contributor CONTRIBUTOR_ID_PLACEHOLDER with-avatar\" style=\"background-image: url('AVATAR_URL_PLACEHOLDER');\">CONTRIBUTOR_NAME_PLACEHOLDER</span>".to_string(),
                // No avatar
                "<span class=\"contributor CONTRIBUTOR_ID_PLACEHOLDER\">CONTRIBUTOR_NAME_PLACEHOLDER</span>".to_string()
            ];
        }

        // Generate contributor items HTML for each role
        let wrote_items = Self::generate_contributor_items(&contributors, contributors_db, "wrote", &item_templates);
        let reviewed_items = Self::generate_contributor_items(&contributors, contributors_db, "reviewed", &item_templates);
        let fact_checked_items = Self::generate_contributor_items(&contributors, contributors_db, "fact_checked", &item_templates);
        
        // Create role groups only if there are items
        let mut wrote_group = String::new();
        if !wrote_items.is_empty() {
            wrote_group = role_group_template
                .replace("ROLE_LABEL_PLACEHOLDER", "Written by")
                .replace("<!-- ROLE_CONTRIBUTORS_PLACEHOLDER -->", &wrote_items);
        }
        
        let mut reviewed_group = String::new();
        if !reviewed_items.is_empty() {
            reviewed_group = role_group_template
                .replace("ROLE_LABEL_PLACEHOLDER", "Reviewed by")
                .replace("<!-- ROLE_CONTRIBUTORS_PLACEHOLDER -->", &reviewed_items);
        }
        
        let mut fact_checked_group = String::new();
        if !fact_checked_items.is_empty() {
            fact_checked_group = role_group_template
                .replace("ROLE_LABEL_PLACEHOLDER", "Fact checked by")
                .replace("<!-- ROLE_CONTRIBUTORS_PLACEHOLDER -->", &fact_checked_items);
        }
        
        // Only add the contributors section if at least one role has contributors
        if wrote_group.is_empty() && reviewed_group.is_empty() && fact_checked_group.is_empty() {
            // No contributors to show, just return the original content
            return Ok(format!("{}\n{}", title, remaining_body));
        }
        
        // Replace placeholders with actual role groups
        let contributors_html = template
            .replace("<!-- WROTE_CONTRIBUTORS_PLACEHOLDER -->", &wrote_group)
            .replace("<!-- REVIEWED_CONTRIBUTORS_PLACEHOLDER -->", &reviewed_group)
            .replace("<!-- FACT_CHECKED_CONTRIBUTORS_PLACEHOLDER -->", &fact_checked_group);
        
        // Check if tags are present
        if remaining_body.starts_with("<div class=\"tags\">") {
            // If tags are present, place contributors box AFTER the tags
            // We need to find where the tags div ends
            let tag_end_pos = remaining_body.find("</div>");
            if tag_end_pos.is_none() {
                return Err(Error::msg("Failed to find tag ending"));
            }
            
            // Find the end of the line containing the closing </div> tag
            let tag_end_pos = tag_end_pos.unwrap();
            let line_end_pos = remaining_body[tag_end_pos..].find('\n');
            if line_end_pos.is_none() {
                return Err(Error::msg("Failed to find end of tag line"));
            }
            
            // Calculate the full position where tags end
            let full_end_pos = tag_end_pos + line_end_pos.unwrap() + 1; // +1 for the newline char
            
            // Split the content into before and after tags
            let tags_html = &remaining_body[..full_end_pos];
            let content_after_tags = &remaining_body[full_end_pos..];
            
            // Place contributors box after tags with clear separation
            return Ok(format!("{}\n{}\n{}\n{}", 
                title,
                tags_html,
                contributors_html,
                content_after_tags));
        }
        
        // No tags, place contributors box right after the title
        Ok(format!("{}\n{}\n{}", title, contributors_html, remaining_body))
    }

    // Generate CSS for new tags that don't have predefined styles
    // This appends to the static tags.css file without overwriting existing styles
    fn generate_css(tag_colours: &HashMap<String, String>) -> Result<(), Error> {
        // Read the existing static CSS file
        let mut css = String::new();
        let css_path = format!("{}tags.css", OUT_DIR);
        let mut file = File::open(&css_path)?;
        file.read_to_string(&mut css)?;
        
        // Check if we need to add any new tag colors
        let mut new_colors = String::new();
        let mut sorted_tags: Vec<_> = tag_colours.iter().collect();
        sorted_tags.sort_by(|a, b| a.0.cmp(&b.0));
        
        for (tag, colour) in sorted_tags {
            // Create the CSS class name
            let css_class = format!(".tag.{}", name_to_id(tag));
            
            // Only add if the tag doesn't already have a style in the CSS
            if !css.contains(&css_class) {
                new_colors.push_str(&format!(
                    ".tag.{} {{ background-color: {}; }}\n",
                    name_to_id(tag),
                    colour
                ));
            }
        }
        
        // If there are new colors to add, append them to the file
        if !new_colors.is_empty() {
            let mut file = std::fs::OpenOptions::new()
                .write(true)
                .append(true)
                .open(css_path)?;
                
            // Add a comment before new auto-generated colors
            if !css.contains("/* Auto-generated tag colors */") {
                writeln!(file, "\n/* Auto-generated tag colors */")?;
            }
            
            file.write_all(new_colors.as_bytes())?;
        }
        
        Ok(())
    }

    fn generate_tags_index(tags_index: &HashMap<String, Vec<String>>) -> Result<(), Error> {
        let mut tags_js = String::new();

        let mut sorted_tags: Vec<_> = tags_index.iter().collect();
        sorted_tags.sort_by(|a, b| a.0.cmp(&b.0));

        tags_js.push_str("const tagsIndex = {\n");
        for (tag, pages) in sorted_tags {
            tags_js.push_str(&format!(
                "  \"{}\": [{}],\n",
                tag,
                pages
                    .iter()
                    .map(|page| format!("\"{}\"", page))
                    .collect::<Vec<_>>()
                    .join(", ")
            ));
        }

        tags_js.push_str("};\n");

        // Check if writing the file changes the content
        let mut existing_tags_js = String::new();
        let mut file = File::open(format!("{}tagsindex.js", OUT_DIR));
        if let Ok(file) = file.as_mut() {
            file.read_to_string(&mut existing_tags_js)?;
        }

        if existing_tags_js.trim() == tags_js.trim() {
            return Ok(());
        }

        let mut file = File::create(format!("{}tagsindex.js", OUT_DIR))?;
        file.write_all(tags_js.as_bytes())?;
        Ok(())
    }
}

fn generate_color(tag: &str) -> String {
    let mut hasher = DefaultHasher::new();
    let mut seed = 0; // Seed value to vary the input on each iteration

    let mut color = "".to_string();
    while color.is_empty() {
        let tag_with_seed = format!("{}{}", tag, seed);
        tag_with_seed.hash(&mut hasher); // Hash the tag with the seed
        let hash = hasher.finish();

        let r = (hash & 0xFF) as u8;
        let g = ((hash >> 8) & 0xFF) as u8;
        let b = ((hash >> 16) & 0xFF) as u8;

        if check_color_contrast(
            rgb::RGB { r, g, b },
            rgb::RGB {
                r: 255,
                g: 255,
                b: 255,
            },
        ) {
            color = format!("#{:02X}{:02X}{:02X}", r, g, b);
            break;
        }

        // Increment the seed for the next iteration
        seed += 1;

        // Fallback to prevent infinite loop
        if seed > 1000 {
            // If no valid colour found after 1000 tries, use a default colour
            color = "#000000".to_string(); // Default black
            break;
        }
    }

    color
}

// check_color_contrast returns whether the contrast between the two colors is
// sufficient for readability.
fn check_color_contrast(c1: rgb::RGB<u8>, c2: rgb::RGB<u8>) -> bool {
    let c: f32 = contrast::contrast(c1, c2);
    c > 5f32
}

/// Convert a contributor name into a CSS ID-compatible string
fn name_to_id(name: &str) -> String {
    // First, convert to lowercase
    let lowercase = name.to_lowercase();
    
    // Replace all spaces with dashes
    let with_dashes = lowercase.replace(' ', "-");
    
    // Remove any remaining characters that would be invalid in CSS IDs
    with_dashes
        .replace('&', "")
        .replace('.', "")
        .replace(':', "")
        .replace(',', "")
        .replace('#', "")
        .replace('/', "")
        .replace('(', "")
        .replace(')', "")
}

fn handle_preprocessing() -> Result<(), Error> {
    let preprocessor = Metadata;
    let (ctx, book) = CmdPreprocessor::parse_input(io::stdin())?;

    let processed_book = preprocessor.run(&ctx, book)?;
    serde_json::to_writer(io::stdout(), &processed_book)?;

    Ok(())
}

// Generate the JavaScript file containing the contributors index data
// This is used by the frontend to display contributor information
fn generate_contributors_js(
    contributors_map: &HashMap<String, Vec<String>>, 
    github_profiles: &HashMap<String, String>,
    avatars: &HashMap<String, String>,
    twitter_profiles: &HashMap<String, String>,
    websites: &HashMap<String, String>,
    roles: &HashMap<String, HashMap<String, Vec<String>>>
) -> Result<(), Error> {
    let mut js = String::new();
    js.push_str("// This file is auto-generated by the tags preprocessor\n");
    js.push_str("const contributorsIndex = {\n");

    // Load the contributors database once
    let contributors_db = load_contributors_db()?;
    
    // Create a lookup from displayName/name to ID to help match contributors
    let mut name_to_id: HashMap<String, String> = HashMap::new();
    let mut id_to_display_name: HashMap<String, String> = HashMap::new();
    
    for (id, data) in &contributors_db {
        // Map the ID directly
        name_to_id.insert(id.clone(), id.clone());
        
        // Get display name for later use
        let display_name = data.get("displayName")
            .and_then(|v| v.as_str())
            .or_else(|| data.get("name").and_then(|v| v.as_str()))
            .unwrap_or(id);
            
        id_to_display_name.insert(id.clone(), display_name.to_string());
        
        // Map displayName to ID if available
        if let Some(display_name) = data.get("displayName").and_then(|v| v.as_str()) {
            name_to_id.insert(display_name.to_string(), id.clone());
        }
        
        // Map name to ID if available
        if let Some(name) = data.get("name").and_then(|v| v.as_str()) {
            name_to_id.insert(name.to_string(), id.clone());
        }
    }

    // Keep track of which contributors we've already processed
    let mut processed_contributors = std::collections::HashSet::new();

    // Sort contributors alphabetically for consistency
    let mut sorted_contributors: Vec<_> = contributors_map.iter().collect();
    sorted_contributors.sort_by(|a, b| a.0.cmp(&b.0));

    // First add all contributors who have contributed to pages
    for (i, (contributor, pages)) in sorted_contributors.iter().enumerate() {
        js.push_str(&format!("  \"{}\": {{\n", contributor));
        js.push_str(&format!("    \"pages\": [\n"));
        
        // Sort pages for consistency
        let mut sorted_pages: Vec<String> = pages.to_vec();
        sorted_pages.sort();
        
        for (j, page) in sorted_pages.iter().enumerate() {
            js.push_str(&format!("      \"{}\"", page));
            if j < sorted_pages.len() - 1 {
                js.push_str(",\n");
            } else {
                js.push_str("\n");
            }
        }
        js.push_str("    ]");

        // Add roles information
        let mut contributor_roles: HashMap<String, Vec<String>> = HashMap::new();
        
        // Collect all roles for this contributor across all pages
        for (chapter_path, chapter_roles) in roles {
            for (role, users) in chapter_roles {
                if users.contains(contributor) {
                    contributor_roles.entry(role.clone())
                        .or_insert_with(Vec::new)
                        .push(chapter_path.clone());
                }
            }
        }
        
        // Add roles to the JS if there are any
        if !contributor_roles.is_empty() {
            js.push_str(",\n    \"roles\": {\n");
            
            let role_entries: Vec<_> = contributor_roles.iter().collect();
            for (j, (role, pages)) in role_entries.iter().enumerate() {
                js.push_str(&format!("      \"{}\": [", role));
                
                // Join the pages for this role
                let page_strings: Vec<String> = pages.iter()
                    .map(|p| format!("\"{}\"", p))
                    .collect();
                js.push_str(&page_strings.join(", "));
                
                js.push_str("]");
                if j < role_entries.len() - 1 {
                    js.push_str(",\n");
                } else {
                    js.push_str("\n");
                }
            }
            
            js.push_str("    }");
        }
        
        // Add github profile if available
        if let Some(github) = github_profiles.get(*contributor) {
            if !github.is_empty() {
                js.push_str(&format!(",\n    \"github\": \"{}\"", github));
            }
        }
        
        // Add avatar URL if available
        if let Some(avatar) = avatars.get(*contributor) {
            if !avatar.is_empty() {
                js.push_str(&format!(",\n    \"avatar\": \"{}\"", avatar));
            }
        }
        
        // Add Twitter profile if available
        if let Some(twitter) = twitter_profiles.get(*contributor) {
            if !twitter.is_empty() {
                js.push_str(&format!(",\n    \"twitter\": \"{}\"", twitter));
            }
        }
        
        // Add website if available
        if let Some(website) = websites.get(*contributor) {
            if !website.is_empty() {
                js.push_str(&format!(",\n    \"website\": \"{}\"", website));
            }
        }
        
        // Try to find the contributor in the database by mapped ID
        let contributor_id = name_to_id.get(*contributor).cloned();
        
        if let Some(db_id) = &contributor_id {
            if let Some(contributor_data) = contributors_db.get(db_id) {
                // Add company if available
                if let Some(company) = contributor_data.get("company").and_then(|v| v.as_str()) {
                    if !company.is_empty() {
                        js.push_str(&format!(",\n    \"company\": \"{}\"", company));
                    }
                }
                
                // Add avatar URL from the database if not already added from avatars map
                if !avatars.contains_key(*contributor) {
                    if let Some(avatar) = contributor_data.get("avatar").and_then(|v| v.as_str()) {
                        if !avatar.is_empty() {
                            js.push_str(&format!(",\n    \"avatar\": \"{}\"", avatar));
                        }
                    }
                }
                
                // Add github URL from the database if not already added
                if !github_profiles.contains_key(*contributor) {
                    if let Some(github) = contributor_data.get("github").and_then(|v| v.as_str()) {
                        if !github.is_empty() {
                            js.push_str(&format!(",\n    \"github\": \"{}\"", github));
                        }
                    }
                }
                
                // Add Twitter URL from the database if not already added
                if !twitter_profiles.contains_key(*contributor) {
                    if let Some(twitter) = contributor_data.get("twitter").and_then(|v| v.as_str()) {
                        if !twitter.is_empty() {
                            js.push_str(&format!(",\n    \"twitter\": \"{}\"", twitter));
                        }
                    }
                }
                
                // Add website URL from the database if not already added
                if !websites.contains_key(*contributor) {
                    if let Some(website) = contributor_data.get("website").and_then(|v| v.as_str()) {
                        if !website.is_empty() {
                            js.push_str(&format!(",\n    \"website\": \"{}\"", website));
                        }
                    }
                }
                
                // Add role if available
                if let Some(role) = contributor_data.get("role").and_then(|v| v.as_str()) {
                    if !role.is_empty() {
                        js.push_str(&format!(",\n    \"role\": \"{}\"", role));
                    }
                }
                
                // Add description if available
                if let Some(description) = contributor_data.get("description").and_then(|v| v.as_str()) {
                    if !description.is_empty() {
                        js.push_str(&format!(",\n    \"description\": \"{}\"", description));
                    }
                }
                
                // Add features if available
                if let Some(features) = contributor_data.get("features").and_then(|v| v.as_array()) {
                    let features_str: Vec<String> = features.iter().filter_map(|v| v.as_str().map(String::from)).collect();
                    if !features_str.is_empty() {
                        js.push_str(&format!(",\n    \"features\": [{}]", features_str.iter().map(|f| format!("\"{}\"", f)).collect::<Vec<_>>().join(", ")));
                    }
                }
            }
        }
        
        js.push_str("\n  }");
        
        if i < sorted_contributors.len() - 1 {
            js.push_str(",\n");
        } else {
            // If we're the last one and there will be more contributors after this,
            // add a comma
            if processed_contributors.len() < contributors_db.len() {
                js.push_str(",\n");
            } else {
                js.push_str("\n");
            }
        }
        
        // Mark this contributor as processed
        if let Some(db_id) = contributor_id {
            processed_contributors.insert(db_id);
        }
    }

    // Now add contributors from the database who haven't been processed yet
    // These are contributors who haven't contributed to any pages yet
    let mut additional_contributors: Vec<_> = contributors_db.iter()
        .filter(|(id, _)| !processed_contributors.contains(*id))
        .collect();
    additional_contributors.sort_by(|a, b| a.0.cmp(&b.0));
    
    for (i, (id, data)) in additional_contributors.iter().enumerate() {
        // Get display name
        let display_name = id_to_display_name.get(*id).unwrap_or(id);
        
        js.push_str(&format!("  \"{}\": {{\n", display_name));
        
        // Add empty pages array
        js.push_str("    \"pages\": []");
        
        // Add github profile if available
        if let Some(github) = data.get("github").and_then(|v| v.as_str()) {
            if !github.is_empty() {
                js.push_str(&format!(",\n    \"github\": \"{}\"", github));
            }
        }
        
        // Add avatar URL if available
        if let Some(avatar) = data.get("avatar").and_then(|v| v.as_str()) {
            if !avatar.is_empty() {
                js.push_str(&format!(",\n    \"avatar\": \"{}\"", avatar));
            }
        }
        
        // Add Twitter profile if available
        if let Some(twitter) = data.get("twitter").and_then(|v| v.as_str()) {
            if !twitter.is_empty() {
                js.push_str(&format!(",\n    \"twitter\": \"{}\"", twitter));
            }
        }
        
        // Add website if available
        if let Some(website) = data.get("website").and_then(|v| v.as_str()) {
            if !website.is_empty() {
                js.push_str(&format!(",\n    \"website\": \"{}\"", website));
            }
        }
        
        // Add company if available
        if let Some(company) = data.get("company").and_then(|v| v.as_str()) {
            if !company.is_empty() {
                js.push_str(&format!(",\n    \"company\": \"{}\"", company));
            }
        }
        
        // Add role if available
        if let Some(role) = data.get("role").and_then(|v| v.as_str()) {
            if !role.is_empty() {
                js.push_str(&format!(",\n    \"role\": \"{}\"", role));
            }
        }
        
        // Add description if available
        if let Some(description) = data.get("description").and_then(|v| v.as_str()) {
            if !description.is_empty() {
                js.push_str(&format!(",\n    \"description\": \"{}\"", description));
            }
        }
        
        // Add features if available
        if let Some(features) = data.get("features").and_then(|v| v.as_array()) {
            let features_str: Vec<String> = features.iter().filter_map(|v| v.as_str().map(String::from)).collect();
            if !features_str.is_empty() {
                js.push_str(&format!(",\n    \"features\": [{}]", features_str.iter().map(|f| format!("\"{}\"", f)).collect::<Vec<_>>().join(", ")));
            }
        }
        
        js.push_str("\n  }");
        
        if i < additional_contributors.len() - 1 {
            js.push_str(",\n");
        } else {
            js.push_str("\n");
        }
    }

    js.push_str("};\n");

    // Create the file path
    let js_path = Path::new(CONTRIBUTORS_OUT_DIR).join("contributorsindex.js");
    
    // Use a more reliable update mechanism to prevent unnecessary writes
    // that could trigger mdbook file watching loops
    match File::open(&js_path) {
        Ok(mut existing_file) => {
            // If the file already exists, read it and compare content
            let mut existing_content = String::new();
            if existing_file.read_to_string(&mut existing_content).is_ok() {
                // Normalize whitespace for reliable comparison
                if existing_content.trim() == js.trim() {
                    // Content hasn't changed meaningfully, no need to write
                    return Ok(());
                }
            }
        },
        Err(_) => {
            // File doesn't exist yet or there was an error opening it
            // We'll proceed to create it
        }
    };

    // Create or update the file with new content
    match File::create(&js_path) {
        Ok(mut file) => {
            file.write_all(js.as_bytes())?;
        },
        Err(err) => {
            return Err(Error::msg(format!("Failed to create contributors index file: {}", err)));
        }
    }
    
    Ok(())
}

// Load the contributors database from the JSON file in src/config/contributors.json
// Returns a HashMap where keys are contributor IDs and values are their data as JSON objects
fn load_contributors_db() -> Result<HashMap<String, JsonValue>, Error> {
    let mut contributors_db: HashMap<String, JsonValue> = HashMap::new();
    
    // Try to load the contributors database file
    let db_path = Path::new("src/config/contributors.json");
    
    if db_path.exists() {
        let mut file = File::open(db_path)?;
        let mut contents = String::new();
        file.read_to_string(&mut contents)?;
        
        // Parse the JSON
        let json: serde_json::Value = serde_json::from_str(&contents)?;
        
        // Convert to HashMap
        if let JsonValue::Object(map) = json {
            for (key, value) in map {
                contributors_db.insert(key, value);
            }
        }
    }
    
    Ok(contributors_db)
}
