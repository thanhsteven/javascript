let numberA = "15";
let numberB = "3.146";
let numberC = "-16abcd";
let numberD = "abc123";
let numberE = "-19";
let numberF = "42.78xyz";
let numberG = "00567";
let numberH = "-0.123";
let numberI = "100px";
let numberJ = "9.81e2";

const goldenRatio = "1.618";

console.log(numberC);

// * Chuyển chuỗi thành dạng số nguyên
console.log(parseInt(numberA));
console.log(parseInt(goldenRatio));
console.log(parseInt(numberC));

// * Chuyển chuỗi thành dạng số thập phân
console.log(parseFloat(goldenRatio));
console.log(parseFloat(numberA));

// * Chuyển string thành number và lấy Trị giá trị tuyệt tối
numberC = Math.abs(parseInt(numberC));
numberE = Math.abs(numberE);
console.log(numberE);
console.log(numberC);

// * Làm tròn xuống
console.log(Math.floor(numberB));
console.log(Math.floor(numberH));
// * Làm tròn lên
console.log(Math.ceil(numberB));
console.log(Math.ceil(numberH));
// * Làm tròn gần nhất
console.log(Math.round(1.49));
console.log(Math.round(-2.6));

let numberK = 1 / 3;
console.log(parseFloat(numberK));

// * Rút gọn số thập phân vô hạn
console.log(parseFloat(numberK.toFixed(2)));

// * Lấy 1 số ngẫu nhiên
console.log(Math.round(Math.random() * 100));

// * Lấy số lớn nhất và nhỏ nhất -> tự chuyển chuỗi thành number
console.log(Math.min(numberA, parseInt(numberJ)));
console.log(Math.max(numberG, numberJ));

console.log(Number(3.14));
console.log(Number("123465"));

// * Number(value)
console.log(Number("4.5")); // = 4.5
console.log(Number("5")); // = 5
console.log(Number("abcdef")); // = NaN
console.log(Number(undefined)); // = NaN
console.log(Number(null)); // = 0
console.log(Number(false)); // = 0
console.log(Number(true)); // = 1
console.log(Number(NaN)); // = NaN
