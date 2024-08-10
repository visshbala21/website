async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/visshbala21/repos');
        const repos = await response.json();

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
    } catch (error) {
        console.error('Failed to fetch repositories:', error);
    }
}

// Call the function when the page loads
fetchGitHubRepos();
