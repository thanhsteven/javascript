// ClassList Property

// add : Thêm class vào Element
// contains : Kiểm tra class có tồn tại không
// remove : Xóa class khỏi Element
// toggle : Có thì nó xóa đi và ngược lại 

// => Đây là 1 thuộc tính của Element Node
// => Chỉ truy cập được thuộc tính này khi lấy ra được element Node
// => Trả về 1 DOMTokenList : quản lý được các class của chính Element đang gọi tới

var boxElement = document.querySelector('.box');
var boxElementAll = document.querySelectorAll('.box');

// console.log(boxElementAll.classList); //=> Lỗi
//=> Trả ra 1 NodeList chứ KHÔNG PHẢI Element Node.
//=> NodeList thì classList KHÔNG THỂ truy cập được.

console.log(boxElementAll[1].classList);

// ClassList
console.log(boxElement.classList);

// Trả về giá trị dạng chuỗi là tập hợp các ClassName trong Element
// * Trả về dạng chuỗi chứ không phải số lượng class
console.log(boxElement.classList.value); // => String

// Kiểm tra số lượng Class trong Element
console.log(boxElement.classList.length);

// Truy suất vào chỉ mục (index) để lấy phần tử
console.log(boxElement.classList[1]); // => Giống Array

// add
boxElement.classList.add('red');
// contains
console.log(boxElement.classList.contains('red'));
// remove
boxElement.classList.remove('red');
// toggle
setInterval( () => {
    boxElement.classList.toggle('red');
}, 500);


