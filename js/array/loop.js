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

