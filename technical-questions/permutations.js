/**
 * Design an algorithm to print all permutations of a string. For simplicity, assume all characters are unique.
 */

var s = 'abc';

function p(prefix, s, acc) {
  acc = acc || [];
  var n = s.length;
  if (n === 0) return acc.push(prefix);
  for (var i = 0; i < n; i++) {
    p(prefix + s.charAt(i), s.substring(0,i) + s.substring(i+1), acc);
  }
  return acc;
}

console.log(p('', s)); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
