export function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
}

///////////////////////////////////////////////////////////////////
export function kidsWithCandiesMy(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((candy, i) => {
    if (candy + extraCandies < max) {
      return false;
    }
    return true;
  });
}
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
