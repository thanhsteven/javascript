// Đường dẫn
let Duong_dan_Du_lieu = "dulieu";
let urlServer = "http://localhost:8080";

// Đọc file
function api_Danh_sach_Dien_Thoai() {
    let Dia_chi_Xu_ly = "dsDienthoai";
    let Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open("GET", `${urlServer}/${Dia_chi_Xu_ly}`, false);
    Xu_ly_HTTP.send();
    let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim();
    return JSON.parse(Chuoi_ket_qua);
};

function api_Danh_sach_Tivi() {
    let Dia_chi_Xu_ly = "dsTivi";
    let Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open("GET", `${urlServer}/${Dia_chi_Xu_ly}`, false);
    Xu_ly_HTTP.send();
    let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim();
    return JSON.parse(Chuoi_ket_qua);
};

function api_Danh_sach_Mat_Hang() {
    let Dia_chi_Xu_ly = "dsMatHang";
    let Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open("GET", `${urlServer}/${Dia_chi_Xu_ly}`, false);
    Xu_ly_HTTP.send();
    let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim();
    return JSON.parse(Chuoi_ket_qua);
};