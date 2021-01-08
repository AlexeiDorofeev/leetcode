const arrayStringsAreEqual = (word1, word2) => {
  return word1.join("") === word2.join("");
};

const a = ["ab", "c"];
const b = ["a", "bc"];

console.log(arrayStringsAreEqual(a, b));
