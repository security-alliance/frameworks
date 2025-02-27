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

struct Tags;

#[derive(Debug, Deserialize)]
struct Frontmatter {
    tags: Vec<String>,
}

const OUT_DIR: &str = "tags/";

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

impl Preprocessor for Tags {
    fn name(&self) -> &str {
        "tags"
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

        let mut tags_index: HashMap<String, Vec<String>> = HashMap::new();

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

            // Process tags
            for tag in &frontmatter.tags {
                tag_colours
                    .entry(tag.clone())
                    .or_insert_with(|| generate_color(tag));

                tags_index
                    .entry(tag.clone())
                    .or_default()
                    .push(chapter_path_str.replace(".md", ".html"));
            }

            // Insert tags
            match Self::insert_tags(&mut body, frontmatter.tags) {
                Ok(new_body) => body = new_body,
                Err(e) => {
                    eprintln!("Error processing chapter: {} err={}", ch.name, e);
                    return;
                }
            }

            ch.content = body;
        });

        // Save processed tag metadata
        Self::generate_css(&tag_colours)?;
        Self::generate_tags_index(&tags_index)?;

        Ok(book)
    }
}

impl Tags {
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

    fn generate_css(tag_colours: &HashMap<String, String>) -> Result<(), Error> {
        let mut css = String::new();

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

fn name_to_id(name: &str) -> String {
    name.to_lowercase()
        .replace(' ', "-")
        .replace('&', "")
        .replace(' ', "-")
        .replace('.', "")
        .replace(':', "")
        .replace(',', "")
        .replace('#', "")
        .replace('/', "")
}

fn handle_preprocessing() -> Result<(), Error> {
    let preprocessor = Tags;
    let (ctx, book) = CmdPreprocessor::parse_input(io::stdin())?;

    let processed_book = preprocessor.run(&ctx, book)?;
    serde_json::to_writer(io::stdout(), &processed_book)?;

    Ok(())
}
