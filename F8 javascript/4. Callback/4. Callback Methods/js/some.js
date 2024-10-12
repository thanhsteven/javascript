// Some
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            };
        };
    };
};


var courses = [
    { name: 'Javascript', coin: 680, isFinish: true },
    { name: 'PHP', coin: 860, isFinish: false },
    { name: 'Ruby', coin: 980, isFinish: false }
];


var result = courses.some2(function (course, index, array) {
    return course.isFinish;
});

var ketqua = courses.some2(x => x.isFinish);

console.log(result);
console.log(ketqua);

