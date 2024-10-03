let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

// * Lấy giá trị phần tử thông qua index
console.log(fruits[3]);
console.log("Phần tử cuối cùng: " + fruits[fruits.length - 1]);

// * Độ dài của mảng
console.log("Độ dài mảng: " + fruits.length);

// * Thêm phần tử mới vào đầu mảng
fruits.unshift("Durian");
console.log(fruits);

// * Thêm phần tử mới vào cuối mảng
fruits.push("Strawberry");
console.log(fruits);

// * Xóa phần tử cuối cùng của mảng
fruits.pop();
console.log(fruits);

// * Xóa phần tử đầu mảng
fruits.shift();
console.log(fruits);

// * Vòng lặp trong mảng
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// * Đảo ngược giá trị trong mảng
console.log(fruits.reverse());

// * Nối các phần tử trong mảng thành string
console.log(fruits.join(" "));

let tropicalFruits = [
  "Mango",
  "Papaya",
  "Pineapple",
  "Coconut",
  "Banana",
  "Lychee",
  "Banana",
  "Dragon Fruit",
];

// * Tìm vị trí của phần tử đầu tiên trong mảng
console.log(tropicalFruits.indexOf("Banana"));
console.log(tropicalFruits.lastIndexOf("Lychee"));

// * Tìm vị trí của phần tử cuối cùng trong mảng
console.log(tropicalFruits.lastIndexOf("Lychee"));
console.log(tropicalFruits.lastIndexOf("Banana"));

// * Kiểm tra xem trong mảng có phần tử X hay không ?
console.log(tropicalFruits.includes());

// * Gộp mảng - 2 cách
let fruit = fruits.concat(tropicalFruits);
console.log(fruit);

let fruit2 = [...fruits, ...tropicalFruits];
console.log(fruit2);

// * Trích xuất phần tử trong mảng và trả về một mảng mới không thay đồi mảng cũ
console.log(fruits.slice(2, 5));

/*
! Tổng hợp kiến thức
- push(): thêm phần tử mới vào cuối mảng
- unshift(): thêm phần tử mới vào đầu mảng

- pop(): xóa phần tử ở cuối mảng
- shift(): xóa phần tử ở đầu mảng

- slice(start, end)
- splice()

- indexOf()
- lastIndexOf()

- join()
- reverse()

- include()
- concat()

*/
