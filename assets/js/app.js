// const API_LIST = "https://hacker-news.firebaseio.com/v0/newstories.json";
// const BATCH_SIZE = 10;

// let allIds = [];
// let currentIndex = 0;

// async function fetchIds() {
// 	try {
// 		const res = await fetch(API_LIST);
// 		if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
// 		allIds = await res.json();
// 		loadNextBatch();
// 	} catch (err) {
// 		console.error('FETCH ERROR', err);
// 	}
// }

// async function fetchDetails(ids) {
// 	const promises = ids.map(id =>
// 		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
// 			.then(r => r.ok ? r.json() : null)
// 			.catch(() => null)
// 	);
// 	const raw = await Promise.all(promises);
// 	return raw.filter(Boolean).map(it => ({
// 		id: it.id,
// 		title: it.title || '(no title)',
// 		url: it.url || `https://news.ycombinator.com/item?id=${it.id}`,
// 		timeISO: it.time ? new Date(it.time * 1000).toISOString() : ''
// 	}));
// }

// function createNewsCard(item) {
// 	const card = document.createElement('div');
// 	card.className = 'news-card';
	
// 	const title = document.createElement('a');
// 	title.href = item.url;
// 	title.target = '_blank';
// 	title.textContent = item.title;
// 	title.className = 'news-title';
// 	card.appendChild(title);

// 	const date = document.createElement('p');
// 	date.textContent = item.timeISO ? new Date(item.timeISO).toLocaleString() : '';
// 	date.className = 'news-date';
// 	card.appendChild(date);

// 	return card;
// }

// function renderNews(items) {
// 	const container = document.getElementById('news-container');
// 	items.forEach(item => container.appendChild(createNewsCard(item)));
// }

// async function loadNextBatch() {
// 	if (currentIndex >= allIds.length) return;
// 	const nextIds = allIds.slice(currentIndex, currentIndex + BATCH_SIZE);
// 	const items = await fetchDetails(nextIds);
// 	currentIndex += BATCH_SIZE;
// 	renderNews(items);
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	const btn = document.getElementById('loadMoreBtn');
// 	if(btn) btn.addEventListener('click', loadNextBatch);
// 	fetchIds();
// });

const API_LIST = "https://hacker-news.firebaseio.com/v0/newstories.json";
const BATCH_SIZE = 10;

let allIds = [];
let currentIndex = 0;

async function fetchIds() {
	try {
		const res = await fetch(API_LIST);
		if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
		allIds = await res.json();
		loadNextBatch();
	} catch (err) {
		console.error('FETCH ERROR', err);
	}
}

async function fetchDetails(ids) {
	const promises = ids.map(id =>
		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
			.then(r => r.ok ? r.json() : null)
			.catch(() => null)
	);
	const raw = await Promise.all(promises);
	return raw.filter(Boolean).map(it => ({
		id: it.id,
		title: it.title || '(no title)',
		url: it.url || `https://news.ycombinator.com/item?id=${it.id}`,
		timeISO: it.time ? new Date(it.time * 1000).toISOString() : ''
	}));
}

function createNewsCard(item) {
	const card = document.createElement('div');
	card.className = 'news-card';

	const img = document.createElement('img');
	img.src = `https://picsum.photos/seed/${item.id}/600/400`;
	img.alt = item.title;
	img.className = 'news-img';
	card.appendChild(img);

	const title = document.createElement('a');
	title.href = item.url;
	title.target = '_blank';
	title.textContent = item.title;
	title.className = 'news-title';
	card.appendChild(title);

	const date = document.createElement('p');
	date.textContent = item.timeISO ? new Date(item.timeISO).toLocaleString() : '';
	date.className = 'news-date';
	card.appendChild(date);

	return card;
}

function renderNews(items) {
	const container = document.getElementById('news-container');
	items.forEach(item => container.appendChild(createNewsCard(item)));
}

async function loadNextBatch() {
	if (currentIndex >= allIds.length) return;
	const nextIds = allIds.slice(currentIndex, currentIndex + BATCH_SIZE);
	const items = await fetchDetails(nextIds);
	currentIndex += BATCH_SIZE;
	renderNews(items);
}

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('loadMoreBtn');
	if(btn) btn.addEventListener('click', loadNextBatch);
	fetchIds();
});

const btn = document.querySelector('.color-theme');
let active = false;

btn.addEventListener('click', () => {
	active = !active;

	if (active) {
		document.documentElement.style.setProperty('--color-primary', 'white');
		document.documentElement.style.setProperty('--color-secondary', '#141414');
		document.documentElement.style.setProperty('--color-tertiary', '#183153');
	} else {
		document.documentElement.style.setProperty('--color-primary', '#183153');
		document.documentElement.style.setProperty('--color-secondary', '#F2F4F3');
		document.documentElement.style.setProperty('--color-tertiary', '#e0e7ff');
	}
});