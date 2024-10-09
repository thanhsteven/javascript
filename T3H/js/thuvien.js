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
