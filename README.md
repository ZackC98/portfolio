# Portfolio

Personal portfolio and build log. Built with Astro, deployed on Netlify.

## Stack

- **Framework** — Astro
- **Styling** — Custom CSS (no framework)
- **Fonts** — Syne (display), Newsreader (body), DM Mono (code)
- **Deploy** — Netlify (auto-deploys on push to main)

## Structure

```
src/
  content/
    projects/     ← one .md file per project
    posts/        ← one .md file per build log entry
  layouts/
    Base.astro    ← wraps every page (nav, footer, cursor)
  pages/
    index.astro         ← homepage
    projects/[slug].astro   ← individual project pages
    log/index.astro         ← build log list
    log/[slug].astro        ← individual log entries
  styles/
    global.css    ← all styles live here
```

## Adding a new project

1. Create a new file in `src/content/projects/your-project-name.md`
2. Fill in the frontmatter (copy the template below)
3. Write the content in Markdown
4. Push to GitHub — Netlify auto-deploys

**Project frontmatter template:**

```markdown
---
title: "Your project title"
date: 2025-04-07
status: wip          # live | wip | killed | archived
summary: "One sentence. What it does and why it matters."
stack: ["Python", "Streamlit"]
featured: false      # true for the anchor project only
liveUrl: ""          # optional
githubUrl: ""        # optional
---
```

## Adding a build log entry

1. Create a new file in `src/content/posts/your-entry-title.md`
2. Fill in the frontmatter
3. Write the entry
4. Push to GitHub

**Post frontmatter template:**

```markdown
---
title: "What happened and what I learned"
date: 2025-04-07
outcome: killed      # live | killed | wip | archived
project: "project-slug"   # optional — links to a project
summary: "One line summary shown in the list view"
---
```

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`

## Deploy

Netlify auto-deploys on every push to `main`.

For manual deploy, add your `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` 
as GitHub repository secrets.
