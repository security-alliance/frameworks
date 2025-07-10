use std::collections::HashMap;

use anyhow::{anyhow, Error};
use mdbook_metadata::{load_template, remove_indentation};
use serde::{Deserialize, Serialize};

use crate::Preprocessor;

pub struct ContributorsPreprocessor {
    contributors_title: String,
    templates_dir: String,

    contributors: HashMap<String, Contributor>,

    // Maps role slugs to their display names
    role_aliases: HashMap<String, Role>,
}

#[derive(Debug, Deserialize)]
struct Frontmatter {
    contributors: Option<Vec<Role>>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Contributor {
    slug: String,
    name: String,
    role: String,
    job_title: Option<String>,
    description: Option<String>,
    company: Option<String>,
    avatar: Option<String>,
    github: Option<String>,
    twitter: Option<String>,
    website: Option<String>,
}

#[derive(Debug, Serialize)]
struct ContributorGroup {
    slug: String,
    label: String,
    contributors: Vec<Contributor>,
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
        templates_dir: &str,
    ) -> Result<Self, Error> {
        let role_aliases: Vec<(String, String)> = ctx
            .config
            .get("preprocessor.contributors.role_aliases")
            .and_then(|v| v.as_array())
            .map(|arr| {
                arr.iter()
                    .filter_map(|entry| {
                        entry.as_array().and_then(|pair| {
                            if pair.len() == 2 {
                                Some((pair[0].as_str()?.to_string(), pair[1].as_str()?.to_string()))
                            } else {
                                None
                            }
                        })
                    })
                    .collect()
            })
            .unwrap_or_default();

        let role_aliases: Vec<(String, Role)> = role_aliases
            .into_iter()
            .map(|(slug, label)| {
                (
                    slug.clone(),
                    Role {
                        role: label,
                        users: Vec::new(),
                    },
                )
            })
            .collect();

        let role_aliases = role_aliases.into_iter().collect::<HashMap<String, Role>>();

        let contributors_title = ctx
            .config
            .get("preprocessor.contributors.contributors_title")
            .and_then(|value| value.as_str())
            .ok_or(Error::msg("Missing or invalid `out_file` in book.toml"))?;

        let contributors: Vec<Contributor> = match std::fs::read_to_string(contributors_file) {
            Ok(content) => serde_json::from_str(&content)?,
            Err(e) => {
                return Err(Error::msg(format!(
                    "Failed to read contributors file '{}': {}",
                    contributors_file, e
                )))
            }
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
            contributors_title: contributors_title.into(),
            templates_dir: templates_dir.into(),
            contributors,
        });
    }
}

impl Preprocessor for ContributorsPreprocessor {
    fn run(
        &mut self,
        frontmatter: &String,
        chapter: &mut mdbook::book::Chapter,
    ) -> Result<(), Error> {
        // TODO: If more instances of preprocessors creating HTML pages are added,
        // TODO: consider refactoring into a custom renderer instead.
        if chapter.name.to_lowercase() == self.contributors_title.to_lowercase() {
            match self.render_contributors() {
                Ok(rendered) => {
                    chapter.content = rendered;
                }
                Err(e) => {
                    return Err(anyhow!("Error rendering contributors page: {}", e));
                }
            }
            return Ok(());
        }

        let frontmatter: Frontmatter = match serde_yaml::from_str(frontmatter) {
            Ok(fm) => fm,
            Err(e) => {
                eprintln!("Failed to parse frontmatter: {}", frontmatter);
                return Err(anyhow!(
                    "Failed to parse contributors frontmatter for chapter '{}': {}",
                    chapter.name,
                    e
                ));
            }
        };

        let roles = match frontmatter.contributors {
            Some(roles) => roles,
            None => return Ok(()),
        };

        // for role in &roles {
        //     for user in &role.users {
        //         match self.contributors.get(user) {
        //             Some(_) => {}
        //             None => {
        //                 return Err(anyhow!(
        //                     "Contributor '{}' not found in contributors list for chapter '{}'",
        //                     user,
        //                     chapter.name
        //                 ));
        //             }
        //         }
        //     }
        // }

        // Insert contributors into the chapter's content
        match self.insert_contributors(&mut chapter.content, roles.clone()) {
            Ok(content) => chapter.content = content,
            Err(e) => {
                return Err(anyhow!(
                    "Error inserting contributors into chapter '{}': {}",
                    chapter.name,
                    e
                ));
            }
        }

        return Ok(());
    }

    fn finalize(&mut self) -> Result<(), anyhow::Error> {
        return Ok(());
    }
}

impl ContributorsPreprocessor {
    fn insert_contributors(&self, body: &str, roles: Vec<Role>) -> Result<String, Error> {
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

        let p = format!("{}/page-contributors.html", self.templates_dir);
        let contributors_template =
            load_template(p).ok_or(Error::msg("Failed to load contributors template"))?;

        //? Need to re-declare the template each time because minijinja has
        //? weird lifetime rules
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
                    .filter_map(|user| {
                        self.contributors.get(&user).cloned().or({
                            Some(Contributor {
                                slug: user.clone(),
                                name: user,
                                role: "".to_string(),
                                job_title: None,
                                description: None,
                                company: None,
                                avatar: None,
                                github: None,
                                twitter: None,
                                website: None,
                            })
                        })
                    })
                    .collect::<Vec<_>>();

                RoleGroup {
                    label: self
                        .role_aliases
                        .get(&role.role)
                        .map(|r| r.role.clone())
                        .unwrap_or(role.role),
                    users,
                }
            })
            .collect::<Vec<_>>();

        let rendered = tmpl.render(minijinja::context! {
            roles => role_groups,
        })?;
        let rendered = remove_indentation(&rendered);

        return Ok(format!("{}\n\n{}\n{}", title, rendered, body));
    }

    fn render_contributors(&self) -> Result<String, Error> {
        // Render the main "contributors" page
        let p = format!("{}/contributors.html", self.templates_dir);
        let tmpl =
            load_template(p).ok_or_else(|| Error::msg("Failed to load contributors template"))?;
        let mut env = minijinja::Environment::new();
        env.add_template("contributors", &tmpl)
            .map_err(|e| Error::msg(format!("Failed to add template: {}", e)))?;
        let tmpl = env
            .get_template("contributors")
            .map_err(|e| Error::msg(format!("Failed to get template: {}", e)))?;

        // Construct the list of contributors
        let mut contributor_groups: HashMap<String, ContributorGroup> = HashMap::new();
        for (_, c) in &self.contributors {
            let group = contributor_groups
                .entry(c.role.clone())
                .or_insert(ContributorGroup {
                    slug: c.role.clone(),
                    label: self
                        .role_aliases
                        .get(&c.role)
                        .map(|r| r.role.clone())
                        .unwrap_or(c.role.clone()),
                    contributors: Vec::new(),
                });

            group.contributors.push(c.clone());
        }

        let mut contributor_groups = contributor_groups
            .into_iter()
            .map(|(_, group)| group)
            .collect::<Vec<_>>();

        // Sort based on order in role_aliases for deterministic output
        contributor_groups.sort_by(|a, b| {
            let a_order = self.role_aliases.get(&a.slug).map_or("", |r| &r.role);
            let b_order = self.role_aliases.get(&b.slug).map_or("", |r| &r.role);
            a_order.cmp(&b_order)
        });

        let rendered = tmpl.render(minijinja::context! {
            contributor_groups => contributor_groups,
        })?;
        let rendered = remove_indentation(&rendered);

        return Ok(rendered);
    }
}
