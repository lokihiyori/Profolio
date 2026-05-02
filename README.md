# Kaisheng Liu - Portfolio

Personal portfolio website showcasing my skills, experience, projects, and education.

## Features

- **Multi-page Layout**: Toggle between "About & Skills" and "Experience & Projects" pages
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Modern UI**: Clean, professional design with smooth animations
- **Accessible**: Built with semantic HTML and accessibility in mind

## Deployment Options

### 1. GitHub Pages (Recommended - Free)

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `kaishengliu.github.io` (this will be your custom domain)
   - Make it public

2. **Upload your files**:
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/kaishengliu.github.io.git
   
   # Copy your portfolio files to the repository
   cp -r Profolio/* kaishengliu.github.io/
   
   # Add, commit, and push
   cd kaishengliu.github.io
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your site will be available at**: `https://yourusername.github.io`

### 2. Custom Domain (Optional)

To use `https://KaishengLiu.com`:

1. **Purchase a domain** from a registrar like:
   - [Namecheap](https://namecheap.com)
   - [GoDaddy](https://godaddy.com)
   - [Google Domains](https://domains.google)

2. **Configure DNS**:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses

3. **Update GitHub Pages settings**:
   - In your repository settings → Pages
   - Enter your custom domain in the "Custom domain" field
   - Save and wait for DNS propagation (can take up to 24 hours)

### 3. Alternative Hosting Options

#### Netlify (Free tier available)
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your `Profolio` folder
3. Get a free subdomain like `your-portfolio.netlify.app`
4. Optionally connect your custom domain

#### Vercel (Free tier available)
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically on every push

#### Firebase Hosting (Free tier available)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Deploy: `firebase deploy`

## File Structure

```
Profolio/
├── index.html          # Main HTML file
├── assets/
│   ├── styles.css      # CSS styles
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Local Development

To run the portfolio locally:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve Profolio
   ```

## Customization

- **Colors**: Edit CSS variables in `:root` and `[data-theme="light"]`
- **Content**: Update text in `index.html`
- **Styling**: Modify `assets/styles.css`
- **Functionality**: Edit `assets/script.js`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the [MIT License](LICENSE).

