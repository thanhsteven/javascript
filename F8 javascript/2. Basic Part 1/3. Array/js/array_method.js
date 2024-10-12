
var courses = [
    {id : 1, name : 'Javascript', coin : 250,},
    {id : 2, name : 'Nodejs', coin : 0,},
    {id : 3, name : 'PHP', coin : 450,},
    {id : 4, name : 'Ruby', coin : 400,},
    {id : 5, name : 'Dark', coin : 300,},
    {id : 6, name : 'Ruby', coin : 300,},
];

// * Foreach() : là vòng lặp dùng để duyệt qua được từng phần tử của mảng
courses.forEach(function(course, index) {
    console.log(index, course);
});


// * Every() : Kiểm tra tất cả các phần tử
// Tất cả phần tử trong mảng phải thỏa mãn điều kiện nào đó => true.
// Chỉ cần 1 điều kiện không thỏa mãn thì lập tức trả về => false.
// Kiểm tra từng phần tử trong mảng, và vòng lặp chỉ chạy 1 lần
// Chỉ kiểm tra 1 lần duy nhât trong mảng.
// Sẻ trả về false nếu chỉ cần 1 phần tử không thỏa điều kiện.
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);


// * Some() : cũng duyệt qua từng phần tử và trả về từng phần tử
// Chỉ cần 1 thằng thỏa điều kiện trong mảng thì lập tức trả về => true và thoát khỏi mảng
var isFree = courses.some( (free) => {
    return free.coin === 0;
});
console.log(isFree);


// * find() : Tìm kiếm
// Nó cũng sẽ lặp qua từng phần tử đối tượng.
// Mỗi lần lặp qua thì cái hàm mà chúng ta truyền vào nó sẽ được gọi lại và trả về từng phần tử.
// Kiểm tra đến phần tử nào thỏa mãn điều kiện => true thì nó lặp tức dừng lại và thoát hàm. => chỉ trả về 1 đối tượng thôi.
var rubyName = courses.find(function(couresName, index) {
    return couresName.name === "Ruby";
});
console.log(rubyName);

var jsName = courses.find(function(courseName) {
    return courseName.name === "Javascript";
});
console.log(jsName);

// * filter() : lọc và trả về các phần tử thỏa mãn điều kiện
// Trả về các phần tử thỏa mãn điều kiện.
var listCourse = courses.filter(function(item, index) {
    return item.name === "Ruby";
});
console.log(listCourse);