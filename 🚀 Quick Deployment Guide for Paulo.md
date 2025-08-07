# 🚀 Quick Deployment Guide for Paulo

This guide will help you get your React Native portfolio app up and running quickly.

## 📋 What You Need First

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/) (choose LTS version)
2. **Install VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/)
3. **Install Git**: Download from [git-scm.com](https://git-scm.com/)

## 🔧 Quick Setup (5 minutes)

1. **Open Terminal/Command Prompt**
2. **Install Expo CLI globally**:
   ```bash
   npm install -g @expo/cli
   ```
3. **Navigate to your project folder** and run:
   ```bash
   npm install
   ```
4. **Start the app**:
   ```bash
   npm start
   ```

## 📱 Testing Your App

### On Your Phone (Easiest)
1. Install **Expo Go** app from App Store/Google Play
2. Run `npm start` in your project
3. Scan the QR code with your phone

### On Web Browser
1. Run `npm run web`
2. Opens automatically in your browser at `http://localhost:19006`

## 🌐 Publishing to GitHub

1. **Create a new repository** on GitHub named `portfolio-app`
2. **In your project folder**, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio app"
   git branch -M main
   git remote add origin https://github.com/OxxOrcus/portfolio-app.git
   git push -u origin main
   ```

## 🚀 Hosting Options (Choose One)

### Option 1: Netlify (Recommended - Free & Easy)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Run `npm run web` in your project
3. Drag the `web-build` folder to Netlify
4. Your app is live! 🎉

### Option 2: GitHub Pages (Free)
1. Add to your `package.json` scripts:
   ```json
   "homepage": "https://OxxOrcus.github.io/portfolio-app",
   "predeploy": "expo export -p web",
   "deploy": "gh-pages -d web-build"
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and sign up
2. Connect your GitHub repository
3. Vercel automatically deploys your app

## 🎨 Customizing Your App

### Update Your Information
1. **MainScreen.js**: Change name, title, contact links
2. **SkillsScreen.js**: Update your skills and ratings
3. **ProjectsScreen.js**: Add your actual projects

### Change Colors/Theme
Edit `src/utils/ThemeContext.js` to customize colors.

## 📞 Need Help?

If you get stuck:
1. Check the main README.md for detailed instructions
2. Google the error message
3. Ask on Stack Overflow or React Native community

## 🎯 Next Steps

1. **Test everything works** ✅
2. **Customize with your info** ✅
3. **Deploy to web** ✅
4. **Share your portfolio URL** ✅

---

**Your app includes:**
- ✅ Dark/Light mode toggle
- ✅ Smooth animations
- ✅ Mobile-responsive design
- ✅ Professional layout
- ✅ Contact integration
- ✅ Skills showcase
- ✅ Projects gallery

Good luck with your portfolio! 🚀

