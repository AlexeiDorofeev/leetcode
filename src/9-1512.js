/// O(n)
export function numIdenticalPairs(nums) {
  // counts how many digits in key/value form
  const map = nums.reduce((m, n) => m.set(n, (m.get(n) || 0) + 1), new Map());
  console.log([...map.values()]);
  return [...map.values()].reduce((num, n) => num + (n * (n - 1)) / 2, 0);
}
//////////////////////////////////////////////////////////////////////////////
//O(n^2)
export function numIdenticalPairsMy(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
}

const nums = [1, 2, 3, 1, 1, 1, 7, 8, 8, 1, 1, 9, 8];
console.log(numIdenticalPairs(nums));
