function fizzBuzz(params) {
    if (!Array.isArray(params)) {
        return "Input tidak valid";
    }

    let hasil = "";

    for (let i = 0; i < params.length; i++) {
        let angka = params[i];
        let teks = "";

        if (angka % 14 === 0) {
            teks = "FizzBuzz";
        } else if (angka % 7 === 0) {
            teks = "Buzz";
        } else if (angka % 2 === 0) {
            teks = "Fizz";
        } else {
            teks = angka.toString();
        }

        if (hasil === "") {
            hasil = teks;
        } else {
            hasil = hasil + " " + teks;
        }
    }

    return hasil;
}

module.exports = fizzBuzz;