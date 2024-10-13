// * Destructuring Array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const a = toys[0];
const b = toys[1];
const c = toys[2];

console.log(a, b, c);

const [x, y, z] = toys;
// const [ball, sword, arrow] = toys;
console.log([x, y, z]); // array
// console.log(ball, sword, arrow); // string

// * Rest Parameters -> các phần tử còn lại
const [ball, sword, arrow, ...rest] = toys;
console.log(rest);

// * Rest parameters còn được sử dụng trong function nữa
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5);
