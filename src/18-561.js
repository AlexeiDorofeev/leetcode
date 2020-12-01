export function arrayPairSum(nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, num, i) => sum + !(i % 2) * num, 0);
}

////////////////////////////////////////////////////
export function arrayPairSumMy(nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
}

const nums = [1, 4, 3, 2];

console.log(arrayPairSum(nums));
