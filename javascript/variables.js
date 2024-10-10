// * Undefine --> Khai báo nhưng chưa gán giá trị
// * khai báo biến bằng let --> có thể khai báo lại
let a;
console.log(a);
let b;
console.log(b);
b = 100;
console.log(b);

// * Boolean --> True or False
// * Falsy values vs Truthy values

// * Biến cục bộ và Biến toàn cục
// * Biến toàn cục là những biến được khai báo bên ngoài bất kỳ hàm nào. Chúng có phạm vi toàn cục, có nghĩa là có thể được truy cập và sử dụng ở bất kỳ đâu trong mã nguồn, bao gồm cả bên trong các hàm.
let numA = 5;
function timbien() {
  let numB = 0;
  numA = numA + 1;
  numB = numB + 9;
  return numA;
}
console.log("Biến cục bộ = " + numB);
timbien();
console.log("Biến toàn cục = " + numA);
