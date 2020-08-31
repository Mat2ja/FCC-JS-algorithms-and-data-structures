function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let firstIdx = alphabet.indexOf(str[0]);
  let alphabetSliced = alphabet.slice(firstIdx);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabetSliced[i]) {
      return alphabetSliced[i];
    }
  }
  return undefined;


}

let a = fearNotLetter("abce");
let b = fearNotLetter("bcdf");
let c = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
console.log(b);
