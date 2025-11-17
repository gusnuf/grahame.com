#!/bin/bash
# Script to generate all resume formats from the clean HTML

set -e

echo "Building Hugo site..."
hugo --gc --minify

echo "Generating resume formats from HTML..."

# Check if required tools are installed
if ! command -v pandoc &> /dev/null; then
    echo "Error: pandoc is not installed. Install with: brew install pandoc"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "Error: node is not installed. Install with: brew install node"
    exit 1
fi

# Check if playwright is installed
if ! pnpm list playwright &> /dev/null; then
    echo "Installing playwright..."
    pnpm add -D playwright
    pnpm exec playwright install chromium --with-deps
fi

# Generate PDF using Playwright
echo "Generating PDF..."
node - <<'EOF'
const playwright = require('playwright');
(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/public/resume/grahame_murray_resume.html');
  await page.pdf({
    path: 'public/resume/grahame_murray_resume.pdf',
    format: 'Letter',
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    printBackground: true
  });
  await browser.close();
  console.log('PDF generated successfully');
})();
EOF

# Generate Markdown
echo "Generating Markdown..."
pandoc public/resume/grahame_murray_resume.html \
  -f html \
  -t markdown \
  --wrap=none \
  -o public/resume/grahame_murray_resume.md

# Generate plain text
echo "Generating plain text..."
pandoc public/resume/grahame_murray_resume.html \
  -f html \
  -t plain \
  --wrap=auto \
  -o public/resume/grahame_murray_resume.txt

# Generate DOCX
echo "Generating DOCX..."
pandoc public/resume/grahame_murray_resume.html \
  -f html \
  -t docx \
  -o public/resume/grahame_murray_resume.docx

echo ""
echo "✅ All resume formats generated successfully!"
echo ""
echo "Generated files:"
ls -lh public/resume/grahame_murray_resume.*
