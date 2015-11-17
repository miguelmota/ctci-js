/**
 * A ransom note can be formed by cutting words out of a magazine to form a new sentence. How would you figure out if a ransom note (represented as a string) can be formed from a given magazine (string)?
 */

function isSubchars(noteString, string) {
  var ns = [].slice.call(noteString.replace(/\s+/,''));
  var s = [].slice.call(string.replace(/\s+/,''));
  var l = ns.length;

  while (l--) {
    var c = ns[l];
    var i = s.indexOf(c);
    if (i === -1) {
      return false;
    } else {
      s.splice(i,1);
    }
  }

  return true;
}

console.log(isSubchars(`I will kill you.`, `This is what I said I'm going to do.`)); // false
console.log(isSubchars(`I will kill you.`, `This is what I said I'm going to do. I really like you a lot.`)); // true
