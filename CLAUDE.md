# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `npm run dev` — start dev server with Turbopack
- `npm run build` — production build
- `npm run lint` — ESLint
- No test suite configured

## What This Is

A personal portfolio website styled as a VS Code editor. The entire UI is a single-page app that mimics VS Code's layout: title bar, activity bar, sidebar file tree, tabbed editor area, breadcrumb bar, and status bar. "Files" in the tree open content panes (about, projects, blog posts, resume PDF, settings).

## Architecture

- **Next.js 15 + React 19 + TypeScript** — single-page client component (`'use client'` in `app/page.tsx`)
- **Styling**: all layout/theme CSS lives in `app/globals.css` using CSS custom properties (`--accent`, `--text`, `--border`, etc.). Dark mode toggled via `body.dark` class. Tailwind is configured but the VS Code UI uses raw CSS.
- **No routing**: the app has no pages beyond `/`. Navigation is simulated via a file tree + tabs state machine in `page.tsx`.

## Key Files

- `app/page.tsx` — the entire app: file tree, tab management, editor chrome, content rendering. All UI state (open tabs, active tab, expanded folders, accent color, dark mode) is managed here.
- `app/data/projects.ts` — project metadata, skill definitions with per-project descriptions, and tag color map. The `Project` type uses `Skill[]` (name + description) rather than plain string tags.
- `app/data/blog.tsx` — blog post content as a React component.
- `app/globals.css` — full VS Code theme (light/dark), layout grid, and component styles.

## Patterns

- Adding a new project: add entry to `PROJECTS` in `app/data/projects.ts`, add a tree node in the `TREE` array in `page.tsx`, add a `FileMeta` entry in `FILES`, and add the case to the `renderContent` switch.
- Adding a new blog post: create/extend the blog component in `app/data/blog.tsx`, add tree node + file meta + switch case in `page.tsx`.
- Theme colors: accent color is set via `--accent` CSS variable at runtime. Tag colors for skills are defined in `TAG_COLORS` in `app/data/projects.ts`.
