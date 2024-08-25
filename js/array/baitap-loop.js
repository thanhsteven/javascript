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

