/**
 * Binary search
 *
 * p120
 */

function binarySearch(array, x) {
  var low = 0;
  var high = array.length - 1;
  var mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] < x) {
      low = mid + 1;
    } else if (array[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1; // error
}

console.log(binarySearch([1,3,32,57,765,233,453], 32)); // 2
