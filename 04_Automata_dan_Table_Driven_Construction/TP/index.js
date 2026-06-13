const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const uppercaseCountElement = document.getElementById("hb");
const lowercaseCountElement = document.getElementById("hk");

const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");
const btnParagraf = document.getElementById("huruf-paragraf");

const btnLight = document.getElementById("mode-terang");
const btnDark = document.getElementById("mode-gelap");
const btnSepia = document.getElementById("mode-sepia");

function updateCounters() {

    const text = editorElement.value;

    charCountElement.textContent = text.length;

    const lowerMatch = text.match(/[a-z]/g);
    lowercaseCountElement.textContent =
        lowerMatch ? lowerMatch.length : 0;

    const upperMatch = text.match(/[A-Z]/g);
    uppercaseCountElement.textContent =
        upperMatch ? upperMatch.length : 0;
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

btnParagraf.addEventListener("click", () => {

    const text = editorElement.value
        .toLowerCase()
        .replace(/(^\w|\.\s+\w)/g, huruf =>
            huruf.toUpperCase());

    editorElement.value = text;

    updateCounters();
});

function gantiMode(modeBaru){

    document.body.classList.remove(
        "light-mode",
        "dark-mode",
        "sepia-mode"
    );

    document.body.classList.add(modeBaru);
}

btnLight.addEventListener("click", () => {
    gantiMode("light-mode");
});

btnDark.addEventListener("click", () => {
    gantiMode("dark-mode");
});

btnSepia.addEventListener("click", () => {
    gantiMode("sepia-mode");
});