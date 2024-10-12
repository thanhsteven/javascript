// Làm sao biết Foreach, filter, find, some, every, map là 1 hàm trong Javascript
// Tại sao Array lại có thể gọi được những phương thức find, filter, map, foreach, . . . ?

// => Bởi vì thằng Array Constructor đã được định nghĩa sẵn ở trong Array Prototype hết rồi.

// Tại sao 1 cái Array lại có thể gọi được các phương thức (hàm) như : push, pop, find, filter, some, every, . . . ?
// Làm sao biết được forEach, find, filter, map, every, some, . . . là một phương thức (hàm) trong Array ?
// Trong String có bao nhiêu phương thức (hàm) ?

// => Tất cả đều nằm ở console.log( Array.prototype )

var courses = [
    {name: 'Thanh'},
    {age : 28},
    {address: 'HCM VN'}
];

console.log(Array.prototype);
console.log(Number.prototype);
console.log(String.prototype);
console.log(Object.prototype);