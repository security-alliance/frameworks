use std::{
    collections::HashMap,
    hash::{DefaultHasher, Hash, Hasher},
};

use anyhow::{anyhow, Error};
use mdbook_metadata::{load_template, remove_indentation, to_id, write_if_changed};
use serde::{Deserialize, Serialize};

use crate::Preprocessor;

#[derive(Debug, Deserialize)]
struct Frontmatter {
    tags: Option<Vec<String>>,
}

type Tag = String;

#[derive(Debug, Serialize)]
struct TagGroup {
    id: String,
    label: String,
}

/// Preprocessor for handling tags in mdbook chapters.
///
/// Extracts tags from each chapter's frontmatter, inserts tags into the chapter
/// as HTML, generates CSS / JS files for styling and functionality, and
/// maintains a mapping of tags to their respective pages.
pub struct TagsPreprocessor {
    out_dir: String,
    templates_dir: String,

    tags: Vec<Tag>,
    tag_colors: HashMap<Tag, String>,
    tag_pages: HashMap<Tag, Vec<String>>,
}

impl TagsPreprocessor {
    pub fn new(
        ctx: &mdbook::preprocess::PreprocessorContext,
        out_dir: &str,
        templates_dir: &str,
    ) -> Self {
        //? Loads static tag colours from the book.toml config file.
        let tag_colors: HashMap<Tag, String> = ctx
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

        let tags = tag_colors.keys().cloned().collect::<Vec<Tag>>();

        TagsPreprocessor {
            out_dir: out_dir.into(),
            templates_dir: templates_dir.into(),
            tags,
            tag_colors,
            tag_pages: HashMap::new(),
        }
    }
}

impl Preprocessor for TagsPreprocessor {
    /// Extracts the tags from each chapter, stores them for later use, and
    /// inserts the tag HTML into the chapter's content.
    fn run(
        &mut self,
        frontmatter: &String,
        chapter: &mut mdbook::book::Chapter,
    ) -> Result<(), Error> {
        let frontmatter: Frontmatter = match serde_yaml::from_str(frontmatter) {
            Ok(fm) => fm,
            Err(e) => {
                return Err(anyhow!(
                    "Failed to parse tags frontmatter for chapter '{}': {}",
                    chapter.name,
                    e
                ));
            }
        };

        let tags = match frontmatter.tags {
            Some(tags) => tags,
            None => return Ok(()),
        };

        // Load tags from the chapter's frontmatter
        for tag in tags.clone() {
            let tag = tag.trim().to_string();
            if !self.tags.contains(&tag) {
                self.tags.push(tag.clone());
            }

            if !self.tag_colors.contains_key(&tag) {
                self.tag_colors
                    .insert(tag.clone(), self.generate_color(&tag));
            }

            let chapter_path = chapter
                .path
                .clone()
                .unwrap_or_default()
                .into_os_string()
                .into_string()
                .unwrap_or_default();

            self.tag_pages
                .entry(tag.clone())
                .or_default()
                .push(chapter_path.clone());
        }

        // Insert tags into the chapter
        match self.insert_tags(&mut chapter.content, tags.clone()) {
            Ok(content) => chapter.content = content,
            Err(e) => {
                return Err(anyhow!(
                    "Error inserting tags into chapter '{}': {}",
                    chapter.name,
                    e
                ));
            }
        }

        return Ok(());
    }

    /// Writes the CSS and JS files for the tags.
    fn finalize(&mut self) -> Result<(), anyhow::Error> {
        self.generate_css()?;
        self.generate_js()?;

        Ok(())
    }
}

impl TagsPreprocessor {
    /// Generates a color for a given tag based on its name.
    fn generate_color(&self, tag: &str) -> String {
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

            if self.check_color_contrast(
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

    // Checks whether the contrast between two colors is sufficient.
    fn check_color_contrast(&self, c1: rgb::RGB<u8>, c2: rgb::RGB<u8>) -> bool {
        let c: f32 = contrast::contrast(c1, c2);
        c > 5f32
    }

    // Insert tag HTML into the chapter body.
    fn insert_tags(&self, body: &str, tags: Vec<String>) -> Result<String, Error> {
        // Find the chapter title
        if !body.starts_with("#") {
            return Err(Error::msg("Chapter title not found"));
        }

        //? Assumes that the first line after frontmatter is the chapter title
        let parts: Vec<&str> = body.splitn(2, "\n").collect();
        if parts.len() != 2 {
            return Err(Error::msg("Chapter title not found"));
        }

        let title = parts[0];
        let body = parts[1];

        // Read the tags template
        let p = format!("{}/page-tags.html", self.templates_dir);
        let tags_template = load_template(p).ok_or(Error::msg("Failed to load tags template"))?;

        //? Need to re-declare the template each time because minijinja has
        //? weird lifetime rules
        let mut env = minijinja::Environment::new();
        env.add_template("page-tags", &tags_template)
            .map_err(|e| Error::msg(format!("Failed to add template: {}", e)))?;
        let tmpl = env
            .get_template("page-tags")
            .map_err(|e| Error::msg(format!("Failed to get template: {}", e)))?;

        let tag_groups = tags
            .into_iter()
            .map(|tag| TagGroup {
                id: to_id(&tag),
                label: tag,
            })
            .collect::<Vec<TagGroup>>();

        let rendered = tmpl.render(minijinja::context! {
            tags => tag_groups,
        })?;
        let rendered = remove_indentation(&rendered);

        // Insert the tags HTML into the body
        return Ok(format!("{}\n{}\n{}", title, rendered, body));
    }

    // Generates the tags.css file that contains styles for each tag.
    fn generate_css(&self) -> Result<(), Error> {
        let mut css = String::new();
        let css_path = format!("{}/tags.css", self.out_dir);

        // Pre-sort the tags for consistent ordering
        let mut sorted_tags: Vec<_> = self.tag_colors.keys().collect();
        sorted_tags.sort();

        // Generate CSS rules for each tag
        css.push_str("/* Generated by mdbook-tags */\n");

        for tag in sorted_tags {
            let color = self
                .tag_colors
                .get(tag)
                .cloned()
                .unwrap_or("#000000".to_string());
            let css_class = format!(".tag.{}", to_id(tag));
            let css_rule = format!("{} {{ background-color: {}; }}\n", css_class, color);
            css.push_str(&css_rule);
        }

        write_if_changed(css_path, &css)?;
        Ok(())
    }

    /// Generates the tags.js file that maps tags to their respective pages.
    fn generate_js(&self) -> Result<(), Error> {
        let mut js = String::new();
        let js_path = format!("{}/tagsindex.js", self.out_dir);

        let mut sorted_tags: Vec<_> = self.tag_pages.iter().collect();
        sorted_tags.sort_by(|a, b| a.0.cmp(&b.0));

        js.push_str("const tagsIndex = {\n");
        for (tag, pages) in sorted_tags {
            js.push_str(&format!(
                "  \"{}\": [{}],\n",
                tag,
                pages
                    .iter()
                    .map(|page| format!("\"{}\"", page))
                    .collect::<Vec<_>>()
                    .join(", ")
            ));
        }

        js.push_str("};\n");

        write_if_changed(js_path, &js)?;
        Ok(())
    }
}
