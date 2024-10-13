const listNumber = [1, 2, 3, 4, 5];
console.log("-----array.some-----");
// * Some trả về true khi thoả 1 điều kiện và ngược lại trả về false khi không thoả bất kì điều kiện nào cả.
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);

console.log("-----array.number-----");
// * Chỉ trả về true khi tất cả các điều kiện đều đúng, ngược lại chỉ cần 1 cái sai thì nó trả về false hết.
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber);
