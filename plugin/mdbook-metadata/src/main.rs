use std::io;

use anyhow::anyhow;
use mdbook::{book::Chapter, errors::Error, preprocess::CmdPreprocessor, BookItem};
use tags::TagsPreprocessor;

use crate::contributors::ContributorsPreprocessor;

mod contributors;
mod tags;

/// A trait for preprocessors on the book.
trait Preprocessor {
    /// Execute the processor on a given chapter.
    fn run(&mut self, frontmatter: &String, chapter: &mut Chapter) -> Result<(), Error>;

    /// Execute the processor after all chapters have been processed.
    fn finalize(&mut self) -> Result<(), Error>;
}

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

fn handle_preprocessing() -> Result<(), Error> {
    let (ctx, mut book) = CmdPreprocessor::parse_input(io::stdin())?;

    //? Both contributors and tags place items directly after the chapter title,
    //? so the final order will be the inverse of this order since processors
    //? are run sequentially.
    let mut preprocessors: Vec<Box<dyn Preprocessor>> = vec![
        Box::new(ContributorsPreprocessor::new(
            &ctx,
            "src/config/contributors.json".into(),
            "theme/templates".into(),
        )?),
        Box::new(TagsPreprocessor::new(
            &ctx,
            "theme/tags".into(),
            "theme/templates".into(),
        )),
    ];

    let mut errors = Vec::new();

    book.for_each_mut(|item| {
        let BookItem::Chapter(chapter) = item else {
            return;
        };

        let frontmatter = match extract_frontmatter(chapter) {
            Some(fm) => fm,
            None => "".into(),
        };

        for p in &mut preprocessors {
            if let Err(e) = p.run(&frontmatter, chapter) {
                errors.push(e);
            }
        }
    });

    if !errors.is_empty() {
        for e in errors {
            eprintln!("Error processing chapter: {}", e);
        }
        return Err(anyhow!("Errors occurred during preprocessing"));
    }

    for p in &mut preprocessors {
        p.finalize()?;
    }

    // Write the modified book back to stdout
    serde_json::to_writer(io::stdout(), &book)?;

    Ok(())
}

/// Extracts the frontmatter from a chapter item.
///
/// Returns the frontmatter string.  Updates the chapter content to remove the frontmatter
fn extract_frontmatter(chapter: &mut Chapter) -> Option<String> {
    if chapter.is_draft_chapter() {
        return None;
    }

    let content = chapter.content.clone();
    if !content.starts_with("---") {
        return None;
    }

    // Extract frontmatter
    let parts: Vec<&str> = content.splitn(3, "---").collect();
    if parts.len() != 3 {
        eprintln!("Invalid frontmatter in chapter: {}", chapter.name);
        return None;
    }

    let mut body = parts[2].to_string();
    body = body.trim().to_string();
    chapter.content = body;

    let frontmatter = parts[1].to_string();
    return Some(frontmatter);
}
