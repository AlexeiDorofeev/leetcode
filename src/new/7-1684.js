const countConsistentStrings = (allowed, words) => {
  const allowedSet = new Set(allowed);
  let cntConsistent = 0;
  outer: for (const word of words) {
    for (const char of word) {
      if (!allowedSet.has(char)) {
        continue outer;
      }
    }
    cntConsistent++;
  }
  return cntConsistent;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
