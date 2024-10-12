// Map
// Dùng để chỉnh sửa hay thay đổi 1 element của 1 Array
// Bên trong là 1 vòng lặp giống filter
// Function bên trong map() trả về cái gì thì nó lấy cái đó làm element bên trong map mới.
console.log('----------- Map ----------');
var courses = [
    { id: 1, name: 'Javascript', coin: 250, },
    { id: 2, name: 'Nodejs', coin: 0, },
    { id: 3, name: 'PHP', coin: 450, },
    { id: 4, name: 'Ruby', coin: 400, },
    { id: 5, name: 'Dark', coin: 300, },
    { id: 6, name: 'Ruby', coin: 300, },
];

function CourseHandle(khoahoc, index) {
    return { id: khoahoc.id, name: `Khóa học ${khoahoc.name}`, coin: khoahoc.coin, coinText: `Giá ${khoahoc.coin}`, index: index };
};

function CourseName(name) {
    return name.name;
};

var newCourses = courses.map(CourseHandle);
console.log(newCourses);

var couresName = courses.map(function (name) {
    return name.name;
});

var coursesName = courses.map(name => name.name);
console.log(coursesName);

console.log('------------------------------------------------------');

// => Nếu function mà không có cặp dấu {} thì không cần phải có từ khóa return trong hàm.
// => Nếu function mà có cặp dấu {} thì bắt buộc phải có return.
