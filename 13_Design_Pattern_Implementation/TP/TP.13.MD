
---

# TP13 (tp13.md)

```md
# TP13 - Event Delegation pada JavaScript

## Pengertian Event Delegation

Event Delegation adalah teknik dalam JavaScript yang memanfaatkan mekanisme bubbling untuk menangani event pada elemen anak melalui elemen induknya.

Daripada memasang event listener pada setiap elemen, cukup pasang satu event listener pada parent. Ketika suatu event terjadi pada child, event tersebut akan naik (bubble) ke parent dan dapat ditangani di sana.

## Cara Kerja

1. Event terjadi pada elemen anak.
2. Event melakukan bubbling ke elemen induk.
3. Parent menangkap event tersebut.
4. Parent menentukan elemen mana yang memicu event menggunakan `event.target`.

## Contoh Tanpa Event Delegation

```javascript
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button diklik");
    });
});