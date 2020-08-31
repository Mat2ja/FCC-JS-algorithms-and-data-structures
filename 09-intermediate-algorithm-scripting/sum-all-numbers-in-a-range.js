function sumAll(arr) {
  let sorted =  [...arr].sort((a,b) => a - b);
  let [min, max] = sorted;
  let newArr = [];

  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }
  console.log(arr);
  console.log(sorted);
  console.log(newArr);
  
  return newArr.reduce((a,b) => a + b, 0)
}

sumAll([10, 4]);
