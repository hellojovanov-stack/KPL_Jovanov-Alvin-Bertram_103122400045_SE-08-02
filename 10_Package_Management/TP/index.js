const kuadrat = require("./lib/kuadrat");
const pangkat = require("./lib/pangkat");
const bulat = require("./lib/bulat");

const narasi =
    `Seorang insinyur menetapkan luas panel ${bulat(kuadrat(12))} meter persegi, lalu menggunakan kapasitas penyimpanan sebesar ${pangkat(2, 10)} watt-jam.`;

console.log(narasi);