# mdbook-metadata plugin

Plugin that manages metadata on pagse.

When creating a new plugin or modifying an existing one, consider the following:

1. If the plugin requires frontmatter access, consider adding it as a new preprocessor to this plugin.
2. If the plugin does not requrie frontmatter access, consider adding it as a seperate plugin.
3. If the plugin is a natural extension of an existing plugin, consider adding it to that plugin.

If any new plugins are developed that create new HTML pages, consider adding a new renderer plugin and migrating the existing `contributors.html` code.
