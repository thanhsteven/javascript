// * Hàm chuẩn hoá chuỗi
function chuan_hoa_chuoi(chuoi) {
  let chuoi_tam = chuoi.trim().toLowerCase();
  while (chuoi_tam.indexOf("  ") >= 0) {
    chuoi_tam = chuoi_tam.replace("  ", " ");
  }
  return chuoi_tam;
}

// * Hàm chuyển dấu tiếng việt
function bo_dau_tieng_viet(chuoi) {
  let chuoi_tam = chuan_hoa_chuoi(chuoi);
  return chuoi_tam
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9 ]/g, "");
}

// * HÀM VIẾT IN HOA TOÀN BỘ
function viet_in_hoa_toan_bo(chuoi) {
  let chuoi_tam = chuan_hoa_chuoi(chuoi);
  return chuoi_tam.toUpperCase();
}

// * hàm viết thường toàn bộ
function viet_thuong_toan_bo(chuoi) {
  let chuoi_tam = chuan_hoa_chuoi(chuoi);
  return chuoi_tam.toLowerCase();
}

// * Hàm viết hoa đầu câu
function viet_hoa_dau_cau(chuoi) {
  let chuoi_tam = chuan_hoa_chuoi(chuoi);
  let chuoi_ket_qua =
    chuoi_tam.charAt(0).toUpperCase() + chuoi_tam.slice(1).toLowerCase();
  return chuoi_ket_qua;
}

// * Hàm Viết Hoa Ký Tự Đầu
function viet_hoa_ky_tu_dau(chuoi) {
  let chuoi_tam = chuan_hoa_chuoi(chuoi);
  let chuoi_mang = chuoi_tam.toLowerCase().split(" ");
  let chuoi_ket_qua = chuoi_mang.map(function (element) {
    let firstWord = element.charAt(0).toUpperCase();
    let otherWord = element.slice(1).toLowerCase();
    return firstWord + otherWord;
  });
  return chuoi_ket_qua.join(" ");
}

// * Hàm chuyển chuỗi thành dạng url
function chuyen_chuoi_thanh_url(chuoi) {
  let chuoi_tam = chuan_hoa_chuoi(chuoi);
  let chuoi_bo_dau = bo_dau_tieng_viet(chuoi_tam).split(" ");
  let chuoi_mang = chuoi_bo_dau.filter(function (element) {
    return element !== "-" && element !== "–" && element !== "";
  });
  return chuoi_mang.join("-");
}

// * Hàm viết hoa đầu câu - Google Ads
function viet_hoa_dau_cau_google_ads(tu_khoa) {
  let chuoi_tam = chuan_hoa_chuoi(tu_khoa);
  let chuoi_mang = chuoi_tam.split(",");
  let chuoi_map = chuoi_mang.map(function (element) {
    return `${viet_hoa_dau_cau(element)}<br>`;
  });
  let chuoi_ket_qua = chuoi_map.join("");
  return chuoi_ket_qua;
}

// * Hàm Viết Hoa Ký Tự Đầu - Google Ads
function viet_hoa_ky_tu_dau_google_ads(chuoi) {
  let chuoi_tam = chuan_hoa_chuoi(chuoi);
  let chuoi_mang = chuoi_tam.split(",");
  let chuoi_ket_qua = chuoi_mang.map(function (element) {
    return `${viet_hoa_ky_tu_dau(element)}<br>`;
  });
  return chuoi_ket_qua.join(" ");
}

// * Hàm đếm số lượng từ và số ký tự trong văn bản
function dem_so_luong_tu(van_ban) {
  let van_ban_chuan = chuan_hoa_chuoi(van_ban);
  let so_ky_tu = van_ban_chuan.length;
  let so_tu = van_ban_chuan.split(" ").length;
  return {
    so_tu: so_tu,
    so_ky_tu: so_ky_tu,
  };
}

// * Hàm viết số tiền
function dinh_dang_so(number) {
  let chuoi_so = number.toString().replace(/\D/g, "");
  return chuoi_so.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// * Hàm chuyển có dấu sang không dấu - Ver 2
function removeVietnameseAccents(str) {
  const accentsMap = [
    { base: "a", letters: /[àáạảãâầấậẩẫăằắặẳẵ]/g },
    { base: "e", letters: /[èéẹẻẽêềếệểễ]/g },
    { base: "i", letters: /[ìíịỉĩ]/g },
    { base: "o", letters: /[òóọỏõôồốộổỗơờớợởỡ]/g },
    { base: "u", letters: /[ùúụủũưừứựửữ]/g },
    { base: "y", letters: /[ỳýỵỷỹ]/g },
    { base: "d", letters: /[đ]/g },
    { base: "A", letters: /[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g },
    { base: "E", letters: /[ÈÉẸẺẼÊỀẾỆỂỄ]/g },
    { base: "I", letters: /[ÌÍỊỈĨ]/g },
    { base: "O", letters: /[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g },
    { base: "U", letters: /[ÙÚỤỦŨƯỪỨỰỬỮ]/g },
    { base: "Y", letters: /[ỲÝỴỶỸ]/g },
    { base: "D", letters: /[Đ]/g },
  ];
  accentsMap.forEach((accent) => {
    str = str.replace(accent.letters, accent.base);
  });
  return str;
}
