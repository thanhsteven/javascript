let Duong_dan_Du_lieu = "./Dulieu";
// Đọc dữ liệu
function Doc_tap_tin(tapTin) {
  let Dia_chi_Xu_ly = `${Duong_dan_Du_lieu}/${tapTin}`;
  let Xu_ly_HTTP = new XMLHttpRequest();
  Xu_ly_HTTP.open(`GET`, `${Dia_chi_Xu_ly}`, false);
  Xu_ly_HTTP.send();
  let Chuoi_ket_qua = Xu_ly_HTTP.responseText.trim();
  return Chuoi_ket_qua;
}

function dinh_dang_so(number) {
  let chuoi_so = number.toString().replace(/\D/g, "");
  return chuoi_so.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}

