# Task Creator

A minimal task manager built with **Vanilla JavaScript (ES Modules)**, HTML5 and CSS3. Tasks persist between sessions using `localStorage` — no frameworks, no dependencies.

**Live demo:** [https://hankot91.github.io/creador_de_tareas/]


## Features

- Create, edit and delete tasks
- Mark tasks as completed with an animated green fill
- Confirmation popup before deleting
- Tasks saved automatically in `localStorage` — they survive page refreshes
- Fully responsive (mobile and desktop)

## Tech stack

- HTML5 / CSS3
- Vanilla JavaScript (ES Modules)
- Font Awesome 6 (icons)
- Google Fonts — Dosis

## Project structure

```
creador_de_tareas/
├── components/
│   ├── checkContent.js    # Complete/uncomplete task logic
│   ├── deleteContent.js   # Delete with confirmation popup
│   └── editContent.js     # Inline edit logic
├── assets/
│   └── rocket.svg
├── index.html
├── script.js              # Entry point — task creation, localStorage
└── styles.css
```

## Running it locally

No build step needed — just serve it over HTTP (required for ES Modules):

```bash
git clone https://github.com/Hankot91/creador_de_tareas.git
cd creador_de_tareas
npx serve .
```

Or use the Live Server extension in VS Code.

## Author

**Camilo Vanegas** ([@Hankot91](https://github.com/Hankot91))
