function spinalCase(str) {
  // split on non-alphanumeric and _, or on capitals but keep the capitals
  return str.split(/[\W_]|(?=[A-Z])/g).join('-').toLowerCase();
}
console.log(spinalCase('thisIsSpinalTap'))
console.log(spinalCase('AllThe-small Things'))
console.log(spinalCase('This Is Spinal Tap'));
