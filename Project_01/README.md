Got it 👍 — here’s your clean, ready-to-use **README.md** version:

````{"id":"56604","variant":"standard","title":"README.md for 3D 2025→2026 Animation"}
# 🎆 3D New Year Animation (2025 → 2026)

A 3D rotating cube-style animation built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no dependencies.
When you click the **CLICK** button, the cubes rotate and the last digit smoothly changes from **2025 → 2026**.

---

## ✨ Features

- 🎇 3D flipping cubes using CSS `transform-style: preserve-3d`
- 🌈 Colorful glowing ring background animation
- 🔄 Click to toggle between **2025** and **2026**
- ⚡ Smooth transitions (`transition-delay` for cube sequence)
- 💫 Fully responsive and lightweight — works in all modern browsers

---

## 🧩 Files

| File | Description |
|------|--------------|
| `index.html` | Main HTML structure with cubes and “CLICK” button |
| `style.css` | 3D, glowing, and animation effects |
| `script.js` *(optional inline)* | Handles the click event and updates the year |

---

## 🚀 Usage

```bash
# Clone the repo
git clone https://github.com/abdullokh-web/Projects333.git
cd Projects333

# Open the project
open index.html   # or just double-click it
```

Click the **CLICK** text to switch between **2025** and **2026** — enjoy the animation!

---

## 🧠 How It Works

- Each cube (`.text`) contains four `<span>` faces.
- Cubes rotate via:
  ```css
  transform: rotateX(calc(-360deg * 1));
  ```
- The glowing background uses hue rotation:
  ```css
  @keyframes colorChange {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
  ```
- On click, JavaScript toggles `.newYear` and updates digits:
  ```js
  if (h2.classList.contains('active')) {
    span.textContent = '6';
  } else {
    span.textContent = '5';
  }
  ```

---

## 🧠 Future Ideas

- Add random floating cubes (30–50) in different colors 🟩🟦🟥
- Auto-detect the current year using `new Date().getFullYear()`
- Add music or particle effects for full New Year vibes ✨

---

## 📄 License

MIT License — feel free to use and remix.

---

**Made with ❤️ by Abdulloh**
````
