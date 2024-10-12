// Hàm thông thường

// Declaration Function
function d_logger(log) {
    console.log(log);
};
d_logger('Message...');

// Expression Function
const e_logger = function (log) {
    console.log(log);
};
e_logger('Message...');

// Arrow Function
const a_logger = (log) => {
    console.log(log);
};
a_logger('Message...');

// Ví dụ cho hàm sum:
const sum = (a, b) => { return a + b };
console.log('sum = ' + sum(2, 2));

// Cách viết ngắn gọn hơn
const a_sum = (a, b) => a + b;

//=> bỏ cặp dấu {} và KHÔNG cần return

console.log('a_sum = ', a_sum(2, 2));

//! Nếu có cặp dấu {} thì bắt buộc phải có return. Vì nó sẽ hiểu code trong {} là một khối block và bắt buộc phải có return.

//=> Đằng sau dấu => nó phải khác dấu {} này thì nó mới thực hiện code và trả về kết quả (giống return). 
//=> Còn viết dấu {} này thì nó hiểu đây là cái block code và nó không thực thi code và trả kết quả được cho nên mới cần return.

// * CÓ {} thì CÓ return
// * KHÔNG {} thì KHÔNG return


//? Lưu ý: Trường hợp return ra 1 object mà không cần dấu {} thì làm sao ?
const b_sum = (a, b) => {
    return { a: a, b: b };
};
console.log(b_sum(5, 6));

// Viết bỏ dấu {}
// const c_sum = (a,b) => {a: a, b: b}; //=> Lỗi cú pháp
// * Fix như sau:
//=> Miễn là khác dấu ngoặc {} là được.
const c_sum = (a, b) => ({ a: a, b: b });
console.log(c_sum(2, 3)); //=> ra Object

const d_sum = (a, b) => [{ a: a, b: b }];
console.log(d_sum(2, 3)); //=> ra Array


// Trong trường hợp đối số của Arrow Function chỉ có 1 đối số như này:
const f_logger = (log) => console.log(log);
f_logger('Message...');

//=> Thì hoàn toàn có thể viết như này: Bỏ dấu ngoặc đơn ()
const g_logger = log => console.log(log);
g_logger('Message...');



// Tính chất của Arrow Function
const coures = {
    name: 'Javascript Basic',
    getName: function () {
        return this.name;
    }
};

console.log(coures.getName());
// Hàm bình thường có từ khóa function thì dùng được this.

// Arrow Function thì không.
const a_coures = {
    name: 'Javascript Basic',
    getName: () => {
        return this.name;
    }
};
console.log(a_coures.getName()); //=> Undefine

// Arrow Function không có Constructor
const Course = (name, price) => {
    this.name = name;
    this.price = price;
};
const jsCourse = new Course('Javascript', 1000); //=> Lỗi
console.log(jsCourse);