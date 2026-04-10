# AGENTS.md

This is a **Jekyll website** for the Computational Analysis of Brazilian Choro research project.

## Project Overview

- **Type**: Static website (Jekyll + GitHub Pages)
- **Dependencies**: `Gemfile` with `github-pages` gem (~> 232)
- **Output**: Static site generated to `_site/`
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-seo-tag, minima theme

## Submodules

This repo references 5 independent GitHub submodules:
- `choro-melodies`, `choro-harmonies`, `choro-scrape`, `choro-model`, `choro-audio`

## Build Commands

### Local Development

```bash
# Install dependencies
bundle install

# Serve site locally (with live reload)
bundle exec jekyll serve

# Serve with production config
bundle exec jekyll serve --environment production

# Build site without serving
bundle exec jekyll build

# Build for production
bundle exec jekyll build --future
```

### Build Options

```bash
# Incremental build (faster rebuilds)
bundle exec jekyll serve --incremental

# Watch mode with draft posts
bundle exec jekyll serve --watch

# Port configuration
bundle exec jekyll serve --port 4000
```

## Code Style Guidelines

### Frontmatter (YAML)

- Always use 2-space indentation
- Use lowercase keys with underscores: `menu_order`, `header_image`
- Boolean values: use lowercase `true`/`false`
- Quote strings when they contain special characters

```yaml
---
layout: page
title: About
permalink: /about/
menu_order: 1
header_image: /static/pixinguinha.jpg
---
```

### Liquid Templates

- Use proper spacing in control flow tags:
  ```liquid
  {%- if condition -%}  # Trim whitespace
  {%- endif -%}
  ```
- Prefer `where_exp` filters for filtering collections
- Use `relative_url` for internal links
- Use `absolute_url` when full URLs are needed
- Chain filters left-to-right: `{{ var | filter1 | filter2 }}`
- Use `default` filter for optional values: `{{ page.description | default: site.description }}`

### HTML Structure

- Use semantic HTML5 elements (`<header>`, `<main>`, `<nav>`)
- Include `role="banner"` on header, `aria-label` on main sections
- Include `{{ page.title }}` in page titles (format: `Page Title — Site Title`)
- Use `escape` filter for user-generated content: `{{ var | escape }}`
- Use `relative_url` for local assets

### YAML Data Files (`_data/`)

- List items start with `- ` followed by content on same line
- Nested structures use 2-space indentation
- Quote strings with special characters
- Separate entries with blank lines for readability

```yaml
- authors: "Author, A."
  year: 2024
  title: "Title with special: characters"
  link: https://example.com
```

### CSS

- Location: `assets/css/`
- Theme uses minima with custom skin
- Minify CSS for production if modifying

### File Naming

- Layouts: `snake_case.html` (e.g., `default.html`, `page.html`)
- Includes: `snake_case.html`
- Data files: `snake_case.yml`
- Pages: `snake_case.md`

## Jekyll Conventions

- Pages with `menu_order` are automatically added to navigation
- Draft posts go in `_drafts/` (not committed)
- Static assets go in `assets/` or `static/`
- Excluded from processing: `_site/`, `.sass-cache/`, `.jekyll-cache/`, `vendor/`, `Gemfile.lock`

## No Testing

This is a documentation website—no tests, linters, or typecheckers are configured.
