# Portfolio Setup Instructions

## Quick Start

1. Download all files from this package
2. Upload to your GitHub repository: `nimbekarnd.github.io`
3. Your site will be live at: https://nimbekarnd.github.io

## File Structure

```
nimbekarnd.github.io/
├── index.html          # Homepage
├── about.html          # About page
├── experience.html     # Experience timeline
├── projects.html       # Projects showcase
├── contact.html        # Contact information
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── assets/            # Create this folder for images
    └── Nimbekar_Nupur_Resume.pdf  # Your resume
```

## Key Features

- **Multi-page structure** - Separate pages for better organization
- **No emojis** - Professional, clean design
- **GitHub project images** - Uses GitHub's Open Graph images
- **Clickable projects** - Each project links directly to GitHub
- **Fully responsive** - Works on all devices
- **Modern design** - Professional tech aesthetic

## Deployment Steps

### Option 1: Direct Upload (Easiest)
1. Go to https://github.com/nimbekarnd/nimbekarnd.github.io
2. Click "Add file" → "Upload files"
3. Drag all HTML, CSS, and JS files
4. Commit changes
5. Wait 2-3 minutes for deployment

### Option 2: Git Command Line
```bash
git clone https://github.com/nimbekarnd/nimbekarnd.github.io.git
cd nimbekarnd.github.io

# Backup old files
mkdir backup
mv *.html backup/ 2>/dev/null

# Copy new files
cp /path/to/downloaded/files/* .

# Commit and push
git add .
git commit -m "Complete portfolio redesign - multi-page, professional"
git push origin main
```

## Customization

### Add Your Resume
1. Create an `assets` folder
2. Add your resume PDF as `Nimbekar_Nupur_Resume.pdf`
3. The download link in index.html will work automatically

### Update Project Images
The projects page uses GitHub's Open Graph images automatically. If you want custom images:
1. Add images to `assets/` folder
2. Update image src in projects.html:
   ```html
   <img src="assets/your-project-image.jpg" alt="Project Name">
   ```

### Change Colors
In `styles.css`, find these lines and update:
```css
:root {
    --color-primary: #2563eb;     /* Main blue color */
    --color-accent: #3b82f6;      /* Accent blue */
    /* Update other colors as needed */
}
```

### Add More Projects
Copy a project card block in `projects.html` and update:
- href (GitHub link)
- Image src
- Title and description
- Tech tags

## Testing

Before pushing to GitHub:
1. Open `index.html` in your browser
2. Check all links work
3. Test on mobile (use browser dev tools)
4. Verify images load correctly

## Troubleshooting

**Images not loading?**
- GitHub images use Open Graph protocol
- They may take a moment to load first time
- Check your internet connection

**Site not updating?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Wait 5 minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for errors

**Mobile menu not working?**
- Ensure `script.js` is in the same folder
- Check browser console for errors

## Support

If you need help:
1. Check GitHub Pages documentation
2. Verify all files are in the root directory
3. Ensure file names match exactly (case-sensitive)

## Next Steps

1. Add your photo/avatar to the about page
2. Update resume PDF link
3. Add more projects as you complete them
4. Share your portfolio link!

---

**Pro Tips:**
- Update regularly with new projects
- Keep descriptions concise and impact-focused
- Use metrics and numbers where possible
- Test on multiple devices before sharing
