function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    }
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr;
}
// Only change code above this line
console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


function rangeOfNumbers(startNum, endNum = startNum) {
    if (endNum < startNum) {
        return [];
    }
    const rangeArr = rangeOfNumbers(startNum, endNum - 1);
    rangeArr.push(endNum);
    return rangeArr;
};

console.log(rangeOfNumbers(1, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(rangeOfNumbers(6, 9)); // [ 6, 7, 8, 9 ]
console.log(rangeOfNumbers(4)); // [ 4 ]