/*
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

Modify the callback function in the previous code so that logs the index of
the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need
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