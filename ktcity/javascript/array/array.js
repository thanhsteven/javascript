// ! Array : Mảng - là một danh sách chứa nhiều giá trị hoặc phần tử trong đó
// * Có 2 cách tạo mảng cần biết:
// Array Literal
const student01 = ["kim thanh", 1200, null, true];
// Array Constructor
const student02 = new Array();
// Ví dụ về mảng
// Mảng đơn giản [null, 0, "kim thanh", flase]
// Mảng phức tạp [null, 0, "kim thanh", flase, ["kim thanh 2", 100, null, true]]
console.log(student01);
// * index: vị trí của phần tử (giá trị) trong mảng và bắt đầu từ 0 --> index chạy từ 0.
// * length: độ dài của mảng, bắt đầu đếm từ 1 --> số lượng các phần tử.

// Để truy xuất mảng thì dựa vào index --> student01[index]
console.log(student01.length);
console.log(student01[1]); // 1200
console.log(student01[5]); // undefine
// * Để lấy được phần tử cuối cùng trong mảng, thì ta dùng length
// Phương thức hay dùng của mảng nên biết
// length : trả về số lượng phần tử trong mảng
console.log(student01.length);
console.log(student01[student01.length - 1]);

const student03 = ["1", "2", "3", "4", "5"];

console.log("----Mảng nguyên bản-----");
console.log(student03);

// * reverse -> đảo ngược lại giá trị trong mảng
console.log("----array.reverse----");
console.log(student03.reverse());

// * join -> nối các phần tử trong mảng thành string
console.log("----array.join-----");
console.log(student03.join("-"));

// * indexOf -> Trả về vị trí của phần tử tìm thấy đầu tiên
console.log("-----array.indexOf-----");
console.log(student01);
console.log(student01.indexOf("kim thanh"));

// * lastIndexOf -> trả về vị trí của phần tử tìm thấy cuối cùng
console.log("-----array.lastIndexOf-----");
console.log(student03);
console.log(student03.lastIndexOf("4"));

const student04 = ["thành", "châu", "tuấn", "hân"];

// * push -> thêm phần tử vào cuối mảng
console.log("-----array.push-----");
console.log(student04.push("ngọc"));
console.log(student04);

// * unshift -> thêm phần tử vào đầu mảng
console.log("-----array.unshift-----");
console.log(student04.unshift("tùng"));
console.log(student04);

// * include -> kiểm tra trong mảng có phần tử x hay không
console.log("-----array.include-----");
console.log(student04.includes("tùng")); // true

// * pop -> xoá phần tử cuối cùng trong mảng và trả kết quả là phần tử đó
console.log("-----array.pop-----");
console.log(student04.pop());
console.log(student04);

// * shift -> xoá phần tử đầu tiên trong mảng và trả kết quả là phần tử đó
console.log("-----array.shift-----");
console.log(student04.shift());
console.log(student04);

const animals = ["tiger", "lion", "horse", "elephant"];
