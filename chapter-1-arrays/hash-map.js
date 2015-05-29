/**
 * Hash table
 *
 * p72
 */

function hashMap(array) {
  var map = {};
  array.forEach(function(obj, i) {
    map[i] = obj;
  });
  return map;
}

console.log(hashMap(['Bob', 'Sally'])); // { '0': 'Bob', '1': 'Sally' }
