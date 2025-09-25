# TONGUE NEWS - JAVASCRIPT PROJECT

This project is part of my study program and was created as a practical exercise: the goal was to develop a webapp for a fictional company called **Tongue News**.
The key point of the project is the integration with the **Hacker News API**, used to display a dynamic stream of news.

## ✨ Features

- Retrieval of **500 news** items via the Hacker News API
- Initial display of **10 news** to keep loading light
- Creation of a **“Load More” button** to load an additional 10 news at a time
- Simplified and clear content management, with a minimal layout

## 🌐 Live Preview

👉 [Check out the live preview here](https://marcovasto.github.io/tongue-news/)

## ⚙️ Technologies Used

- **HTML5:** Site structure and semantics
- **CSS3 + SASS:** Modular component management, style variables, and support for light/dark theme  
- **JavaScript:** API calls, dynamic content management, and user interactions  
- **GitHub:** Version control and project hosting through GitHub Pages

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
│       │   └──_hero-section.scss
│       ├── layouts/
│       │   └── _global.scss
│       ├── typography/
│       │   └── _typography.scss
│       └── styles.scss
├── .gitignore
├── index.html
└── README.md
```