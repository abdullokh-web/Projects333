const h2 = document.querySelector("h2");
const container = document.querySelector(".container");
const lastText = container.querySelectorAll(".text")[3];

h2.onclick = function () {
  container.classList.toggle("newYear");
  this.classList.toggle("active");

  // Change last cube digits between 2025 ↔ 2026
  const spans = lastText.querySelectorAll("span");
  spans.forEach((span) => {
    if (this.classList.contains("active")) {
      if (span.textContent === "5") span.textContent = "6";
    } else {
      if (span.textContent === "6") span.textContent = "5";
    }
  });
};
