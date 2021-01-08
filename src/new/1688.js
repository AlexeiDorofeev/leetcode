const numberOfMatches = (n) => {
  let sum = 0;
  while (n !== 1) {
    if (n % 2 === 1) {
      sum++;
    }
    sum += Math.floor(n / 2);
    n = Math.floor(n / 2);
  }
  return sum;
};

console.log(numberOfMatches(18));
