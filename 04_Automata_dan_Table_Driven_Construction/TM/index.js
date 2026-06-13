const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const uppercaseCountElement = document.getElementById("hb");
const lowercaseCountElement = document.getElementById("hk");

const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");
const btnParagrafkan = document.getElementById("huruf-paragraf");

const btnModeTerang = document.getElementById("mode-terang");
const btnModeGelap = document.getElementById("mode-gelap");
const btnModeSepia = document.getElementById("mode-sepia");

function updateCounters() {
    const text = editorElement.value;

    charCountElement.textContent = text.length;

    const uppercaseMatch = text.match(/[A-Z]/g);
    uppercaseCountElement.textContent = uppercaseMatch
        ? uppercaseMatch.length
        : 0;

    const lowercaseMatch = text.match(/[a-z]/g);
    lowercaseCountElement.textContent = lowercaseMatch
        ? lowercaseMatch.length
        : 0;
}

editorElement.addEventListener("input", updateCounters);

btnBesarkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCounters();
});

btnKecilkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCounters();
});

btnParagrafkan.addEventListener("click", () => {
    const text = editorElement.value
        .toLowerCase()
        .replace(/(^\w|\.\s+\w)/g, huruf => huruf.toUpperCase());

    editorElement.value = text;
    updateCounters();
});

function gantiMode(modeBaru) {
    document.body.classList.remove(
        "light-mode",
        "dark-mode",
        "sepia-mode"
    );

    document.body.classList.add(modeBaru);
}

btnModeTerang.addEventListener("click", () => {
    gantiMode("light-mode");
});

btnModeGelap.addEventListener("click", () => {
    gantiMode("dark-mode");
});

btnModeSepia.addEventListener("click", () => {
    gantiMode("sepia-mode");
});

updateCounters();