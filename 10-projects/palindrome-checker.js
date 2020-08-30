function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]*/gi, '');
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}



palindrome("eye");
