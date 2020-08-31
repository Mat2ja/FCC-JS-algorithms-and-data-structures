function smallestCommons(arr) {
  let [min,max] = arr.sort((a,b) => a-b);

  let nums = [];

  // fill array with numbers
  for (let i = min; i <= max; i++) {
     nums.push(i);
  };

  for (let num = max; ; num++) {
    // check if every number of array can be evenly multiplied
    // return when you find that number, otherwise increase the number and try again
    if (!nums.some(n => num % n !== 0)) {
      return num;
    };
  }
  
}

// very heavy on the browser tho, there are much faster and more advanced solutions
smallestCommons([1,5]);
