// * Sắp xếp các phần tử trong mảng theo chuẩn unidcode utf-16
console.log("-----array.sort-----");
const number = [1, 100, 5, 999, 12000];
console.log(number.sort());

// * Cơ chế của sort là bên trong sẽ gọi 1 function call back ở trong.
// * sort(function(a, b))
// * Trong function này có 2 tham số a và b -> đại diện cho 2 số đứng gần nhau trong mảng

// function(callback)
const number2 = number.sort(function (a, b) {
  if (a > b) return 1; // Sắp xếp theo tăng dần
  if (a < b) return -1; // Sắp xếp theo giảm dần
});
console.log("----function callback-----");
console.log(number2);
// Arrow function
const number3 = number.sort((a, b) => (a > b ? 1 : -1));
console.log("-----arrow function - Tăng dần -----");
console.log(number3);

const number4 = number.sort((a, b) => (a > b ? -1 : 1));
console.log("----- Sort - Giảm dần-----");
console.log(number4);
