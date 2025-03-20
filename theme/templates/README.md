# Theme Templates

This directory contains HTML templates used by the metadata preprocessor to generate tags and contributors sections in the documentation.

## Available Templates

### Tags

- `tags.html`: The container template for all tags
- `tag-item.html`: Template for an individual tag

### Contributors 

- `contributors.html`: The container template for all contributors
- `contributor-item.html`: Contains three different templates for contributors:
  1. With GitHub link and avatar
  2. With avatar only 
  3. Basic (no avatar or links)

## How to Customize

You can modify these templates to change how tags and contributors are displayed without modifying the Rust code.

### Placeholders

The following placeholders are available in the templates:

#### Tags

- `<!-- TAG_ITEMS_PLACEHOLDER -->`: Where the list of tags will be inserted
- `TAG_ID_PLACEHOLDER`: CSS-safe ID generated from the tag name 
- `TAG_NAME_PLACEHOLDER`: The actual tag name

#### Contributors

- `<!-- CONTRIBUTOR_ITEMS_PLACEHOLDER -->`: Where the list of contributors will be inserted
- `CONTRIBUTOR_ID_PLACEHOLDER`: CSS-safe ID generated from the contributor name
- `CONTRIBUTOR_NAME_PLACEHOLDER`: The contributor's display name
- `AVATAR_URL_PLACEHOLDER`: The URL to the contributor's avatar
- `GITHUB_URL_PLACEHOLDER`: The URL to the contributor's GitHub profile

## CSS Styling

The styling for these elements is defined in:

- `theme/tags/tags.css`: Styling for tags
- `theme/contributors/contributors.css`: Styling for contributors

Any new tags encountered by the preprocessor will have their colors automatically appended to the tags.css file. 