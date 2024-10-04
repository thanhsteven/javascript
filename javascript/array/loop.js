// * Vòng lặp -> Có thể kế thúc hoặc không kết thúc
// - Vòng lặp kết thúc -> với 1 điều kiện nào đó thì nó sẽ kết thúc
// - Vòng lặp vô hạn là chạy vô hạn tuần hoàn luôn.

const numbers = [1, 2, 3, 4, 5];
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("[-----Ví dụ 1-----]");
for (let i = 0; i < numbers.length; i++) {
  console.log(`The index is ${i}`);
}

// - Trong đó
// - i++ => i = i + 1;

// Todo: Ví dụ chỉ lấy các số chẵn trong mảng
console.log("[-----Ví dụ 2-----]");
for (let i = 0; i < numbers.length; i = i + 2) {
  console.log(`Số chẵn ${i}`);
}

for (let i = 0; i < numbers.length; i = i + 3) {
  console.log(`Số lẻ ${i}`);
}
console.log("[-----Ví dụ 3-----]");
for (let i = 0; i < number2.length; i++) {
  //- Nếu giá trị là 8 thì dừng vòng lặp
  if (number2[i] === 8) {
    //- Chạy tới 8 thì dừng vòng lặp lại.
    break;
  }

  if (number2[i] === 9) {
    //- Chạy tới 9 thì tiếp tục và bỏ qua.
    continue;
  }
  console.log(`The value ${number2[i]}`);
}
console.log("[-----Ví dụ 4-----]");
// * Trường hợp ngược lại từ lớn tới bé
for (let i = number2.length - 1; i >= 0; i--) {
  console.log(`The index is ${number2[i]}`);
}

console.log("[-----Ví dụ 5-----]");
const number3 = number2;
// * Nested loop
for (let i = number3.length - 1; i >= 0; i--) {
  console.log(`The value is ${number3[i]}`);
  for (let j = number3.length - 1; j >= 0; j--) {
    console.log(j);
  }
}

console.log("[-----Ví dụ 6-----]");
// * While và do while

//- while -> Check điều kiện xong thì mới xử lý
/*
while (condition: điều kiện) {
  body code here
}
*/
console.log("Ví dụ về while");
const number4 = number2;
let a = 1;
while (a < 10) {
  console.log("The a is " + a);
  a++;
}

//- dowhile -> xử lý xong mới check điều kiện
/*
do {
  body code here
} while (condition: điều kiện)
*/
console.log("Ví dụ về dowhile");
let b = 1;
do {
  b++;
  console.log("The b is " + b);
} while (b < 10);

// * For of
let array = [];
for (let value of number4) {
  value += 10;
  array.push(value);
  console.log(value);
  //- là giá trị chứ không phải index
}
console.log(array);
