const bookmarkPrefix = "bookmarks_";
const tagPrefix = "tag_";

// TODO: Find a way to pass tags metadata into handlebars, so we can initiatize tags at build time
window.addEventListener("load", () => {
    updateBookmarkIcon();

    window.tagsData = tagsIndex;
    addBookmarkedToTags();
    createSearchableTags();

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
            localStorage.setItem(`${tagPrefix}${selectedTag}`, isChecked);
            updateSidebarLinks();
        }
    });
});

// Update the bookmark icon based on the current page
function updateBookmarkIcon() {
    const bookmarkButton = document.getElementById("bookmark-button");
    const pagePath = getPathname();

    if (localStorage.getItem(`${bookmarkPrefix}${pagePath}`)) {
        bookmarkButton.classList.add("fa-bookmark");
        bookmarkButton.classList.remove("fa-bookmark-o");
    } else {
        bookmarkButton.classList.add("fa-bookmark-o");
        bookmarkButton.classList.remove("fa-bookmark");
    }
}

// Adds all the bookmarks currently stored in localStorage to the tagsData
function addBookmarkedToTags() {
    if (!window.tagsData) {
        return;
    }
    window.tagsData["Bookmarked"] = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith(bookmarkPrefix)) {
            const pagePath = key.replace(bookmarkPrefix, "");
            window.tagsData["Bookmarked"].push(pagePath);
        }
    }
}

/**
 * Populates the searchable tags in the tags dropdown
 */
function createSearchableTags() {
    const tags = Object.keys(tagsData).sort((a, b) => {
        return a.localeCompare(b);
    });

    const tagsList = document.getElementById("tags-list");
    populateTags(tagsList, tags);
    updateSidebarLinks();
}

/**
 * Populate the tagList element with tags
 * @param {HTMLElement} tagList
 * @param {string[]} tags
 * @param {string} filter
 */
function populateTags(tagList, tags, filter = "") {
    tagList.innerHTML = "";
    tags
        .filter((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
        .forEach((tag) => {
            tagList.appendChild(createTagElement(tag));
        });
}

/**
 * Create a tag element
 * @param {string} tag
 */
function createTagElement(tag) {
    const li = document.createElement("li");
    const isChecked = localStorage.getItem(`${tagPrefix}${tag}`) === "true";
    li.setAttribute("role", "option");
    li.innerHTML = `
<label>
    <input class="tag-checkbox" type="checkbox" value="${tag}" ${isChecked ? "checked" : ""}>
    ${tag}
</label>
    `;
    return li;
}

/**
 * Highlight sidebar links based on selected tags
 */
function updateSidebarLinks() {
    const sidebarLinks = document.querySelectorAll("#sidebar a");
    sidebarLinks.forEach((link) => {
        link.classList.remove("selected");
    });

    const selectedTags = Object.keys(localStorage)
        .filter((t) => t.startsWith(tagPrefix) && localStorage.getItem(t) === "true")
        .map((t) => t.replace(tagPrefix, ""));

    // Filter pages by AND selected tags
    let selectedPages = new Set(window.tagsData[selectedTags[0]] || []);
    for (const tag of selectedTags.slice(1)) {
        const pages = new Set(window.tagsData[tag] || []);
        selectedPages = new Set([...selectedPages].filter((x) => pages.has(x)));
        if (selectedPages.size === 0) {
            break;
        }
    }


    // Highlight selected pages
    selectedPages.forEach((page) => {
        console.log("selected page", page);
        const link = document.querySelector(`#sidebar #toc a[href$="${page}"]`);
        if (link) {
            link.classList.add("selected");
            anySelected = true;
        }
    });

    if (selectedTags.length === 0) {
        document.getElementById("sidebar").classList.remove("filtered");
    } else {
        document.getElementById("sidebar").classList.add("filtered");
    }
}

// Bookmarks or unbookmarks the current page
function bookmarkPage() {
    const pagePath = getPathname();
    const title = document.title
        .replace(" - Security Frameworks by SEAL", "")
        .replace(".", "");

    if (localStorage.getItem(`${bookmarkPrefix}${pagePath}`)) {
        localStorage.removeItem(`${bookmarkPrefix}${pagePath}`);
    } else {
        localStorage.setItem(`${bookmarkPrefix}${pagePath}`, title);
    }

    updateBookmarkIcon();
    addBookmarkedToTags();
    updateSidebarLinks();
}

// Gets the path name in the same style as the tagsData
function getPathname() {
    return window.location.pathname.replace("/", "");
}

// Function to set banner content based on domain/environment
function setEnvironmentBanner() {
    try {
        const currentDomain = window.location.hostname;
        const announcementStripe = document.querySelector('.announcement-stripe p');
        const announcementBanner = document.querySelector('.announcement-stripe');
        
        if (!announcementStripe || !announcementBanner) {
            console.warn('Announcement stripe element not found');
            return;
        }
        
        // Default banner is red
        announcementBanner.style.backgroundColor = '#5e1118';
        
        // Check if we're on .org domain (production/main branch)
        if (currentDomain.includes('.org') || currentDomain === 'frameworks.securityalliance.org') {
            // Production banner (blue)
            announcementStripe.innerHTML = `
                <span>We're progressively releasing an alpha for each framework. Go to .dev domain to peek on future content.</span>
            `;
            // Change banner color to blue
            announcementBanner.style.backgroundColor = '#4339db';
        } else {
            // Development banner (red - original)
            announcementStripe.innerHTML = `
                <span>This is a work in progress and not a release. We're looking for volunteers.</span>
                <span>See <a href="https://github.com/security-alliance/frameworks/issues">Issues</a> and <a href="${path_to_root}contribute/contributing.html">Contribution</a> to know how to collaborate.</span>
            `;
            // Keep original red background
        }
    } catch (error) {
        console.error('Error setting environment banner:', error);
    }
}

// Run the function as early as possible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setEnvironmentBanner);
} else {
    // DOM already loaded, run immediately
    setEnvironmentBanner();
}