export function singleNumber(nums) {
  return nums.reduce((acc, val) => acc ^ val, 0);
}

const nums = [2, 2, 1, 5, 1];

console.log(singleNumber(nums));
