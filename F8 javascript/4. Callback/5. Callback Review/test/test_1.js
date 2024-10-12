// ! Dạng thứ 1 : Gọi trực tiếp bằng hàm
// Xay dung Ham Tinh Tong
function Dang_1_TongHaiSo(a, b) {
    return a + b;
};

// Xay dung Ham Tinh Tong theo dang Callback
function TinhTong(a, b, Callback) {
    return Callback(a, b);
};

// Gọi hàm trực tiếp
let tong = TinhTong(5, 9, Dang_1_TongHaiSo);
// => Gọi hàm để trả giá trị ra
console.log('Tong 1 = ', tong);




// ! Dạng thứ 2 : Hàm dạng Callback
// Tính toán trả giá trị cho Callback
// => Tính toán thẳng luôn bên trong hàm chứ không gọi trực tiếp ra như dạng 1
function Dang_2_TongHaiSo(a, b, Callback) {
    let tong = a + b;
    Callback(tong);
};

// Gọi Hàm
Dang_2_TongHaiSo(3,7, function (result) {
    console.log('Tong 2 = ',result);
});