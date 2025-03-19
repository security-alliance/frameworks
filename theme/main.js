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

document.addEventListener('DOMContentLoaded', function() {
    // Add contributors functionality if available
    if (typeof contributorsIndex !== 'undefined') {
        setupContributorsPage();
    }
});

function setupContributorsPage() {
    // Create a contributors page if we're on a path ending with 'contributors.html'
    if (window.location.pathname.endsWith('contributors.html')) {
        buildContributorsPage();
    }

    // Add contributors navigation item
    const nav = document.querySelector('nav.sidebar-menu');
    if (nav) {
        // Look for existing "Tags" link to place contributors after it
        let tagsLink = Array.from(nav.querySelectorAll('a')).find(a => a.textContent.trim() === 'Tags');
        
        if (tagsLink && tagsLink.parentElement) {
            const contributorsItem = document.createElement('li');
            const contributorsLink = document.createElement('a');
            contributorsLink.href = window.location.pathname.replace(/[^/]*$/, 'contributors.html');
            contributorsLink.textContent = 'Contributors';
            contributorsItem.appendChild(contributorsLink);
            
            // Insert after tags
            tagsLink.parentElement.insertAdjacentElement('afterend', contributorsItem);
        }
    }
}

function buildContributorsPage() {
    const main = document.querySelector('main');
    if (!main) return;

    // Clear existing content
    main.innerHTML = '';

    // Create a container for better spacing
    const container = document.createElement('div');
    container.className = 'contributors-page-container';
    main.appendChild(container);
    
    // Add page title
    const header = document.createElement('h1');
    header.textContent = 'Contributors';
    container.appendChild(header);

    // Add description with better styling
    const description = document.createElement('p');
    description.className = 'contributors-description';
    description.textContent = 'This page lists all contributors to the book and the chapters they contributed to.';
    container.appendChild(description);
    
    // Add a divider
    const divider = document.createElement('hr');
    divider.className = 'contributors-divider';
    container.appendChild(divider);

    // Sort contributors alphabetically
    const sortedContributors = Object.keys(contributorsIndex).sort();

    // Create the contributors list
    const contributorsList = document.createElement('div');
    contributorsList.className = 'contributors-list';
    
    for (const contributor of sortedContributors) {
        const contributorCard = document.createElement('div');
        contributorCard.className = 'contributor-card';
        
        // Create ID based on contributor name
        const contributorId = contributor.toLowerCase().replace(/\s+/g, '-')
            .replace(/[&.:,#\/()]/g, ''); // Remove special characters
        
        // Add avatar if available
        const contributorData = contributorsIndex[contributor];
        if (contributorData.avatar) {
            const avatar = document.createElement('img');
            avatar.className = 'contributor-avatar';
            avatar.src = contributorData.avatar;
            avatar.alt = `${contributor}'s avatar`;
            avatar.loading = 'lazy';
            contributorCard.appendChild(avatar);
        }
        
        // Contributor name with optional GitHub link
        const contributorName = document.createElement('div');
        contributorName.className = 'contributor-name';
        
        if (contributorData.github) {
            const githubLink = document.createElement('a');
            githubLink.href = contributorData.github;
            githubLink.target = '_blank';
            githubLink.textContent = contributor;
            contributorName.appendChild(githubLink);
        } else {
            contributorName.textContent = contributor;
        }
        
        contributorCard.appendChild(contributorName);
        
        // Add contribution count
        const chapterCount = contributorData.chapters.length;
        const contributionInfo = document.createElement('div');
        contributionInfo.className = 'contributor-contributions';
        contributionInfo.textContent = `${chapterCount} contribution${chapterCount !== 1 ? 's' : ''}`;
        contributorCard.appendChild(contributionInfo);
        
        // Add "View Chapters" button that expands to show chapters
        if (chapterCount > 0) {
            const chaptersButton = document.createElement('button');
            chaptersButton.className = 'chapters-button';
            chaptersButton.textContent = 'View Chapters';
            chaptersButton.onclick = function() {
                const chaptersList = this.nextElementSibling;
                if (chaptersList.style.display === 'none' || !chaptersList.style.display) {
                    chaptersList.style.display = 'block';
                    this.textContent = 'Hide Chapters';
                } else {
                    chaptersList.style.display = 'none';
                    this.textContent = 'View Chapters';
                }
            };
            contributorCard.appendChild(chaptersButton);
            
            // Chapters list (initially hidden)
            const chaptersList = document.createElement('ul');
            chaptersList.className = 'chapters-list';
            chaptersList.style.display = 'none';
            
            for (const chapterPath of contributorData.chapters) {
                const chapterItem = document.createElement('li');
                const chapterLink = document.createElement('a');
                
                // Get chapter title by fetching it from the page
                fetch(chapterPath)
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        const title = doc.querySelector('h1')?.textContent || chapterPath;
                        chapterLink.textContent = title;
                    })
                    .catch(() => {
                        chapterLink.textContent = chapterPath;
                    });
                
                chapterLink.href = chapterPath;
                chapterItem.appendChild(chapterLink);
                chaptersList.appendChild(chapterItem);
            }
            
            contributorCard.appendChild(chaptersList);
        }
        
        contributorsList.appendChild(contributorCard);
    }
    
    container.appendChild(contributorsList);
}