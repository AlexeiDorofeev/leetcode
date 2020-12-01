export function numJewelsInStones(J, S) {
  const jewels = new Set(J);
  return S.split("").reduce((res, s) => res + jewels.has(s), 0);
}

const J = "aA";
const S = "aAAbbbb";

console.log(numJewelsInStones(J, S));
//////////////////////////////////////////////////////////////////////

export function numJewelsInStones1(J, S) {
  return S.split("").filter((letter) => J.includes(letter)).length;
}

/////////////////////////////////////////////////////////////////////
export function numJewelsInStonesMy(J, S) {
  let count = 0;
  for (let i = 0; i <= S.length - 1; i++) {
    if (J.includes(S[i])) {
      count++;
    }
  }
  return count;
}
