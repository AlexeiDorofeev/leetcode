export function shuffle(nums, n) {
  let a = [];
  for (let i = 0; i < n; i++) {
    a.push(nums[i]);
    a.push(nums[n + i]);
  }
  return a;
}

const nums = [1, 2, 3, 4, 4, 3, 2, 1];
const n = 4;

console.log(shuffle(nums, n));
