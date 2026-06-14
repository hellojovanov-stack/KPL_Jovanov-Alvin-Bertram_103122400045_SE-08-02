# TM13 - Design Pattern

## Design Pattern yang Digunakan

Pattern yang digunakan adalah **Singleton Pattern**.

## Penjelasan

Singleton Pattern adalah pola desain yang memastikan hanya ada satu instance dari suatu objek yang digunakan selama aplikasi berjalan.

Pada aplikasi Express.js, objek `app` biasanya hanya dibuat satu kali dan digunakan di seluruh aplikasi.

## Contoh Kode

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000);