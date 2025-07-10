use std::{fs::File, io::Read, path::Path};

pub fn load_template(path: String) -> Option<String> {
    let path = Path::new(path.as_str());
    if path.exists() {
        let mut file = File::open(path).ok()?;
        let mut template = String::new();
        file.read_to_string(&mut template).ok()?;

        return Some(template);
    }

    return None;
}

/// Convert a string into a valid CSS ID
pub fn to_id(s: &str) -> String {
    let s = s.to_lowercase();
    let s = s.replace(' ', "-");

    // Remove any remaining characters that would be invalid in CSS IDs
    let s = s.replace(&['&', '.', ':', ',', '#', '/', '(', ')'][..], "");
    return s;
}

// Normalizes indentation by removing leading whitespace from each line
// Required for mdbook to correctly render the content
pub fn remove_indentation(s: &str) -> String {
    let s = s
        .lines()
        .map(|line| line.trim_start())
        .collect::<Vec<_>>()
        .join("\n");

    return s;
}

/// Writes a string to a file only if the contents of the file would change.
///
/// ? mdbook automatically re-builds the book every time a file is updated,
/// ? so this is a workaround to avoid infinite rebuilds.
pub fn write_if_changed<P: AsRef<Path>>(path: P, content: &str) -> std::io::Result<()> {
    let path = path.as_ref();
    if !path.exists() {
        std::fs::write(path, content)?;
        return Ok(());
    }

    let mut file = File::open(path)?;
    let mut existing_content = String::new();
    file.read_to_string(&mut existing_content)?;

    if existing_content.trim() != content.trim() {
        std::fs::write(path, content)?;
    }

    Ok(())
}
