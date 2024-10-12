// Reduce
console.log('---------- Reduce ---------');
var khoahoc = [
    { id: 1, name: 'Javascript', coin: 250, },
    { id: 2, name: 'Nodejs', coin: 0, },
    { id: 3, name: 'PHP', coin: 450, },
    { id: 4, name: 'Ruby', coin: 400, },
    { id: 5, name: 'Dark', coin: 300, },
    { id: 6, name: 'Ruby', coin: 300, },
];

// Tính tổng số Coin của khóa học
// tính thông thường
var totalCoin = 0;
for (var course of khoahoc) {
    totalCoin += course.coin;
};
console.log('Vòng lặp = ' + totalCoin);

// Tính ngắn gọn
// Viết thuần
var totalCoin = khoahoc.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);
console.log('Hàm Reduce = ' + totalCoin);

// Viết ngắn hơn bằng ES6
var totalCoin = khoahoc.reduce((a, b) => a + b.coin, 0);
console.log('Reduce ES6 = ' + totalCoin);

// Reduce
var tong_tien = khoahoc.reduce( function
    (accumulator, currentValue, currentIndex, originArray) {
    // accumulator : biến lưu trữ
    // currentValue : giá trị hiện tại
    // currentIndex : chỉ mục của Array
    // originArray : giá trị Array gốc mà reduce gọi đến
        
    // Thực hiện lưu trữ
    return accumulator + currentValue.coin;
    // return cái gì thì nó lưu trữ cái đó

    },
0); // initial Value : giá trị khởi tạo và là đối số thứ 2

console.log(tong_tien);

// Initial Value : giá trị khởi tạo tùy theo mục đích.
// Giá trị khởi tạo này là giá trị được gán vào biến accumulator cho lần chạy đầu tiên, và trong lần đầu tiên accumulator = 0

// Kiểu dữ liệu của Initial Value có thể là kiểu number, kiểu array,... là do mục tiêu mà mình muốn áp dụng reduce vào làm gì và kết quả mình muốn là kiểu dữ liệu gì thì nó là kiểu dữ liệu đó.

// Ví dụ thêm về Reduce
// Biến mảng sâu sau thành 1 mảng phẳng. Mảng phẳng là mảng không có mảng con bên trong.
var depthArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);