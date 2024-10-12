// 1. là hàm
// 2. Được truyền qua đối số => Được truyền dưới dạng 1 đối số
// 3. Phải được gọi lại trong cái hàm nhận đối số

// Hàm bình thường
function myFunction(param) {
    if (typeof param === 'function') {
        console.log(typeof param);
        param('Học lập trình tại f8');
    }
    
    else {
        console.log('lỗi function');
    }
    // Viết như vậy chẳng khác nào gọi thẳng myCallback vào cả
};

// Ham Callback
function myCallback(value) {
    console.log('Value = ', value);
};

myFunction(123);

// khi gọi như vậy thì thằng param = myCallback
// myCallback(123)
// lúc này hàm myCallback đã chính thức trở thành Callback


// ! Tóm lại
function ham_binh_thuong(param) {
    console.log('param = ',typeof param);
    param('hello');
};

function ham_Callback(value) {
    console.log('value = ', value);
};

ham_binh_thuong(ham_Callback);