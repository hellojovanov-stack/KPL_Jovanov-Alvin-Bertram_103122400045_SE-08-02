const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const uppercaseCountElement = document.getElementById("hb");
const lowercaseCountElement = document.getElementById("hk");

const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");
const btnParagraf = document.getElementById("huruf-paragraf");

function updateCounters() {
    const text = editorElement.value;

    charCountElement.textContent = text.length;

    const lowercaseMatch = text.match(/[a-z]/g);
    lowercaseCountElement.textContent =
        lowercaseMatch ? lowercaseMatch.length : 0;

    const uppercaseMatch = text.match(/[A-Z]/g);
    uppercaseCountElement.textContent =
        uppercaseMatch ? uppercaseMatch.length : 0;
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
    const text = editorElement.value.toLowerCase();

    editorElement.value =
        text.charAt(0).toUpperCase() + text.slice(1);

    updateCounters();
});