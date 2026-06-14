// Source - https://stackoverflow.com/a/67588617
// Posted by Antonio
// Retrieved 2026-05-16, License - CC BY-SA 4.0

const f = async () => {
  const n = 80000000;
  const tries = 100;
  const array = [];
  for (let i = 0; i < n; i++) { // build initial array
    array.push(i);
  }
  
  let totalBiaya = 0;
  for (let i = 0; i < tries; i++) {
    const index = Math.floor(Math.random() * (n));
    const start = new Date();
    array.splice(index, 1); // UNCOMMENT FOR OPTION A
    // array.splice(index, 0, -1); // UNCOMMENT FOR OPTION B
    const time = new Date().getTime() - start.getTime();
    totalBiaya += time;
    array.push(-2); // UNCOMMENT FOR OPTION A, to keep it of size n
    // array.pop(); // UNCOMMENT FOR OPTION B, to keep it of size n

  }
  console.log('for an array of size', n, 'the average time of', tries, 'splices was:', totalBiaya / tries);
 };
f();