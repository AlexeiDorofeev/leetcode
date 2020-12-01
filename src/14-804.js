export function uniqueMorseRepresentations(words) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const transformations = new Set();

  for (let word of words) {
    let trans = "";
    for (let letter of word) {
      const index = letter.charCodeAt(0) - 97;
      trans += morse[index];
    }

    transformations.add(trans);
  }

  return transformations.size;
}

///////////////////////////////////////////////////////
export function uniqueMorseRepresentationsMy(words) {
  const morse = new Map([
    ["a", ".-"],
    ["b", "-..."],
    ["c", "-.-."],
    ["d", "-.."],
    ["e", "."],
    ["f", "..-."],
    ["g", "--."],
    ["h", "...."],
    ["i", ".."],
    ["j", ".---"],
    ["k", "-.-"],
    ["l", ".-.."],
    ["m", "--"],
    ["n", "-."],
    ["o", "---"],
    ["p", ".--."],
    ["q", "--.-"],
    ["r", ".-."],
    ["s", "..."],
    ["t", "-"],
    ["u", "..-"],
    ["v", "...-"],
    ["w", ".--"],
    ["x", "-..-"],
    ["y", "-.--"],
    ["z", "--.."],
  ]);
  const values = words.map((word) =>
    word.split("").reduce((acc, val) => acc + morse.get(val), "")
  );
  return values.filter((v, i) => values.indexOf(v) === i).length;
}

const words = ["ab", "ab", "trala"];

console.log(uniqueMorseRepresentationsMy(words));
