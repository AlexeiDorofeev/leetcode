export function decompressRLElist(nums) {
  return nums.reduce(
    (acc, cur, i, arr) =>
      i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
    []
  );
}
//////////////////////////////////////////////////////////////
export function decompressRLElistMy(nums) {
  if (nums.length % 2 !== 0) return;
  const res = [];
  for (let i = 0; i < nums.length; i += 2) {
    const arr = Array(nums[i]).fill(nums[i + 1]);
    res.push(...arr);
  }
  return res;
}

const nums = [1, 2, 3, 3, 3, 3, 3, 7];
console.log(decompressRLElist(nums));
