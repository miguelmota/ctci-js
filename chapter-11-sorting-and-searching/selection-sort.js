/**
 * Selection sort
 *
 * p117
 */

function selectionSort(array, index) {
  index = ~~index || 0;
  var smallestIndex = index;
  var smallest = array[smallestIndex];
  for (var i = index; i < array.length; i++) {
    if (array[i] < smallest) {
      smallestIndex = i;
      smallest = array[smallestIndex];
    }
  }
  if (index < array.length) {
    array.splice(smallestIndex,1);
    array.splice(index, 0, smallest);
    return selectionSort(array, index+=1);
  } else {
    return array;
  }
}

console.log(selectionSort([85,34,23,55,9,21,9])); // [9, 9, 21, 23, 34, 55, 85]
