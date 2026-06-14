const express = require("express");
const swaggerUi = require("swagger-ui-express");

const app = express();

const kategoriMenu = ["bakmi", "rames"];

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "API Menu",
        version: "1.0.0"
    },
    paths: {
        "/menu": {
            get: {
                summary: "Ambil semua kategori menu",
                responses: {
                    200: {
                        description: "Daftar kategori menu"
                    }
                }
            }
        }
    }
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/menu", (req, res) => {
    res.json({
        kategori_tersedia: kategoriMenu
    });
});

app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});