const sumZero = (n) => {
  return new Array(n).fill(0).map((_, i) => i * 2 - n + 1);
};

console.log(sumZero(7));
