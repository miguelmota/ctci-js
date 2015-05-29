/**
 * Dynamic Programming (recursion caching): Fibonacci numbers
 *
 * p108
 */

var cache = {};
function fibonacci(i) {
  if (i === 0) return 0;
  if (i === 1) return 1;

  if (cache[i]) return cache[i];
  cache[i] = fibonacci(i - 1) + fibonacci(i - 2);
  return cache[i];
}

console.log(fibonacci(10)); // 55
