// p89
/*
x & (~0 << n)
~0 is a sequence of 1s
shifting by n we have 1s followed by n 0s
AND with x with clear rightmost bits of x

1011 & (~0 << 2) = 1000

-----

a^(~a) will always be sequence of 1s

-----

bit facts

x ^ 0s = x
x ^ 1s = ~x
x ^ x = 0

x & 0s = 0
x & 1s = x
x & x = x

x | 0s = x
x | 1s = 1s
x | x = x
*/


// clears all bits except for bit at i
function getBit(num, i) {
  return ((num & (1 << i)) !== 0);
}

console.log(getBit(8,3)); // 1000 true
console.log(getBit(32,5)); // 100000 true

// changes bit at i by ORing
function setBit(num, i) {
  return num | (1 << i);
}

console.log(setBit(9,2)); // 1001 -> 1101 -> 13

// Clear bit at i
function clearBit(num, i) {
  var mask = ~(1 << i);
  return num & mask;
}

console.log(clearBit(9,3)); // 1001 -> 0001 -> 1
/*
1001 9
1000 1 << 3
0111 mask
1001 AND
0001 result
*/

// clear all bits from the most significant bit through i (inclusive)
function clearBitsMSBthroughI(num, i) {
  var mask = (1 << i) - 1;
  return num & mask;
}

console.log(clearBitsMSBthroughI(13,1)); // 1101 -> 0001 > 1
console.log(clearBitsMSBthroughI(25,4)); // 11001 -> 01001 > 9

// clear all bits from i through 0 (inclusive)
function clearBitsIthrough0(num, i) {
  var mask = ~(-1 >>> (31 - 1));
  return num & mask;
}

console.log(clearBitsIthrough0(13,1)); // 1101 -> 1100 > 12

// set bit at i with v
function updateBit(num, i, v) {
  var mask = ~(1 << i);
  return (num & mask) | (v << i);
}

console.log(updateBit(13,1,1)); // 1101 -> 1111 > 15
