function uniteUnique(...arrays) {
  let newArr = [];


  for (let arr of arrays) {
    for (let e of arr) {
      if (!newArr.includes(e)) {
        newArr.push(e);
      }
    }
  }
  return newArr;
}

let a = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(a);
