export function judgeCircle(moves) {
  let i = 0;
  let j = 0;
  for (let letter of moves) {
    if (letter === "R") i++;
    if (letter === "L") i--;
    if (letter === "U") j++;
    if (letter === "D") j--;
  }
  return i === 0 && j === 0;
}

const moves = "LRUDL";
console.log(judgeCircle(moves));
