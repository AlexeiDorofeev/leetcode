const sortArrayByParity = (arr) => {
  const even = arr.filter((a) => a % 2 === 0);
  const odd = arr.filter((a) => a % 2 === 1);
  return [...even, ...odd];
};

// return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 === 1)];

console.log(sortArrayByParity([3, 1, 2, 4]));
