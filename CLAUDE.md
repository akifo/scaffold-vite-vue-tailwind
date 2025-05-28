# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a Vue 3 + Vite + TypeScript + Tailwind CSS scaffold project. The codebase uses:
- Vue 3 with Composition API (`<script setup>` syntax)
- TypeScript for type safety
- Tailwind CSS for styling
- Vite as the build tool and dev server
- ESLint + Prettier for code quality
- Husky + lint-staged for pre-commit hooks

## Key Configuration

- Path alias `@` points to `/src` directory (configured in vite.config.mts and tsconfig.json)
- Vite base path is set to `/scaffold-vite-vue-tailwind/` for GitHub Pages deployment
- Node version managed with Volta (v20.13.1)

## Essential Commands

Development:
```bash
pnpm dev          # Start development server
pnpm build        # Type check and build for production  
pnpm preview      # Preview production build locally
```

Code Quality:
```bash
pnpm lint         # Lint JS/TS/Vue files in src/
pnpm textlint     # Lint README.md
```

Setup:
```bash
pnpm prepare      # Install husky hooks
```

## Development Notes

- Use pnpm as the package manager
- Pre-commit hooks automatically run ESLint fix on staged JS/TS/Vue files and textlint on Markdown files
- For GitHub Pages deployment, update the `base` property in vite.config.mts to match your repository name
- All Vue components use TypeScript and the Composition API with `<script setup>` syntax