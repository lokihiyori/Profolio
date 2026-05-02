# Quick Deployment Guide

## 🚀 Deploy Your Portfolio in 5 Minutes

### Step 1: GitHub Pages (Easiest Method)

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com) and sign up

2. **Create New Repository**
   - Click "New repository"
   - Name it: `kaishengliu.github.io` (replace with your username)
   - Make it **Public**
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop your entire `Profolio` folder contents
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Scroll down to **Pages** section
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

5. **Your site is live!**
   - Visit: `https://yourusername.github.io`
   - It may take a few minutes to appear

### Step 2: Custom Domain (Optional)

To use `https://KaishengLiu.com`:

1. **Buy a Domain**
   - [Namecheap](https://namecheap.com) (~$10/year)
   - [GoDaddy](https://godaddy.com) (~$12/year)
   - [Google Domains](https://domains.google) (~$12/year)

2. **Configure DNS**
   - In your domain registrar's DNS settings
   - Add a **CNAME** record:
     - Name: `@` or leave blank
     - Value: `yourusername.github.io`

3. **Update GitHub Settings**
   - Go to repository **Settings** → **Pages**
   - Enter your domain in "Custom domain" field
   - Save and wait 24 hours for DNS propagation

## 🌐 Alternative Hosting (Even Easier)

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your `Profolio` folder to the upload area
3. Get a free URL like `your-portfolio.netlify.app`
4. Optionally connect your custom domain

### Vercel (GitHub Integration)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Automatic deployments on every push

## 📱 Test Your Site

After deployment:
- ✅ Test on desktop and mobile
- ✅ Check all links work
- ✅ Verify contact information
- ✅ Test theme toggle
- ✅ Test page navigation

## 🔧 Troubleshooting

**Site not showing up?**
- Wait 5-10 minutes for GitHub Pages to build
- Check repository is public
- Verify files are in the root directory

**Custom domain not working?**
- DNS changes can take 24-48 hours
- Check CNAME record is correct
- Verify domain is added in GitHub settings

**Styling issues?**
- Clear browser cache
- Check file paths in HTML
- Verify all CSS/JS files uploaded

## 💡 Pro Tips

- **Update regularly**: Keep your portfolio current
- **Add analytics**: Use Google Analytics to track visitors
- **SEO optimization**: Add meta tags for better search results
- **Backup**: Keep a local copy of your files
- **Version control**: Use Git to track changes

## 🆘 Need Help?

- GitHub Pages documentation: [pages.github.com](https://pages.github.com)
- Netlify support: [docs.netlify.com](https://docs.netlify.com)
- Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

