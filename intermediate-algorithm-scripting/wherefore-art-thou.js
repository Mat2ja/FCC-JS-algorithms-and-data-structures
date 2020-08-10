function whatIsInAName(collection, source) {
  var arr = [];
  let sourceKeys = Object.keys(source);

  for (let obj of collection) {
    for (let key of sourceKeys) {
      // if obj value isnt the same as the source(or if it doesnt exits)
      if (obj[key] !== source[key]) {
        break;
      }
      // if its the last key to be checked
      if (sourceKeys.indexOf(key) === sourceKeys.length - 1) {
        arr.push(obj);
      }
    }

  }
  return arr;
}

function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    for (let key of sourceKeys) {
      if (obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  })
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
