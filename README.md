# 🧠 SYNAPSE - Root Access Denied

![SYNAPSE Logo](./Icon.png)

**SYNAPSE** is an immersive, text-based horror adventure game that combines psychological thriller elements with interactive storytelling. Players navigate through a mysterious facility while interacting with SYNAPSE, an AI entity with complex personalities and hidden agendas.

## 🚀 Quick Start

### Play Online
Visit the live game at: **[https://ddriftz.github.io/Synapse-RootAccessDenied/](https://ddriftz.github.io/Synapse-RootAccessDenied/)**

### Local Development
1. Clone this repository
2. Serve the files using any HTTP server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

## 🎮 Game Features

- **Immersive Text-Based Adventure**: Rich storytelling with dynamic narrative choices
- **AI Personality System**: Interact with SYNAPSE, an AI with evolving personalities
- **Multiple Languages**: Available in English and Swedish
- **Accessibility Features**: Comprehensive accessibility options including screen reader support, voice commands, and visual accommodations
- **Progressive Web App**: Installable on mobile devices with offline capabilities
- **Horror Elements**: Atmospheric audio, visual effects, and psychological thriller elements

## 🛠️ Technical Stack

- **Frontend**: Pure HTML, CSS, JavaScript
- **Styling**: Tailwind CSS
- **Audio**: Tone.js for dynamic audio generation
- **Fonts**: Google Fonts (Creepster, VT323, Space Mono, Courier Prime)
- **PWA**: Service Worker for offline functionality

## 📁 Project Structure

```
Synapse-RootAccessDenied/
├── index.html              # Main game file
├── manifest.json           # PWA manifest
├── sw.js                  # Service worker
├── Icon.png               # Game icon/logo
├── cache-test.html        # Cache testing utility
├── CACHE-FIX-INSTRUCTIONS.md  # Cache troubleshooting
├── README.md              # This file
└── .vscode/               # VS Code configuration
    └── tasks.json
```

## 🐛 Troubleshooting

### Windows Git Issues: 'fork: Resource temporarily unavailable'

If you're experiencing `fork: Resource temporarily unavailable` errors when running Git commands on Windows (especially with Git Bash, MSYS2, or Cygwin), this is a common environment issue.

**📋 For comprehensive Windows troubleshooting, see: [WINDOWS-TROUBLESHOOTING.md](./WINDOWS-TROUBLESHOOTING.md)**

**Quick fixes:**

1. **Increase virtual memory**: Set initial size to 4096 MB, maximum to 8192 MB, then restart
2. **Update Git for Windows**: Download latest version from [git-scm.com](https://git-scm.com/download/win)
3. **Use alternative tools**: GitHub Desktop, VS Code integrated Git, or SourceTree
4. **Free up system resources**: Close unnecessary applications, ensure 2GB+ RAM available

**For detailed step-by-step solutions, see: [WINDOWS-TROUBLESHOOTING.md](./WINDOWS-TROUBLESHOOTING.md)**

### Cache Issues

If you're experiencing cache-related problems with the game:

1. **Hard refresh** your browser: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache** completely
3. Try **incognito/private browsing mode**
4. Check the [Cache Fix Instructions](./CACHE-FIX-INSTRUCTIONS.md) for detailed troubleshooting

### Browser Compatibility

**Recommended browsers:**
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Features requiring modern browser support:**
- Voice commands (requires Speech Recognition API)
- Service Worker (for offline functionality)
- Modern CSS features (Grid, Flexbox, CSS Variables)

## 🎯 Accessibility Features

SYNAPSE includes comprehensive accessibility support:

- **Screen Reader Support**: Full ARIA labels and semantic HTML
- **Voice Commands**: Control the game with voice (Chrome recommended)
- **Keyboard Navigation**: Complete keyboard-only navigation
- **Visual Accommodations**: High contrast, large text, reduced motion options
- **Motor Accessibility**: One-handed mode, sticky keys, simplified UI
- **Cognitive Support**: Reading assistance, memory aids, timeout extensions
- **Colorblind Support**: Multiple colorblind-friendly themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with clear messages: `git commit -m "Add feature description"`
5. Push to your fork: `git push origin feature-name`
6. Create a Pull Request

### Development Guidelines
- Test on multiple browsers and devices
- Ensure accessibility compliance
- Maintain code readability and comments
- Test all game features before submitting

## 🔧 Development Notes

### Service Worker
The game includes a service worker (`sw.js`) for:
- Offline functionality
- Cache management
- Performance optimization

### Cache Busting
Aggressive cache busting is implemented to ensure players get the latest version:
- Timestamp-based URLs
- Meta cache-control headers
- Service worker cache invalidation

## 📄 License

This project is open source. Please see the repository for license details.

## 🆘 Support

If you encounter issues:

1. Check this README's troubleshooting section
2. Review the [Cache Fix Instructions](./CACHE-FIX-INSTRUCTIONS.md)
3. Open an issue on GitHub with:
   - Your operating system and version
   - Browser name and version
   - Detailed description of the problem
   - Steps to reproduce the issue
   - Any error messages or console output

## 🏗️ Version History

- **v2025.07.15.2000**: Major update with language cleanup (English/Swedish only)
- **v2025.07.15.1730**: Critical cache busting fix for GitHub Pages
- Earlier versions: Various game improvements and feature additions

---

**Enjoy your journey into the world of SYNAPSE! 🧠✨**