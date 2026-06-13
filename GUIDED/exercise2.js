/**
 * buatlah sebuah array berisi 3 minuman favorit dan simpan dalam variabel
 * bernama listMinuman, setelah itu, ubah 2 element pertama menggunakan notasi kurung
 * dan penugasan. terakhir, tambahkan minuman baru di bagian depan array.
 */

const listMinuman = ["Kopi", "Teh", "Susu"];

listMinuman[0] = "Matcha";
listMinuman[1] = "Es Teler";
listMinuman.unshift("Jus Alpukat");

console.log(listMinuman);