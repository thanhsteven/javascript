// Trên array
let a, b;
[a, b] = [3, 5];
document.write(a); // 3
document.write("<br>");
document.write(b); // 5

// rest parameter
[a, b, ...other] = [1, 3, 4, 7, 9, 10];
document.write(a); // 1
document.write("<br>");
document.write(b); // 3
document.write("<br>");
document.write(other); // [4, 7, 9, 10]

// Trên object
// x bên trái cần giống với tên thuộc tính bên phải
// Lấy giá trị của thuộc tính x và gán vào biến x
// Lấy giá trị của thuộc tính y và gán vào biến y
let { x, y } = { x: 10, y: 25 };
document.write("<br>");
document.write(x); // 10
document.write("<br>");
document.write(y); // 25
document.write("<br>");

// Nếu không dùng từ khóa let/var/const thì cần bọc desctruting trong ()
// Destructuring assignment without a declaration
({ x, y } = { x: 10, y: 25 });
document.write("<br>");
document.write(x); // 10
document.write("<br>");
document.write(y); // 25
document.write("<br>");

// Giá trị mặc định trên array
[a = 5, b = 9] = [4];
document.write("<br>");
document.write(a); // 4
document.write("<br>");
document.write(b); // 9
document.write("<br>");

// Hoán vị giá trị của 2 biến
a = 5;
b = 9;

// c = a;
// a = b;
// b = c;
[a, b] = [b, a];
document.write("<br>");
document.write(a); // 9
document.write("<br>");
document.write(b); // 5
document.write("<br>");

var arr1 = [3, 5, 4, 2, 1];
var [x, y, ...other] = arr1;
arr1 = [y, x, ...other];

// Bỏ qua phần tử không quan tâm
[a, , b] = [5, 7, 9];
document.write("<br>");
document.write(a); // 5
document.write("<br>");
document.write(b); // 9
document.write("<br>");

// Gán giá trị vào biến mới trên object
// new_var1 có giá trị là 50
// new_var2 có giá trị là 100
// biến a, b không bị ảnh hưởng
({ a: new_var1, b: new_var2 } = { a: 50, b: 100 });
document.write("<br>");
document.write(new_var1); // 50
document.write("<br>");
document.write(new_var2); // 100
document.write("<br>");

// Giá trị mặc định trên object
({ a=2, b=5 } = { a: 40 });
document.write("<br>");
document.write(a); // 40
document.write("<br>");
document.write(b); // 5
document.write("<br>");

// Mặc định của việc gán giá trị vào biến mới trên object
({ a: x = 2, b: y = 5 } = { a: 40 });
document.write("<br>");
document.write(x);//40
document.write("<br>");
document.write(y);//5
document.write("<br>");

// Pass 1 thuộc tính từ 1 đối tượng vào hàm

function f1({ a }) {
  return a;
}
var t = f1({ a: 5, b: 10 })
document.write("<br>");
document.write(t);//5

// Giá trị mặc định khi pass 1 thuộc tính từ 1 đối tượng vào hàm
function f2({ a, c = 100 }) {
  return a + c;
}
var t = f2({ a: 5, b: 10 })
document.write("<br>");
document.write(t); // 105

// Tên thuộc tính được lượng giá, dùng dấu []
var p = "a";
({ [p]: x } = { a: 40 });
document.write("<br>");
document.write(x); // 40
document.write("<br>");

var m = { a: 1, b: 2 };
m.c = 3;
console.log(m.c);

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
n = new Person("a", "b");
n.c = "c";
console.log(n);