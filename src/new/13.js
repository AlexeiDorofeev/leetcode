const romanToInt = (s) => {
  const a = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    a[s[i]] < a[s[i + 1]] ? (sum -= a[s[i]]) : (sum += a[s[i]]);
  }
  return sum;
};

console.log(romanToInt("LVIII"));
