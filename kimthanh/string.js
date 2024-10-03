let fullName = "Phạm Kim Thành";
let birthday = "24/01/1996";

let lastName = "Phạm";
let middleName = "Kim";
let firstName = "Thành";

// * Chuyển string thành array
let arrName = fullName.split(" ");
let arrBirthDay = birthday.split("/");

console.log(`${lastName} ${middleName} ${firstName}`);
console.log("Độ dài ký tự = " + fullName.length);
console.log(arrName);
console.log(arrBirthDay);

// * Viết hoa toàn bộ ký tự và viết thường trong string
let text1 = fullName.toUpperCase();
text1 = fullName.toLowerCase();
console.log(text1);

let text2 = "nguyễn huỳnh bé châu";

// * Kiểm tra "đầu" và "cuối" trong string
console.log(text2.startsWith("nguyễn")); // -> true
console.log(text2.endsWith("châu")); // -> true

// * Kiểm tra trong chuỗi có chứa chuỗi text nào không ?
console.log(text2.includes("bé")); // -> true

let text3 = "     Hello, how are you? Hello again!        ";
text3 = text3.trimEnd().trimStart();

// * Đếm thứ tự xuất hiện đầu tiên trong chuỗi
console.log(text3.toLowerCase().indexOf("hello", 2));
// * Đếm thứ tự xuất hiện cuối cùng trong chuỗi
console.log(text3.toLowerCase().lastIndexOf("hello"));

// * Thay thế chuỗi
console.log(text3.replace("Hello", "Hi"));

// * Cắt chuỗi - Lặp chuỗi
console.log(text3.slice(5, 20));
console.log(text3.slice(0));

// * Xóa khoảng trắng 2 đầu chuỗi
console.log(text3.trim());

// * Lấy ra ký tự thứ n trong chuỗi
console.log(text3.charAt(15));
console.log(text3.charAt(10));

// * Lấy ra 1 phần của chuỗi
let text4 = "JavaScript is awesome";
// - substr(start, length)
console.log(text4.substr(0, 10));
// - substring(start, [end])
console.log(text4.substring(10));

/*
- toLowerCase()
- toUpperCase()
- startsWith()
- endsWith()
- includes()
- indexOf()
- lastIndexOf()
- replace()
- repeat()
- slice(start, [end])
- trim()
- trimStart()
- trimEnd()
- substr()
- substring(start, [end])
*/
