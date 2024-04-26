"use strict";

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const statusMessage = document.getElementById('statusMessage');
const loader = document.getElementById('loader');

let timeoutId;

async function fetchSearchResults(term) {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=song`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Error fetching data from iTunes API');
  }
}

function displayResults(results) {
  resultsList.innerHTML = '';
  if (results.length === 0) {
    statusMessage.textContent = 'No results found.';
  } else {
    statusMessage.textContent = '';
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = `${result.trackName} - ${result.artistName}`;
      resultsList.appendChild(li);
    });
  }
}

function debounce(func, delay) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(func, delay);
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm.length > 0) {
    loader.style.display = 'block';
    debounce(async () => {
      try {
        const results = await fetchSearchResults(searchTerm);
        displayResults(results);
      } catch (error) {
        console.error(error);
        statusMessage.textContent = 'Error while fetching results.';
      } finally {
        loader.style.display = 'none';
      }
    }, 300);
  } else {
    resultsList.innerHTML = '';
    statusMessage.textContent = '';
  }
});