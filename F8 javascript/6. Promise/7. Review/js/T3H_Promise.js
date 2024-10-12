// Xây dựng hàm Tính tổng theo dạng Promise
function TongHaiSo(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject('Du lieu khong hop le');
        } else {
            let tong = a + b;
            resolve(tong);
        };
    });
};

// Gọi ham
let a = 5;
let b = 4;
TongHaiSo(a, b).then(function (result) {
    console.log(`${a} + ${b} = ${result}`);
}).catch(function (error) {
    console.log(`Error : ${error}`);
});


// Xây dựng hàm Diện tích và Chu vi HCN
function HCN_arr(dai, rong) {
    return new Promise((resolve, reject) => {
        if (isNaN(dai) || isNaN(rong)) {
            reject('Du lieu khong hop le');
        } else {
            let dientich = Number(dai) * Number(rong);
            let chuvi = (Number(dai) + Number(rong)) * 2;
            resolve([dientich, chuvi]);
        };
    });
};

HCN_arr(9, 7).then((result) => {
    console.log(`Dien tich = ${result[0]} - Chu vi = ${result[1]}`);
}).catch((error) => {
    console.log(`Error : `, error);
});

// ! Câu hỏi:
// - resolve, reject có thể chứa hàm không ? Nó là gì ?

/*
function HCN_obj(dai, rong) {
    return new Promise( (resolve, reject) => {
        reject( (dai, rong) => {
            if (isNaN(dai) || isNaN(rong)) {
                console.log('Du lieu khong hop le');
            }
        });
        resolve( (dai, rong) => {
            let dientich = Number(dai) * Number(rong);
            let chuvi = (Number(dai) + Number(rong) * 2);
            return {"Dien tich" : dientich, "Chu vi" : chuvi};
        });
    });
};


HCN_obj(8,12).then( (result) => {
    console.log(`Dien tich = ${result.dientich} - Chu vi = ${result.chuvi}`);
}).catch( (error) => {
    console.log(`Error : `, error);
});
*/


function HCN_obj(dai, rong) {
    return new Promise((resolve, reject) => {
        if (isNaN(dai) || isNaN(rong)) {
            reject('Du lieu khong hop le');
        } else {
            let dientich = Number(dai) * Number(rong);
            let chuvi = (Number(dai) + Number(rong)) * 2;
            resolve({ "Dien tich": dientich, "Chu vi": chuvi });
        };
    });
};

HCN_obj(6, 9).then((result) => {
    console.log(`Dien tich = ${result["Dien tich"]} - Chu vi = ${result["Chu vi"]}`);
}).catch((error) => {
    console.log(`Error : `, error);
});


// Xây dựng hàm tìm số lớn của 2 số
function TimSoLon(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject('Du lieu khong hop le');
        } else {
            let ketqua = a > b ? a : b;
            resolve(ketqua);
        };
    });
};

TimSoLon(23, 39).then((result) => {
    TimSoLon(result, 89).then((result) => {
        console.log(`So lon nhat = ${result}`);
    }).catch((error) => {
        console.log(`Error : ${error}`);
    });
}).catch((error) => {
    console.log(`Error : ${error}`);
});