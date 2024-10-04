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

// * Nối các phần tử trong mảng thành chuỗi
console.log(fruits.join(" "));

// * Chuyển mảng thành chuỗi
console.log(fruits.toString());

console.log("----- New Array -----");
let tropicalFruits = ["Mango", "Pineapple", "Banana", "Banana", "Dragon Fruit"];

// * Tìm vị trí của phần tử đầu tiên trong mảng
console.log(tropicalFruits.indexOf("Banana"));
console.log(tropicalFruits.lastIndexOf("Lychee"));

// * Tìm vị trí của phần tử cuối cùng trong mảng
console.log(tropicalFruits.lastIndexOf("Lychee"));
console.log(tropicalFruits.lastIndexOf("Banana"));

// * Kiểm tra xem trong mảng có phần tử X hay không ?
console.log(tropicalFruits.includes("Banana")); // - true

// * Gộp mảng - có 2 cách
let fruit = fruits.concat(tropicalFruits);
console.log(fruit);

let fruit2 = [...fruits, ...tropicalFruits];
console.log(fruit2);

// * Trích xuất phần tử trong mảng và trả về một mảng mới không thay đồi mảng cũ
console.log(fruits.slice(2, 5));

console.log("----- New Array 2 -----");

let animals = ["cat", "dog", "elephant", "tiger", "lion", "rabbit", "giraffe"];

animals.forEach(function (item) {
  item.toString() + " đây là string";
});
