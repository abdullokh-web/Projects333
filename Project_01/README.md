✨ 3D New Year Animation (2025 → 2026)

A futuristic 3D rotating cube animation built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.
Click the "CLICK" button to trigger a smooth cube rotation as the year transitions from 2025 → 2026.

🌈 Features

🧊 3D rotating cubes using transform-style: preserve-3d

💫 Colorful glowing background with animated hue rotation

🔁 Interactive click: toggles between 2025 and 2026

⚡ Smooth transitions with staggered delays for each cube

📱 Responsive and lightweight — works across all modern browsers

📂 Project Structure
File Description
index.html Main structure: cubes, digits, and “CLICK” button
style.css 3D cube design, neon glow, and animation logic
script.js Handles interactivity and year toggling
🚀 Quick Start

# Clone the repo

git clone https://github.com/abdullokh-web/Projects333.git
cd Projects333

# Run locally

open index.html # or just double-click it

Click CLICK and watch 2025 flip into 2026 🎉

🧠 How It Works

Each cube (.text) holds four <span> elements, each representing a face of the cube.
Cubes rotate using CSS transforms, while JS updates the displayed year dynamically.

🎨 Core CSS
.text {
transform-style: preserve-3d;
transition: transform 1s ease-in-out;
}
.text.active {
transform: rotateX(-360deg);
}

@keyframes colorChange {
0% { filter: hue-rotate(0deg); }
100% { filter: hue-rotate(360deg); }
}

⚙️ Core JS Logic
button.addEventListener('click', () => {
const h2 = document.querySelector('h2');
h2.classList.toggle('active');
const spans = h2.querySelectorAll('span');
spans.forEach(span => {
span.textContent = h2.classList.contains('active') ? '6' : '5';
});
});

💡 Future Enhancements

🌌 Generate 30–50 random floating cubes with vibrant colors

⏰ Auto-detect current year via new Date().getFullYear()

🔊 Add background music or particle effects for festive flair

🕹️ Include camera rotation for more immersive 3D experience

🪪 License

MIT License — free to use, remix, and share.
Give credit if you vibe with it 💜

🧑‍💻 Author

Made with ❤️ by Abdulloh
Senior Web Developer — blending art, code, and future tech.

“Code it like it’s 2026 already.”
