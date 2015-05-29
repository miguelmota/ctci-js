/**
 * Array list (Dynamically Resizing Array
 *
 * p72
 */

function merge(words, more) {
  var sentence = [];
  words.forEach(function(w) {
    sentence.add(w);
  });
  more.forEach(function(w) {
    sentence.add(w);
  });
  return sentence;
}
