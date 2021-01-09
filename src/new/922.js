const sortArrayByParityII = (A) => {
  let arr = [];
  let even = 0;
  let odd = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      arr[even] = A[i];
      even += 2;
    } else {
      arr[odd] = A[i];
      odd += 2;
    }
  }

  return arr;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
