const sumOddLengthSubarrays = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      let a = arr.slice(i, j);
      if (a.length % 2 !== 1) continue;
      sum += a.reduce((a, b) => a + b);
    }
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
