// Hàm đọc dữ liệu
let Duong_dan_Du_lieu = "dulieu";
function Doc_Tap_tin(tapTin) {
    let Dia_chi_Xu_ly = `${Duong_dan_Du_lieu}/${tapTin}`;
    let Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open(`GET`,`${Dia_chi_Xu_ly}`,false); // Đồng bộ
    Xu_ly_HTTP.send();
    let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim(); // Nội dung trả về
    return Chuoi_ket_qua;
}

// Hàm chuẩn hóa chuỗi
function Chuan_hoa_chuoi(chuoi) {
    chuoi_tam = chuoi.trim();
    do {
        chuoi_tam = chuoi_tam.replace("  ", " ");
        var vt = chuoi_tam.indexOf("  ");
    } while (vt >= 0) {
        return chuoi_tam;
    }
}

// Hàm xuất danh sách
function Xuat_danh_sach(danhsach) {
    let html = ``;
    for (let i = 0; i <= danhsach.length - 1; i++) {
        html += `
        <div class="khung">
            <h4>Tên: ${danhsach[i].Ten}</h4>
            <p>Giá Bán: ${danhsach[i].Don_gia_Ban}</p>
            <p>Ký Hiệu: ${danhsach[i].Ma_so}</p>
            <p>Nhãn Hiệu: ${danhsach[i].Nhom.Ten}</p>
        </div>`;
    };
    return html;
};