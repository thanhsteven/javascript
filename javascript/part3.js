"4.5"; // Dùng parseFloat = 4.5
"5"; // Dùng parseIn = 5

// ! Có thể sử dụng hàm Number để thay thế cho cả 2 hàm trên với cùng 1 chức năng
// * Number(value)
console.log(Number("4.5")); // = 4.5
console.log(Number("5")); // = 5
console.log(Number("abcdef")); // = NaN
console.log(Number(undefined)); // = NaN
console.log(Number(null)); // = 0
console.log(Number(false)); // = 0
console.log(Number(true)); // = 1
console.log(Number(NaN)); // = NaN

// ! Ngược lại với Number là String
// ! String chuyển tất cả thành dạng string hết
// * String(value)
console.log(String(6.3)); // = "6.3"
console.log(String(null)); // = "null"

// ! Hàm Boolean
// ! Trả về 2 giá trị là True hoặc False
// * Boolean(value)
console.log(Boolean(0)); // False
console.log(Boolean("")); // False
console.log(Boolean(null)); // False
console.log(Boolean(NaN)); // False
console.log(Boolean(false)); // False
console.log(Boolean("kimthanh")); // True

// ! Type coercion
// ! Là chuyển đổi dữ liệu từ kiểu này sang kiểu khác
console.log(1 + 2); // = 3
// * Đối với Type coercion
// * Đặc biệt là phương thức "+"
// * Còn lại "- * /" thì đều bình thường

console.log(10 + "10"); //  = 1010
// Chuyển 10 (number) thành "10" (string) --> Áp dụng kết hợp chuỗi string nên ra kết quả = 1010

console.log("10" - 10); // = 0 --> Number("10") - 10
console.log(null + ""); // "null"
console.log(null + undefined); // NaN
console.log("" - 1); // Number("") --> 0 - 1 = -1
console.log(false - true); // 0 - 1 = -1
console.log(null + 10); // 0 + 10 = 10

// ! Toán tử so sánh
// * Bao gồm: < | > | <= | >=
console.log(5 > 7); // False
console.log(6 >= 6); // True

// ! Toán tử logic cơ bản: && || !
console.log(5 > 7 && 8 > 3); // False

// ! Học lại bài 23
// ! Toán tử == và ===
console.log(10 == "10"); // "10" == "10"
console.log(true == 1); // Number(true) = 1 --> 1 == 1 --> True
console.log(1 == "01"); // Number("01") --> 1 --> 1 = 1 --> True
console.log(null == ""); // "null" !== "" --> False
console.log(typeof 10); // number
console.log(typeof "10"); // string
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
console.log(true == "true"); // fasle
