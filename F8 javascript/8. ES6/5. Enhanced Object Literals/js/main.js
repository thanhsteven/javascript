// 1. Định nghĩa Key Value cho Object
// 2. Định nghĩa Method cho Object
// 3. Định nghĩa Key cho Object dưới dạng biến 


// 1. Định nghĩa Value cho Object dưới dạng biến
var name = 'Javascript';
var price = 1000;

var course = {
    name: name,
    price: price,
    getName: function () {
        return name;
    },
};
console.log(course);
console.log(course.getName());
// name sau dấu hai chấm (:) chính là cái biến name đã khai báo ở trước với giá trị là javascript.

//=> Có thể hiểu như này : Dùng GIÁ TRỊ của 1 biến đã khai báo trước bên ngoài để làm GIÁ TRỊ cho thuộc tính của Object bên trong.

//=> Có thể viết thành như vầy
var x_course = { name, price };
console.log(x_course);


// 2. Định nghĩa Method cho Object
var y_course = { name, price, getName() { return name } };
console.log(y_course.getName());

// 3. Định nghĩa Key cho Object dưới dạng biến 
var KeyNewName = 'new name';
var KeyPrice = 'price';

var z_course = {
    name : 'Javascript',
    [KeyNewName] : 'PHP',
    [KeyPrice] : 1000,
};

console.log(z_course);

//=> Có thể hiểu như sau : Dùng giá trị của 1 biến đã khai báo trước đó ở bên ngoài để làm TÊN KEY cho thuộc tính của object bên trong. Nên mới phải đặt trong cặp dấu [].