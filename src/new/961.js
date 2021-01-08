const repeatedNTimes = (A) => {
  let obj = {};
  for (let number of A) {
    if (number in obj) {
      return number;
    } else {
      obj[number] = 0;
    }
  }
};

console.log(repeatedNTimes([1, 2, 6, 6, 4, 6]));
