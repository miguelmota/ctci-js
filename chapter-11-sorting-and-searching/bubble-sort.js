/**
 * Bubble sort
 *
 * p117
 */

function bubbleSort(array) {
  var tmp;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      tmp = array[i];
      array[i] = array[i+1];
      array[i+1] = tmp;
    }
  }
  return !!tmp ? bubbleSort(array) : array;
}

console.log(bubbleSort([85,34,23,55,9,21, 9])); // [9, 9, 21, 23, 34, 55, 85]
