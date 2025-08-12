# Using the Contributors Database

This page demonstrates how to use the centralized contributors database. Instead of specifying all the contributor details in each file, you can now simply reference contributors by their ID.

## How to Reference Contributors

### Basic Contributors List

In your markdown frontmatter, simply list the contributor IDs:

```markdown
---
title: Your Page Title
contributors:
  - mattaereal   # Simple ID reference
  - fredriksvantes
  - zedt3ster
---
```

### Role-Based Contributors

You can also specify contributors with their roles, which will display them in organized sections:

```markdown
---
title: Your Page Title
contributors:
  - role: wrote
    users: [mattaereal, charlie_dev]
  - role: reviewed
    users: [fredriksvantes, zedt3ster]
  - role: fact-checked
    users: [nftdreww]
---
```

This will display contributors in three sections: "Written by", "Reviewed by", and "Fact checked by".

## Benefits of the Centralized Approach

1. **Consistency**: Contributor information is stored in one place
2. **Maintenance**: Update contributor details (avatar, GitHub, Twitter, etc.) in a single location
3. **Simplicity**: Just reference contributor IDs in your Markdown files
4. **Extensibility**: Easily add new social links or other information to the database
5. **Roles**: Assign specific roles to contributors for better attribution

## Contributors Database Location

The contributors database is stored in `src/config/contributors.json`. Here's an example of what a contributor entry looks like:

```json
{
  "mattaereal": {
    "name": "matta",
    "avatar": "https://github.com/mattaereal.png",
    "github": "https://github.com/mattaereal",
    "twitter": "https://twitter.com/mattaereal",
    "website": "https://theredguild.org",
    "features": ["lead"],
    "role": "Security Researcher",
    "description": "Initiative lead and maintainer",
    "company": "The Red Guild | SEAL"
  }
}
```

## Available Fields

- `name`: Name of the contributor to display
- `avatar`: URL to the contributor's avatar image
- `github`: GitHub profile URL
- `twitter`: Twitter profile URL
- `website`: Personal website URL
- `features`: Special designations (e.g., ["lead", "core", "steward", "featured"])
- `role`: Professional role or title
- `description`: Short biography or description
- `company`: Organization or company affiliation

## Role-Based Display

When using the role-based format, contributors will be displayed in sections based on their roles. The standard roles are:

- `wrote`: People who authored the content
- `reviewed`: People who reviewed the content for accuracy
- `fact-checked`: People who verified the factual correctness

This creates a clear attribution system showing who contributed to each page in what capacity.
