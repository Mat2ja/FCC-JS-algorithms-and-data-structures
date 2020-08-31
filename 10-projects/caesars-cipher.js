function rot13(str) {
  const upperMin = 65;
  const upperMax = 90;
  const lowerMin = 97;
  const lowerMax = 122;

  return str
    .split('')
    .map(char => {
      let charCode = char.charCodeAt(0);
      let newCharCode;
      if (charCode >= upperMin & charCode <= upperMax ) {
        newCharCode = (charCode - upperMin + 13) % 26 + upperMin;
      } else if (charCode >= lowerMin & charCode <= lowerMax) {
        newCharCode = (charCode - lowerMin + 13) % 26 + lowerMin;
      } else {
        return char;
      }
      return String.fromCharCode(newCharCode);
    })
    .join('')
}

let a = rot13("SERR PBQR PNZC");
console.log(a)
