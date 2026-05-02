const copyButton = document.querySelector("#copy-bibtex");
const bibtexBlock = document.querySelector("#bibtex");
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle-text");

const applyTheme = (theme) => {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = nextTheme;

  if (themeToggle && themeToggleText) {
    const isDark = nextTheme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggleText.textContent = isDark ? "Light" : "Dark";
  }
};

let storedTheme = null;
try {
  storedTheme = localStorage.getItem("hoi-mllm-theme");
} catch {
  storedTheme = null;
}
applyTheme(storedTheme || "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("hoi-mllm-theme", nextTheme);
    } catch {
      /* Theme still switches for the current page when storage is unavailable. */
    }
    applyTheme(nextTheme);
  });
}

if (copyButton && bibtexBlock) {
  copyButton.addEventListener("click", async () => {
    const text = bibtexBlock.innerText.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = "Copy BibTeX";
      }, 1600);
    } catch {
      copyButton.textContent = "Select BibTeX";
      setTimeout(() => {
        copyButton.textContent = "Copy BibTeX";
      }, 1600);
    }
  });
}
