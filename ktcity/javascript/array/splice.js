const pets = ["dog", "cat", "hamster", "bird", "dragon"];
console.log("-----array.splice-----");
console.log(pets);

// Nó sẽ xoá phần tử trong mảng hoặc thay thế phần tử trong mảng

// * splice(start) -> xoá phần tử trong mảng bắt đầu từ vị trí start (tính luôn vị trí start).
// const pet2 = pets.splice(2);
// console.log(pet2);

// * splice(start, deleteCount) -> deleteCount: là số lượng phần tử muốn xoá hoặc thay thế.
const pet3 = pets.splice(1, 2);
console.log(pet3);
