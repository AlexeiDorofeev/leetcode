const sortArrayByParity = (arr) => {
  const odd = arr.filter((a) => a % 2 === 0);
  const even = arr.filter((a) => a % 2 === 1);
  return [...odd, ...even];
};

// return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 === 1)];

console.log(sortArrayByParity([3, 1, 2, 4]));
