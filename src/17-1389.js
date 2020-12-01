export function createTargetArray(nums, index) {
  let target = [];
  for (const i of nums) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
}

const nums = [1, 2, 3, 4, 0];
const index = [0, 1, 2, 3, 0];

console.log(createTargetArray(nums, index));
