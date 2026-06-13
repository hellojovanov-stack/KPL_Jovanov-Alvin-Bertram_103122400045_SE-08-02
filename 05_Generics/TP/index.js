/**
 * Mengubah angka menjadi Fizz, Buzz, atau FizzBuzz.
 * @param {number} value Bilangan bulat.
 * @returns {number|string}
 */
function zzzzOrNum(value) {
    if (value % 15 === 0) {
        return "FizzBuzz";
    }

    if (value % 3 === 0) {
        return "Fizz";
    }

    if (value % 5 === 0) {
        return "Buzz";
    }

    return value;
}

/**
 * Mengubah seluruh isi array menggunakan fungsi zzzzOrNum.
 * @param {number[]} sequence Array berisi bilangan bulat.
 * @returns {(number|string)[]}
 */
function fizzBuzz(sequence) {
    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

console.log(
    fizzBuzz([1, 2, 3, 4, 5, 15, 18, 20])
);

module.exports = {
    fizzBuzz,
    zzzzOrNum,
};