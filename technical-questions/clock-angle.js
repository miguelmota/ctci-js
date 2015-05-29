/**
 * Given a time, calculate the angle between the hour and minute hands.
 */

function angleBetweenMinuteHandAnd12Oclock(m) {
  return 360 * m / 60;
}

function angleBetweenHourHandAnd12Oclock(h, m) {
  m = m || 0;
  return 360 * (h % 12) / 12 + 360 * (m / 60) * (1 / 12);
}

function angleBetweenHourAndMinute(h, m) {
  return (angleBetweenHourHandAnd12Oclock(h) - angleBetweenMinuteHandAnd12Oclock(m)) % 360;
}

console.log(angleBetweenMinuteHandAnd12Oclock(15)); // 90
console.log(angleBetweenHourHandAnd12Oclock(6)); // 180
console.log(angleBetweenHourAndMinute(4, 15)); // 30

console.log(angleBetweenHourAndMinute(0, 15)); // 90
