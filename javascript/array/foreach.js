const listNumber = [1, 2, 3, 4, 5];
console.log("-----foreach-----");
// * Foreach thì không có return -> nên thường được dùng với DOM để khỏi phải return.
// * forEach thì không có cách nào dừng được vòng lặp này.
const listNumberTriple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTriple); // undefine
// ! Kết quả trên ra undefine là bởi vì trong forEach không có return nên không xuất ra được kết quả gì.
