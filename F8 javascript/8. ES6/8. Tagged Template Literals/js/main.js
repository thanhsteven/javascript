// Tagged Template Literals :
// Sử dung 1 Function.
// và chúng ta có thể gọi lại nó qua cú pháp của Template Literals

function highlight([first, ...strings], ...values) {
    return values.reduce((accument, current) =>
        [...accument, `<strong>${current}</strong>`, strings.shift()], [first]
    ).join('');
};

var brand = 'F8';
var course = 'Javascript';

var htmls =
    highlight`Học lập trình tại ${course} tại ${brand} !`;

console.log(htmls);