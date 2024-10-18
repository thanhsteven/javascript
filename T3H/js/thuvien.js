// * Hàm Chuẩn hoá chuỗi - thầy
function chuan_hoa_chuoi(chuoi) {
  chuoi_tam = chuoi.trim();
  do {
    chuoi_tam = chuoi_tam.replace("  ", " ");
    var vt = chuoi_tam.indexOf("  ");
  } while (vt >= 0);
  return chuoi_tam;
}

let Duong_dan_Du_lieu = "./Du_lieu";

// Đọc dữ liệu
function Doc_tap_tin(tapTin) {
  let Dia_chi_Xu_ly = `${Duong_dan_Du_lieu}/${tapTin}`;
  let Xu_ly_HTTP = new XMLHttpRequest();
  Xu_ly_HTTP.open(`GET`, `${Dia_chi_Xu_ly}`, false);
  Xu_ly_HTTP.send();
  let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim();
  return Chuoi_ket_qua;
}
