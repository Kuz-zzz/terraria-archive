import db from './software/db.js';

	function displayEntries(entries) {
	  const container = document.getElementById('entries');
	  container.innerHTML = entries.map(entry => `
		<div class="entry">
		  <h2>${entry.name}</h2>
		  <img src="${entry.image}" alt="${entry.name}">
		  <p><strong>Source:</strong> ${entry.source}</p>
		  <p><strong>Tags:</strong> ${entry.tags.join(', ')}</p>
		  <a href="static/schematics/${entry.file}">Download</a>
		</div>
	  `).join('');
	}

	// Initialize
	displayEntries(db);