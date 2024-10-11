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
