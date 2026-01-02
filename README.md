# Personal Portfolio & Blog

A modern portfolio and blog website built with Astro, React, and styled-components. This project serves as both a showcase for my work and a platform for sharing technical insights through blog posts.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
 ├── public/
 ├── src/
 │   ├── components/     # React and Astro components
 │   ├── content/        # Blog posts and portfolio data
 │   ├── consts/         # Global consts for components
 │   ├── layouts/        # Page layouts and templates
 │   ├── lib/            # Utility functions and API clients
 │   ├── pages/          # Route pages
 │   └── styles/         # Global styles and theme
 ├── scripts/
 ├── astro.config.mjs
 ├── README.md
 ├── package.json
 ├── yarn.lock
 ├── .nojekyll
 └── eslint.config.js
```

## 🚀 Deployment

This project supports dual deployment targets:

### GitHub Pages

```bash
yarn deploy:github
```

### Dedicated Server (SFTP)

```bash
yarn deploy:server
```

**Environment Configuration:**

- `.env.github` - GitHub Pages environment variables
- `.env.server` - Private server environment variables (git-ignored)

**Security Features:**

- Public key authentication for SFTP
- Whitelist protection for subdomain directories
- Environment variable validation
- Secure file permissions enforcement
- Fixed GitHub API authentication for builds

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                                          |
| :--------------------- | :-------------------------------------------------------------- |
| `yarn install`         | Installs dependencies                                           |
| `yarn dev`             | Starts local dev server at `localhost:4321`                     |
| `yarn build`           | Build your production site to `./dist/` with GitHub environment |
| `yarn build:server`    | Build your production site to `./dist/` with server environment |
| `yarn preview`         | Preview your build locally, before deploying                    |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check`                |
| `yarn astro -- --help` | Get help using the Astro CLI                                    |
| `yarn deploy:github`   | Deploy to GitHub Pages                                          |
| `yarn deploy:server`   | Deploy to private server via SFTP                               |
| `yarn eslint`          | Run ESLint to check code quality                                |
| `yarn format`          | Format code with Prettier                                       |

## Credit

This project is based on the [Astro Blog Starter Kit](https://github.com/withastro/astro/tree/latest/examples/blog) and inspired by the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

```sh
yarn create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)
