const findNumbers = (nums) => {
  let sum = 0;
  for (let number of nums) {
    let string = number + "";
    if (string.length % 2 === 0) {
      sum++;
    }
  }
  return sum;
};

console.log(findNumbers([555, 901, 482, 1771]));
