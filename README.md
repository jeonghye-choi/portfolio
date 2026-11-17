# Portfolio

Personal portfolio site — built with React, TypeScript, and Vite.

🔗 [jenchoi.dev](https://jenchoi.dev)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- react-markdown (for the Notes section)

## Pages

- **Main** — interactive constellation background built with Canvas
- **Projects** — selected projects, solo and team
- **Experiences** — work history and background
- **Notes** — a small collection of technical notes, written in Markdown
- **Labs** — experiments, not projects

## Adding a note

Place the Markdown file in `src/content/notes/`. Put the title, date (YYYY-MM-DD),
tags, and summary in a JSON object between the opening `---` delimiters, following
an existing note. The filename determines the URL slug and thumbnail path
(`public/images/notes/<slug>/thumbnail.png`).

## License

All content and code in this repository are personal work and not
licensed for reuse.
