# mdBook Relative Path Navigation Issue (v0.4.41+)

## Problem Description

When using mdBook version 0.4.41 or higher, clicking on any link in the sidebar causes all subsequent sidebar links to have incorrect relative paths appended to them, resulting in 404 errors.

### Steps to Reproduce

1. Build a book with mdBook v0.4.41 or higher where chapters are organized in subdirectories
2. Navigate to the book's index page
3. Click on any sidebar link that points to a page in a subdirectory (e.g., `/awareness/index.html`)
4. Observe that all other sidebar links now have the subdirectory path appended (e.g., all links become `./awareness/...`)

### Example

- Initial state: All sidebar links work correctly
- Click on: `https://example.com/awareness/index.html`
- Result: All sidebar links are now broken:
  - `./intro/introduction.html` becomes `./awareness/intro/introduction.html` (404)
  - `./wallet-security/index.html` becomes `./awareness/wallet-security/index.html` (404)

## Root Cause

The issue was introduced in mdBook v0.4.41 with PR #2414, which changed how the sidebar is loaded. The sidebar is now loaded from a separate JavaScript file to reduce file size, but this change broke relative path handling when navigating between pages in different subdirectories.

### Technical Details

- **Affected versions**: mdBook v0.4.41 and higher
- **Not affected**: mdBook v0.4.40 and lower
- **Related issues**: 
  - rust-lang/mdBook#2341 (Index page broken relative links in subdirectories)
  - rust-lang/mdBook#2060 (Broken relative links when using first chapter as index)
  - rust-lang/mdBook#1764 (site-url not respected in links)

## Current Workaround

We've reverted to using mdBook v0.4.40, which does not have this issue. This is a stable version without known security vulnerabilities (the last mdBook CVE was fixed in v0.4.5).

### Implementation

In our `vercel_build.sh`:
```bash
# Download and extract mdBook
echo "Downloading mdBook v0.4.40..."
curl -sSL https://github.com/rust-lang/mdBook/releases/download/v0.4.40/mdbook-v0.4.40-x86_64-unknown-linux-gnu.tar.gz | tar -xz --directory=bin
```

## Attempted Solutions That Did Not Work

1. **Creating an index.md file** - While this addresses some mdBook issues with first chapter as index, it doesn't fix the sidebar path problem
2. **Setting `site-url = "/"` in book.toml** - The site-url configuration doesn't rewrite markdown links as expected
3. **Updating custom theme files** - The issue is in mdBook's core sidebar loading mechanism

## Impact

This issue affects any mdBook deployment where:
- Content is organized in subdirectories
- Users navigate between different sections
- The book is deployed to a web server (not just local `mdbook serve`)

## Recommendation for mdBook Team

The sidebar loading optimization in v0.4.41, while reducing file size, has introduced a regression in relative path handling. Consider:
1. Fixing the relative path calculation in the new sidebar loading mechanism
2. Providing a configuration option to use the legacy sidebar loading for projects affected by this issue
3. Ensuring the `path_to_root` variable is properly utilized in the JavaScript-loaded sidebar

## Environment

- **mdBook versions tested**: v0.4.40 (works), v0.4.41-v0.4.52 (broken)
- **Deployment**: Vercel
- **Book structure**: Multiple chapters organized in subdirectories
- **Theme**: Custom theme with mdbook-admonish and other plugins