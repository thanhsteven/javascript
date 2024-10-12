// Math Object

// Math.PI : trả về số PI
console.log(Math.PI);

// Math.round() : làm tròn số thập phân từ 0.5
console.log(Math.round(4.4995)); // 4
console.log(Math.round(5.6)); // 6
console.log(Math.round(5.5999)); // 6

// Math.abs() : trả về trị tuyệt đối của 1 số bất kỳ
console.log(Math.abs(-6)); // 6

// Math.ceil() : làm tròn trên của 1 số
console.log(Math.ceil(4.1)) // 5
console.log(Math.ceil(5.8)) // 6

// Math.floor() : làm tròn dưới của 1 số
console.log(Math.floor(7.8)); // 7
console.log(Math.floor(9.9)) // 9

// Math.random() : trả về 1 số thập phân ngẫu nhiên nhỏ hơn 1
console.log(Math.random());
// Ví dụ: trả về 1 số ngẫu nhiên nhỏ hơn 10
console.log(Math.floor(Math.random() * 10));

var random = Math.floor(Math.random() * 100);
if (random < 5) {
    console.log("Cường hóa thành công !");
} else {
    console.log("Cường hóa thất bại !");
};

// Math.min() : Trả về số nhỏ nhất trong 1 dãy số
// Math.max() : Trả về số lớn nhất trong 1 dãy số
console.log(Math.min(-33, 43, 54, 62, 63, 27)); // -33
console.log(Math.max(-33, 43, 54, 62, 63, 27)); // 63