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