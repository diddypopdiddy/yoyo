# YoYo Demo

This project is a small React application intended for hosting on GitHub Pages.
All JSX files are compiled in the browser using Babel.

## Running on GitHub Pages
1. Push the repository to GitHub.
2. In the repository settings, enable GitHub Pages and select the main branch.
3. Visit `https://<username>.github.io/<repository>/` to view the demo.

## Running locally
Open `index.html` in a browser or serve the directory with a static server:

```bash
npx http-server -p 8080
```

Then navigate to `http://localhost:8080`.

## API Requirements
Some features attempt to contact `http://localhost:3001/api` endpoints.
To fully use the Ask YoYo chat features, run a compatible API server locally.
