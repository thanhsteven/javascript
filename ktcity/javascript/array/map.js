// ! map !
// * Duyệt qua các phần tử trong mảng và trả về một mảng mới mà không thay đổi mảng ban đầu.
const listNumber = [1, 2, 3, 4, 5];
// * Trả ra một mảng mới mà các giá trị trong mảng cũ sẽ được nhân 2.
const listNumberDouble = listNumber.map(function (value, index) {
  return value * 2;
});
console.log(listNumberDouble);
