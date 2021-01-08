export function numberOfSteps(num, count = 0) {
  if (num === 0) return count;
  return num % 2
    ? numberOfSteps(--num, ++count)
    : numberOfSteps(num / 2, ++count);
}

///////////////////////////////////////
export function numberOfStepsMy(nums) {
  let count = 0;
  while (nums > 0) {
    if (nums % 2 === 1) nums -= 1;
    else if (nums % 2 === 0) nums /= 2;
    count++;
  }
  return count;
}

const nums = 123;
console.log(numberOfSteps(nums));
