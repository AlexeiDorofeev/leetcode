export function restoreString(s, indices) {
  let str = "";
  for (let i = 0; i < indices.length; i++) {
    str += s[indices.indexOf(i)];
  }
  return str;
}

const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));
