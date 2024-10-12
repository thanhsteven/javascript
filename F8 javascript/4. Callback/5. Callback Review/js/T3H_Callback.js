// Callback : Hàm gọi hàm => callback
// Hàm A sau khi xử lý thì gọi hàm B bên trong Hàm A

function Ham_A(thamso1, thamso2, callback) {
    // Xử lý và gọi hàm Callback
};

// ! lưu ý:
// - Thamso1 và Thamso2 là tham số hình thức (đối số)
// - Callback phải là dạng hàm

// -------------------------------------------------------------------- //

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
Dang_2_TongHaiSo(3, 7, function (result) {
    console.log('Tong 2 = ', result);
});

console.log('-------------------------------------');


// Xây dựng hàm tính Diện tích và Chu vi HCN
// Dạng 1
function Dientich_HCN(dai, rong) {
    return Number(dai) * Number(rong);
};
function Chuvi_HCN(dai, rong) {
    return (Number(dai) + Number(rong)) * 2;
};
// Goi ham
let dt = Dientich_HCN(8, 4, Dientich_HCN);
console.log('Dien tich = ', dt);
let cv = Chuvi_HCN(8, 4, Chuvi_HCN);
console.log('Chu vi = ', cv);


console.log('-------------------------------------');


// Dạng 2
function HCN(dai, rong, callback) {
    let dientich = Number(dai) * Number(rong);
    let chuvi = (Number(dai) + Number(rong)) * 2;
    callback(`Dien tich = ${dientich} - Chu vi = ${chuvi}`);
};
// Goi ham
HCN(8, 4, (result) => {
    console.log(result);
});


// Hoac
function HCN_2(dai, rong, callback) {
    let dientich = Number(dai) * Number(rong);
    let chuvi = (Number(dai) + Number(rong)) * 2;
    callback(dientich, chuvi);
};
// Goi ham
HCN_2(9, 5, (dt, cv) => {
    console.log(`Dien tich = ${dt} - Chu vi = ${cv}`);
});

// => Dạng 2 ngắn gọn hơn => Dùng dạng 2

console.log('-------------------------------------');

// Xây dựng hàm tìm số lớn số bé
// Dạng 2
function TimSoLon(a, b, callback) {
    let ketqua = a > b ? a : b;
    callback(ketqua);
};

TimSoLon(13,21, (kq) => {
    TimSoLon(kq, 32, (kq) => {
        console.log('So lon nhat = ',kq);
    });
});
