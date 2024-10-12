// Callback
// là hàm function được truyền qua đối số khi gọi hàm khác

// ! Khi nó thỏa mãn 2 điều kiện này: 
// 1. là hàm
// 2. được truyền qua đối số

// Callback
// 1. là hàm
// 2. truyền qua đối số
// 3. được gọi lại (trong hàm nhận đối số)

var course = [ 'Javascript', 'PHP', 'Ruby'];

function myCallback(value) {
    console.log('Value :', value);
};

function myFunction(param) {
    if (typeof param === "function") {
        param('Hoc lap trinh');
    };
};

myFunction(myCallback);

// Callback
// 1. là hàm
// 2. truyền qua đối số
// 3. được gọi lại (trong hàm nhận đối số)

// Những hàm như : map, find, filter, foreach,...
// => đều là hàm

course.map(function (course) {
    console.log(course);
});
// Hàm tự định nghĩa
Array.prototype.map2 = function () {
    let arrLenght = this.length;
    for (let i = 0; i < arrLenght - 1; i++) {
        console.log(this[i]);
    };
};

course.map2();