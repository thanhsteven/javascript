// ! filter
// * Dùng để filter (sàng lọc) các phần tử trong mảng thoả điều kiện nào đó.

const listNumber = [1, 2, 3, 4, 5];
// Lọc ra các phần tử có giá trị lớn hơn 3
console.log("----- filter -----");
const filterNumber = listNumber.filter((value, index, array) => {
  return value > 2;
});
console.log(filterNumber);

const filterNumber2 = listNumber.filter(function (value, index, array) {
  return value < 4;
});
console.log(filterNumber2);
