# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Contact form with validation
- Animated elements on scroll
- Modern gradient design
- Professional layout

## Setup Instructions

1. Replace placeholder content in `index.html`:
   - Update "Your Name" with your actual name
   - Add your professional title
   - Update contact information
   - Add your project descriptions and links

2. Add your images to the `images/` folder:
   - `profile.jpg` - Your professional headshot
   - `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots

3. Customize colors and styling in `css/style.css` if needed

4. Update social media links in the footer

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styles and responsive design
├── js/
│   └── script.js      # JavaScript functionality
├── images/            # Image assets
└── README.md          # This file
```

## Customization

- **Colors**: Update the CSS variables or color values in `style.css`
- **Fonts**: Change the font-family in the CSS
- **Sections**: Add or remove sections in `index.html`
- **Projects**: Update the projects grid with your actual work

## Deployment

You can deploy this website to:

- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

Simply upload all files to your hosting provider.

## Generate CV PDF (optional)

You can generate a printable `CV.pdf` from `professional_cv.html` using Puppeteer (headless Chrome). This will produce a high-quality PDF that matches the HTML layout.

Steps:

1. Install Node.js (if not already installed).
2. From the project root, install dependencies:

```bash
npm install
```

3. Generate the PDF:

```bash
npm run generate-cv
```

After the script finishes, `CV.pdf` will be created in the project root. If Puppeteer fails to download a Chromium binary due to network restrictions, you can install Chromium separately and set the `PUPPETEER_EXECUTABLE_PATH` environment variable before running the script.

Example (Windows PowerShell):

```powershell
# $env:PUPPETEER_EXECUTABLE_PATH = 'C:\\Program Files (x86)\\Chromium\\chrome.exe'
npm run generate-cv
```

If you want, I can generate the PDF for you and add `CV.pdf` to the repository — say the word and I will proceed.
