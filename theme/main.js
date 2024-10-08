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

    let anySelected = false;
    selectedTags.forEach(tag => {
        const pages = window.tagsData[tag] || [];
        pages.forEach(page => {
            const link = document.querySelector(`#sidebar a[href$="${page}"]`);
            if (link) {
                link.classList.add("selected");
                anySelected = true;
            }
        });
    });

    // If no tags are selected, show all pages.
    //? Can't just use `selectedTags.length === 0` because 
    //? for some reason `selectedTags` contains a `protcol` tag.
    if (anySelected) {
        document.getElementById("sidebar").classList.add("filtered");
    } else {
        document.getElementById("sidebar").classList.remove("filtered");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    //* Initialize per-page tags
    fetch(path_to_root + 'theme/tagscolors.json')
        .then(response => response.json())
        .then(data => {
            window.tagsColors = data

            const tagLines = Array.from(document.querySelectorAll('p')).filter(line => line.textContent.includes("tag:"));
            tagLines.forEach(line => {
                const tagText = line.textContent;
                if (tagText.includes('tag: [')) {
                    const tagContent = tagText.split('[')[1].split(']')[0].trim();
                    const tags = tagContent.split(',').map(tag => tag.trim());
                    const tagLabels = tags.map(tag => {
                        const hexColor = window.tagsColors[tag]
                        return `
                      <span class="colored-tag" style="--tag-color: ${hexColor}">
                        <i class="fa fa-tag" aria-hidden="true"></i> 
                        ${tag}
                    </span>`;
                    });
                    line.innerHTML = tagLabels.join(' ');
                }
            });
        })

    // Initialize searchable tags
    fetch(path_to_root + 'theme/tagsindex.json')
        .then(response => response.json())
        .then(data => {
            window.tagsData = data;
            const tags = Object.keys(data).sort((a, b) => { return ('' + a).localeCompare(b); });
            const tagsList = document.getElementById('tags-list');

            populateTags(tagsList, tags);

            const tagSearch = document.getElementById('tag-search');
            tagSearch.addEventListener('input', function () {
                populateTags(tagsList, tags, this.value);
            });

            tagsList.addEventListener('change', function (event) {
                if (event.target.type === 'checkbox') {
                    const selectedTag = event.target.value;
                    const isChecked = event.target.checked;
                    localStorage.setItem(`tag_${selectedTag}`, isChecked);
                    highlightSidebarLinks();
                }
            });

            highlightSidebarLinks();
        })
        .catch(error => {
            console.error('Error loading or parsing tagsindex.json:', error);
        });

    //* Setup event listeners for dropdowns & tags
    const tagsToggle = document.getElementById('tags-toggle');
    const tagsDropdown = document.getElementById('tags-dropdown');
    const tagSearch = document.getElementById('tag-search');

    // Open the tags dropdown when clicked
    tagsToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        tagsDropdown.classList.toggle('hidden');
        if (!isExpanded) {
            tagSearch.focus();
        }
    });

    // Close the dropdown when clicking another element
    document.addEventListener('click', function (event) {
        if (!tagsDropdown.contains(event.target) && event.target !== tagsToggle) {
            tagsToggle.setAttribute('aria-expanded', 'false');
            tagsDropdown.classList.add('hidden');
        }
    });
});