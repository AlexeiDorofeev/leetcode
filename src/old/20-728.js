export function selfDividingNumbers(right, left) {
  const result = [];

  for (let i = left; i <= right; i++) {
    String(i)
      .split("")
      .every((number) => +number && !(i % number)) && result.push(i);
  }

  return result;
}

const left = 1;
const right = 22;

console.log(selfDividingNumbers(right, left));
