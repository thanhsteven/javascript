// Destructuring : Dùng với Array
var array = ['Javascript', 'PHP', 'Ruby'];

// Để lấy ra từng phần tử trong array, ta làm như sau:

// Cách thông thường
var a = array[0];
var b = array[1];
var c = array[2];

console.log(a, b, c);

// Dùng Destructuring
var [d, e, f] = array;
var [g, , h] = array;

console.log(d, e, f);
console.log(g, h);
//=> y chan với ở trên

// Rest khi sử dụng với Destructuring
// Rest Parameter : lấy ra những phần còn lại

var [a, ...rest] = array;
console.log(rest);


// Dùng với Object
var object = { name: 'Javascript', price: 1000, image: 'image-url' };
var { name, price } = object; //=> Không khai báo image

console.log(name, price);
//=> Với object thì cần phải lấy đúng tên key của nó. Nếu lấy một cái key không có trong object nó sẽ trả về undefined.
//=> Hoặc lấy không khai báo vào trong thì có cũng undefined.


// Destructuring : Dùng với Rest thì sao 
var course = {
    name: 'Javascript',
    price: 1000,
    iamge: 'avatar-url',
    children: {
        name: 'ReactJs',
        price: 1200,
    },
};

var { name, price, ...newObject } = course;

console.log(name, price);
console.log(newObject);

// Làm sao để lấy được cái name của children ?
var { children: { name } } = course;

console.log(name); //=> name này là name của obj cha
console.log(name); //=> name này là của children
//! Nhưng hiện tại 2 dòng trên nó đang trùng với nhau => Sai

// Cú pháp đúng

var { name: parentName, children: {name: childrenName} } = course;

console.log('Name cha : ' + parentName);
console.log('Name con : ' + childrenName);

