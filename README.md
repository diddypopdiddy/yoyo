# YoYo Demo

This repository contains a small React demo app. To view it on GitHub Pages or locally:

1. Ensure the project files are pushed to your repository.
2. Enable GitHub Pages for the repository (serve from the root of the `main` branch).
3. Navigate to `https://<your-username>.github.io/<repository-name>/` to open the app.

The app uses the standalone Babel compiler to transform the JSX files in `src/` at runtime. TailwindCSS is loaded via CDN for styling.

If you want to run the demo locally without GitHub Pages, simply open `index.html` in your browser.

The frontend expects a backend server at `http://localhost:3001` for all `/api/...` requests. To use a different backend URL, define a global `API_BASE` variable in `index.html` before loading the React scripts.
