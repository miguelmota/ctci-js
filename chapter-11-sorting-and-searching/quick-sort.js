/**
 * Quick sort
 *
 * p119
 */

'use strict';

function quickSort(array, left, right) {
  left = ~~left || 0;
  right = ~~right || array.length-1;

  if (array.length > 1) {
    var index = partition(array, left, right);
    if (left < index-1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  var pivot = array[Math.floor((right + left)/2)];

  while (left <= right) {
    while(array[left] < pivot) {
      left++;
    }
    while(array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(array, left, right) {
  var tmp = array[left];
  array[left] = array[right];
  array[right] = tmp;
}

console.log(quickSort([85,34,23,55,9,21,9])); // [9, 9, 21, 23, 34, 55, 85]
