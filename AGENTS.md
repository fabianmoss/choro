# AGENTS.md

This is a **Jekyll website** for the Computational Analysis of Brazilian Choro research project.

## Running the site locally

```bash
bundle exec jekyll serve
```

## Build tool

- Uses `Gemfile` with `github-pages` gem (GitHub Pages compatible)
- Static site output to `_site/`

## Submodules

This repo references 5 submodules (separate GitHub repos):
- choro-melodies, choro-harmonies, choro-scrape, choro-model, choro-audio

These are independent repos, not in this directory.

## No code to test

This is a documentation website only—no tests, linters, or typecheckers.