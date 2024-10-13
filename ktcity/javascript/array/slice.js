const animals = ["tiger", "lion", "horse", "elephant"];

// * slice -> Tạo ra một mảng mới là copy của mảng ban đầu
console.log("-----array.slice-----");
const animal2 = animals.slice();
console.log(animal2);
console.log(animal2.slice(2));

// * slice(start) -> start: vị trí index ở trong mảng.
// * Nó lấy từ vị trí start đến cuối mảng.
console.log("-----array.slice(start)-----");
const animal3 = animals.slice(2);
console.log(animal3);

// * slice(start, end) -> start: là vị trí bắt đầu, end: là vị trí kết thúc.
// * Nó sẽ sao chép từ vị trí phần tử đầu tiên đến vị trí phần tử cuối cùng - 1 -> end - 1
console.log("-----array.slice(start, end)-----");
console.log(animals);
const animal4 = animals.slice(1, 3);
console.log(animal4);
