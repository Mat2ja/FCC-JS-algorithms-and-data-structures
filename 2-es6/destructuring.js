// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() 
// so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [, , ...arr] = list;
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);


// Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line


//STRING LITERALS
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // Only change code below this line
    const resultDisplayArray = [];
    for (let msg of arr) {
        resultDisplayArray.push(`<li class="text-warning">${msg}</li>`)
    }
    // Only change code above this line

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

