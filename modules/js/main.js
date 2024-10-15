// * Hàm viết hoa chữ cái đầu
function capitalizeWord(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(" ");
  let arrFilter = arrStr.filter(function (element) {
    return element !== "";
  });
  let arrMap = arrFilter.map(function (element) {
    let firstChar = element.toLowerCase().charAt(0).slice().toUpperCase();
    let otherChar = element.toLowerCase().slice(1);
    return firstChar + otherChar;
  });
  return arrMap.join(" ");
}

// * Hàm viết in hoa toàn bộ
function uppercaseWord(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(" ");
  let arrFilter = arrStr.filter(function (element) {
    return element !== "";
  });
  let arrMap = arrFilter.map(function (element) {
    return element.toUpperCase();
  });
  return arrMap.join(" ");
}

// * Hàm viết thường toàn bộ
function lowerWord(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(" ");
  let arrFilter = arrStr.filter(function (element) {
    return element !== "";
  });
  let arrMap = arrFilter.map(function (element) {
    return element.toLowerCase();
  });
  return arrMap.join(" ");
}

// * Hàm viết hoa đầu câu
function capitalizeSentences(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(" ");
  let arrFilter = arrStr.filter(function (element) {
    return element !== "";
  });
  let firstChar = arrFilter[0].toLowerCase().charAt(0).toUpperCase();
  let otherChar = arrFilter.join(" ").toLowerCase().slice(1);
  return firstChar + otherChar;
}

// * Hàm tách keyword Google Ads
function keywordAnalysis_capsen(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(",");
  let arrMap = arrStr.map(function (element) {
    return capitalizeSentences(element);
  });
  return arrMap;
}

// * Hàm chuyển dấu tiếng việt
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9 ]/g, "");
}

// * Hàm chuyển String thành url
function convertStringToUrl(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(" ");
  let arrFilter = arrStr.filter(function (element) {
    return element !== "" && element !== "-" && element !== "–";
  });
  let arrMap = arrFilter.map(function (element) {
    return removeVietnameseTones(element).toLowerCase();
  });
  return arrMap.join("-");
}

// * Hàm chuẩn hoá chuỗi - rút gọn
function chuan_hoa_chuoi(chuoi) {
  let chuoi_tam = chuoi.trim();
  while (chuoi_tam.indexOf("  ") >= 0) {
    chuoi_tam = chuoi_tam.replace("  ", " ");
  }
  return chuoi_tam;
}

// * Viết hoa ký tự đầu
function viet_hoa_ky_tu_dau_gg_ads(chuoi) {
  let chuoi_tam = chuoi.trim();
  let chuoi_arr = chuoi_tam.split(",");
  let chuoi_xoa_khoang_trang = [];
  chuoi_arr.forEach(function (element) {
    chuoi_xoa_khoang_trang.push(element.trim());
  });
  let chuoi_map = chuoi_xoa_khoang_trang.map(function (element) {
    let arrElement = element.split(" ");
    let arrElementMap = arrElement.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return arrElementMap.join(" ");
  });
  return `${chuoi_map.join(" ")} <br>`;
}

// Hàm tách keyword Google Ads - Viết hoa ký tự đầu
function capitalizeFirstSen_GG(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(",");
  let arrMap = arrStr.map(function (element) {
    return capitalizeWord(element);
  });
  return arrMap;
}

// ! Hàm tách keyword Google Ads - Viết hoa chữ cái đầu !
function capitalizeGGadsKeywords(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(",");
  let arrMap = arrStr.map(function (element) {
    return element.trim();
  });
  let arrMap2 = arrMap.map(function (element) {
    let arrE = element.split(" ");
    let arrE2 = arrE.split(" ");

    let firstChar = arrE2[0].charAt(0).toUpperCase();
    let otherChar = arrE2.join(" ").slice(1);
    let capChar = firstChar + otherChar;
    return arrE2;
  });
  return arrMap2;
}
