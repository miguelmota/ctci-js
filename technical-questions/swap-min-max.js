/**
 * Swap the mininum and maximum elements in an number array.
 *
 * p57
 */

function getMinIndex(array) {
  var minIndex = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function getMaxIndex(array) {
  var maxIndex = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function swap(array, m, n) {
  var temp = array[m];
  array[m] = array[n];
  array[n] = temp;
  return array;
}

function swapMinMax(array) {
  var minIndex = getMinIndex(array);
  var maxIndex = getMaxIndex(array);
  return swap(array, minIndex, maxIndex);
}

console.log(swapMinMax([4,6,2,7,3])); // [ 4, 6, 7, 2, 3 ]
