let a = 1;
let b = 2;
let c = 3;

// Đồng bộ
console.log(a);
console.log(b);
console.log(c);
console.log('-----------');

// Bất đồng bộ
let x = 5;
let y = 6;
let z = 7;

console.log(x);
// 3s sau mới chạy thằng y
setTimeout( () => {
    console.log(y);
}, 3000);
console.log(z);
// => đúng ra nếu đồng bộ thì nó phải đợi 3s sau để chạy thằng y rồi mới chạy tiếp thằng z.


// Sync - Async
// Đồng bộ : là thằng nào viết trước chạy trước, thằng nào viết sau chạy sau

setTimeout(function () {
    console.log(1);
}, 1000);
console.log(2);

// => Bởi vì Javscript là ngôn ngữ bất đồng bộ cho nên để khắc phục bất độ đồng bộ thì nó cung cấp cho chúng ta 3 khái niệm:
// 1. Callback
// 2. Promise
// 3. Async



