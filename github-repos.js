let currentPage = 1;
const perPage = 30; // GitHub allows up to 100 per page, but you can change this number
let totalPages = 1;

async function fetchGitHubRepos(page = 1) {
    try {
        const response = await fetch(`https://api.github.com/users/visshbala21/repos?page=${page}&per_page=${perPage}`);
        const repos = await response.json();

        // Check if the link header exists to calculate total pages
        if (response.headers.get('Link')) {
            const linkHeader = response.headers.get('Link');
            const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
            if (lastPageMatch) {
                totalPages = parseInt(lastPageMatch[1]);
            }
        }

        const reposContainer = document.getElementById('repos-container');

        repos.forEach(repo => {
            // Create a new div for each repo
            const repoElement = document.createElement('div');
            repoElement.className = 'repo-item';

            // Fill the div with repo details
            repoElement.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description ? repo.description : 'No description available'}</p>
                <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
            `;

            // Append the repo to the container
            reposContainer.appendChild(repoElement);
        });

        // If there are more pages, show the "Load More" button
        if (page < totalPages) {
            const loadMoreButton = document.getElementById('load-more-btn');
            loadMoreButton.style.display = 'block'; // Show the button
        }
    } catch (error) {
        console.error('Failed to fetch repositories:', error);
    }
}

function loadMoreRepos() {
    currentPage++;
    fetchGitHubRepos(currentPage);
}

// Call the function when the page loads
fetchGitHubRepos();

// Attach load more functionality to the button
document.getElementById('load-more-btn').addEventListener('click', loadMoreRepos);
