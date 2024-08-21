// ! By value and by referrences
// * By value -> là giá trị thực sự được lưu trong vùng bộ nhớ
const numb1 = 1;
const numb2 = 1;
console.log(numb1 === numb2); // true

// * By referrences -> Nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr2 === arr1); // false

// ? Tại sao lại ra false

// JSON -> Javascript Object Notation
// JSON.stringify(value) -> Chuyển kiểu dữ liệu của chúng ta sang dạng JSON. Thường sử dụng cho Array.
// JSON.parse -> Chuyển dữ liệu từ string array sang array thực sự

console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1, 2, 3]"));

const arr1JSON = JSON.stringify(arr1);
const arr2JSON = JSON.stringify(arr2);
console.log(arr1JSON === arr2JSON); // true

// * 2 Cách để sao chép 1 mảng
// * Cách 1 -> Dùng phương thức slice()
const students = ["a", "b", "c", "d", "e", "f"];
const sliceStudents = students.slice();
console.log(sliceStudents);
// * Cách 2 -> Sử dụng spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents);

