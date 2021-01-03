const maxDepth = (s) => {
  let count = 0;
  let maxCount = 0;

  for (let char of s) {
    if (char === "(") {
      count++;
      maxCount = Math.max(count, maxCount);
    } else if (char === ")") {
      count--;
    }
  }

  return maxCount;
};

console.log(maxDepth("1+(2*3)/(2-1)"));
