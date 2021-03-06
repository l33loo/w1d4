/*
Exercise 1 – Loaded Die

The following function implements the roll of a die; it returns a random number
between 1 and 6 each time it is called.

          var rollDie = function () {
            return Math.floor(1 + Math.random() * 6);
          }

          console.log(rollDie());  // 1 (for example)

However, instead of a random die, we want to create a cheat die that would let
us predict the next number. Create a function called makeLoadedDie() which
returns a function that when called, seems to generate random numbers between
1 and 6, but in fact returns numbers in a row from a hardcoded list.

          function makeLoadedDie() {
            var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
            //your code here

            return function() {
              // your code here
            }
          }

          var rollLoadedDie = makeLoadedDie();

          console.log(rollLoadedDie());  // 5
          console.log(rollLoadedDie());  // 4
          console.log(rollLoadedDie());  // 6
*/

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;

  return function() {
    var rollResult = list[i];
    i++;
    return rollResult;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


/*
Exercise 2 – Countdown

Implement a function countdownGenerator() that takes in a number x
and returns a function that counts down when it is called
(see starter code below).

          var countdownGenerator = function (x) {
            //your code here
          };

          var countdown = countdownGenerator(3);
          countdown(); // T-minus 3...
          countdown(); // T-minus 2...
          countdown(); // T-minus 1...
          countdown(); // Blast Off!
          countdown(); // Rockets already gone, bub!
          countdown(); // Rockets already gone, bub!
*/

var countdownGenerator = function(x) {
  var timeToBlast = x;
  return function() {
    if (!timeToBlast) {
      timeToBlast--;
      return "Blast Off!";
    }
    if (timeToBlast < 0) {
      timeToBlast--;
      return "Rockets already gone, bub!";
    }
    timeToBlast--;
    return `T-minus ${timeToBlast}...`;
  }
};

var countdown = countdownGenerator(3);

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!



