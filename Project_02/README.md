# 📥 Media Downloader SPA

A modern **Single Page Application (SPA)** for searching, browsing, and downloading high-quality media with a clean **dark UI**, infinite scrolling, and instant downloads.

Built with a **frontend–backend separation** for security and scalability.

✨ Features

- ⚡ Single Page Application (no page reloads)
- 🔁 Infinite scrolling
- 🖼️ Image browsing with multiple quality options
- 🎬 Video browsing with resolution detection (HD / 2K / 4K when available)
- ⬇️ Instant download (no new tab opening)
- 🖤 Modern dark theme (90% black / 10% white)
- 📱 Fully responsive (mobile & desktop)
- 🔐 Secure backend proxy (no secrets in frontend)

🧱 Project Structure

```
public_html/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── app.js
│
└── api/
    └── proxy.php
```

🚀 How It Works

1. **Frontend (SPA)**

   - Handles UI, routing, infinite scroll, and downloads
   - No secrets or credentials in client-side code

2. **Backend (PHP Proxy)**

   - Acts as a secure bridge between frontend and external services
   - Keeps all sensitive configuration server-side

3. **Downloads**

   - Files are fetched and downloaded instantly using browser APIs
   - No redirects or preview tabs

🛠️ Installation

1. Upload files to a PHP-enabled hosting environment
2. Place the project inside your web root (e.g. `public_html`)
3. Configure the backend proxy if needed
4. Open `index.html` in your browser

No build step required.

🔐 Security Notes

- No credentials are exposed in frontend code
- Backend proxy prevents direct access to external services
- Easy to add rate limiting or caching on the server side

📱 Browser Support

- Chrome (recommended)
- Edge
- Firefox
- Mobile browsers (Android / iOS)

🧩 Customization

You can easily:

- Change UI colors in `assets/css/style.css`
- Adjust pagination or infinite scroll logic in `assets/js/app.js`
- Replace backend data source without changing frontend code

📌 Roadmap (Optional)

- ⭐ Favorites (LocalStorage)
- 📦 Bulk download
- 📲 Progressive Web App (PWA)
- ⚡ Lazy loading via IntersectionObserver
- 🔍 Advanced filtering

👤 Author

Crafted with ❤️ by [**Abdullokh**](https://t.me/AbdullokhBlog)

📄 License

This project is provided for educational and personal use.
You are free to modify and adapt it for your own needs.
