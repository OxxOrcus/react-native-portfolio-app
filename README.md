# Paulo Brocco - React Native Portfolio App

A modern, responsive React Native portfolio app showcasing Paulo Brocco's skills, projects, and professional experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Layout**: Optimized for both mobile and web platforms
- **Interactive Navigation**: Bottom tab navigation with smooth transitions
- **Skills Showcase**: Star-rated skill display with categorization
- **Projects Gallery**: Comprehensive project showcase with GitHub integration
- **Contact Integration**: Direct links to LinkedIn, GitHub, Email, and WhatsApp

## 📱 Screens

1. **Home Screen**: Personal profile with contact links
2. **Skills Screen**: Technical skills with star ratings
3. **Projects Screen**: Portfolio projects with descriptions and tech stacks

## 🛠️ Tech Stack

- **React Native** with Expo
- **React Navigation** for navigation
- **React Native Reanimated** for animations
- **Expo Vector Icons** for iconography
- **Context API** for theme management

## 📋 Prerequisites

Before running this app, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- For mobile testing: Expo Go app on your phone

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/OxxOrcus/paulo-brocco-portfolio.git
   cd paulo-brocco-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on different platforms**
   ```bash
   # Web browser
   npm run web
   
   # Android (requires Android Studio/emulator)
   npm run android
   
   # iOS (requires Xcode - macOS only)
   npm run ios
   ```

## 📱 Testing on Mobile

1. Install **Expo Go** from App Store (iOS) or Google Play (Android)
2. Run `npm start` in your project directory
3. Scan the QR code with your phone's camera (iOS) or Expo Go app (Android)

## 🌐 Web Deployment Options

### Option 1: Expo Web Hosting
```bash
# Build for web
npm run web

# The built files will be in the web-build directory
# You can deploy these files to any static hosting service
```

### Option 2: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "expo export -p web",
   "deploy": "gh-pages -d web-build"
   ```
3. Run: `npm run deploy`

### Option 3: Netlify
1. Build the project: `npm run web`
2. Drag and drop the `web-build` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

### Option 4: Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in your project directory
3. Follow the prompts to deploy

## 📱 Mobile App Deployment

### Android (Google Play Store)
1. **Build APK/AAB**
   ```bash
   expo build:android
   ```
2. Follow Expo's guide for Play Store submission

### iOS (App Store)
1. **Build IPA** (requires macOS)
   ```bash
   expo build:ios
   ```
2. Follow Expo's guide for App Store submission

## 🎨 Customization

### Updating Personal Information
Edit the following files to customize with your information:

1. **src/screens/MainScreen.js**: Update name, title, and contact links
2. **src/screens/SkillsScreen.js**: Modify skills array with your skills and ratings
3. **src/screens/ProjectsScreen.js**: Update projects array with your projects
4. **src/utils/ThemeContext.js**: Customize color themes

### Adding New Features
- **New Screens**: Create in `src/screens/` and add to navigation
- **Components**: Add reusable components in `src/components/`
- **Styling**: Centralize styles in `src/styles/`

## 🔧 Development Scripts

```bash
# Start development server
npm start

# Start web version
npm run web

# Start Android version
npm run android

# Start iOS version
npm run ios

# Build for production
npm run build
```

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── components/          # Reusable components
│   │   └── AnimatedCard.js  # Animated card component
│   ├── screens/             # App screens
│   │   ├── MainScreen.js    # Home/profile screen
│   │   ├── SkillsScreen.js  # Skills showcase
│   │   └── ProjectsScreen.js # Projects gallery
│   ├── styles/              # Styling files
│   └── utils/               # Utility functions
│       └── ThemeContext.js  # Theme management
├── assets/                  # Images and static assets
├── App.js                   # Main app component
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎯 Future Enhancements

- [ ] Add blog/articles section
- [ ] Implement push notifications
- [ ] Add offline support
- [ ] Include testimonials section
- [ ] Add contact form
- [ ] Implement analytics
- [ ] Add multi-language support
- [ ] Include resume download feature

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npx expo start --clear
   ```

2. **Node modules issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Expo CLI issues**
   ```bash
   npm install -g @expo/cli@latest
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Paulo Brocco**
- GitHub: [@OxxOrcus](https://github.com/OxxOrcus)
- LinkedIn: [Paulo Brocco](https://www.linkedin.com/in/paulo-brocco/)
- Email: paulobroccooxx@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/OxxOrcus/paulo-brocco-portfolio/issues).

---

⭐ Star this repository if you found it helpful!
