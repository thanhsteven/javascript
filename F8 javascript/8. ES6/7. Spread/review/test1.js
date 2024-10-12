// Sử dụng trong trường hợp nối mảng
var array1 = ['Javascript', 'PHP', 'Ruby'];
var array2 = ['ReactJs', 'Dark'];

var array3 = [...array2, ...array1];

console.log(array3);

// Sử dụng trong trường hợp nối 2 object lại với nhau
var object1 = { name: 'Javascript' };
var object2 = { price: 1200 };

var object3 = { ...object1, ...object2 };
console.log(object3);

// Spread với hàm
var array = ['Javascript', 'PHP', 'ReactJs'];

// Định nghĩa hàm và định nghĩa tham số thì nó là rest
function logger(...rest) {
    console.log(rest);
};

logger(...array);
// Gọi hàm và truyền đối số thì nó là Spread
