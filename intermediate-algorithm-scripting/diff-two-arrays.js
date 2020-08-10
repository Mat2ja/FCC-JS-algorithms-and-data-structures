function diffArray(arr1, arr2) {
  var newArr = [];
  for (let elem of arr1) {
    if (!arr2.includes(elem)) {
      newArr.push(elem);
    }
  };
  for (let elem of arr2) {
    if (!arr1.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}

function diffArray(arr1, arr2) {
  var newArr = [];
  let combined = newArr.concat(arr1,arr2);

  for (let elem of combined) {
    if (!(arr1.includes(elem) && arr2.includes(elem))) {
      newArr.push(elem);
    }
  }
  
  return newArr;
}


function diffArray(arr1, arr2) {
  var newArr = [];
  let combined = newArr.concat(arr1,arr2);

  newArr = combined.filter(elem => !(arr1.includes(elem) && arr2.includes(elem)));
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
