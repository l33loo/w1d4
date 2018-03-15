/*
Exercise - Callback Arguments

Starting point:
        function findWaldo(arr, found) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] === "Waldo") {
              found();   // execute callback
            }
          }
        }

        function actionWhenFound() {
          console.log("Found him!");
        }

Modify the callback function so that logs the index of the array
where Waldo is found, ie. "Found Waldo at index 2!". (You will need
to modify actionWhenFound to receive the index.)
*/


function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr[i], i);
    }
  }
}

// add array element + index of element to callback function.
function actionWhenFound(arrEl, elIdx) {
  console.log("Found " + arrEl + " at index " + elIdx + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


/*
Exercise - Array forEach

A very common implementation of callback functions is with forEach
which uses callbacks to allow us to easily iterate through the
elements of an array.

Read about iterating through elements of an array using JavaScript's
Array.prototype.forEach() method.

Refactor the function findWaldo to use the forEach() method instead
of a for loop.
*/

function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      found(element, arr.indexOf(element));
    }
  });
}

// add array element + index of element to callback function.
function actionWhenFound(arrEl, elIdx) {
  console.log("Found " + arrEl + " at index " + elIdx + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


