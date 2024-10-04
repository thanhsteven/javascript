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
console.log(fruits.slice(2, 5));
console.log(fruit2);

console.log("----- New Array 2 -----");
let animals = [
  "cat",
  "dog",
  "elephant",
  "tiger",
  "lion",
  "rabbit",
  "giraffe",
  "bear",
  "zebra",
  "kangaroo",
];

// * Hàm forEach() trong JavaScript được sử dụng để thực hiện một hàm (callback) trên mỗi phần tử của mảng. Nó lặp qua từng phần tử của mảng và không trả về giá trị (undefined). forEach() là một phương thức của mảng và được sử dụng khi bạn muốn thực hiện một thao tác trên mỗi phần tử mà không cần trả về một mảng mới.
// ? Sử dụng forEach thì không có return nhé
let forEachAnimals = animals.forEach(function (item) {
  return "Đây là con " + item.toString();
});
console.log(forEachAnimals); // undefined

// * Hàm map() trong JavaScript được sử dụng để tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Không giống như forEach() chỉ thực hiện thao tác trên các phần tử mà không trả về giá trị, map() trả về một mảng mới với các giá trị đã được biến đổi.
let mapAnimals = animals.map(function (item) {
  return "This is " + item;
});
console.log(mapAnimals);

// *  Hàm filter() trong JavaScript được sử dụng để tạo ra một mảng mới chứa các phần tử từ mảng ban đầu thỏa mãn điều kiện do bạn cung cấp. Hàm này không thay đổi mảng gốc mà chỉ lọc ra các phần tử và trả về mảng mới dựa trên điều kiện kiểm tra.
let numberList = [45, 92, 15, 63, 12, 77, 32, 80, 48, 7];
let filterNumber = numberList.filter(function (item) {
  return item > 50 && item + 1;
});
console.log(filterNumber);

// * Hàm reduce() trong JavaScript được sử dụng để "rút gọn" (giảm) một mảng xuống một giá trị duy nhất bằng cách áp dụng một hàm callback lên từng phần tử của mảng. Hàm này thường được sử dụng để tính tổng, tích, hoặc thực hiện các phép tính phức tạp khác dựa trên các phần tử của mảng.
let reduceNumber = numberList.reduce(function (pre, next) {
  return pre + next;
});
console.log(reduceNumber);
