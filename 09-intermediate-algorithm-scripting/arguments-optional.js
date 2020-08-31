// takes ~10ms
function addTogether() {
  let [first,second] = arguments
  if ([...arguments].some(arg => !Number.isInteger(arg))) {
    return undefined;
  }
  
  if (second) {
    return first + second;
  } else {
    return function(arg) {
      return Number.isInteger(arg) ? first + arg : undefined;
    }
  }
}

// recursion, but takes ~14ms
function addTogether2() {
  let [first,second] = arguments
  if ([...arguments].some(arg => !Number.isInteger(arg))) {
    return undefined;
  }
  
  if (second) {
    return addTogether(first)(second);
  } 

  return function(arg) {
    return Number.isInteger(arg) ? first + arg : undefined;
  }
}

var t0 = performance.now()
for (let i = 0; i < 10000; i++) {
  addTogether(2,3);
}
var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
