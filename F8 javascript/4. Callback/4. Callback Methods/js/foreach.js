// ForEach 2

// => Foreach khong can return
// courses.forEach(function (course, index, array) {
//     console.log(course, index, array);
// });

// => Định nghĩa 1 phương thức cho Array Constructor
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        console.log('index : ', index);
    };
};

var courses = ['javascript', 'php', 'ruby'];

courses.forEach2(function (course, index, array) {
    console.log(index, course, array);
});

console.log(courses);

console.log('---------------------------');

var name = 'javascript';

String.prototype.forEach3 = function (callback) {
    for (var index in this) {
        console.log('index : ', index);
    };
};

name.forEach3(function (char, index) {
    console.log(index, char);
});

console.log(name);