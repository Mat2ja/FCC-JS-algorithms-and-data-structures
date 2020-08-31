function myReplace(str, before, after) {
  let i = str.indexOf(before);

  if (/[A-Z]/.test(before[0])) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after.toLowerCase();
  }

  return str.replace(before, after);
  
  // return str
  // .slice(0, i)
  // .concat(after) 
  // .concat(str.slice(i + before.length));
}

let a = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
let b = myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
let c = myReplace("I think we should look up there", "up", "Down");
let d = myReplace("His name is Tom", "Tom", "john");
let e = myReplace("Let us get back to more Coding", "Coding", "algorithms")
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
