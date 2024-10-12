// ! HTML DOM
// 1. Element: ID, CSS, tag, CSS selector, HTML collection
// 2. Attribute
// 3. Text

var headingNode = document.getElementById('heading');
// getElementById() : Element dạng số ít --> chỉ có thể lấy ra được 1 id (tiêu chuẩn DOM).

var boxNodes = document.getElementsByClassName('box');
// getElementsByClassName() : lấy ra các tên lớp của node, trả về 1 HTML Collection.
// HTML Collection : tính chất giống cái mảng, có thể dùng vòng lặp for để lấy ra từng element.
// Khác cái mảng ở chỗ là không sử dụng được các phương thức như push, pop, filter,....

var tagName = document.getElementsByTagName('div');
// var tagNames = document.getElementsByTagNameNS('div');
// getElementsByTagName() : giống với ClassName.
// Lấy ra DOM node là tên của cái thẻ

// CSS selector
var boxCSS = document.querySelector('.box');
// var heading2 = document.querySelector('.container .heading-2');
// console.log(heading2);

// => querySelector : nó sẽ lấy thẳng ra cái phần tử có selector tương ứng, trường hợp có nhiều phần tử cùng matching thì nó sẽ lấy ra thằng đầu tiên.

var boxAll = document.querySelectorAll('.box');
console.log(boxAll);

// => Trả về 1 NodeList, giống với HTML Collection và cũng dùng vòng lặp để lấy từng element bên trong đó.


// Lấy thằng box đầu tiên
var box1 = document.querySelector('.container .heading-2:first-child');
var heading_2 = document.querySelector('.container .heading-2:nth-child(2)');

console.log('ID : ', headingNode);
console.log('ClassName : ', boxNodes);
console.log('TagName : ', tagName);
console.log('---------- CSS Selector -------------');
console.log(boxCSS);

// console.log(heading2);
console.log(box1);
console.log(heading_2);


// Xem được hết tất cả các thuộc tính của DOM Node element trong đó
// console.log({ Element: headingNode });




