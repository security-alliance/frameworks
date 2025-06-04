use core::panic;
use std::{collections::HashMap, f32::consts::E};

use anyhow::Error;
use mdbook_metadata::load_template;
use minijinja::Template;
use serde::{Deserialize, Serialize};

use crate::{contributors, Preprocessor};

pub struct ContributorsPreprocessor {
    out_dir: String,
    templates_dir: String,

    contributors: HashMap<String, Contributor>,

    // Maps role slugs to their display names
    role_aliases: HashMap<String, String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Contributor {
    slug: String,
    name: String,
    features: Vec<String>,
    role: Option<String>,
    description: Option<String>,
    company: Option<String>,
    avatar: Option<String>,
    github: Option<String>,
    twitter: Option<String>,
    website: Option<String>,
}

#[derive(Debug, Deserialize)]
struct Frontmatter {
    contributors: Option<Vec<Role>>,
}

#[derive(Debug, Deserialize, Clone)]
struct Role {
    role: String,
    users: Vec<String>,
}

#[derive(Debug, Serialize)]
struct RoleGroup {
    label: String,
    users: Vec<Contributor>,
}

impl ContributorsPreprocessor {
    pub fn new(
        ctx: &mdbook::preprocess::PreprocessorContext,
        contributors_file: &str,
        out_dir: &str,
        templates_dir: &str,
    ) -> Result<Self, Error> {
        let role_aliases: HashMap<String, String> = ctx
            .config
            .get("preprocessor.contributors.role_aliases")
            .and_then(|value| value.as_table())
            .map(|table| {
                table
                    .iter()
                    .map(|(slug, name)| {
                        (
                            slug.to_string(),
                            name.as_str().unwrap_or_default().to_string(),
                        )
                    })
                    .collect()
            })
            .unwrap_or_default();

        let contributors: Vec<Contributor> = match std::fs::read_to_string(contributors_file) {
            Ok(content) => serde_json::from_str(&content).unwrap_or_default(),
            Err(e) => return Err(Error::new(e)),
        };

        let contributors = contributors
            .into_iter()
            .map(|c| {
                let slug = c.slug.clone();
                (slug, c)
            })
            .collect::<HashMap<String, Contributor>>();

        return Ok(ContributorsPreprocessor {
            role_aliases,
            out_dir: out_dir.into(),
            templates_dir: templates_dir.into(),
            contributors,
        });
    }
}

impl Preprocessor for ContributorsPreprocessor {
    fn run(&mut self, frontmatter: &String, chapter: &mut mdbook::book::Chapter) {
        let frontmatter: Frontmatter = match serde_yaml::from_str(frontmatter) {
            Ok(fm) => fm,
            Err(_) => return,
        };

        let roles = match frontmatter.contributors {
            Some(roles) => roles,
            None => return,
        };

        // Insert contributors into the chapter's content
        match self.insert_contributors(&mut chapter.content, roles.clone()) {
            Ok(content) => chapter.content = content,
            Err(e) => {
                eprintln!("Error inserting contributors: {}", e);
            }
        }
    }
    fn finalize(&mut self) -> Result<(), anyhow::Error> {
        // No finalization needed for contributors
        Ok(())
    }
}

impl ContributorsPreprocessor {
    fn insert_contributors(&self, body: &str, roles: Vec<Role>) -> Result<String, Error> {
        // Find the chapter title
        if !body.starts_with("# ") {
            return Err(Error::msg("Chapter title not found"));
        }

        //? Assumes that the first line after frontmatter is the chapter title
        let parts: Vec<&str> = body.splitn(2, "\n").collect();
        if parts.len() != 2 {
            return Err(Error::msg("Chapter title not found"));
        }

        let title = parts[0];
        let body = parts[1];

        let p = format!("{}/page-contributors.html", self.templates_dir);
        let contributors_template =
            load_template(p).ok_or(Error::msg("Failed to load contributors template"))?;

        let mut env = minijinja::Environment::new();
        env.add_template("page-contributors", &contributors_template)
            .map_err(|e| Error::msg(format!("Failed to add template: {}", e)))?;
        let tmpl = env
            .get_template("page-contributors")
            .map_err(|e| Error::msg(format!("Failed to get template: {}", e)))?;

        let role_groups = roles
            .clone()
            .into_iter()
            .map(|role| {
                let users = role
                    .users
                    .into_iter()
                    .filter_map(|user| self.contributors.get(&user).cloned())
                    .collect::<Vec<_>>();

                RoleGroup {
                    label: self
                        .role_aliases
                        .get(&role.role)
                        .cloned()
                        .unwrap_or(role.role),
                    users,
                }
            })
            .collect::<Vec<_>>();

        let rendered = tmpl.render(minijinja::context! {
            roles => role_groups,
        })?;

        //? Essential to trim leading whitespace, otherwise it gets rendered as
        //? a code block for some reason(?)
        let rendered = rendered
            .lines()
            .map(|line| line.trim_start())
            .collect::<Vec<_>>()
            .join("\n");

        eprintln!("Rendered contributors:\n{}", rendered);

        return Ok(format!("{}\n\n{}\n{}", title, rendered, body));
    }
}
