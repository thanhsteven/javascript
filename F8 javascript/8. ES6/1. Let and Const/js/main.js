// Let & Const

// Phân biệt Var | let , Const

// 1. Scope : phạm vi truy cập vào biến
// 2. Hosting 
// 3. Const, Var | Let : Assignment : gán lại giá trị cho biến


// 1. Scope

// Code block : khối code thường hay gặp trong :
//=> if else, vòng lặp, hoặc trong các khối code có dùng {}, ...

//! Giống nhau: đều có thể sử dụng 3 thằng để khai báo biến và dùng như nhau

// var : bên ngoài hay bên trong đều truy cập được.
// let, const : bên ngoài thì không truy cập được, nhưng bên trong thì được.


// => Đây là viết tắt của điều kiện if
// Thay vì viết như này :
if (true) {
    var cousre = 123;
};

// Thì có thể viết như này : 
{
    var course = 'Javascript Basic';
};
console.log(course); //=> Chạy bình thường
// Var bên trong Scope thì có thể thấy và chạy bên ngoài bình thường
// Nhưng với LET :
{
    let abc = 123;
};
// console.log(abc); 
//=> Lỗi vì Let bên trong Scope không thể truy cập được bên ngoài
// Và Cost cũng như vậy:
{
    const abc = 123;
};
// console.log(abc);
//=> Lỗi y như Let


// ví dụ khác:
{
    let xyz = 'Khoa hoc Javascript';
    const edm = 'Khoa hoc PHP';
    {
        console.log('xyz = ' + xyz);
        console.log('edm = ' + edm);
        // Let vẫn chạy bình thường.
        // Vì Let đã nằm bên trong scope rồi thì các scope bên trong nó cũng đều sẽ nhìn thấy được.
        //=> Const cũng vậy.
    }
};
//=> Cái phạm vi của Let, Const là bên ngoài block scope KHÔNG truy cập được nhưng bên trong block vẫn có thể truy cập được.


// Const : bên trong block và cùng thuộc 1 block thì nó sẽ báo lỗi
// Nhưng khi const được khai báo lại trong 1 block con khác của 1 block cha thì nó lại ko báo lỗi.
// ví dụ:

{
    const course = 'Javascript Basic';
    // const course = 123; // => báo lỗi
    {
        const course = 123; // => OK
        console.log(course);
    }
}

// 2. Hosting

// Hosting : Đưa những cái định nghĩa là biến đưa lên trên đầu đọc đầu tiên
// Ví dụ khi ta viết như này :
var a = 1;

// Thì Hosting nó sẽ đọc như này :
var a;
a = 1;

// => Trong đó chỉ có Var là được hỗ trợ hosting
// => let, const không được hỗ trợ

// * Đối với var, chúng ta có thể viết như này
b = 2;
var b; 
console.log('b = ' + b); // => OK

// Đối với let, const thì không được
c = 3;
// let c;

console.log(c); //=> Lỗi


// 3. Assignment : GÁN 
//=> GÁN khác hoàn toàn với khai báo lại
let x = 9; //=> Đây là Khai báo biến
x = 10; //=> Đây là GÁN

// ví dụ:
var a = 1;
a = 100;
console.log('a = ' + a); // => Var OK

// Let cũng vậy
let d = 2;
d = 200; //=> Được vì đây là gán chứ ko phải khai báo
console.log('d = ' + d);

// Nhưng Const thì không
const e = 5;
// e = 500; //=> Lỗi dòng này
console.log('e = ' + e);
// => Const không được sử dụng để gán lại cho 1 biến đã được khai báo trước đó.
// ! Chỉ không được khai báo lại với BIẾN thôi
// ! Ví dụ :
const f = {name : 'Kim Thanh'};
f.name = 'Son Dang'; //=> Đây là thuộc tính chứ không phải BIẾN
// const f = 123; //! Đây mới là BIẾN và gây lỗi
console.log(f);


// Khi nào sử dụng Var | Let, Const:
// * Khi Code thuần bằng Javascript => Var
// * Khi sử dụng thư viện Babel : Let, Const
// Const : Khi định nghĩa biến và không gán lại biến đó.
// Let : Khi định nghĩa biến và cần gán lại giá trị cho biến.

let isSuccess = false;
if (3 < 4) {
    isSuccess = true
};
console.log(isSuccess);