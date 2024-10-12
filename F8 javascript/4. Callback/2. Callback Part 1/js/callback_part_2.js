// Hàm Callback thỏa mãn 3 điều kiện sau:

// 1. là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại trong hàm nhận đối số

var courses = ['javascript', 'php', 'ruby'];

// var htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`
// });

// console.log(htmls);


Array.prototype.map2 = function (callback) {
    var arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        callback(this[i], i);
    };
};

courses.map2(function (course, index) {
    console.log(course, index);
});