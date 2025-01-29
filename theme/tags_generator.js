const fs = require("fs");
const path = require("path");

function tagsGenerator(srcDir, outputDir) {
  console.log("Starting tagsGenerator");
  const tagsFile = path.join(outputDir, "tagsindex.json");
  const colorsFile = path.join(outputDir, "tagscolors.json");

  let tags = {};
  if (fs.existsSync(tagsFile)) {
    tags = JSON.parse(fs.readFileSync(tagsFile, "utf8"));
  }

  console.log(`Source directory: ${srcDir}`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Tags file: ${tagsFile}`);
  console.log(`Colors file: ${colorsFile}`);

  function extractTags(content) {
    console.log("Extracting tags from content");
    const tagRegex = /tag:\s*\[(.*?)\]/g;
    const fileTags = [];
    let match;
    while ((match = tagRegex.exec(content)) !== null) {
      fileTags.push(...match[1].split(",").map((tag) => tag.trim()));
    }
    console.log(`Extracted tags: ${fileTags.join(", ")}`);
    return fileTags;
  }

  function processFile(filePath) {
    console.log(`Processing file: ${filePath}`);
    const content = fs.readFileSync(filePath, "utf-8");
    const fileTags = extractTags(content);
    let relativePath = path.relative(srcDir, filePath);

    // Replace .md extension with .html
    relativePath = relativePath.replace(/\.md$/, ".html");

    // Rename README.html to index.html
    if (path.basename(relativePath) === "README.html") {
      relativePath = path.join(path.dirname(relativePath), "index.html");
    }

    // Remove the file from all existing tags
    for (const tag in tags) {
      tags[tag] = tags[tag].filter((file) => file !== relativePath);
      if (tags[tag].length === 0) {
        delete tags[tag];
      }
    }

    // Add the file to the new tags
    fileTags.forEach((tag) => {
      if (!tags[tag]) {
        tags[tag] = [];
      }
      tags[tag].push(relativePath);
      console.log(`Added ${relativePath} to tag: ${tag}`);
    });
  }

  function walkDir(dir) {
    console.log(`Walking directory: ${dir}`);
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (path.extname(file) === ".md") {
        processFile(filePath);
      }
    });
  }

  function generateColor(tag) {
    const crypto = require("crypto");
    const hex = crypto.createHash("sha1").update(tag).digest("hex").slice(0, 6);
    return `#${hex}`;
  }

  walkDir(srcDir);

  if (!fs.existsSync(outputDir)) {
    console.log(`Creating output directory: ${outputDir}`);
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`Writing tags to file: ${tagsFile}`);
  fs.writeFileSync(tagsFile, JSON.stringify(tags, null, 2));
  
  let existingColouredTags = {};
  if (fs.existsSync(colorsFile)) {
    existingColouredTags = JSON.parse(fs.readFileSync(colorsFile, "utf8"));
  }
  
  const tagColors = {};
  for (const tag in tags) {
    tagColors[tag] = existingColouredTags[tag] || generateColor(tag);
  }

  console.log(`Writing tag colors to file: ${colorsFile}`);
  fs.writeFileSync(colorsFile, JSON.stringify(tagColors, null, 2));

  console.log("tagsGenerator completed");
  process.exit(1);
}

// Execute the command if this script is run directly
if (require.main === module) {
  const srcDir = "src";
  const outputDir = "theme";
  tagsGenerator(srcDir, outputDir);
}
