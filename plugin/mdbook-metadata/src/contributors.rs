use crate::Preprocessor;

pub struct ContributorsPreprocessor {}

impl Preprocessor for ContributorsPreprocessor {
    fn run(&mut self, frontmatter: &String, chapter: &mut mdbook::book::Chapter) {
        todo!()
    }

    fn finalize(&mut self) -> Result<(), anyhow::Error> {
        todo!()
    }
}
