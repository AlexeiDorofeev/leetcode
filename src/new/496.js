const nextGreaterElement = (findNums, nums) => {
  return findNums.map((n) => {
    let found = nums.indexOf(n);

    if (found !== -1) {
      while (nums[++found] < n) {}
      if (found >= nums.length) found = -1;
      else found = nums[found];
    }

    return found;
  });
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
