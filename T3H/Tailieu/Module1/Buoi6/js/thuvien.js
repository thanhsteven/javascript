// Đọc dữ liệu
let Duong_dan_Du_lieu = "dulieu";
let urlServer = "http://localhost:8080";

// Điện Thoại
function apiDanh_sach_Dien_Thoai() {
    let Dia_chi_Xu_ly = "dsDienThoai";
    let Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open(`GET`, `${urlServer}/${Dia_chi_Xu_ly}`, false); // Đồng bộ
    Xu_ly_HTTP.send();
    let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim(); // Nội dung trả về
    return JSON.parse(Chuoi_ket_qua);
}

// Tivi
function apiDanh_sach_Tivi() {
    let Dia_chi_Xu_ly = "dsTivi";
    let Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open(`GET`, `${urlServer}/${Dia_chi_Xu_ly}`, false); // Đồng bộ
    Xu_ly_HTTP.send();
    let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim(); // Nội dung trả về
    return JSON.parse(Chuoi_ket_qua);
}

// Mặt Hàng
function apiDanh_sach_Mat_Hang() {
    let Dia_chi_Xu_ly = "dsMatHang";
    let Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open(`GET`, `${urlServer}/${Dia_chi_Xu_ly}`, false); // Đồng bộ
    Xu_ly_HTTP.send();
    let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim(); // Nội dung trả về
    return JSON.parse(Chuoi_ket_qua);
}
