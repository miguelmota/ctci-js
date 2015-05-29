/**
 * A ransom note can be formed by cutting words out of a magazine to form a new sentence. How would you figure out if a ransom note (represented as a string) can be formed from a given magazine (string)?
 */

function isNoteFromString(noteString, string) {
  var ns = [].slice.call(noteString.replace(/\s+/,''));
  var s = [].slice.call(string.replace(/\s+/,''));
  var used = {};
  var noMatch = [];
  while (ns.length > 0) {
    var c = ns[0];
    used[c] = used[c] ? used[c] + 1 : 1;
    var i = s.indexOf(c);
    if (!~i) {
      noMatch.push(c);
    } else {
      s.splice(i,1);
    }
    ns.splice(0,1);
  }
  return !noMatch.length;
}

console.log(isNoteFromString('Hello there', 'wbe htH reeoele ql')); // true
console.log(isNoteFromString('Hello there', 'wbe reeHoeleab ced')); // false

