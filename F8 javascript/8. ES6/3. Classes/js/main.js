// Constructor Function
function Course(name, price) { 
    this.name = name;
    this.price = price;

    this.getName = function() {
        return this.name;
    };
};

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);

//! Class trong ES6
class khoahoc {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    getName() {
        return this.name;
    };

    getPrice() {
        return this.price;
    };
};
//=> Class tiện dụng hơn khi xử lý những đối tượng lớn

const hocJS = new khoahoc('Javascript', 1900);
const hocPHP = new khoahoc('PHP', 1800);

console.log(hocJS);
console.log(hocPHP);

