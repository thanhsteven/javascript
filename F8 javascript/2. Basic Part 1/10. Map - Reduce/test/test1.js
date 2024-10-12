let Danh_sach_Tivi = [
    { "Ma_so": "LG", "Ten": "Tivi LG", "Don_gia": 500000 },
    { "Ma_so": "SAMSUNG", "Ten": "Tivi Samsung", "Don_gia": 150000 },
    { "Ma_so": "TOSHIBA", "Ten": "Tivi Toshiba", "Don_gia": 650000 },
    { "Ma_so": "PANASONIC", "Ten": "Tivi Sony", "Don_gia": 450000 },
    { "Ma_so": "SKYWORTH", "Ten": "Tivi Sony", "Don_gia": 550000 },
    { "Ma_so": "KHÁC", "Ten": "Tivi Khác", "Don_gia": 250000 }
];


// Map
var bien_Map = Danh_sach_Tivi.map(function (item) {
    return { "Ma_so": item.Ma_so, "Ten": `Tivi ${item.Ma_so}`, "Don_gia": item.Don_gia };
});
console.log(bien_Map);

// Tìm sản phẩm lỗi và sửa lại
var ds_san_pham_loi = Danh_sach_Tivi.filter(function (item) {
    if (item.Ten.toLowerCase().includes(item.Ma_so.toLowerCase()) === false) {
        return item;
    };
});
var sua_san_pham = ds_san_pham_loi.map(function (item) {
    return { "Ma_so": item.Ma_so, "Ten": `Tivi ${item.Ma_so}`, "Don_gia": item.Don_gia };
});
console.log(sua_san_pham);

var new_Ds_Tivi = Danh_sach_Tivi.map(function (tivi) {
    return { "Ma_so": tivi.Ma_so, "Ten": tivi.Ten, "Don_gia": tivi.Don_gia, "Don_gia_nhap" : tivi.Don_gia - 50000 }
});
console.log(new_Ds_Tivi);

// Reduce
// Tính tổng giá bán
var bien_reduce = Danh_sach_Tivi.reduce(function (tong_GiaBan, currentValue) {
    return tong_GiaBan += currentValue.Don_gia;
}, 0);
console.log('Tổng giá bán = ' + bien_reduce);

