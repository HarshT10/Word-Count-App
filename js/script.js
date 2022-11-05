let textArea = document.querySelector("#text-box");
let wordCount = document.querySelector("#word-counter");
let characterCount = document.querySelector("#character-counter");

textArea.addEventListener("input", () => {
    characterCount.textContent = textArea.value.length;
    let word = textArea.value.trim();
    wordCount.textContent = word.split(/\s+/).filter((item) => item).length;
})