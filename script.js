// Load search history from localStorage
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Function to display search history
function displaySearchHistory() {
    const searchHistoryList = document.getElementById('searchHistoryList');
    searchHistoryList.innerHTML = '';
    searchHistory.forEach(term => {
        const listItem = document.createElement('li');
        listItem.textContent = term;
        searchHistoryList.appendChild(listItem);
    });
}

// Function to add search term
function addSearchTerm(term) {
    if (term) {
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }
}

// Search button functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.trim();
    addSearchTerm(searchTerm);
    document.getElementById('searchInput').value = '';
});

// Clear history functionality
document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    searchHistory = [];
    localStorage.removeItem('searchHistory');
    displaySearchHistory();
});

// Initial load of search history
displaySearchHistory();
