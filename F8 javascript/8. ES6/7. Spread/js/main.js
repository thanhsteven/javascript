// Spread : ...
// Toán tử giải : bỏ đi những dấu ngoặc ở trước array và object

// Dùng với Array
var array1 = ['Javascript', 'PHP', 'Ruby'];
var array2 = ['Reactjs', 'Dark'];

// Tạo ra 1 array3 là kết hợp của array1 và array2 với array2 đứng trước array1.
//=> Dùng toán tử Spread
var array3 = [...array2, ...array1];
console.log(array3);

// Dùng với Object
var object1 = {name : 'Javascript'};
var object2 = {price : 10000};

var object3 = {...object1, ...object2};
console.log(object3);