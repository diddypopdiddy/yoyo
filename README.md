# YoYo Demo

This repository contains a small React demo that runs directly in the browser via GitHub Pages. All components are written as JSX files and compiled on the fly using Babel.

## Running locally

Open `index.html` in your browser or serve the folder with a static server. For example:

```bash
npx http-server
# or
python3 -m http.server
```

Navigate to the served URL and you should see the login page.

## GitHub Pages

Push the repository to GitHub and enable **GitHub Pages** from the repository settings. Select the `main` (or default) branch and the `/` root folder. Once the page is published, visit the GitHub Pages URL to view the demo.

## API requirements

The chat features (`AskYoYoTeacher` and `AskYoYoStudent`) make requests to `http://localhost:3001/api/tutorChat`. To use these features, run a compatible API server at that address or modify the source to point to your own server.
