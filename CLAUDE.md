# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages static website repository for Eugene Shivagin's personal portfolio and Android app policy pages. The repository is hosted at `https://i30mb1.github.io`.

## Project Structure

### Main Components

- **index.html** - Main portfolio page showcasing Android development work, skills, and projects
- **tiktok-app/** - Privacy policy and terms of service for TikTok Video Uploader app
- **AD2/policy/** - Privacy policy for "About Dota 2" Android app
- **.well-known/assetlinks.json** - Android App Links configuration for deep linking (package: n7.ad2)

### Assets

- **css/** - Stylesheets including Font Awesome, Fontello icons, custom fonts (Libre Baskerville, Open Sans)
- **js/** - jQuery and plugins (Flexslider, Waypoints, Magnific Popup, jQuery Migrate)
- **images/** - Portfolio images and assets

## Development Workflow

### No Build Process

This is a pure static HTML/CSS/JavaScript website with no build tools, package managers, or compilation steps. Edit files directly.

### Git Configuration

- Remote uses SSH authentication: `git@github.com:i30mb1/i30mb1.github.io.git`
- Primary branch: `master`
- Note: Temporary Word files (~$*.docx, ~WRL*.tmp) in root can be safely ignored/deleted

### Deployment

Changes are deployed automatically via GitHub Pages when pushed to the `master` branch:

```bash
git add <files>
git commit -m "description"
git push origin master
```

The site is immediately available at https://i30mb1.github.io after push.

### Testing Changes

Open HTML files directly in a browser for local testing. For full functionality:

```bash
# Use a simple HTTP server to avoid CORS issues
python -m http.server 8000
# Then visit http://localhost:8000
```

## File Editing Guidelines

### HTML Files

- All HTML files are complete standalone documents
- Policy pages (privacy.html, terms.html) use inline CSS
- Main index.html uses external stylesheets from css/ directory

### Android App Links

The `.well-known/assetlinks.json` file configures deep linking for the Android app "n7.ad2". When modifying:
- Maintain proper JSON structure
- Verify SHA256 fingerprints match the app's signing certificate
- Test deep linking after changes

### Policy Pages

Privacy and terms pages are legally significant documents:
- Always update the "Last Updated" date when making changes
- Ensure compliance with platform requirements (Google Play, TikTok)
- Keep language clear and accurate

## Common Tasks

### Adding New Policy Page

1. Create HTML file in appropriate subdirectory (e.g., `new-app/privacy.html`)
2. Use existing policy pages as templates
3. Ensure responsive design with viewport meta tag
4. Update git and deploy

### Modifying Portfolio

Main portfolio content is in `index.html`:
- Personal info: Lines 29-36
- About section: Lines 61-74
- Work experience: Lines 141-173
- Skills: Lines 177-201
- Portfolio projects: Lines 208-397

### Updating Styles

CSS files are in `css/` directory:
- `default.css` - Main styles
- `layout.css` - Layout and structure
- `media-queries.css` - Responsive breakpoints
- `fonts.css` - Font declarations

## Important Notes

- No .gitignore for .idea/ directory (IDE configuration is tracked)
- .nojekyll file disables Jekyll processing on GitHub Pages
- Resume PDF is included as `shuvagin.resume.pdf`