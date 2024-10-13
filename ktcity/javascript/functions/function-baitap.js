// Todo 1: Viết hàm so sánh 2 số a và b, tìm ra số lớn hơn.
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Vui lòng chèn dưới dạng số");
    return 0;
  }
  return Math.max(a, b);
}
console.log(`Số lớn nhất là = ${compare(90, 88)}`);

// Todo 2: In hoa chữ cái đầu tiên trong 1 chữ.
function capitalize(word = "") {
  if (word.length === 0) return null;
  let firsWord = word.toLowerCase().charAt(0).slice().toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return firsWord + otherWord;
}
console.log(capitalize("châu"));

// Todo 3: Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare  đã viết ở trên.
function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
  return 0;
}
function printMax(number) {
  console.log("Số lớn nhất là : " + number);
}
console.log(useCallback(456, 123, printMax));

// ! Parameter
// * Parameter: được truyền vào hàm thì nó có thể biến, có thể là string, number, boolean.
// * Và cũng có thể là một function khác, function có parameter là một functioin khác.

// ! Callback
// * Đây được coi là 1 function có được gọi dưới dạng callback, function Callback là 1 function được truyền vào dưới dạng là 1 parameter.
// * function này sử dụng trong function khác dưới dạng parameter.

