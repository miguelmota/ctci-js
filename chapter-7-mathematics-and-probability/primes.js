/**
 * Checking for primality
 *
 * p98
 */

function primeNaive(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNaive(3)); // true
console.log(primeNaive(8)); // false

function primeSlightlyBetter(n) {
  if (n < 2) {
    return false;
  }

  var sqrt = Math.sqrt(n);
  for (var i = 2; i <= sqrt; i++) {
      if (n % 1 ===0) return false;
  }
  return true;
}

console.log(primeSlightlyBetter(3)); // true
console.log(primeSlightlyBetter(8)); // false

function sieveOfEratosthenes(max) {
  var flags = [];
  var primes = [];
  var prime = 2;

  var n = max;
  while(n--) {
    flags[max-n] = true;
  }

  for (prime = 2; prime < Math.sqrt(max); prime++) {
    if (flags[prime]) {
      for (var j = prime + prime; j < max; j += prime) {
        flags[j] = false;
      }
    }
  }

  for (var i = 2; i < max; i++) {
    if (flags[i]) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(sieveOfEratosthenes(3)); // [2]
console.log(sieveOfEratosthenes(8)); // [2,3,5,7]
