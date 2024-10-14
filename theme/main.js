/**
* Create a tag element
* @param {string} tag
*/
function createTagElement(tag) {
    const li = document.createElement('li');
    const isChecked = localStorage.getItem(`tag_${tag}`) === 'true';
    li.setAttribute('role', 'option');
    li.innerHTML = `
        <label>
            <input class="tag-checkbox" type="checkbox" value="${tag}" ${isChecked ? 'checked' : ''}>
            ${tag}
        </label>
    `;
    return li;
}

/**
* Populate the tagList element with tags
* @param {HTMLElement} tagList
* @param {string[]} tags
* @param {string} filter
*/
function populateTags(tagList, tags, filter = '') {
    tagList.innerHTML = '';
    tags.filter(tag => tag.toLowerCase().includes(filter.toLowerCase()))
        .forEach(tag => {
            tagList.appendChild(createTagElement(tag));
        });
}

/**
 * Clears all locally stored tags
 */
function clearStoredTags() {
    Object.keys(localStorage)
        .filter(key => key.startsWith('tag_'))
        .forEach(key => localStorage.removeItem(key));
}

/**
* Highlight sidebar links based on selected tags
*/
function highlightSidebarLinks() {
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(link => {
        link.classList.remove("selected");
    });

    const selectedTags = Object.keys(localStorage)
        .filter(key => key.startsWith('tag_') && localStorage.getItem(key) === 'true')
        .map(key => key.replace('tag_', ''));

    // Filter pages by AND selected tags
    let anySelected = false
    let selectedPages = new Set(window.tagsData[selectedTags[0]] || []);
    for (const tag of selectedTags.slice(1)) {
        const pages = new Set(window.tagsData[tag] || []);
        selectedPages = new Set([...selectedPages].filter(x => pages.has(x)));
        if (selectedPages.size === 0) {
            break;
        }
    }
    
    // Highlight selected pages
    selectedPages.forEach(page => {
        const link = document.querySelector(`#sidebar #toc a[href$="${page}"]`);
        if (link) {
            link.classList.add("selected");
            anySelected = true;
        }
    });

    // Janky solution to clear any depricated tags from the local storage if 
    // none are selected. Ghost tags can be created when tags that were selected
    // are removed from the tags*.json files, IE during development.
    if (!anySelected) {
        clearStoredTags();
    }

    if (selectedTags.length === 0) {
        document.getElementById("sidebar").classList.remove("filtered");
    } else {
        document.getElementById("sidebar").classList.add("filtered");
    }

    // Filter pages by OR selected tags
    // let anySelected = false;
    // selectedTags.forEach(tag => {
    //     const pages = window.tagsData[tag] || [];
    //     pages.forEach(page => {
    //         const link = document.querySelector(`#sidebar a[href$="${page}"]`);
    //         if (link) {
    //             link.classList.add("selected");
    //             anySelected = true;
    //         }
    //     });
    // });
}

/**
 * Populates the per-page tags
 * @param {[key: string]: string} tagColors 
 */
function createPageTags(tagColors) {
    const tagLines = Array.from(document.querySelectorAll('p')).filter(line => line.textContent.includes("tag:"));
    tagLines.forEach(line => {
        const tagText = line.textContent;
        if (tagText.includes('tag: [')) {
            const tagContent = tagText.split('[')[1].split(']')[0].trim();
            const tags = tagContent.split(',').map(tag => tag.trim());
            const tagLabels = tags.map(tag => {
                const hexColor = tagColors[tag]
                return `
                      <span class="colored-tag" style="--tag-color: ${hexColor}">
                        <i class="fa fa-tag" aria-hidden="true"></i> 
                        ${tag}
                    </span>`;
            });
            line.innerHTML = tagLabels.join(' ');
        }
    });
}

/**
 * Populates the searchable tags in the tags dropdown
 */
function createSearchableTags(tagsData) {
    const tags = Object.keys(tagsData).sort((a, b) => { return ('' + a).localeCompare(b); });
    const tagsList = document.getElementById('tags-list');

    populateTags(tagsList, tags);
    highlightSidebarLinks();
}

