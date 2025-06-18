const bookmarkPrefix = "bookmarks_";
const tagPrefix = "tag_";

// TODO: Find a way to pass tags metadata into handlebars, so we can initiatize tags at build time
window.addEventListener("load", () => {
    updateBookmarkIcon();

    window.tagsData = tagsIndex;
    addBookmarkedToTags();
    createSearchableTags();

    // Ensure text wraps tightly around contributors boxes
    ensureContributorBoxWrapping();

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
            announcementBanner.remove();
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

document.addEventListener('DOMContentLoaded', function () {
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

    // Add description with default mdbook styling
    const description = document.createElement('p');
    description.textContent = 'This is the current list of individuals who have made substantial contributions to the project and deserve recognition.';
    container.appendChild(description);

    // Group contributors by features
    const leadContributors = [];
    const coreContributors = [];
    const stewards = [];
    const generalContributors = []; // This will include both auto-added and manually featured contributors

    for (const contributor of Object.keys(contributorsIndex)) {
        const data = contributorsIndex[contributor];
        const features = data.features || [];
        
        if (features.includes('lead')) {
            leadContributors.push(contributor);
        } else if (features.includes('core')) {
            coreContributors.push(contributor);
        } else if (features.includes('steward')) {
            // Only add to stewards if not already in core or lead
            stewards.push(contributor);
        } else {
            // All other contributors go into general, including those with "featured" tag
            generalContributors.push(contributor);
        }
    }

    // Helper to create a contributor card
    function createContributorCard(contributor, isInGroup) {
        const contributorCard = document.createElement('div');
        contributorCard.className = 'contributor-card';

        // Create ID based on contributor name
        const contributorId = contributor.toLowerCase().replace(/\s+/g, '-')
            .replace(/[&.:,#\/()]/g, ''); // Remove special characters

        const contributorData = contributorsIndex[contributor];
        const features = contributorData.features || [];

        // Add avatar if available
        if (contributorData.avatar) {
            const avatar = document.createElement('img');
            avatar.className = 'contributor-avatar';
            
            // Fix the avatar URL path
            let avatarUrl = contributorData.avatar;
            
            // Check if avatarUrl is a relative path that needs fixing
            if (avatarUrl && !avatarUrl.startsWith('http') && !avatarUrl.startsWith('data:')) {
                // Make relative URLs absolute based on site root
                const basePath = window.location.pathname.split('/').slice(0, -2).join('/');
                avatarUrl = basePath + '/' + avatarUrl.replace(/^\//, '');
            }
            
            avatar.src = avatarUrl;
            avatar.alt = `${contributor}'s avatar`;
            avatar.loading = 'lazy';
            avatar.onerror = function() {
                // Fallback for broken images - show initials or first letter
                this.style.display = 'flex';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'center';
                this.style.backgroundColor = '#e1e4e8';
                this.style.color = '#586069';
                this.style.fontWeight = 'bold';
                this.style.fontSize = '2.5rem';
                this.style.textTransform = 'uppercase';
                
                // Show first letter of name as fallback
                const initials = contributor.charAt(0);
                this.innerText = initials;
                
                // Remove image source to prevent further error attempts
                this.removeAttribute('src');
            };
            contributorCard.appendChild(avatar);
        }

        // Create a container for the name, role, and badges
        const nameContainer = document.createElement('div');
        nameContainer.className = 'contributor-header';
        
        // Contributor name
        const contributorName = document.createElement('div');
        contributorName.className = 'contributor-name';
        contributorName.textContent = contributor;
        nameContainer.appendChild(contributorName);

        // Add steward badge for core contributors who are also stewards
        if (isInGroup === 'core' && features.includes('steward')) {
            const stewardBadge = document.createElement('span');
            stewardBadge.className = 'contributor-badge steward-badge';
            stewardBadge.textContent = 'Steward';
            nameContainer.appendChild(stewardBadge);
        }
        
        contributorCard.appendChild(nameContainer);

        // Add company if available
        if (contributorData.company) {
            const companyContainer = document.createElement('div');
            companyContainer.style.textAlign = 'center';
            companyContainer.style.width = '100%';
            
            const companyElement = document.createElement('div');
            companyElement.className = 'contributor-company';
            
            // Add label/prefix for better clarity
            if (features.includes('lead') || features.includes('core') || features.includes('steward') || features.includes('featured')) {
                // No prefix for lead, core, stewards, or featured contributors
                companyElement.textContent = contributorData.company;
            } else {
                companyElement.textContent = `Affiliated with: ${contributorData.company}`;
            }
            
            companyContainer.appendChild(companyElement);
            contributorCard.appendChild(companyContainer);
        }

        // Add role for leadership, core contributors and stewards (not featured)
        if ((isInGroup === 'lead' || isInGroup === 'core' || isInGroup === 'steward') && contributorData.role) {
            const roleElement = document.createElement('div');
            roleElement.className = 'contributor-role';
            roleElement.textContent = contributorData.role;
            contributorCard.appendChild(roleElement);
        }

        // Add description for all contributors if available
        if (contributorData.description) {
            const descElement = document.createElement('div');
            // For contributors with "featured" tag, use the more prominent role styling for description
            if (contributorData.features && contributorData.features.includes('featured')) {
                descElement.className = 'contributor-role'; // More prominent styling
            } else {
                descElement.className = 'contributor-description';
            }
            descElement.textContent = contributorData.description;
            contributorCard.appendChild(descElement);
        }

        // Add social links container
        const socialContainer = document.createElement('div');
        socialContainer.className = 'contributor-social';

        // Add GitHub link if available
        if (contributorData.github) {
            const githubLink = document.createElement('a');
            githubLink.href = contributorData.github;
            githubLink.target = '_blank';
            githubLink.className = 'social-icon';
            githubLink.title = `${contributor}'s GitHub`;
            githubLink.innerHTML = '<i class="fa fa-github"></i>';
            socialContainer.appendChild(githubLink);
        }

        // Add Twitter link if available
        if (contributorData.twitter) {
            const twitterLink = document.createElement('a');
            twitterLink.href = contributorData.twitter.startsWith('http')
                ? contributorData.twitter
                : `https://twitter.com/${contributorData.twitter.replace('@', '')}`;
            twitterLink.target = '_blank';
            twitterLink.className = 'social-icon';
            twitterLink.title = `${contributor}'s Twitter`;
            twitterLink.innerHTML = '<i class="fa fa-twitter"></i>';
            socialContainer.appendChild(twitterLink);
        }

        // Add other potential social links (LinkedIn, personal website, etc.)
        if (contributorData.website) {
            const websiteLink = document.createElement('a');
            websiteLink.href = contributorData.website;
            websiteLink.target = '_blank';
            websiteLink.className = 'social-icon';
            websiteLink.title = `${contributor}'s Website`;
            websiteLink.innerHTML = '<i class="fa fa-globe"></i>';
            socialContainer.appendChild(websiteLink);
        }

        // Only add the social container if there are any social links
        if (socialContainer.children.length > 0) {
            contributorCard.appendChild(socialContainer);
        }

        // For general contributors (including those manually added with "featured" tag)
        if (isInGroup === 'general') {
            // Add contribution count if there are any contributions
            const pageCount = contributorData.pages ? contributorData.pages.length : 0;
            
            // Only show contributions count if there are actual contributions
            // or if the contributor is not manually added (doesn't have "featured" tag)
            if (pageCount > 0 || !(contributorData.features && contributorData.features.includes('featured'))) {
                const contributionInfo = document.createElement('div');
                contributionInfo.className = 'contributor-contributions';
                contributionInfo.textContent = `${pageCount} contribution${pageCount !== 1 ? 's' : ''}`;
                contributorCard.appendChild(contributionInfo);
            }

            // Add "View page contributions" button only if there are actual contributions to show
            if (pageCount > 0) {
                const pagesButton = document.createElement('button');
                pagesButton.className = 'pages-button';
                pagesButton.textContent = 'View page contributions';
                pagesButton.onclick = function () {
                    const pagesContainer = this.nextElementSibling;
                    if (pagesContainer.style.display === 'none' || !pagesContainer.style.display) {
                        pagesContainer.style.display = 'block';
                        this.textContent = 'Hide page contributions';
                    } else {
                        pagesContainer.style.display = 'none';
                        this.textContent = 'View page contributions';
                    }
                };
                contributorCard.appendChild(pagesButton);

                // Pages list (initially hidden)
                const pagesContainer = document.createElement('div');
                pagesContainer.className = 'pages-container';
                pagesContainer.style.display = 'none';
                
                // No heading, go straight to the list
                
                // Create the list with improved styling
                const pagesList = document.createElement('ul');
                pagesList.className = 'pages-list';

                for (const pagePath of contributorData.pages) {
                    const pageItem = document.createElement('li');
                    const pageLink = document.createElement('a');

                    // Set href with correct path (add "../" prefix)
                    pageLink.href = "../" + pagePath;

                    // Extract a more readable title from the path
                    let displayTitle = pagePath;

                    // Remove file extension and handle index files better
                    if (displayTitle.endsWith('.html')) {
                        const pathParts = displayTitle.split('/');
                        const fileName = pathParts.pop();

                        // For index.html files, use parent directory name
                        if (fileName === 'index.html' && pathParts.length > 0) {
                            const parentDir = pathParts[pathParts.length - 1];
                            displayTitle = parentDir.replace(/-/g, ' ');
                        } else {
                            displayTitle = fileName.replace('.html', '').replace(/-/g, ' ');
                        }

                        // Convert to title case
                        displayTitle = displayTitle
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ');
                    }

                    // Set initial display title (will be replaced if fetch succeeds)
                    pageLink.textContent = displayTitle;

                    // Try to fetch the actual title from the page
                    fetch("../" + pagePath)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to fetch page');
                            }
                            return response.text();
                        })
                        .then(html => {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(html, 'text/html');

                            // Get all h1 elements - the first one is the site title, we want the second one
                            const h1Elements = doc.querySelectorAll('h1');

                            // Use the second h1 if available (index 1), which should be the actual page title
                            if (h1Elements.length > 1 && h1Elements[1].textContent.trim()) {
                                pageLink.textContent = h1Elements[1].textContent.trim();
                                return;
                            }

                            // If no second h1 found, try getting the document title as fallback
                            const docTitle = doc.querySelector('title');
                            if (docTitle) {
                                // Remove book title suffix if present
                                let titleText = docTitle.textContent.trim();
                                titleText = titleText.replace(' - Security Frameworks by SEAL', '');
                                pageLink.textContent = titleText;
                            }
                        })
                        .catch(error => {
                            // Ignore errors, fallback to default displayTitle
                        });

                    // Add a custom style to each item
                    pageItem.className = 'page-item';
                    pageItem.appendChild(pageLink);
                    pagesList.appendChild(pageItem);
                }
                
                // Add the list to the container
                pagesContainer.appendChild(pagesList);
                
                // Add the container to the card
                contributorCard.appendChild(pagesContainer);
            }
        }

        return contributorCard;
    }

    // Helper to render a group
    function renderContributorsGroup(title, contributors, groupIdentifier) {
        if (!contributors.length) return null;
        const groupDiv = document.createElement('div');
        groupDiv.className = `contributors-group ${groupIdentifier}-group`;

        const groupHeader = document.createElement('h2');
        groupHeader.textContent = title;
        groupDiv.appendChild(groupHeader);

        const groupList = document.createElement('div');
        groupList.className = 'contributors-list';

        for (const contributor of contributors.sort()) {
            const card = createContributorCard(contributor, groupIdentifier);
            groupList.appendChild(card);
        }

        groupDiv.appendChild(groupList);
        return groupDiv;
    }

    // Render groups in order
    const leadGroup = renderContributorsGroup('Leadership', leadContributors, 'lead');
    const coreGroup = renderContributorsGroup('Core Contributors', coreContributors, 'core');
    const stewardsGroup = renderContributorsGroup('Stewards', stewards, 'steward');
    const contributorsGroup = renderContributorsGroup('Contributors', generalContributors, 'general');

    // Add groups to container
    if (leadGroup) container.appendChild(leadGroup);
    if (coreGroup) container.appendChild(coreGroup);
    if (stewardsGroup) container.appendChild(stewardsGroup);
    if (contributorsGroup) container.appendChild(contributorsGroup);
}

// Function to ensure text wraps tightly around contributor boxes
function ensureContributorBoxWrapping() {
    // Find all contributor boxes
    const contributorBoxes = document.querySelectorAll('.contributors-container');

    // For each contributor box, ensure it's positioned correctly for text wrapping
    contributorBoxes.forEach(box => {
        // Get the parent paragraph
        const parentParagraph = box.closest('p') || box.parentElement;

        // If the box is not inside a paragraph, try to find the first paragraph
        if (!parentParagraph.matches('p')) {
            const firstParagraph = box.parentElement.querySelector('p');
            if (firstParagraph) {
                // Move the box to be the first child of the first paragraph
                firstParagraph.insertBefore(box, firstParagraph.firstChild);

                // Set overflow for proper wrapping
                firstParagraph.style.overflow = 'auto';
            }
        } else {
            // If already in a paragraph, ensure proper wrapping
            parentParagraph.style.overflow = 'auto';
        }

        // Ensure the box is properly positioned
        box.style.float = 'right';
        box.style.clear = 'both';
        box.style.margin = '0 0 0.5rem 0.75rem';
    });
}