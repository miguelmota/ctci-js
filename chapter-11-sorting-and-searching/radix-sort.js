/**
 * Radix sort
 *
 * p120
 */

function radixSort(array, idxBegin, idxEnd, bit) {
  idxBegin = typeof idxBegin !== 'undefined' ? idxBegin : 0;
  idxEnd = typeof idxEnd !== 'undefined' ? idxEnd : array.length;

  bit = typeof bit !== 'undefined' ? bit : 31;

  if (idxBegin >= (idxEnd - 1) || bit < 0) {
    return;
  }

  var idx = idxBegin;
  var idxOnes = idxEnd;
  var mask = 1 << bit;

  while (idx < idxOnes) {
    if (array[idx] & mask) {
      --idxOnes;
      var tmp = array[idx];
      array[idx] = array[idxOnes];
      array[idxOnes] = tmp;
    } else {
      ++idx;
    }
  }
  radixSort(array, idxBegin, idxOnes, bit-1);
  radixSort(array, idxOnes, idxEnd, bit-1);

  return array;
}

console.log(radixSort([85,34,23,55,9,21,9])); // [9, 9, 21, 23, 34, 55, 85]
