/*
Complete the following code for the assertion to pass.
The result should be an array of numbers corresponding to
the x-y pairs provided in the input array
(ie: calculate z given x and y).

Starting point:

          var input = [
            { x: 3, y: 4 },
            { x: 12, y: 5 },
            { x: 8, y: 15 }
          ];
          var result = input.map(*Your code here*);

          console.log(result[0] === 5);
          console.log(result[1] === 13);
          console.log(result[2] === 17);
*/

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

/*
Set the parameter of 'map' to be an anonymous function that returns the
hypotenuse from the values of the object that is passed in the function.
*/
var result = input.map(function(arrEl) {
  return Math.sqrt(Math.pow(arrEl.x, 2) + Math.pow(arrEl.y, 2));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);