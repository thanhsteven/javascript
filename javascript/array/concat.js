// * concat() -> Gộp nhiều mảng lại thành 1 mảng
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
// * Cách 1 -> concat()
const mergeArray = arr1.concat(arr2, arr3);
console.log(mergeArray);
// * Cách 2 -> spread operator
const mergeArray2 = [...arr1, ...arr2, ...arr3];
console.log(mergeArray2);
