use serde::Deserialize;
use std::{
    collections::HashMap,
    fs::File,
    hash::{DefaultHasher, Hash, Hasher},
    io::{self, Read, Write},
};

use mdbook::{
    book::Book,
    errors::Error,
    preprocess::{CmdPreprocessor, Preprocessor, PreprocessorContext},
    BookItem,
};

struct Metadata;

#[derive(Debug, Deserialize)]
struct Frontmatter {
    tags: Option<Vec<String>>,
    contributors: Option<Vec<Contributor>>,
}

#[derive(Debug, Deserialize, Clone)]
#[serde(untagged)]
enum Contributor {
    Simple(String),
    Detailed {
        name: String,
        avatar: Option<String>,
        github: Option<String>,
    },
}

impl Contributor {
    fn name(&self) -> &str {
        match self {
            Self::Simple(name) => name,
            Self::Detailed { name, .. } => name,
        }
    }

    fn avatar(&self) -> Option<&str> {
        match self {
            Self::Simple(_) => None,
            Self::Detailed { avatar, .. } => avatar.as_deref(),
        }
    }

    fn github(&self) -> Option<&str> {
        match self {
            Self::Simple(_) => None,
            Self::Detailed { github, .. } => github.as_deref(),
        }
    }
}

const OUT_DIR: &str = "theme/";
const CONTRIBUTORS_OUT_DIR: &str = "theme/";

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
    fn name(&self) -> &str {
        "metadata"
    }

    fn run(&self, ctx: &PreprocessorContext, mut book: Book) -> Result<Book, Error> {
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
        let mut contributor_avatars: HashMap<String, String> = ctx
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
        let mut contributor_github: HashMap<String, String> = ctx
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

        let mut tags_index: HashMap<String, Vec<String>> = HashMap::new();
        let mut contributors_index: HashMap<String, Vec<String>> = HashMap::new();

        book.for_each_mut(|item| {
            // Throw away invalid chapters
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
            let Ok(frontmatter) = serde_yaml::from_str::<Frontmatter>(frontmatter_str) else {
                eprintln!("Invalid frontmatter in chapter: {}", ch.name);
                return;
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
                for contributor in contributors {
                    let name = contributor.name().to_string();
                    
                    // If avatar provided in frontmatter, use it, otherwise use from config
                    if let Some(avatar) = contributor.avatar() {
                        contributor_avatars.insert(name.clone(), avatar.to_string());
                    }
                    
                    // If github provided in frontmatter, use it, otherwise use from config
                    if let Some(github) = contributor.github() {
                        contributor_github.insert(name.clone(), github.to_string());
                    }

                    contributors_index
                        .entry(name)
                        .or_default()
                        .push(chapter_path_str.replace(".md", ".html"));
                }

                // Insert contributors
                match Self::insert_contributors(&mut body, contributors.clone(), &contributor_avatars, &contributor_github) {
                    Ok(new_body) => body = new_body,
                    Err(e) => {
                        eprintln!("Error processing chapter contributors: {} err={}", ch.name, e);
                        return;
                    }
                }
            }

            ch.content = body;
        });

        // Create contributors directory if it doesn't exist
        if !std::path::Path::new(CONTRIBUTORS_OUT_DIR).exists() {
            std::fs::create_dir_all(CONTRIBUTORS_OUT_DIR)?;
        }

        // Save processed tag metadata
        Self::generate_css(&tag_colours)?;
        Self::generate_tags_index(&tags_index)?;

        // Save processed contributor metadata
        Self::generate_contributors_css(&contributor_avatars)?;
        generate_contributors_index_js(&contributors_index, &contributor_github, &contributor_avatars)?;

        Ok(book)
    }
}

impl Metadata {
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

        // Insert tags
        let tags_html = format!(
            "<div class=\"tags\">{}</div>",
            tags.iter()
                .map(|tag| format!("<span class=\"tag {}\">{}</span>", name_to_id(tag), tag))
                .collect::<Vec<_>>()
                .join("")
        );

