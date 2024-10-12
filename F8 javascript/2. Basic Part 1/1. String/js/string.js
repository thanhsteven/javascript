// * Cách tạo chuỗi
// Cách 1
var fullName = "Kim Thành";
// => Dùng cách 1

// Cách 2
var name = new String("Xin chào Kim Thành");
// => Tạo ra kiểu dữ liệu là object.

var fullName = 'Kim Thành là \"siêu nhân\"';
var fullName = 'đây là dấu \\';
// => Đây là dấu backslash: \ --> phía trên nút enter
// => Sử dụng dấu gạch chéo để nhận dạng dấu '' và \ trong chuỗi.
console.log(fullName);

// *  Độ dài chuỗi
// *  Số các ký tự trong 1 chuỗi.
console.log(fullName.length);

// * Template String
var firstName = "Kim";
var lastName = "Thành";
console.log(`Tôi là : ${firstName} ${lastName}`);

// *  Làm việc với chuỗi
var myString = "Học lập trình JS JS JS tại F8!";
var myNewString = "Tôi là một Digital Marketing và Frontend Developer";

// *  1. Length
console.log('myString.lenght =',myString.length);
console.log("myNewString.length = ",myNewString.length);

// *  2. Find Index : tìm được vị trí của một ký tự nằm trong 1 chuỗi
// Tìm chữ JS có vị trí là bao nhiêu trong chuỗi ?
console.log('Js có vị trí là: ',myString.indexOf('JS'));
console.log(myNewString.indexOf("Digital Marketing"));
// => Nếu mà không tìm được chữ JS thì nó sẽ cho ra kết quả là -1.
console.log('Js thứ 2 có vị trí là: ',myString.indexOf('JS',20));
console.log(myString.indexOf("JS",14));
console.log("JS vị trí cuối cùng là: ",myString.lastIndexOf('JS'));

// *  Có thể dùng search để tìm kiếm vị trí thứ tự giống như indexOf
console.log(myString.search('JS'));
// Thằng search này không cho phép sử dụng thêm tham số thứ 2.
// Search chỉ hỗ trợ chúng ta tìm kiếm theo biếu thức chính qui.

// *  3. Cut String : cắt chuỗi
console.log(myString.slice(5,8)); // Cắt từ vị trí thứ 5 tới vị trí thứ 8.
console.log(myString.slice(5)); // Cắt từ vị trí thứ 5 đến hết.
console.log(myString.slice(0)); // Cắt từ đầu đến cuối của chuỗi theo chiều từ trái sang phải.
console.log(myString.slice(-3, -1)); // cắt theo chiều từ phải sang trái.

// *  4. Replace
console.log(myString.replace('JS','Javascript'));
// Tuy nhiên trong trường hợp có nhiều chữ JS thì nó chỉ thay chữ đầu tiên từ trái sang mà nó tìm được.
// Trong trường hợp nếu có nhiều chữ JS thì chúng ta phải sử dụng biểu thức chính quy.
console.log(myString.replace(/JS/g,'Javascript'));
// ! /JS/g là biểu thức chính quy giúp lấy được toàn bộ chữ JS trong string.

// *  5. Convert to Upercase : Chuyển chữ cái đầu thành chữ in hoa.
console.log(myString.toUpperCase());
// *  6. Convert to lowercase : Chuyển chữ hoa thành chữ thường.
console.log(myString.toLowerCase());

// *  7. Trim : loại bỏ các khoảng trắng thừa trong chuỗi
console.log(myString.trim());

// *  8. Split : cắt 1 chuỗi thành 1 array
var languages = 'Javacsript, PHP, Ruby';
console.log(languages.split(','));

// *  9. Get a character by index : lấy ra 1 chữ cái trong một 1 chuỗi.
var myString2 = 'Kim Thành';
// Cách ghi cũ
console.log(myString2.charAt(8)); // Kq ra chữ "h".
console.log(myString2.charAt(20)); // Kq ra 1 chuỗi rỗng.
// Cách ghi mới
console.log(myString2[8]);
