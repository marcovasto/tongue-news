# TONGUE NEWS - JAVASCRIPT PROJECT

Questo progetto fa parte del mio percorso di studi e nasce come esercizio pratico: l’obiettivo era sviluppare una **webapp** per un’azienda fittizia chiamata *Tongue News*.  
Il punto chiave del progetto è l’integrazione con l’**API di Hacker News**, utilizzata per mostrare un flusso dinamico di notizie.  

## ✨ Features

- Recupero di **500 news** tramite API Hacker News  
- Visualizzazione iniziale di **10 news** per non appesantire il caricamento  
- Creazione di un **bottone “Load More”** per caricare ulteriori 10 news alla volta  
- Gestione semplificata e chiara dei contenuti, con un layout minimale  

## 🌐 Live Preview

👉 [Guarda la live preview qui](LINK_DELLA_PREVIEW)

## ⚙️ Technologies Used

- **HTML5** → Struttura e semantica del sito
- **CSS3 + SASS** → Gestione modulare dei componenti, variabili per lo stile e supporto al tema chiaro/scuro  
- **JavaScript** → Chiamata API, gestione dinamica dei contenuti e interazioni utente  
- **GitHub** → Version control e hosting del progetto tramite GitHub Pages

## 🌳 Project Structure

```
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   ├── js/
│   │   └── app.js
│   └── scss/
│       ├── base/
│       │   ├── _mixin.scss
│       │   ├── _reset.scss
│       │   └── _variables.scss
│       ├── components/
│       │   ├── _buttons.scss
│       │   ├── _cards.scss
│       │   ├── _header.scss
│       │   ├── _navbar.scss
│       │   └── _social.scss
│       ├── layouts/
│       │   ├── _global.scss
│       └── typography/
│       │   └── _typography.scss
│       └── styles.scss
├── .gitignore
├── index.html
└── README.md
```