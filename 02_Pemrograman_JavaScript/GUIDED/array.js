const kotaDikunjungi = ["pekalongan", "semarang", "kendal"];

kotaDikunjungi.unshift("Cilacap");
kotaDikunjungi.push("solo");
kotaDikunjungi.pop();
// kotaDikunjungi.reverse();
kotaDikunjungi.splice(0,1)
kotaDikunjungi[1] = "Brebes";

console.log(kotaDikunjungi);