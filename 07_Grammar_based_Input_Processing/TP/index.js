function toNumberArray(number) {
    let arr = typeof number === "string" ? number.split(",") : number;

    return arr
        .map(item => Number(item))
        .filter(num => !isNaN(num));
}


// console log
console.log(toNumberArray("1, 2"));
console.log(toNumberArray(["1", "2"]));
console.log(toNumberArray(" 11,55,33   "));
console.log(toNumberArray(["0.2", "-11", "abc23"]));