// ! Function là để thực hiện 1 chức năng nào đó và chúng ta sẽ chia nhỏ nó ra để sử dụng đi sử dụng lại ở nhiều nơi.
// ! Cách khai báo 1 function
// Todo: Cú pháp
// function functionName(parameters) {}

// ! Function declaration: là function có khai báo --> Tức là có cái tên để gọi ra đàng hoàng

let a = 10;
let b = 90;
function tinhTong() {
  return a + b;
}
console.log(`Tính tổng a và b = ${tinhTong()}`);

// Cách viết 1 hàm function
function sum(a, b) {
  return a + b;
}
// Cách gọi 1 function
console.log(`Tổng hàm sum(a,b) = ${sum(45, 45)}`);
console.log(`Tổng hàm sum(a,b) = ${sum(12, 32)}`);

function add(a = 0, b = 0) {
  const total = a + b;
  return total;
}
console.log(`Tổng của hàm add = ${add(9, 10)}`);

// ! Hoặc có thể làm như sau
// Gán function vào 1 biến add
const sum2 = add;
// Gọi biến đó ra
// Vì biến sum2 lúc này là hàm rồi nên là phải truyền vào cho nó các parameters của hàm
// * Cách gọi như sau:
console.log(`Kết quả của sum2 = ${sum2(9, 8)}`);
console.log(`Kết quả của sum2 = ${sum2(300, 400)}`);

// Todo: Tính trung bình của 2 số a và b
function average(a, b, fn) {
  const total2 = fn(a, b);
  return total2 / 2;
}
let c = average(300, 200, sum2);
console.log(`Kết quả tính trung bình = ${c}`);

// ! Anonymous Functions (function expression)
// * Là function không có tên, function ẩn danh
// * Function ẩn danh thì không có bị hoisting
const logName = function () {
  console.log("Please login your name");
};
logName();

// * Hoisting: hiểu nôm na là gọi nó ra trước khi nó được khai báo thì nó vẫn hoạt  động bình thường --> Tức là gọi nó ra trước khi dòng khai báo nó thì nó đều hoạt động bình thường

// ! IIFE: immediately invoke function execution
// * Là function viết xong là nó hoạt động ngay chứ không cần phải gọi nó ra.
(function () {
  console.log("This is Immediately invoke function execution");
})();

// * Scope : là phạm vi của cái biến đó mà chúng ta có thể truy cập
let yourName = "Kim Thành"; // ! Đây là biến global
// ! Function scope
// * Scope function được tính từ lúc mở dấu "{" và kết thúc ở dấu "}"
function loginName() {
  let yourName2 = yourName;
  console.log(yourName2);
}
loginName();

// ! Block Scope
// ! Tất cả các code viết bên trong dấu {} đều được gọi là 1 block scope
if (2 > 1) {
  let message1 = "Hello for Let"; // * Let thì bên trong block scope sẽ không bị hoisting và không được đưa lên trên cùng trước khi load.
  const mesage2 = "Hello for Const"; // * Const cũng vậy không được đưa lên trên như Let.

  // ! Var thì lại được, đối với var thì nó bị hoisting cho dù có nằm trong block scope hay không và Var còn bị thêm vấn đề nữa là tự chuyển thành global scope luôn nhé
  var message3 = "Hello for Var";
}
console.log(message3);

// ! Closure

// * Lexical Scope : Định nghĩa phạm vi hoạt động của cái biến đó tại vị trí mà nó được khai báo trong source code.
let aNewName = "PKT Ball"; // --> Đây là global scope
function sayHello() {
  let message = "Xin chào"; // --> Đây là block scope
  console.log(`Lời nhắn: ${message} ${aNewName}`);
}
sayHello();

// * Function con có thể truy suất scope của function cha
// Parent Function
function sayHello2() {
  let message =
    "function con có quyền truy suất được những cái scope của function cha";
  // inner function
  function sayHi() {
    console.log(message);
  }
  return sayHi;
}
// ! Chú ý chỗ này
let hello = sayHello2();
hello(); // --> phải gọi cái biến đó ra

// ! Trường hợp 3
// * Nghiên cứu trường hợp 3 để hiểu sâu hơn chứ nó hơi phức tạp rùi á
function sayHello3(message3) {
  return function hiYourName(name) {
    console.log(`${message3} ${name}`);
  };
}
let hello3 = sayHello3("Đây là 1 ví dụ phức tạp hơn về Closure.");
hello3("Nghiên cứu cho kỹ nhé !");

function anotherFunction() {
  let otherMessage = "Xin chào anotherFunction";
  function sayHi() {
    console.log(otherMessage);
  }
  return sayHi;
}
let callFunc = anotherFunction();
callFunc();

// ! Arrow Function : Anonymous Function (Func không tên)
// Normal function
const square = function (x) {
  return x * x;
};
console.log(`Diện tích hình vuông 1 = ${square(5)}m2`);
// Arrow function
const square2 = (x) => {
  return x * x;
};
console.log(`Diện tích hình vuông 2 = ${square2(10)}m2`);
const square3 = () => {
  return 1000;
};
// Viết rút gọn như này
const square4 = () => 1000;
const square5 = (x) => x * x;
