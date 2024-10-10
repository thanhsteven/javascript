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
function viethoakytudau(string) {
  let arrString = string.split(" ");
  if (arrString.length == 0) return false;
  let arrNew = [];
  // Loại bỏ các khoảng trống bất hợp lý trong chuỗi
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] !== "") {
      arrNew.push(arrString[i]);
    }
  }
  console.log(arrNew);
  // let firstChar = arrNew[0].split("").toUpperCase();
  let firstWord = arrNew[0].toLowerCase().charAt(0).slice().toUpperCase();
  // let anotherChar = arrNew.slice(1, arrString.length).join("");
  let otherWord = arrNew[0].toLowerCase().slice(1);
  let result = firstChar.concat(anotherChar);
  return result;
}
console.log(viethoakytudau("nguyễn huỳnh minh châu"));

function capitalizeFirstChar(word = "") {
  if ((word.length = 0)) return null;
  let firstWord = word.toLowerCase().charAt(0).slice().toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return firstWord + otherWord;
}

