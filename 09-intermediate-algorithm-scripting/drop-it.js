function dropElements(arr, func) {
  let index = arr.findIndex(func);
  return index >= 0 ? arr.slice(index) : [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
