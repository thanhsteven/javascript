// * Tổng hai số
function tongHaiSo(a, b) {
  return Number(a) + Number(b);
}

// * Hàm kiểm tra input
function checkInputType(value) {
  if (typeof value === "string") {
    console.log("Vui lòng nhập con số");
  } else if (isNaN(value)) {
    console.log("Vui lòng nhập số");
  } else {
    console.log("Đầu vào hợp lệ");
  }
}

// * Kiểm tra số chẳn lẻ
function checkEvenOdd(number) {
  return number % 2 == 0;
}

// * Hàm viết hoa chữ cái đầu trong chuỗi
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
