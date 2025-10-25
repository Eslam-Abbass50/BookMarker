# Bookmarker

A simple client-side web application to bookmark and manage favorite websites. Users can add a site name and URL, view the list of saved bookmarks, visit links in a new tab, and delete entries. The app is built with plain HTML, CSS, and JavaScript, and uses Bootstrap and Font Awesome for styling.

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Styling Notes](#styling-notes)
- [Known Limitations](#known-limitations)
- [Improvement Ideas](#improvement-ideas)
- [License](#license)

## Overview
Bookmarker lets you quickly save and manage website links during a browsing session. It stores bookmarks in memory (JavaScript array) for the current session and renders them to the page.

## Tech Stack
- HTML5 for structure
- CSS3 + Bootstrap for styling and layout
- JavaScript (vanilla) for interactivity
- Google Fonts and Font Awesome for typography and icons

## Project Structure
```
BookMarker/
├── index.html            # Main page markup
├── css/
│   ├── bootstrap.min.css
│   ├── all.min.css       # Font Awesome CSS
│   └── style.css         # Custom styles for headings, content, and bookmark items
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── all.min.js        # Font Awesome JS
│   └── main.js           # Core app logic for add/display/delete
├── webfonts/             # Font Awesome webfonts
└── .gitattributes
```

## Features
- Add a bookmark with a Site Name and Site URL
- Open a bookmark via a "Visit" button (new tab)
- Delete a bookmark via a "Delete" button
- In-memory session storage (resets on page reload)

## How It Works
- The form captures two inputs: `#siteName` and `#SiteURL`.
- `addWebsite()` creates a bookmark object `{ name, url }` and pushes it to `sitesList`.
- `displayWebsite()` appends a rendered `.siteItem` with the name, a Visit link, and a Delete button to the `#display` container.
- `deleteWebsite(button)` hides the DOM element and removes the corresponding bookmark from `sitesList` by matching its URL.

Key files:
- `index.html`: Layout, inputs, and display container for bookmarks.
- `js/main.js`: Contains `addWebsite`, `displayWebsite`, and `deleteWebsite` functions.
- `css/style.css`: Custom styling for the UI.

## Getting Started
1. Open `index.html` in a modern web browser.
2. Enter a Site Name and Site URL (include protocol like `https://`).
3. Click Submit to add the bookmark.
4. Click Visit to open the URL in a new tab, or Delete to remove it.

## Styling Notes
- Muted heading and paragraph color for a clean look.
- Light gray background for the content section.
- Gradient background for `.siteItem` cards and fixed width for titles for consistent alignment.

## Known Limitations
- Validation: `addWebsite()` currently checks element references instead of input values. It should validate `siteName.value` and `SiteURL.value` and enforce proper URL format.
- Rendering: `displayWebsite()` currently builds and appends only the last item string to the DOM and uses repeated IDs (`visitBtn`, `deleteBtn`) across items, which is invalid HTML. Prefer classes/data attributes and event delegation.
- Persistence: No storage across reloads; bookmarks are kept only in memory.
- Accessibility: Could improve label associations and ARIA attributes.

## Improvement Ideas
- Use `localStorage` to persist the bookmark list across sessions.
- Validate URL format and display inline error messages.
- Refactor rendering to re-render the full list or append safely without reusing IDs.
- Use `addEventListener` instead of inline `onclick` attributes and adopt event delegation for list actions.
- Add edit functionality, search, and sorting of bookmarks.
- Add tests for core logic (add/delete).

