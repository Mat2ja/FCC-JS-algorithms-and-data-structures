function destroyer(arr, ...elem) {
  for (let e of elem) {
    while (arr.includes(e)) {
        arr.splice(arr.indexOf(e), 1);
    }
  }
  return arr;
}

function destroyer(arr, ...elem) {
  return arr.filter(val => {
    return !elem.includes(val);
  })
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
