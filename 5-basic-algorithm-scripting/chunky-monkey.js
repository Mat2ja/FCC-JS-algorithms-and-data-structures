function chunkArrayInGroups(arr, size) {
  let combined = [];
  let numOfArrays = Math.ceil(arr.length / size);

  for (let n = 0; n < numOfArrays; n++) {
    let insideArr = [];
    combined.push(insideArr);
    for (let i = 0; i < size; i++) {
      if (i >= arr.length) break;
      insideArr.push(arr[i]);
    }
    arr = arr.slice(size);
  }
  return combined;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