document.addEventListener('DOMContentLoaded', function () {
    //* Initialize per-page tags
    fetch(path_to_root + 'theme/tagscolors.json')
        .then(response => response.json())
        .then(data => {
            window.tagsColors = data;
            createPageTags(data);
        })

    //* Initialize searchable tags
    fetch(path_to_root + 'theme/tagsindex.json')
        .then(response => response.json())
        .then(data => {
            window.tagsData = data;
            initializeBookmarks();
            createSearchableTags(data);
        })
        .catch(error => {
            console.error('Error loading or parsing tagsindex.json:', error);
        });

    initializeBookmarks();

    //* Setup event listeners for dropdowns & tags
    const tagsToggle = document.getElementById('tags-toggle');
    const tagsDropdown = document.getElementById('tags-dropdown');
    const tagSearch = document.getElementById('tag-search');
    const tagsList = document.getElementById('tags-list');

    // On click on tags dropdown button
    tagsToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        tagsDropdown.classList.toggle('hidden');
        if (!isExpanded) {
            tagSearch.focus();
        }
    });

    // On click on anything except for the tags dropdown
    document.addEventListener('click', function (event) {
        if (!tagsDropdown.contains(event.target) && event.target !== tagsToggle) {
            tagsToggle.setAttribute('aria-expanded', 'false');
            tagsDropdown.classList.add('hidden');
        }
    });

    // On search for a tag
    tagSearch.addEventListener('input', function () {
        populateTags(tagsList, window.tagsData, this.value);
    });

    // On select a tag
    tagsList.addEventListener('change', function (event) {
        if (event.target.type === 'checkbox') {
            const selectedTag = event.target.value;
            const isChecked = event.target.checked;
            localStorage.setItem(`tag_${selectedTag}`, isChecked);
            highlightSidebarLinks();
        }
    });
});

// Initializes the bookmark icon and sidebar
function initializeBookmarks() {
    insertBookmarks();
    updateBookmarkIcon();
}

// Bookmark or unbookmarks the current page
function bookmarkPage() {
    const pagePath = getPagePath();
    const activeSection = document.querySelector('#sidebar .active');
    const title = document.title.replace(" - Security Frameworks by SEAL", "").replace(".", "");
    const unix = Math.round(+new Date() / 1000);

    const combinedTitle = `${unix}.${title}`;

    if (localStorage.getItem(`bookmarks_${pagePath}`)) {
        localStorage.removeItem(`bookmarks_${pagePath}`);
    } else {
        localStorage.setItem(`bookmarks_${pagePath}`, combinedTitle);
    }

    updateBookmarkIcon();
    insertBookmarks();
}

// Insert bookmarked pages into the sidebar
function insertBookmarks() {
    const bookmarkContainer = document.getElementById("bookmarks")
    const prefix = "bookmarks_";

    // delete all existing bookmark elements
    const bookmarks = document.querySelectorAll("#sidebar #bookmarks-container .bookmark");
    bookmarks.forEach(bookmark => bookmark.remove());

    if (window.tagsData) {
        window.tagsData["Bookmarked"] = [];
    }

    let keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        if (key.startsWith(prefix)) {
            const combinedTitle = localStorage.getItem(key);
            const unix = combinedTitle.split(".")[0];
            const title = combinedTitle.split(".")[1];

            const pagePath = key.replace(prefix, "").replaceAll("_", "/") + ".html";

            keys.push({
                unix,
                title,
                pagePath,
            });

            if (window.tagsData) {
                window.tagsData["Bookmarked"].push(pagePath.replace("/", ""));
            }
        }
    }

    keys.sort((a, b) => b.unix - a.unix).forEach(key => {
        bookmarkContainer.appendChild(createBookmarkElement(key.title, key.pagePath));
    });
}

// Update the bookmark icon
function updateBookmarkIcon() {
    const bookmarkButton = document.getElementById('bookmark-button');
    const pagePath = getPagePath();

    if (localStorage.getItem(`bookmarks_${pagePath}`)) {
        bookmarkButton.classList.add("fa-bookmark");
        bookmarkButton.classList.remove("fa-bookmark-o");
    } else {
        bookmarkButton.classList.add("fa-bookmark-o");
        bookmarkButton.classList.remove("fa-bookmark");
    }
}

function createBookmarkElement(title, pagePath) {
    const li = document.createElement('li');
    li.classList.add("chapter-item")
    li.classList.add("bookmark");
    li.classList.add("expanded");
    li.innerHTML = `
        <a href="${pagePath}">${title}</a>
    `;
    return li;
}

/**
 * Returns the current page path component
 * @returns {string}
 */
function getPagePath() {
    return window.location.pathname.replaceAll("/", "_").replaceAll(".html", "");
}