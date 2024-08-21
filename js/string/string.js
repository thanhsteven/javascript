// String : chuỗi
"Hello word";
"My name is Thanh";
`I am frondtend developer`;
// double quotes, single quote, backticks (template literal)

const name = "Kim Thanh";
const job = "Frontend Developer";
console.log(name);
console.log(typeof name);

const newStr = "My name is Evondev and I am a frontend developer";
const newStr2 = "My name is " + name + " and I am a " + job;
console.log(newStr2);

const newStr3 = `My name is ${name} and I am a ${job} and 
I love conding.`;
console.log(newStr3);
console.log(newStr3.length);

//! Length : số lượng ký tự của 1 chuỗi, đếm từ số 0 trở đi (tính luôn số 0).
//! Index : là vị trí của từng ký tự trong chuỗi, bao gồm cả khoảng trắng.

const myStr = "Frontend Developer";

// * Ngăn cách 2 từ thành 1 mảng
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));

// * Chuyển về viết thường toàn bộ
console.log(myStr.toLowerCase());

// * Chuyển về viết in hoa toàn bộ
console.log(myStr.toUpperCase());

// * Kiểm tra ký tự đầu tiên có phải bắt đầu bằng từ trong () hay không --> Boolean
console.log(myStr.startsWith("Frontend"));

// * Kiểm tra ký tự cuối cùng có phải kết thúc bằng từ trong () hay không --> Boolean
console.log(myStr.endsWith("Developer"));

// * Kiểm tra xem trong chuỗi có chứa ký tự trong () hay không --> Boolean
console.log(myStr.includes("end"));
console.log(myStr.includes("abc"));

// * Đếm thứ tự xuất hiện đầu tiên của ký tự trong chuỗi
console.log(myStr.indexOf("D"));
console.log(myStr.lastIndexOf("t"));

// * Thay thế chuỗi
console.log(myStr.replace("Developer", "Designer"));

// * Lặp chuỗi
console.log(myStr.repeat(5));

// * Cắt chuỗi
console.log(myStr.slice(0, 8));
console.log(myStr.slice(0)); // ! Trường hợp lấy hết toàn bộ chuỗi luôn

// * Xóa khoảng trắng 2 đầu chuỗi
console.log(myStr.trim());
console.log(myStr.trimStart());
console.log(myStr.trimEnd());

// * ChartAt : Lấy ra ký tự thứ mấy trong chuỗi
console.log(myStr.charAt(7));

// ! Xong bài 11

// * substr --> Lấy ra 1 phần của chuỗi (string)
console.log(myStr.substr(1, 5));
// ! Lấy bắt đầu từ tính từ ký tự thứ 1 sau đó lấy tiếp 5 ký tự tiếp theo trong chuỗi
// ! substr(index, length) --> index: vị trí | Length: số lượng ký tự bạn muốn lấy

// * substring --> Lấy ra các ký tự của chuỗi (string)
console.log(myStr.substring(1, 5));
// ! Lấy từ ký tự thứ 1 đến ký tự thứ 5 của chuỗi
// ! substring(start index, end index) --> start index: thứ tự ký tự đầu tiên | end index: thứ tự ký tự cuối

// Loại bỏ khoảng trống 2 bên, đưa tất cả về in hoa, thay chữ "Developer D" thành chữ "Developer and Desinger", sau đó repeat lại 2 lần.
const myStr3 = "      Frontend Developer D       ";
console.log(
  myStr3
    .trim()
    .replace("Developer D", "Developer and Desinger")
    .toUpperCase()
    .repeat(2)
);
