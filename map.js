/*
Callbacks - Map Assignment

Implement your own version of the built-in array map function.

Yours will take in two arguments. The first will be an array to
map and the second will be a callback function. The function will
return a new array based on the results of the callback function.

Examples
  The following are examples of how your map function can be called.

          var words = ["ground", "control", "to", "major", "tom"];

          map(words, function(word) {
            return word.length;
          });

          map(words, function(word) {
            return word.toUpperCase();
          });

          map(words, function(word) {
            return word.split('').reverse().join('');
          });
And the following is what the above implementations should return, in order.

          [6, 7, 2, 5, 3]

          [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

          [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/

function myMap(array, callbackFxn) {
  var newArr = [];

  // Could use a forEach loop instead.
  for (var i = 0; i < array.length; i++) {
    newArr.push(callbackFxn(array[i]));
  }
  return newArr;
}

var words = ["ground", "control", "to", "major", "tom"];

function getWordLength(word) {
  return word.length;
}

function makeUpperCase(word) {
  return word.toUpperCase();
}

function reverseWords(word) {
  return word.split('').reverse().join('');
}

console.log(myMap(words, getWordLength));

console.log(myMap(words, makeUpperCase));

console.log(myMap(words, reverseWords));

