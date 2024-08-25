// Todo 1: Sao chép 1 mảng bằng vòng lặp for
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyArr = [];
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);

// Todo 2: Đảo ngược mảng trên
let string = "I Love";
let result = "";
for (let i = string.length - 1; i >= 0; i--) {
  result = result + string[i];
}
console.log(result);

// Todo 3: Cho 1 mảng gồm nhiều giá trị [1, 1000, full, null, "evondev", "", undefine, "javascript", [1,2,3]]. Viết chương trình loại bỏ các giá trị falsy ra khỏi mảng, chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0, null, undefine, false, "", NaN
const array = [
  1,
  1000,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];

const filterTruthyValue = array.filter(function (item) {
  return Boolean(item);
});
console.log(filterTruthyValue);

const filterTruthyValue2 = array.filter((item) => Boolean(item));
console.log(filterTruthyValue2);

// Todo 2: Cho 1 mảng phức tạp [[1,2,3], [false, null], [1,5,6, ["javascript"]], [888, 666, [90]]]. Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
const complexArray = [
  [1, 2, 3],
  [false, null],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];

// * Sử dụng phương thức flat
// - flat(number) -> làm phẳng 1 mảng lồng nhau thành 1 mảng mới với tất cả các phần tử nằm ở cùng 1 mức.
const flattenedArray = complexArray.flat(2);
console.log(flattenedArray);

