/**
 * Merge sort
 *
 * p118
 */

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  var indexLeft = 0;
  var indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft++]);
    } else {
      result.push(right[indexRight++]);
    }
  }

  return result.concat(left.slice(indexLeft), right.slice(indexRight));
}

console.log(mergeSort([85,34,23,55,9,21,9])); // [9, 9, 21, 23, 34, 55, 85]
