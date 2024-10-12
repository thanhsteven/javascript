// Cách Get element trong DOM

// 1. Get qua ID
let heading_1 = document.getElementById('heading-1');
console.log(heading_1);
//=> Trả về 1 Node Element đàng hoàng.


// 2. Get qua Class
let headings = document.getElementsByClassName('heading');
//=> getElementsByClassName('heading') : không cần dấu chấm (.) ở trước
console.log(headings);

//=> Trả về 1 HTML Collection có tính chất giống Mảng => Dùng vòng lặp để lọc qua để lấy ra phần tử con bên trong => không dùng ForEach được luôn.

// ! Lưu ý: Đây không phải là 1 NODE Element mà là 1 HTML Collection


// 3. Get qua thẻ Tag
let heading_2 = document.getElementsByTagName('h2');
console.log(heading_2);
//=> getElementsByTagName : là số nhiều nên vẫn trả về 1 HTML Collection


// 4. Get qua CSS
let heading_4 = document.querySelector('.heading-4');
console.log(heading_4);
//=> Trả về đúng 1 Node Element.

// Trường hợp có nhiều class heading-2 thì dùng querySelector như nào ?

let first_heading4 = document.querySelector('.container .heading-4'); // ? KHÔNG chạy ?

let second_heading4 = document.querySelector('.container .heading-4:nth-child(2)');
let third_heading4 = document.querySelector('.container .heading-4:nth-child(3)');


console.log(first_heading4);
console.log(second_heading4);
console.log(third_heading4);


// 5. Get qua CSS dưới dạng All
let heading_4_all = document.querySelectorAll('.heading-4');
console.log(heading_4_all);
//=> Trả về 1 cái NodeList
//=> Tương tự như HTML Collection và cũng dùng vòng lặp để lấy phần tử ra.

