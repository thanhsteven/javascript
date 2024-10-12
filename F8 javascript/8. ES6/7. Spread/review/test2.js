// Spread

// Array
var array1 = ['Javascript', 'PHP', 'Ruby'];
var array2 = ['ReactJs', 'Dark'];

var array3 = [...array1, ...array2];

// Object
var object1 = {name: 'Kim Thanh', bornYear: 1996};
var object2 = {nowYear: 2021};

var object3 = {...object1, ...object2}
console.log(object3);

// Spread

// Array
var array1 = ['Javascript', 'PHP', 'Ruby'];
var array2 = ['ReactJs', 'Dark'];

var array3 = [...array1, ...array2];


// Rest 
var array = ['Javascript', 'PHP', 'Ruby'];
var [...rest] = array;
console.log(rest);