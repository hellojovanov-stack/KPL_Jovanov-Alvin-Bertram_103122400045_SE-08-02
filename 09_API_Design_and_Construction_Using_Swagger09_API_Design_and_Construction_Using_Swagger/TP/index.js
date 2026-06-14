const express = require("express");

const app = express();

app.use(express.json());

const angkaPemain = {};

app.post("/", (req, res) => {
    const { nama, tebakan } = req.body;

    if (!angkaPemain[nama]) {
        angkaPemain[nama] =
            nama.split("").reduce((a, b) => a + b.charCodeAt(0), 0) % 100 + 1;
    }

    const angkaBenar = angkaPemain[nama];

    if (tebakan === angkaBenar) {
        return res.json({
            jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
        });
    }

    if (tebakan > angkaBenar) {
        return res.json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    }

    return res.json({
        jawaban: "Tebakanmu terlalu rendah!"
    });
});

app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});