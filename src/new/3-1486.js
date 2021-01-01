const xorOperation = (n, start) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = start + 2 * i;
  }
  return arr.reduce((a, c) => a ^ c);
};

console.log(xorOperation(1, 7));
