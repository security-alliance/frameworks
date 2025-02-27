## Adding Metadata to Pages

### Tags

You can add tags to your pages by including them in the frontmatter at the top of your markdown file:

```markdown
---
tags:
  - Tag1
  - Tag2
---

# Page Title
```

Tags will be displayed at the top of the page and collected in a tags index page.

### Contributors

You can add contributors to your pages to credit the people who worked on each section. There are two ways to specify contributors:

#### Simple Format (just names)

```markdown
---
contributors:
  - Matt
  - Steven
  - Your Name
---

# Page Title
```

#### Detailed Format (with avatars and GitHub profiles)

```markdown
---
contributors:
  - name: Matt
    avatar: https://github.com/matta.png
    github: https://github.com/matta
  - name: Steven
    avatar: https://github.com/steven.png
    github: https://github.com/steven
  - John Doe  # You can mix simple and detailed formats
---

# Page Title
```

You can configure default avatar images and GitHub profiles for contributors in the `book.toml` file, which will be used when not specified in the frontmatter:

```toml
[preprocessor.tags]
contributor_avatars = { "Matt" = "https://github.com/matta.png", "Steven" = "https://github.com/steven.png" }
contributor_github = { "Matt" = "https://github.com/matta", "Steven" = "https://github.com/steven" }
```

Contributors will be displayed at the top of the page and collected in a contributors index page. 