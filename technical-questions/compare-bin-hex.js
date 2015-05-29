/**
 * Suppose you were asked to write a function to check if the value of a binary number (passed as a string) equals the hexadecimal representation of a string.
 *
 * p57
 */

function compareBinToHex(binary, hex) {
  var n1 = convertToBase(binary, 2);
  var n2 = convertToBase(hex, 16);

  if (n1 < 0 || n2 < 0) {
    return false;
  }
  return n1 === n2;
}

function digitToValue(c) {
  if (c >= '0' && c <= '9') return parseInt(c, 16);
  else if (c >= 'A' && c <= 'F') return parseInt(c, 16);
  else if (c >= 'a' && c <= 'f') return parseInt(c, 16);
  return -1;
}

function convertToBase(number, base) {
  if (base < 2 || (base > 10 && base !== 16)) return -1;
  var value = 0;
  for (var i = number.length - 1; i >= 0; i--) {
    var digit = digitToValue(number.charAt(i));
  console.log(digit);
    if (digit < 0 || digit >= base) {
      return -1;
    }
    var exp = number.length - 1 - i;
    value += digit * Math.pow(base, exp);
  }
  return value;
}

console.log(compareBinToHex('11111111', 'FF')); // true
console.log(compareBinToHex('11111110', 'FE')); // true
