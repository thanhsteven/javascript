// Có 2 trường hợp dùng Rest
// 1. Dùng với Dustructuring
// 2. Dùng với thuộc tính của 1 function => Dùng nó để định nghĩa ra tham số

// ! Ngoài 2 cái trên ra thì các trường hợp còn lại thì nó là Spread

var array = ['Javascript', 'PHP', 'Ruby', 'Dark'];

// Dustructuring và Rest
var [a, b, ...rest] = array;

//=> Khúc var [] : chính là Destructuring
//=> ...rest : chính là Rest
//=> Khi nào sử dụng kết hợp với Destructuring => Rest

console.log(`a : ${a} \nb : ${b}`);
console.log(rest); //=> Array

// Khi nào nó là toán tử Rest và khi nào nó là toán tử Spread ?
// vì cả 2 đều sử dụng dấu ...

// ---------------------------------------------- //

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'avatar-url',
    children: {
        name: 'ReactJs',
        price: 1200,
        image: 'avatar-url'
    },
};

// Thông thường
console.log(course.name);

// Dùng Destructuring
var {
    name: parrentName,
    price,
    children: {
        name: childrenName,
        price: childrenPrice,
    },
} = course;

//=> Cách để không trùng tên giữa object con với object cha :
//=> Đổi tên

console.log(`name = ${name} \nprice = ${price}`);
console.log('parrentName = ' + parrentName);

console.log('childrenName = ' + childrenName);
console.log('childrenPrice = ' + childrenPrice);

// Rest với Array
var { name, price, ...rest } = course;

var { children } = course;

var {image, ...newObject} = course;

console.log(name);
console.log(price);

console.log(rest);
console.log(children);

console.log(newObject);


// Trường hợp lấy 1 thuộc tính nhưng KHÔNG CÓ trong Object

var {name, description} = course;

console.log(description); //=> undefined

// Vậy khi không có thuộc tính trong Object thì ta muốn nó trả ra 1 giá trị mặc định thì làm như nào ?
//=> Dùng thẳng dấu bằng.

var {name, description = 'Mac dinh'} = course;
console.log(description);

// Như vậy, khi không có thì nó trả về mặc định, còn khi có thì nó trả về value như bình thường.

// -------------------------------------------- //

// Dùng Rest trên tham số của function
//=> param lúc này sẽ là 1 Array

function logger(...rest) {
    console.log(rest); //=> Array
};

logger(1,2,3,4,5,6,7,8);

// Rest với Function
function logger(a, b, ...params) {
    console.log(a);
    console.log(b);
    console.log(params);
};

logger(1, 2, 3, 4, 5, 6, 7);

// Destructuring với Function
function x_logger({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
};

x_logger({name: 'Javascript', price: 1000, descripttion: 'default'});


// Tương tự với Array
function y_logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
};

y_logger(['Javascript', 'PHP', 'Ruby', 'ReactJS']);