        let new_body = format!("{}\n{}\n{}", title, tags_html, body);
        return Ok(new_body);
    }

    fn insert_contributors(
        body: &str, 
        contributors: Vec<Contributor>, 
        avatars: &HashMap<String, String>,
        github_profiles: &HashMap<String, String>
    ) -> Result<String, Error> {
        // Find where to insert contributors
        let parts: Vec<&str> = body.splitn(2, "\n").collect();
        if parts.len() != 2 {
            return Err(Error::msg("Chapter content not properly formatted"));
        }

        let title = parts[0];
        let remaining_body = parts[1].to_string();

        // If tags are present, we need to insert after them
        if remaining_body.starts_with("<div class=\"tags\">") {
            let tag_parts: Vec<&str> = remaining_body.splitn(2, "\n").collect();
            if tag_parts.len() != 2 {
                return Err(Error::msg("Failed to find tag ending"));
            }

            let tags_html = tag_parts[0];
            let content_after_tags = tag_parts[1].to_string();

            // Insert contributors after tags
            let contributors_html = format!(
                "<div class=\"contributors-container\">\n  <div class=\"contributors-title\">Contributors to this framework</div>\n  <div class=\"contributors\">{}</div>\n</div>",
                contributors
                    .iter()
                    .map(|contributor| {
                        let name = contributor.name();
                        let id = name_to_id(name);
                        
                        // Use avatar from frontmatter or config if available
                        let has_avatar = avatars.get(name).map_or(false, |url| !url.is_empty());
                        let avatar_class = if has_avatar {
                            format!("contributor {} with-avatar", id)
                        } else {
                            format!("contributor {}", id)
                        };
                        
                        // If we have the avatar, add the background-image inline
                        let style_attr = if has_avatar {
                            if let Some(avatar_url) = avatars.get(name) {
                                format!(" style=\"background-image: url('{}');\"", avatar_url)
                            } else {
                                String::new()
                            }
                        } else {
                            String::new()
                        };
                        
                        // Use github link from frontmatter or config if available
                        if let Some(github) = contributor.github().or_else(|| github_profiles.get(name).filter(|url| !url.is_empty()).map(|s| s.as_str())) {
                            format!(
                                "<a href=\"{}\" target=\"_blank\" class=\"{}\"{}>{}</a>",
                                github,
                                avatar_class,
                                style_attr,
                                name
                            )
                        } else {
                            format!(
                                "<span class=\"{}\"{}>{}</span>",
                                avatar_class,
                                style_attr,
                                name
                            )
                        }
                    })
                    .collect::<Vec<_>>()
                    .join("")
            );

            let new_body = format!("{}\n{}\n{}\n{}", title, tags_html, contributors_html, content_after_tags);
            return Ok(new_body);
        } else {
            // No tags, insert contributors after title
            let contributors_html = format!(
                "<div class=\"contributors-container\">\n  <div class=\"contributors-title\">Contributors to this framework</div>\n  <div class=\"contributors\">{}</div>\n</div>",
                contributors
                    .iter()
                    .map(|contributor| {
                        let name = contributor.name();
                        let id = name_to_id(name);
                        
                        // Use avatar from frontmatter or config if available
                        let has_avatar = avatars.get(name).map_or(false, |url| !url.is_empty());
                        let avatar_class = if has_avatar {
                            format!("contributor {} with-avatar", id)
                        } else {
                            format!("contributor {}", id)
                        };
                        
                        // If we have the avatar, add the background-image inline
                        let style_attr = if has_avatar {
                            if let Some(avatar_url) = avatars.get(name) {
                                format!(" style=\"background-image: url('{}');\"", avatar_url)
                            } else {
                                String::new()
                            }
                        } else {
                            String::new()
                        };
                        
                        // Use github link from frontmatter or config if available
                        if let Some(github) = contributor.github().or_else(|| github_profiles.get(name).filter(|url| !url.is_empty()).map(|s| s.as_str())) {
                            format!(
                                "<a href=\"{}\" target=\"_blank\" class=\"{}\"{}>{}</a>",
                                github,
                                avatar_class,
                                style_attr,
                                name
                            )
                        } else {
                            format!(
                                "<span class=\"{}\"{}>{}</span>",
                                avatar_class,
                                style_attr,
                                name
                            )
                        }
                    })
                    .collect::<Vec<_>>()
                    .join("")
            );

            let new_body = format!("{}\n{}\n{}", title, contributors_html, remaining_body);
            return Ok(new_body);
        }
    }

    fn generate_css(tag_colours: &HashMap<String, String>) -> Result<(), Error> {
        let mut css = String::new();

        // General tag styling with less rounded corners
        css.push_str(".tags {\n");
        css.push_str("  display: flex;\n");
        css.push_str("  flex-wrap: wrap;\n");
        css.push_str("  gap: 0.5rem;\n");
        css.push_str("  margin-bottom: 1rem;\n");
        css.push_str("}\n\n");
        
        css.push_str(".tag {\n");
        css.push_str("  display: inline-block;\n");
        css.push_str("  padding: 0.5rem 1rem;\n");
        css.push_str("  border-radius: 0.25rem;\n");  // Less rounded, more squared shape
        css.push_str("  color: white;\n");
        css.push_str("  font-size: 1.6rem;\n");
        css.push_str("  font-weight: 500;\n");
        css.push_str("  line-height: 1;\n");
        css.push_str("}\n\n");

        let mut sorted_tags: Vec<_> = tag_colours.iter().collect();
        sorted_tags.sort_by(|a, b| a.0.cmp(&b.0));

        for (tag, colour) in sorted_tags {
            css.push_str(&format!(
                ".tag.{} {{ background-color: {}; }}\n",
                name_to_id(tag),
                colour
            ));
        }

        // Check if writing the file changes the content
        let mut existing_css = String::new();
        let mut file = File::open(format!("{}tags.css", OUT_DIR));
        if let Ok(file) = file.as_mut() {
            file.read_to_string(&mut existing_css)?;
        }

        if existing_css.trim().eq(css.trim()) {
            return Ok(());
        }

        let mut file = File::create(format!("{}tags.css", OUT_DIR))?;
        file.write(css.as_bytes())?;
        Ok(())
    }

    fn generate_contributors_css(contributor_avatars: &HashMap<String, String>) -> Result<(), Error> {
        let mut css = String::new();

        // Base styling for contributors container box
        css.push_str(".contributors-container {\n");
        css.push_str("  margin: 1.5rem 0;\n");
        css.push_str("  padding: 1rem;\n");
        css.push_str("  border: 1px solid var(--sidebar-non-existant);\n");
        css.push_str("  border-radius: 0.5rem;\n");
        css.push_str("  background-color: var(--sidebar-bg);\n");
        css.push_str("  opacity: 0.85;\n");
        css.push_str("  float: right;\n");
        css.push_str("  width: 250px;\n");
        css.push_str("  margin-left: 1.5rem;\n");
        css.push_str("  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n");
        css.push_str("  clear: right;\n");
        css.push_str("}\n\n");
        
        // Title styling
        css.push_str(".contributors-title {\n");
        css.push_str("  font-size: 1.25rem;\n");
        css.push_str("  font-weight: bold;\n");
        css.push_str("  margin-bottom: 1rem;\n");
        css.push_str("  color: var(--fg);\n");
        css.push_str("  text-align: center;\n");
        css.push_str("  padding-bottom: 0.5rem;\n");
        css.push_str("  border-bottom: 1px solid var(--sidebar-non-existant);\n");
        css.push_str("  white-space: nowrap;\n");
        css.push_str("  overflow: hidden;\n");
        css.push_str("  text-overflow: ellipsis;\n");
        css.push_str("}\n\n");

        // Base styling for contributors
        css.push_str(".contributors {\n");
        css.push_str("  display: flex;\n");
        css.push_str("  flex-direction: column;\n");
        css.push_str("  gap: 0.75rem;\n");
        css.push_str("  align-items: flex-start;\n");
        css.push_str("  width: 100%;\n");
        css.push_str("}\n\n");
        
        css.push_str(".contributor {\n");
        css.push_str("  display: inline-flex;\n");
        css.push_str("  align-items: center;\n");
        css.push_str("  padding: 0.4rem 0.75rem;\n");
        css.push_str("  border-radius: 2rem;\n");
        css.push_str("  background-color: var(--theme-popup-bg);\n");
        css.push_str("  font-size: 1.25rem;\n"); // 25% larger than 1rem
        css.push_str("  transition: all 0.2s ease;\n");
        css.push_str("  color: var(--fg);\n");
        css.push_str("  text-decoration: none;\n");
        css.push_str("  width: calc(100% - 1.5rem);\n");
        css.push_str("  margin-left: 0.75rem;\n");
        css.push_str("  white-space: nowrap;\n");
        css.push_str("  overflow: hidden;\n");
        css.push_str("  text-overflow: ellipsis;\n");
        css.push_str("  box-sizing: border-box;\n");
        css.push_str("}\n\n");
        
        css.push_str(".contributor:hover {\n");
        css.push_str("  background-color: var(--sidebar-active);\n");
        css.push_str("  transform: translateY(-2px);\n");
        css.push_str("  color: var(--sidebar-fg);\n");
        css.push_str("}\n\n");
        
        css.push_str("/* Avatar styling */\n");
        css.push_str(".contributor.with-avatar {\n");
        css.push_str("  padding-left: 2.25rem;\n"); // Increased for larger avatar
        css.push_str("  background-size: 1.75rem 1.75rem;\n"); // 25% larger than 1.4rem
        css.push_str("  background-repeat: no-repeat;\n");
        css.push_str("  background-position: 0.3rem center;\n");
        css.push_str("}\n\n");
        
        // Individual contributor avatar styles
        let mut sorted_contributors: Vec<_> = contributor_avatars.iter().collect();
        sorted_contributors.sort_by(|a, b| a.0.cmp(&b.0));

        if !sorted_contributors.is_empty() {
            css.push_str("/* Individual contributor avatars */\n");
            for (contributor, avatar) in sorted_contributors {
                if !avatar.is_empty() {
                    css.push_str(&format!(
                        ".contributor.{}.with-avatar {{\n  background-image: url('{}');\n}}\n\n",
                        name_to_id(contributor),
                        avatar
                    ));
                }
            }
        }

        // Styling for the contributors page
        css.push_str("/* Styling for the contributors page */\n");
        css.push_str(".contributors-list {\n");
        css.push_str("  display: grid;\n");
        css.push_str("  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n");
        css.push_str("  gap: 1rem;\n");
        css.push_str("  margin: 1rem 0;\n");
        css.push_str("}\n\n");
        
        css.push_str(".contributor-card {\n");
        css.push_str("  display: flex;\n");
        css.push_str("  flex-direction: column;\n");
        css.push_str("  align-items: center;\n");
        css.push_str("  padding: 1rem;\n");
        css.push_str("  border-radius: 0.5rem;\n");
        css.push_str("  background-color: var(--quote-bg);\n");
        css.push_str("  transition: all 0.2s ease;\n");
        css.push_str("}\n\n");
        
        css.push_str(".contributor-card:hover {\n");
        css.push_str("  background-color: var(--quote-border);\n");
        css.push_str("  transform: translateY(-3px);\n");
        css.push_str("}\n\n");
        
        css.push_str(".contributor-avatar {\n");
        css.push_str("  width: 64px;\n");
        css.push_str("  height: 64px;\n");
        css.push_str("  border-radius: 50%;\n");
        css.push_str("  object-fit: cover;\n");
        css.push_str("  margin-bottom: 0.5rem;\n");
        css.push_str("}\n\n");
        
        css.push_str(".contributor-name {\n");
        css.push_str("  font-weight: bold;\n");
        css.push_str("  margin-bottom: 0.25rem;\n");
        css.push_str("}\n\n");
        
        css.push_str(".contributor-contributions {\n");
        css.push_str("  font-size: 0.8rem;\n");
        css.push_str("  color: var(--fg);\n");
        css.push_str("  opacity: 0.8;\n");
        css.push_str("}\n\n");
        
        css.push_str(".chapters-button {\n");
        css.push_str("  margin-top: 0.5rem;\n");
        css.push_str("  padding: 0.25rem 0.75rem;\n");
        css.push_str("  background-color: var(--sidebar-active);\n");
        css.push_str("  color: var(--sidebar-fg);\n");
        css.push_str("  border: none;\n");
        css.push_str("  border-radius: 0.25rem;\n");
        css.push_str("  cursor: pointer;\n");
        css.push_str("  font-size: 0.8rem;\n");
        css.push_str("  transition: all 0.2s ease;\n");
        css.push_str("}\n\n");
        
        css.push_str(".chapters-button:hover {\n");
        css.push_str("  background-color: var(--sidebar-active-hover);\n");
        css.push_str("}\n\n");
        
        css.push_str(".chapters-list {\n");
        css.push_str("  margin-top: 0.5rem;\n");
        css.push_str("  padding-left: 1.5rem;\n");
        css.push_str("  font-size: 0.9rem;\n");
        css.push_str("}\n\n");
        
        css.push_str(".chapters-list li {\n");
        css.push_str("  margin-bottom: 0.25rem;\n");
        css.push_str("}\n\n");
        
        css.push_str(".chapters-list a {\n");
        css.push_str("  color: var(--fg);\n");
        css.push_str("  text-decoration: none;\n");
        css.push_str("}\n\n");
        
        css.push_str(".chapters-list a:hover {\n");
        css.push_str("  text-decoration: underline;\n");
        css.push_str("}\n");

        // Check if writing the file changes the content
        let mut existing_css = String::new();
        let mut file = File::open(format!("{}contributors.css", CONTRIBUTORS_OUT_DIR));
        if let Ok(file) = file.as_mut() {
            file.read_to_string(&mut existing_css)?;
        }

        if existing_css.trim().eq(css.trim()) {
            return Ok(());
        }

        let mut file = File::create(format!("{}contributors.css", CONTRIBUTORS_OUT_DIR))?;
        file.write(css.as_bytes())?;
        Ok(())
    }

    fn generate_tags_index(tags_index: &HashMap<String, Vec<String>>) -> Result<(), Error> {
        let mut tags_js = String::new();

        let mut sorted_tags: Vec<_> = tags_index.iter().collect();
        sorted_tags.sort_by(|a, b| a.0.cmp(&b.0));

        tags_js.push_str("const tagsIndex = {\n");
        for (tag, chapters) in sorted_tags {
            tags_js.push_str(&format!(
                "  \"{}\": [{}],\n",
                tag,
                chapters
                    .iter()
                    .map(|chapter| format!("\"{}\"", chapter))
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

    fn generate_contributors_index(
        contributors_index: &HashMap<String, Vec<String>>,
        github_profiles: &HashMap<String, String>
    ) -> Result<(), Error> {
        // Replaced with the new generate_contributors_index_js function
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

fn generate_contributors_index_js(
    contributors_map: &HashMap<String, Vec<String>>, 
    github_profiles: &HashMap<String, String>,
    avatars: &HashMap<String, String>
) -> Result<(), Error> {
    let mut js = String::new();
    js.push_str("// This file is auto-generated by the tags preprocessor\n");
    js.push_str("const contributorsIndex = {\n");

    // Sort contributors alphabetically for consistency
    let mut sorted_contributors: Vec<_> = contributors_map.iter().collect();
    sorted_contributors.sort_by(|a, b| a.0.cmp(&b.0));

    for (i, (contributor, chapters)) in sorted_contributors.iter().enumerate() {
        js.push_str(&format!("  \"{}\": {{\n", contributor));
        js.push_str(&format!("    \"chapters\": [\n"));
        
        // Sort chapters for consistency
        let mut sorted_chapters: Vec<String> = chapters.to_vec();
        sorted_chapters.sort();
        
        for (j, chapter) in sorted_chapters.iter().enumerate() {
            js.push_str(&format!("      \"{}\"", chapter));
            if j < sorted_chapters.len() - 1 {
                js.push_str(",\n");
            } else {
                js.push_str("\n");
            }
        }
        js.push_str("    ]");
        
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
        
        js.push_str("\n  }");
        
        if i < sorted_contributors.len() - 1 {
            js.push_str(",\n");
        } else {
            js.push_str("\n");
        }
    }

    js.push_str("};\n");

    // Check if writing the file changes the content
    let mut existing_js = String::new();
    let mut file = File::open(format!("{}contributorsindex.js", CONTRIBUTORS_OUT_DIR));
    if let Ok(file) = file.as_mut() {
        file.read_to_string(&mut existing_js)?;
    }

    if existing_js.trim().eq(js.trim()) {
        return Ok(());
    }

    let mut file = File::create(format!("{}contributorsindex.js", CONTRIBUTORS_OUT_DIR))?;
    file.write(js.as_bytes())?;
    Ok(())
}
