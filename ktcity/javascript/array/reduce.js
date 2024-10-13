const listNumber = [1, 2, 3, 4, 5];
console.log("-----array.reduce-----");
// * Gom các phần tử trong mảng lại thành 1.
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);
