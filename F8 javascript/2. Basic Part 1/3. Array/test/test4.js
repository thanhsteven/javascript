// Đối tượng
let Danh_sach_Nhom_Tivi = [
    { "Ma_so": "LG", "Ten": "Tivi LG", "Don_gia": 500000 },
    { "Ma_so": "SAMSUNG", "Ten": "Tivi Samsung", "Don_gia": 150000 },
    { "Ma_so": "SONY", "Ten": "Tivi Sony", "Don_gia": 450000 },
    { "Ma_so": "SONY", "Ten": "Tivi Sony", "Don_gia": 450000 },
    { "Ma_so": "SONY", "Ten": "Tivi Sony", "Don_gia": 450000 },
    { "Ma_so": "KHAC", "Ten": "Tivi Khác", "Don_gia": 250000 }
];

function Xuat(Danhsach) {
    Danhsach.forEach(tivi => {
        console.log(`Mã số: ${tivi.Ma_so}, Tên: ${tivi.Ten}, Đơn giá: ${tivi.Don_gia}`);
    });
};
Xuat(Danh_sach_Nhom_Tivi);

Danh_sach_Nhom_Tivi.forEach(function (tivi) {
    console.log(`${tivi.Ma_so} - ${tivi.Don_gia}`);
});


// Mảng
let dsSo = [1, 2, 3, 4, 5];
let tinhTong = function (Danhsach) {
    let ketqua = 0;
    Danhsach.forEach(function (item) {
        ketqua += item;
    });
    return ketqua;
};
console.log(tinhTong(dsSo));

// Gọi hàm
let ketqua = tinhTong(dsSo);
console.log(`Tổng : ${dsSo.join()} là : ${ketqua}`);

let masoTivi = "SAMSUNG";
let tenTivi = "";

switch (masoTivi) {
    case "LG":
        tenTivi = "Tivi LG";
        break
    case "SAMSUNG":
        tenTivi = "Tivi SAMSUNG";
        break
    case "SONY":
        tenTivi = "Tivi SONY";
        break
    default:
        tenTivi = "Khac";
};

console.log(`Tên tivi : ${tenTivi}`);

let tiviTosiba = { "Ma_so": "TOSHIBA", "Ten": "Tivi TOSHIBA", "Don_gia": 1500000 };
Danh_sach_Nhom_Tivi.push(tiviTosiba);
console.log(Danh_sach_Nhom_Tivi);




// Sắp xếp số
Danh_sach_Nhom_Tivi.sort(function (a, b) {
    return Number(b.Don_gia) - Number(a.Don_gia);
});



// Sắp xếp theo chuỗi
Danh_sach_Nhom_Tivi.sort(function (a, b) {
    a.Ma_so.localeCompare(b.Ma_so);
});

Danh_sach_Nhom_Tivi.forEach((tivi) => {
    console.log(`${tivi.Ma_so} - ${tivi.Don_gia}`);
});

// ! Nếu có từ khóa là function thì dùng từ khóa return để trả ra kết quả
let gtri_tim = "s";

// let kqua_tim = Danh_sach_Nhom_Tivi.find(x => x.Ma_so == "SONY");
// let kqua_tim = Danh_sach_Nhom_Tivi.find(function(x) {
//     return x.Ma_so == "SONY";
// });
// console.log(kqua_tim);


// let kqua_tim = Danh_sach_Nhom_Tivi.findIndex(x => x.Ma_so == "SONY");
// let kqua_tim = Danh_sach_Nhom_Tivi.findIndex(function(x) {
//     return x.Ma_so == "SONY";
// });
// console.log(kqua_tim);

// let dsLoc = Danh_sach_Nhom_Tivi.filter(x => x.Ma_so.toLowerCase().includes(gtri_tim.toLowerCase()));
let dsLoc = Danh_sach_Nhom_Tivi.filter(function (x) {
    return x.Ma_so.toLowerCase().includes(gtri_tim.toLowerCase());
});
if (dsLoc.length > 0) {
    console.log(dsLoc);
} else {
    console.log('khong tim thay');
};

