// DOM events

// 1. preventDefault
// Loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ html

// 2. stopPropagation
// Loại bỏ sự kiện nổi bọt


// Lấy thẻ a
// Cách 1
var anchor_1 = document.querySelectorAll('a');
console.log(anchor_1);

// Cách 2
// Cách này phải đặt thêm attribute name cho thẻ a
var anchor_2 = document.anchors;
console.log(anchor_2);

// Cách 3
// Không cần đặt name
var aElements = document.links;
console.log(aElements);

// Ví dụ 1: Ngăn chặn trình duyệt chuyển link
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function (e) {
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        };
    };
};

// Ví dụ 2
var ulElement = document.querySelector('ul');
// Bỏ đi hành vi mặc định của CSS
ulElement.onmousedown = function (e) {
    e.preventDefault();
};

ulElement.onclick = function (e) {
    console.log(e.target);
};

// Stop Propagation
document.querySelector('div').onclick = function (e) {
    console.log('DIV');
};

document.querySelector('button').onclick = function (e) {
    e.stopPropagation();
    console.log('CLICK ME');
};
