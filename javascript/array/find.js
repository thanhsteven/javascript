// ! find
// * trả về phần tử đầu tiên tìm thấy trong mảng thoả một điều kiện nào đó.
const numbers = [1, 999, 10000, 89];

// Tìm phần tử đầu tiên lớn hơn 10 trong hàm trên
const findYouNumber = numbers.find((element) => element > 10);
console.log("-----find-----");
console.log(findYouNumber);

// Nếu không tìm thấy thì nó sẽ trả ra kết quả là undefine

// ! findIndex
// * Trả về vị trí index tìm thấy đầu tiên trong mảng thoả điều kiện nào đó
const findYourIndex = numbers.findIndex((element) => element > 1000);
console.log("-----findIndex-----");
console.log(findYourIndex);
// Nếu không tìm thấy thì sẽ trả ra kết quả là -1
