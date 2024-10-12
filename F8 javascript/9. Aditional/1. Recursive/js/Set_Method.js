// Làm sao lọc ra các phần tử trùng nhau trong array bên dưới ?
// Điều kiện là không sử các hàm có sẵn của Array trong Javascript.
var input = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
var output = ['a', 'b', 'c', 'd'];

console.log(input);

// Đặc tính của Set()
//=> Đặc tính là những cái value của nó luôn luôn là unique (duy nhất)
//=> Chỉ tồn tại 1 lần mà thôi
// Ví dụ Set()
console.log(new Set([1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4]));

// Thay thế input vào
console.log(new Set(input));

// Fix hoàn chỉnh
console.log( [...(new Set(input))] );
var output = [...(new Set(input))];
console.log(output);