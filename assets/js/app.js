import axios from 'axios';
import _ from 'lodash';
import '../css/styles.css';

const API_LIST = "https://hacker-news.firebaseio.com/v0/newstories.json";
const BATCH_SIZE = 10;

let allIds = [];
let currentIndex = 0;

// API logic (AXIOS)
async function fetchIds() {
    try {
        const { data } = await axios.get(API_LIST);
        allIds = data;
        loadNextBatch();
    } catch (err) {
        console.error('Errore nel recupero ID:', err);
    }
}

async function fetchDetails(ids) {
    try {
        const requests = ids.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
        const results = await Promise.all(requests);
        
        return results.map(res => {
            const it = res.data;
            return {
                id: it.id,
                title: it.title || '(nessun titolo)',
                url: it.url || `https://news.ycombinator.com/item?id=${it.id}`,
                time: it.time ? new Date(it.time * 1000).toLocaleString() : ''
            };
        });
    } catch (err) {
        console.error('Errore nel recupero dettagli:', err);
        return [];
    }
}

// DOM logic (DRY)
function renderNews(items) {
    const container = document.getElementById('news-container');
    
    const htmlCards = items.map(item => `
        <div class="news-card">
            <img src="https://picsum.photos/seed/${item.id}/600/400" alt="${_.escape(item.title)}" class="news-img">
            <a href="${item.url}" target="_blank" rel="noopener" class="news-title">${_.escape(item.title)}</a>
            <p class="news-date">${item.time}</p>
        </div>
    `).join('');

    container.insertAdjacentHTML('beforeend', htmlCards);
}

async function loadNextBatch() {
    if (currentIndex >= allIds.length) return;

    const btn = document.getElementById('load-more-btn');
    const originalContent = btn.innerHTML; 

    try {
        btn.disabled = true; 
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Loading...`; 

        const nextIds = allIds.slice(currentIndex, currentIndex + BATCH_SIZE);
        const items = await fetchDetails(nextIds);
        
        currentIndex += BATCH_SIZE;
        renderNews(items);

    } catch (err) {
        console.error("Loading error:", err);
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalContent;
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    const btnLoad = document.getElementById('load-more-btn');
    if(btnLoad) btnLoad.addEventListener('click', loadNextBatch);
    fetchIds();
});

// Theme switcher
const themeBtn = document.querySelector('.color-theme');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
});