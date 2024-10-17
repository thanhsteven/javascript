// * Viết in hoa toàn bộ
uppercase.onclick = () => {
  let string = document.querySelector("#Th_vanban").value.trim();
  if (string.length == 0) {
    Th_ketqua.innerHTML = "Vui lòng nhập văn bản";
    Th_vanban.focus();
    return false;
  }
  let upperCaseString = viet_in_hoa_toan_bo(string);
  Th_ketqua.innerHTML = upperCaseString;
};

// * Viết thường toàn bộ
lowercase.onclick = () => {
  let string = document.querySelector("#Th_vanban").value.trim();
  if (string.length == 0) {
    Th_ketqua.innerHTML = "Vui lòng nhập văn bản";
    Th_vanban.focus();
    return false;
  }
  let lowerCaseString = viet_thuong_toan_bo(string);
  Th_ketqua.innerHTML = lowerCaseString;
};

// * Viết hoa đầu câu
capitalize_sentences.onclick = () => {
  let string = document.querySelector("#Th_vanban").value.trim();
  if (string.length == 0) {
    Th_ketqua.innerHTML = "Vui lòng nhập văn bản";
    Th_vanban.focus();
    return false;
  }
  let captialWord = viet_hoa_dau_cau(string);
  Th_ketqua.innerHTML = captialWord;
};

// * Viết hoa chữ cái đầu
capitalize_words.onclick = () => {
  let string = document.querySelector("#Th_vanban").value.trim();
  if (string.length == 0) {
    Th_ketqua.innerHTML = "Vui lòng nhập văn bản";
    Th_vanban.focus();
    return false;
  }
  let captialSen = viet_hoa_ky_tu_dau(string);
  Th_ketqua.innerHTML = captialSen;
};

// * Chuyển sang dạng URL
convertURL.onclick = () => {
  let string = document.querySelector("#Th_vanban").value.trim();
  if (string.length == 0) {
    Th_ketqua.innerHTML = "Vui lòng nhập văn bản";
    Th_vanban.focus();
    return false;
  }
  let url = chuyen_chuoi_thanh_url(string);
  Th_ketqua.innerHTML = url;
};

// * Tách keyword Google Ads - Viết hoa đầu câu
viet_hoa_dau_cau_google.onclick = () => {
  let string = document.querySelector("#Bo_tu_khoa").value.trim();
  if (string.length == 0) {
    Th_ketqua_GG_Ads.innerHTML = "Vui lòng nhập văn bản";
    Bo_tu_khoa.focus();
    return false;
  }
  let result = viet_hoa_dau_cau_google_ads(string);
  Th_ketqua_GG_Ads.innerHTML = result;
};

// * Tách keyword Google Ads - Viết hoa ký tự đầu
viet_hoa_ky_tu_dau_google.onclick = () => {
  let string = document.querySelector("#Bo_tu_khoa").value.trim();
  if (string.length == 0) {
    Th_ketqua_GG_Ads.innerHTML = "Vui lòng nhập văn bản";
    Bo_tu_khoa.focus();
    return false;
  }
  let result = viet_hoa_ky_tu_dau_google_ads(string);
  Th_ketqua_GG_Ads.innerHTML = result;
};

// * Đếm số từ trong văn bản
Btn_dem_so_tu.onclick = () => {
  let string = document.querySelector("#Th_van_ban").value.trim();
  if (string.length == 0) {
    Th_so_tu_van_ban.innerHTML = "Vui lòng nhập văn bản";
    Th_van_ban.focus();
    return false;
  }
  let dem = dem_so_luong_tu(string);
  let result = `Văn bản có ${dem.so_tu} từ và ${dem.so_ky_tu} ký tự`;
  Th_so_tu_van_ban.innerHTML = result;
};

// * Định dạng số tiền
// * Hàm định dạng lại số tiền
function formatInput(input) {
  let value = input.value.replace(/\./g, "");
  value = formatNumber(value);
  input.value = value;
}
function formatNumber(value) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
