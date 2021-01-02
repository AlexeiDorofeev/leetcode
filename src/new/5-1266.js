const minTimeToVisitAllPoints = (points) => {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const max1 = Math.abs(points[i + 1][0] - points[i][0]);
    const max2 = Math.abs(points[i + 1][1] - points[i][1]);
    sum += Math.max(max1, max2);
  }
  return sum;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
