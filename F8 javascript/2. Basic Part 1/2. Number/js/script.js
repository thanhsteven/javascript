// * Cách khai báo số
// * Cách 1
var million = 1000000; 
var million = 1e6;

// * Cách 2
var numberNew = new Number(1000);

// => Nên dùng cách 1
// => Nếu dùng 1 số mà chia cho một chuỗi thì nó ra kết quả là NaN
var result = 30 / 'ABC';
console.log(result);
// Kết quả là NaN. Đây là một số không hợp lệ.

// ? Cách kiểm tra số hợp lệ hay không ?
console.log(isNaN(result));
// => Kết quả là true thì có nghĩa là biến result chính là một số không hợp lệ
// => Ngược lại nếu mình chuyển sang một phép chia hợp lệ thì hàm isNaN sẽ ra kết quả là false
var result2 = 30 / 3;
console.log(isNaN(result2));


// * Làm việc với Number
var age = 19;
var PI = 3.14;

// *  chuyển đổi từ number sang chuỗi
console.log(age.toString());

// *  làm tròn số, làm tròn phía sau dấu phẩy.
// *  Đồng thời chuyển thành kiểu dữ liệu là String.
// *  Tham số trong toFixed() là làm tròn bao nhiêu số sau dấu phẩy.
// ! Khi ghi như vầy có nghĩa là toFixed() thì như vậy nó sẽ chạy mặc định là toFixed(0) và chuyển thành kiểu dữ liệu string
console.log(PI.toFixed());
console.log(isNaN(PI));

// Cho trước biến number có giá trị là một số bất kì.
// Hãy kiếm tra xem number có phải là số nguyên dương hay không và lưu kết quả vào biến result.
function run(number) {
    if (Number.isInteger(number) == true && number > 0) {
        result = true
    } else {
        result = false
    }
    return result;
}