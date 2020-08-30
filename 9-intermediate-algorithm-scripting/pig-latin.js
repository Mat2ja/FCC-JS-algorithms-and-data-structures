/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
  let clone = [...str];
  let first = clone[0];

  // if first letter is vowel
  if (/[aeiou]/i.test(first)) {
    clone.push('way');

  } else {
    // if word has no vowels at all
    if (!/[aeiou]/gi.test(clone)) {
      clone.push('ay');
    } else {
      // shift consonats to back till you get to vowel
      do {
        let shifted = clone.shift();
        clone.push(shifted);
        first = clone[0];
      } while (!/[aeiou]/i.test(first))
      clone.push('ay');
    }
  }
    
  return clone.join('').toLowerCase();
}

// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }

translatePigLatin("consonant");
