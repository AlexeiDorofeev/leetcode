const fib = (n) => {
  if (n === 0 || n === 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

console.log(fib(8));
