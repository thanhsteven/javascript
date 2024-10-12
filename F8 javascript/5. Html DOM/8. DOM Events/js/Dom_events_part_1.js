// Dom Event : sự kiện diễn ra ở trong Dom
// 1. Attribute events : sử dụng Attribute làm sự kiện
// 2. Assign event using the element node : sử dụng gán sự kiện vào element


// click : khi click chuột
// change : thay đổi trong thẻ select, input,...
// dblclick : double click
// drag | drop : kéo thả
// focus : tập trung con trỏ chuột vào button, input
// keydown | keyup : ấn 1 phím xuống và nhả 1 phím lên
// mouseover | mouseout : Con trỏ di vào|ra khỏi element
// mousedown | mouseup: Khi click/thả chuột trên element.
// resize : thay đổi kích thước trình duyệt hoặc kích thước element
// scroll : khi lăn con chuột

// => Khi sử dụng DOM event thì cần phải thêm tiền tố "on" vào trước nó

// ! Attribute
var heading = document.querySelector('h1');

// 1. Click --> onclick
heading.onclick = () => {
    console.log('click = ', Math.round(Math.random() * 100));
};

// 2. Mouseover --> onmouseover
heading.onmouseover = () => {
    console.log('mouseover');
};

// 3. Mouseout --> onmouseout
heading.onmouseout = () => {
    console.log('mouseout');
};

// onclick : trả về từ khóa this
// this này chính là cái element node mà chúng ta hay dùng querySelector để lấy ra.


// ! Assign Event
var h2Element = document.querySelector('h2');
h2Element.onclick = function (e) {
    console.log(e.target);
};

var boxElement = document.querySelector('.box');
boxElement.onclick = function (e) {
    console.log(e.target);
};

// Target : Trả về chính cái element đang lắng nge sự kiện
var h3Elements = document.querySelectorAll('h3');

for (var i = 0; i < h3Elements.length; i++) {
    h3Elements[i].onclick = function (e) {
        console.log(e.target);
    };
};

