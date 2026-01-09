# TONGUE NEWS - JAVASCRIPT PROJECT

This project is part of my study program and was created as a practical exercise: the goal was to develop a webapp for a fictional company called **Tongue News**.
The key point of the project is the integration with the **Hacker News API**, used to display a dynamic stream of news.

## ✨ Features

- **Dynamic Fetching:** Retrieval of news items via the **Hacker News API** using **Axios**.
- **Batch Loading:** Initial display of 10 news with a **"Load More"** system to handle data efficiently.
- **UX Feedback:** Visual loading state (spinner) and button disabling during API calls.
- **Theme Switcher:** Full support for **Light/Dark Mode** with optimized color contrasts for accessibility.
- **Data Security:** Sanitization of API content using **Lodash** (`_.escape`) to prevent XSS vulnerabilities.

## 🌐 Live Preview

👉 [Check out the live preview here](https://marcovasto.github.io/tongue-news/)

## ⚙️ Technologies Used

- **HTML5 & CSS3:** Semantic structure and advanced styling.
- **SASS (SCSS):** Modular management of components, variables, and themes.
- **JavaScript (ES6+):** Asynchronous logic and DOM manipulation.
- **Vite:** Next-generation frontend tooling for bundling and development.
- **Axios:** Promise-based HTTP client for the browser.
- **Lodash:** Utility library for data consistency and security.

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
│       │   └── _hero-section.scss
│       ├── layouts/
│       │   └── _global.scss
│       ├── typography/
│       │   └── _typography.scss
│       └── styles.scss
├── dist/
├── node_modules/
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```