function steamrollArray(arr) {
  let flattened = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
        let subArr = steamrollArray(el);
        flattened = flattened.concat(subArr);
    } else {
      flattened.push(el)
    }
    //console.log(flattened);
  }
  return flattened;

}

let a = steamrollArray([1, [2], [3, [[4]]]]);
console.log(a);
let b = steamrollArray([[["a"]], [["b"]]]);
console.log(b);
