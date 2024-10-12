/*
1. Tham số
    - Định nghĩa 
    - Kiểu dữ liệu
    - Tính private
    - Có thể có 1 tham số
    - Hoặc nhiều tham số

2. Truyền tham số
    - Truyền 1 tham số
    - Nhiều tham số

3. Arguments 
    - Đối tượng arguments
    - Giới thiệu vòng lặp For
*/

// * Cho một hàm function như sau:
// ! Trường hợp 1: Tham số
// => lúc này message là một THAM SỐ vì nó được gọi ra trong hàm và được sử dụng trong hàm.
function show() {
    console.log('đây là hack code');
};
// Khi được định nghĩa và gọi ra trong hàm thì nó là 1 tham số.
function writeLog(message) {
    console.log('đây là nội dung của tham số message');
};

// Toán tử Call() dùng để gọi hàm.
// Gọi hàm vừa khai báo ra. lúc này vẫn là tham số
writeLog();


// ! Trường hợp 2: Đối số
// - Message lúc này vẫn là tham số
function writeLog(message) {
    console.log(message);
};

// Khi gọi tới nó và truyền vào một giá trị thì gọi nó là đối số.
writeLog('message lúc này gọi là ĐỐI SỐ');

/*
    * Một số điều cần biết về FUNCTION

    1. Khi đặt function trùng tên 
    => thì cái function ở phía sau sẽ ghi đè lên cái trước và nó chỉ thực thi cái sau thôi.
    
    2. Khai báo biến trong hàm 
    => Vì tham số có tính private nên tham số trong hàm sẽ không được đọc ở ngoài hàm.
    => Quy tắc: biến trong hàm thì không nhìn thấy biến ngoài hàm.
    
    3. Định nghĩa hàm trong hàm
    => Có thể và thực thi bình thường
    => Và nó cũng sẽ có tính private giống như biến
*/

function showMessage() {
    console.log('Message 1');
};

function fullName() {
    var name = 'Kim Thanh';
    console.log(name);
};

fullName();

function question_3() {
    function showName() {
        console.log('Kim Thanh');
    };
    showName();
};
question_3();


/*
    * Các loại Function

    1. Declaration Function
    => Bắt buộc phải đặt tên

    2. Expression Function
    => Sử dụng toán tử gán =
    => Hoặc truyền function dưới dạng 1 tham số.
    => Hoặc truyền dưới dạng 1 object

    3. Arrow Function
*/

// Declaration Function
function showName() {
    console.log('Declaration Function');
};

// Expression Function
var showName_2 = function() {
    console.log('Expression Function');
};

setTimeout(function() {});

var myObject = {
    myFunction: function() {

    }
};