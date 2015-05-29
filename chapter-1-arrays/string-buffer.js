/**
 * Concanenate a list of strings
 *
 * p72
 */

function joinWords(words) {
  var sentence = [];
  words.forEach(function(w) {
    sentence.push(w);
  });
  return sentence.join('');
}

console.log(joinWords(['foo','bar'])); // 'foobar'
