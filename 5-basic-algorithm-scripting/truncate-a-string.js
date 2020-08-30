function truncateString(str, num) {
  // if (num < str.length) {
  //   let arr = str.split('');
  //   arr.splice(num);
  //   str = arr.join('');
  //   str += '...'
  // }

  // if (num < str.length) {
  //   let arr = str.split('');
  //   arr.splice(num, arr.length - num, '...');
  //   str = arr.join('');
  // }

  if (num < str.length) {
    str = str.slice(0, num) + '...';
  }

  return str;
}


truncateString("A-tisket a-tasket A green and yellow basket", 8);