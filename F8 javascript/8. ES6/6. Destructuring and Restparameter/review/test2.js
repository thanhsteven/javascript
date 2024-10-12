// Destructuring

// Array
var array = ['Javascript', 'PHP', 'Dark', 'Ruby'];

var [a, b, c] = array;
console.log(a, b, c);

// Rest : lấy ra những phần còn lại trong array hoặc object
//! Rest chỉ sử dụng với Destructuring thôi
var [a, ...rest] = array;
console.log(rest);


// Object
//=> Đối với object thì phải gọi cái keyname của nó ra
var object = {
    name: 'Kim Thanh',
    age: 26,
    address: 'HCM VN',
    email: 'pkt@gmail.com',
    gender: true,
    wife: {
        name: 'Minh Chau',
        age: 22,
        address: 'LA VN',
        email: 'nhmc@gmail.com',
        gender: false
    },
};

var { name, age } = object;
var { gender, wife, ...rest } = object;

console.log(name, age);
console.log(rest);

var { wife } = object;
var { name, wife: { name: wifeName } } = object;
console.log(name, wifeName);


// Function
function logger(a, b, ...rest) {
    console.log('a = ' + a, 'b = ' + b);
    console.log(rest);
};

logger(1, 2, 3, 4, 5, 6, 7, 8);

function myUser({ name, age, ...rest }) {
    console.log(name, age);
    console.log(rest);
};

myUser({
    name: 'Kim Thanh',
    age: 26,
    gender: true,
    email: 'pktball@gmail.com',
    address : 'HCM VN'
});