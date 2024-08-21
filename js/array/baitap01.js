// todo 1: Đảo ngược 1 chuỗi. Ví dụ: "My name is Thành" -> "Thành is name my"
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
