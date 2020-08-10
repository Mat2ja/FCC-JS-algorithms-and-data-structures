function titleCase(str) {
  let arr = str.split(' ');
  let newArr = [];
  for (let word of arr) {
    word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    newArr.push(word);
  }

  return newArr.join(' ');
}

titleCase("I'm a little tea pot");
