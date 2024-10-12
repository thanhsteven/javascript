// Return trong hàm
// Return sẽ trả về kết quả của hàm và thoát khỏi hàm.
// Return có thể trả về bất cứ các kiểu dữ liệu gì.

function cong(a,b) {
    return a + b; // Nếu đặt return ở đây thì tất cả các dòng code bên dưới sẽ không được thực thi
    console.log(123);
    alert('Hello');
};

var result = cong(4,5);
console.log(result);