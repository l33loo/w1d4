/*
PART 1
  Write JavaScript code to sort the array numerically
  (the sorted array should equal [1, 2, 5, 9, 10]).
*/

var array = [10, 2, 5, 1, 9];

array.sort(function(a, b) {
  return a - b;
});

console.log(array);


/*
PART 2

    var students = [
      { id: 1, name: "bruce",    age: 40 },
      { id: 2, name: "zoidberg", age: 22 },
      { id: 3, name: "alex",     age: 22 },
      { id: 4, name: "alex",     age: 30 }
    ];
Write a sorting function (sometimes called a custom comparator),
that sorts the above array first by the name ascending alphabetically,
and in cases where the names are equal sort by descending age.
*/

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

/* At any given time, one student is compared to a student further
down the list.
*/
students.sort(function(a, b) {

  /*
  If the two students are not listed in alphabetical order
  (based on their name), switch the order of the students.
  */
  if (a.name > b.name) {
    return 1;
  }

  // If the reverse is true, leave the students as they are.
  if (a.name < b.name) {
    return -1;
  }

  /*
  If the students' names are identical, sort the students based on age
  (descending order).
  */
  return b.age - a.age;
});

console.log(students);