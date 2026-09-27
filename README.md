# Countcraft

A small React + Vite counter app with animated number transitions and a dark/light theme toggle.

## Overview

Countcraft is a simple interactive counter project built to practice React state management, reducer logic, custom styling, and animation effects. It includes:

- Increment and decrement controls
- Animated flip-style display transitions
- Multiple counter animation themes
- Light and dark mode toggle
- Clean, modern UI built with React

## Tech Stack

- React 19
- Vite
- JavaScript
- CSS

## Project Structure

```bash
React-Counter/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Counter.jsx
│       ├── TitleBar.jsx
│       └── counterScript.js
└── README.md
```

## Features

- Dynamic counting with `useReducer`
- Animated display state changes for each count update
- Theme switcher in the navigation bar
- Responsive layout with styled controls and display panel
- Minimal project setup for learning and experimentation

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

This will start the Vite development server. Open the local URL shown in the terminal to view the app.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Usage

1. Open the app in the browser.
2. Click the `+` button to increase the counter.
3. Click the `-` button to decrease the counter.
4. Switch between animation styles using the buttons in the style menu.
5. Toggle between dark and light mode using the theme button.

## Notes

This project is intended as a learning-focused React app and can be used as a reference for:

- React state updates
- Reducers and action handling
- UI animation logic
- CSS-based component styling

## License

This project is for educational purposes and is open for personal learning and modification.
