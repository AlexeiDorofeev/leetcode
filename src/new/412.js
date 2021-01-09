const fizzBuzz = (n) => {
  return new Array(n)
    .fill(0)
    .map((_, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};

// const fizzBuzz = (n) => {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) arr.push("FizzBuzz");
//     else if (i % 3 === 0) arr.push("Fizz");
//     else if (i % 5 === 0) arr.push("Buzz");
//     else arr.push(i.toString());
//   }
//   return arr;
// };

console.log(fizzBuzz(15));
