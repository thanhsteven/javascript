// DOM Attribute
var heading_2 = document.querySelector('h2');

// Cách 1: seter : dùng toán tử gán (=) để thêm Attrbiute
heading_2.title = 'Heading-2';
heading_2.id = 'heading-2';
// Trường hợp thêm Class vào element
heading_2.className = 'heading-2';

// Cách 2: dùng phương thức : setAttribute
heading_2.setAttribute('data', 'heading-2');
heading_2.setAttribute('href', 'heading-2');

console.log(heading_2);

//=> Lấy Attribute trong Element ra : getAttribute
console.log(heading_2.getAttribute('class'));
console.log(heading_2.getAttribute('title'));
console.log(heading_2.getAttribute('data'));

