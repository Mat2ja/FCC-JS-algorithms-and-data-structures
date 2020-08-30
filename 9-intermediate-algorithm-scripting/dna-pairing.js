/*
Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/

function pairElement(str) {
  let arr = [];
  for (let gene of str) {
    let genePair;
    switch (gene) {
      case 'A':
        genePair = 'T';
        break;
      case 'T':
        genePair = 'A';
        break;
      case 'G':
        genePair = 'C';
        break;
      case 'C':
        genePair = 'G';
        break;
    }
    arr.push([gene, genePair]);
  }
  return arr;
}

// function pairElement(str) {
//   //create object for pair lookup
//   var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   //split string into array of characters
//   var arr = str.split("");
//   //map character to array of character and matching pair
//   return arr.map(x => [x, pairs[x]]);
// }

// //test here
// pairElement("GCG");

pairElement("GCG");
