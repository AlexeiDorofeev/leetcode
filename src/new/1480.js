export function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}

//////////////////////////////////////////////////////////////
const runningSum1 = (nums) => nums.map(((sum) => (el) => (sum += el))(0));

////////////////////////////////////////////////////////////
export function runningSum2(nums) {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
}

//////////////////////////////////////////////////////////////
export function runningSumMy(nums) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    sum += nums[i];
    arr[i] = sum;
  }

  return arr;
}

const nums = [3, 1, 2, 10, 1];

console.log(runningSum(nums));
