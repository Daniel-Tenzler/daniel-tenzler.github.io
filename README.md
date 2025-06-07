# Personal Portfolio & Blog

A modern portfolio and blog website built with Astro, React, and styled-components. This project serves as both a showcase for my work and a platform for sharing technical insights through blog posts.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/     # React and Astro components
│   ├── content/        # Blog posts and portfolio data
│   ├── layouts/        # Page layouts and templates
│   ├── lib/           # Utility functions and API clients
│   ├── pages/         # Route pages
│   └── styles/        # Global styles and theme
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## 🎯 Implementation Status

### Project Setup ✅
- Initialized Astro project with React and JavaScript
- Configured Yarn as package manager
- Installed core dependencies (styled-components, axios, react-query, prop-types)
- Set up Astro config for GitHub Pages
- Added essential configuration files

### Folder Structure ✅
- Created organized directory structure
- Set up global styles and theme configuration
- Implemented consistent layouts
- Added header with navigation
- Created footer with social links

### Content and Data 🚧
- [ ] Portfolio data structure
- [ ] Blog post content
- [ ] Custom frontmatter fields
- [ ] Blog page templates
- [ ] Layout refinements

### Pages 🚧
- [ ] Portfolio grid homepage
- [ ] Portfolio item pages
- [ ] Blog overview with tag filtering
- [ ] Individual blog post pages
- [ ] URL-based tag filtering

### Integrations 🚧
- [ ] GitHub API integration
- [ ] Supabase analytics
- [ ] Sentry error monitoring
- [ ] Formspree contact form

### Contact Form 🚧
- [ ] Form implementation
- [ ] Client-side validation
- [ ] Form submission handling

### Design and Accessibility 🚧
- [ ] Dark mode theming
- [ ] Responsive design
- [ ] Interactive animations
- [ ] Accessibility improvements
- [ ] Lighthouse a11y optimization

### Performance and SEO 🚧
- [ ] Image optimization
- [ ] Bundle size optimization
- [ ] SEO enhancements
- [ ] Lighthouse performance optimization

### Stretch Goals 🚧
- [ ] React components in blog markdown
- [ ] RSS feed
- [ ] Social sharing previews

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`           | Installs dependencies                            |
| `yarn dev`               | Starts local dev server at `localhost:4321`      |
| `yarn build`             | Build your production site to `./dist/`          |
| `yarn preview`           | Preview your build locally, before deploying     |
| `yarn astro ...`         | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`   | Get help using the Astro CLI                     |

## Credit

This project is based on the [Astro Blog Starter Kit](https://github.com/withastro/astro/tree/latest/examples/blog) and inspired by the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

```sh
yarn create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)
