// Todo 1: Đảo ngược 1 chuỗi. Ví dụ: "My name is Thành" -> "Thành is name my"
console.log("[-----Bài tập 1-----]");
function reverseString(str) {
  if (!str) return null;
  // * split: tách chuỗi ra thành mảng
  const arrStr = str.split(" ");
  // * reverse: đảo ngược thứ tự các phần tử của mảng
  const reverseStr = arrStr.reverse();
  // * join: gom các phần tử của mảng lại thành string
  const newStr = reverseStr.join(" ");
  console.log(newStr);

  // Còn 1 cách viết khác gọi chaining
  const newStr2 = str.split(" ").reverse().join(" ");
  console.log(newStr2);
}
reverseString("My name is Thành");

// Todo 2: Đảo ngược luôn cả các ký tự của chuỗi
console.log("[-----Bài tập 02-----]");
function reverseWord(str) {
  if (!str) return null;
  let arrStr = str.toLowerCase().split(" ");
  let wordStr = arrStr.map(function (item) {
    return item.split("").reverse("").join("");
  });
  let result = wordStr.reverse("").join(" ");
  return console.log(result);
}
reverseWord("I love you");
// Todo 3: Viết in hoa chữ cái đầu trong chuỗi
console.log("[-----Bài tập 03-----]");
function capitalizeWord(word) {
  let checkWord = !word ? null : word.trim().toLowerCase();
  let firstChar = checkWord.charAt(0).toUpperCase();
  let remainingChars = checkWord.slice(1);
  return firstChar + remainingChars;
}

function capitalizeString(str) {
  if (!str) return null;
  let arrStr = str.trim().split(" ");
  console.log(arrStr);
  let mapStr = arrStr.map((item) => capitalizeWord(item)).join(" ");
  let mapStr2 = arrStr
    .map(function (item) {
      return capitalizeWord(item);
    })
    .join(" ");
  console.log(mapStr);
  console.log(mapStr2);
}
capitalizeString("xin chào cô chú");
