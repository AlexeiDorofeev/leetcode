export function toLowerCase(str) {
  let lowerCase = "";

  for (let letter of str) {
    const index = letter.charCodeAt();
    if (index >= 65 && index <= 90) {
      letter = String.fromCharCode(index + 32);
    }
    lowerCase += letter;
  }

  return lowerCase;
}

////////////////////////////////////////////////////
export function toLowerCaseMy(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      arr[i] = String.fromCharCode(code + 32);
    } else arr[i] = str.charAt(i);
  }
  return arr.join("");
}

console.log(toLowerCase("PaRTy"));
