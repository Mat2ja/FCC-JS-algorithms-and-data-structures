function getIndexToIns(arr, num) { 
  let clone = [...arr];
  clone.push(num);
  clone.sort((a,b) => a-b);
  return clone.indexOf(num);
}

getIndexToIns([40, 60], 50);
