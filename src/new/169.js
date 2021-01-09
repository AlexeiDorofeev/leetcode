const majorityElement = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
