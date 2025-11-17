# grahame.com

Personal website for Grahame Murray. Built with Hugo, generates resume in multiple formats.

## Prerequisites

```shell
brew install hugo pandoc
```

## Development

```shell
pnpm install
pnpm dev        # Start Hugo dev server
```

## Build

```shell
pnpm build      # Build site + generate resume formats (HTML, PDF, DOCX, MD, TXT)
```

## Resume

Resume data is in `data/resume.yaml` (JSON Resume schema). Formats are generated from Hugo HTML output using Playwright (PDF) and Pandoc (DOCX, MD, TXT).

## Deploy

Automatically deploys to CloudFlare Pages on push to `main`.
