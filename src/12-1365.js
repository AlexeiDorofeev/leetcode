/// O(NlogN)
export function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  const map = new Map(
    sorted.map((num, index) => [num, nums.length - index - 1])
  );
  return nums.map((num) => map.get(num));
}

//O(n^2)
///////////////////////////////////////////////////
export function smallerNumbersThanCurrent1(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
}

/////////////////////////////////////////////////////
export function smallerNumbersThanCurrentMy(nums) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
}

const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));
