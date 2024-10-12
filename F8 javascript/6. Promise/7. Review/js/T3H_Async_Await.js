// Async Await

// Xây dựng hàm Tổng 2 số với Prmosie trước
function TongHaiSo(a, b) {
    return new Promise((resolve, reject) => {
        let tong = Number(a) + Number(b);
        resolve(tong);
    });
};

// Xây dựng hàm tính tổng với Async Await
async function TinhTong(a, b) {
    let ketqua = await TongHaiSo(a, b);
    console.log(ketqua);
};

// Goi Ham
TinhTong(8, 9);


// Xây dựng hàm tìm số lớn nhất của 2 số
function TimSoLon(a, b) {
    return new Promise((resolve, reject) => {
        let ketqua = a > b ? a : b;
        resolve(ketqua);
    });
};

async function SoLonNhat(a, b, c) {
    let ketqua = await TimSoLon(a,b);
    let ketqua_1 = await TimSoLon(ketqua, c);
    console.log(`Số lớn nhất của ${a} và ${b} là : ${ketqua}`);
    console.log(`Số lớn nhất của ${ketqua} và ${c} là ${ketqua_1}`);
};

// Gọi Hàm
SoLonNhat(43,67,98);



