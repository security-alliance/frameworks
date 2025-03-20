# Using the Contributors Database

This page demonstrates how to use the centralized contributors database. Instead of specifying all the contributor details in each file, you can now simply reference contributors by their ID.

## How to Reference Contributors

In your markdown frontmatter, simply list the contributor IDs:

```markdown
---
title: Your Page Title
contributors:
  - mattaereal   # Simple ID reference
  - id: mattaereal # Alternative object-style reference
---
```

## Benefits of the Centralized Approach

1. **Consistency**: Contributor information is stored in one place
2. **Maintenance**: Update contributor details (avatar, GitHub, Twitter, etc.) in a single location
3. **Simplicity**: Just reference contributor IDs in your Markdown files
4. **Extensibility**: Easily add new social links or other information to the database

## Contributors Database Location

The contributors database is stored in `src/config/contributors.json`. Here's an example of what a contributor entry looks like:

```json
{
  "mattaereal": {
    "name": "Matta",
    "displayName": "Matta",
    "avatar": "https://github.com/mattaereal.png", 
    "github": "https://github.com/mattaereal",
    "twitter": "https://twitter.com/mattaereal",
    "website": "https://example.com/matta",
    "bio": "Security researcher and SEAL contributor"
  }
}
```

## Available Fields

- `name`: Full name of the contributor
- `displayName`: Name to display in the UI (usually shorter than full name)
- `avatar`: URL to the contributor's avatar image
- `github`: GitHub profile URL
- `twitter`: Twitter profile URL
- `website`: Personal website URL
- `bio`: Short biography or description 