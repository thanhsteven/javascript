// * Số nguyên: 1 2 3 99 444 777
// * Số thập phân

console.log(99);
console.log(5 + 9);
console.log(typeof 9);

const number1 = "5";
const number2 = "5.6";
const number3 = -10;

// ! Chuyển thành số nguyên
console.log(`Chuyển thành số nguyên: ${parseInt(number1)}`);

// ! Chuyển thành số thập phân
console.log(`Chuyển thành số thập phân: ${parseFloat(number2)}`);

// ! Chuyển thành giá trị tuyệt đối
console.log(`Trị giá trị tuyệt đối: ${Math.abs(number3)}`);

// ! Làm tròn xuống
console.log(`Làm tròn xuống: ${Math.floor(number2)}`);
console.log(`Làm tròn xuống: ${Math.floor(4.3)}`);

// ! Làm tròn lên
console.log(`Làm tròn lên: ${Math.ceil(4.1)}`);

// ! Làm tròn gần nhất
console.log(`Làm tròn gần nhất: ${Math.round(2.9)}`);
console.log(`Làm tròn gần nhất: ${Math.round(1.2)}`);

// ! Rút gọn số thập phân vô hạn
// ! Có thể lấy tối thiểu phía sau dấu phẩy bao nhiêu số
// * Lưu ý: nó là dạng string --> Dùng parseFloat để chuyển nó thành number
console.log(`Rút gọn số thập phân vô hạn: ${parseFloat((1 / 3).toFixed(2))}`);

// ! Lấy một con số ngẫu nhiên
console.log(`Lấy ngẫu nhiên con số: ${Math.ceil(Math.random() * 10)}`);

// ! Hàm lấy số lớn nhất và nhỏ nhất
console.log(`Max : ${Math.max(1, 5, 9)}`);
console.log(`Min : ${Math.min(5, 8, 9)}`);

// ! Hàm lấy số mũ
console.log(`Hàm lấy Số mũ 5^5: ${Math.pow(5, 5)}`);
