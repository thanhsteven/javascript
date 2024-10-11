// * Hàm viết hoa chữ cái đầu
function capitalizeWord(string) {
  if (string.length == 0) return false;
  let strArr = string.split(" ");
  let filterArr = strArr.filter(function (element) {
    return element !== "";
  });
  let mapArr = filterArr.map(function (element) {
    let firstChar = element.toLowerCase().charAt(0).slice().toUpperCase();
    let otherChar = element.toLowerCase().slice(1);
    return firstChar + otherChar;
  });
  return mapArr.join(" ");
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
function captializeSentences(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(" ");
  let arrFilter = arrStr.filter(function (element) {
    return element !== "";
  });
  let firstChar = arrFilter[0].charAt(0).toUpperCase();
  let otherChar = arrFilter.join(" ").slice(1);
  return firstChar + otherChar;
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
    return element !== "";
  });
  let arrMap = arrFilter.map(function (element) {
    return removeVietnameseTones(element);
  });
  return arrMap.join("-");
}

// * Hàm tách keyword Google Ads
function keywordAnalysis(string) {
  if (string.length == 0) return false;
  let arrStr = string.split(",");
  let arrMap = arrStr.map(function (element) {
    return captializeSentences(element);
  });
  return arrMap;
}
