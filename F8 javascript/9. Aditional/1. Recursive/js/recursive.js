// Đệ qui
// là một cái hàm được chính nó gọi lại chính nó => đấy là đệ qui

// function deQuy() {
//     //=> Đây chính là đệ quy
//     deQuy();
// };

// deQuy();

// ! Hàm đệ quy này sẽ chạy liên tục không bao giờ ngừng.
// ! Nên dễ dẫn đến tình trạng lỗi tràn stack vì stack có giới hạn.
// ! Uncaught RangeError: Maximum call stack size exceeded

// Nếu dùng vòng lặp thì chỉ tốn CPU để giải
// Nếu dùng đệ quy thì tốn RAM

// Vấn đề của Đệ quy
// 1. Xác định được điểm dừng 
// 2. Logic Handle => Logic này phải tạo ra điểm dừng cho hàm.

// ! Ví dụ :

function deQuy2(num) {
    if (num < 0) {
        // Dừng
        // Xử lý logic
        return num;
    };
    deQuy2();
};
// deQuy2(10);


// Hàm Countdown
function CountDown(num) {
    if (num > 0) {
        console.log(num);
        // Gọi lại CountDown với num = num - 1
        // Đọc lại từ đầu
        return CountDown(num - 1);
    };
    return num;
};
CountDown(5);


// Tạo vòng lặp bằng đệ quy
function loop(start, end, callback) {
    if (start < end) {
        callback(start);
        return loop(start + 1, end, callback);
    };
};

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length, function (index) {
    console.log(array[index]);
});

// Tính giai thừa của 3
// 3 * 2 * 1 = 6
// 6 * 5 * 4 * 3 * 2 * 1 = 720

// Thông thường
function giaiThua(num) {
    var output = 1;
    for (var i = num; i > 0; i--) {
        output = output * i;
    };
    return output;
};

console.log('Vòng lặp : ' + giaiThua(6));

// Dùng Đệ Quy
function giaiThua2(number) {
    if (number > 0) {
        return number * giaiThua2(number - 1);
    };
    return 1;
};

console.log('Đệ Quy : ',giaiThua2(6));