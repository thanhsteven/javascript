// * Cách 1 => Nên Dùng
var string = "Bé Châu là số 1";
// * Cách 2
var newString = new String("Bé Châu là số 1");

// * Lấy ký tự đầu của chuỗi
console.log(string[0]);
// * Lấy ký tự cuối của chuỗi
var kytucuoi = string.length - 1;
console.log(string[kytucuoi]);

console.log(string);
console.log(typeof string);
console.log(typeof newString);

var string = "Bé Châu là '\Siêu nhân\'";
console.log(string);

// * 1. length : Độ dài chuỗi => number
console.log(string.length);

// * 2. indexOf và lastIndexOf : tìm vị trí của ký tự trong chuỗi => number
var str1 = "Bé Châu đi mua bánh tráng, bánh bò, bánh tiêu, hột vịt lộn, bún mắm nêm, bún riêu, bún bò,...";
console.log(str1.indexOf("bánh"));
// Trả về vị trí từ "bánh" đầu tiên được tìm thấy.
// Để tìm từ "bánh" thứ 2 thì cần phải nhập thêm tham số thứ 2 vào.
// Tham só thứ 2 là vị trí mình muốn bắt đầu tìm kiếm.
console.log(str1.indexOf("bánh",20));

// lastIndexOf tìm 1 chuỗi con ở vị trí cuối cùng trong 1 chuỗi cha.
console.log(str1.lastIndexOf("bánh"));

// * 3. Search : Tìm vị trí 1 chuỗi con từ chuỗi cha. => number
var string = "Bé Châu thần thánh";
console.log(string.search("thần"));

// * 4. Slice : cắt chuỗi => string
console.log(string.slice(0)); // Cắt từ đầu đến cuối chuỗi.
console.log(string.slice(4,8)); // Cắt từ vị trí thứ 4 đến thứ 8.
console.log(string.slice(-14,-4)); // Cắt từ phải qua trái.

// * 5. Replace : thay thế 1 chuỗi con vào chuỗi cha => string
console.log(string.replace("thần thánh","là siêu nhân"));
string.replace("thần thánh","là siêu nhân");
console.log(string);

var sts = "Hôm nay tôi đi học";
var srt = sts.replace("Hôm nay","Ngày mai");
console.log(srt);

// * 6. Convert to Upper/Lower Case
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// * 7. Split : Biến 1 chuỗi thành Array => array
// * Phải có 1 thành phần chung trong chuỗi để tách ra thành các phần tử của array.
var lang = "javascript, php, ruby, dart, angular, reactjs, nodejs";
// * Thành phần chung là dấu ",".
console.log(lang.split(","));

// * 8. ChartAt : Lấy 1 ký tự ra từ 1 chuỗi => string
var sts = "Hôm nay tôi đi học";
// Cách ghi 1
console.log(sts.charAt(8));
// Cách ghi 2
console.log(sts[9]);

// * 10. Concat : 
var str3 = "Hôm nay";
var str4 = "tôi đi học";
console.log(str3.concat(" ",str4));

// * 11. substr và substring: Cắt chuỗi từ 1 chuỗi => string
// Cú pháp: string.substr(start, length)
var sts = "Hôm nay tôi đi học";
console.log(sts.substr(1,5));
// Không điền tham số thì nó lấy hết chuỗi
console.log(sts.substr());


// * 12 includes : kiểm tra chuỗi có chứa ký tự => boolean
console.log(sts.includes("Hôm"));

// * 13. startWidth và endWidth : kiểm tra xem chuỗi có bắt đầu từ 1 chuỗi con hay không. => boolean
var stu = "Hôm nay chúng ta đi công viên";
console.log(stu.startsWith("Ngày"));
console.log(stu.endsWith("Hôm nay"));
console.log(stu.startsWith("H"));
console.log(stu.endsWith("công viên"));