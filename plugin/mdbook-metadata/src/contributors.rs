use std::{collections::HashMap, fs::File, io::Read};

use anyhow::Error;

use crate::Preprocessor;

pub struct ContributorsPreprocessor {
    contributors: HashMap<String, Contributor>,
}

#[derive(serde::Deserialize, Debug)]
struct Contributor {
    slug: String,
    name: String,
    features: Vec<String>,
    role: String,
    description: String,
    company: String,
    avatar: Option<String>,
    github: Option<String>,
    twitter: Option<String>,
    website: Option<String>,
}

impl ContributorsPreprocessor {
    pub fn new(contributors_path: &str) -> Result<Self, Error> {
        // Load contributors from the specified json file.
        let mut file = File::open(contributors_path)?;
        let mut contents = String::new();
        file.read_to_string(&mut contents)?;
        let contributors: Vec<Contributor> = serde_json::from_str(&contents)?;
        let contributors = contributors
            .into_iter()
            .map(|c| (c.slug.clone(), c))
            .collect();

        Ok(Self { contributors })
    }
}

impl Preprocessor for ContributorsPreprocessor {
    fn run(&mut self, frontmatter: &String, chapter: &mut mdbook::book::Chapter) {
        todo!()
    }

    fn finalize(&mut self) -> Result<(), anyhow::Error> {
        todo!()
    }
}
