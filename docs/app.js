const copyButton = document.querySelector("#copy-bibtex");
const bibtexBlock = document.querySelector("#bibtex");

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
