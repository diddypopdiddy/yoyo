# YoYo Demo

This repository hosts a small React app. The code is written in plain JSX files that are compiled in the browser using Babel. It is meant for simple demos such as GitHub Pages and does not require a build step.

## Running locally

Open `index.html` in any browser that allows loading local scripts. Alternatively, serve the folder:

```bash
npx serve -s .
```

Then visit the displayed address.

## GitHub Pages

1. Push the repository to GitHub.
2. In the repository settings, enable **GitHub Pages** and select the main branch.
3. After a minute or two, visit `https://<username>.github.io/<repo>/`.

## API requirements

Some features, like AskYoYo, call an API at `http://localhost:3001`. These will only work if that server is running.
