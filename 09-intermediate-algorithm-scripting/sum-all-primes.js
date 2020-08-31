function sumPrimes(num) {
  let sum = 0;

  for (let current = 1; current <= num; current++) {
    if (isPrime(current)) {
      sum += current;
    }
  }
  
  return sum;
}

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

let a = sumPrimes(10);
console.log(a)
