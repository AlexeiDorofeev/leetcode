export function subtractProductAndSum(n) {
  const digits = Array.from(String(n), Number);
  const prod = digits.reduce((a, b) => a * b);
  const sum = digits.reduce((a, b) => a + b);
  return prod - sum;
}

const n = 4421;
console.log(subtractProductAndSum(n));
