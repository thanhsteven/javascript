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

// * Hàm chuẩn hoá chuỗi - Loại bỏ khoảng trắng không hợp lệ
function chuan_hoa_chuoi(chuoi) {
  let chuoi_tam = chuoi.trim();
  while (chuoi_tam.indexOf("  ") >= 0) {
    chuoi_tam = chuoi_tam.replace("  ", " ");
  }
  return chuoi_tam;
}

// ! Hàm tách keyword Google Ads - Viết hoa ký tự đầu !
function keywordAnalysis_capword(string) {
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
    let arrE = element.split(" "); // chai 500ml thủy tinh
    let arrE2 = arrE.split(" ");

    let firstChar = arrE2[0].charAt(0).toUpperCase();
    let otherChar = arrE2.join(" ").slice(1);
    let capChar = firstChar + otherChar;
    return arrE2;
  });
  return arrMap2;
}

