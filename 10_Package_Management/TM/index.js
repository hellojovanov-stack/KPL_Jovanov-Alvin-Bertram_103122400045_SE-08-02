function hitungHuruf(teks) {
    return (teks.match(/[a-z]/gi) || []).length;
}

function hitungKata(teks) {
    return teks.trim().split(/\s+/).length;
}

module.exports = {
    hitungHuruf,
    hitungKata
};

console.log(hitungHuruf("Halo Dunia"));
console.log(hitungKata("Halo Dunia"));