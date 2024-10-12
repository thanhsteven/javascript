// Filter

Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            };
        };
    };
    return output;
};

var courses = [
    {name : 'Javascript', coin : 890},
    {name : 'PHP', coin : 600},
    {name : 'Ruby', coin : 800},
];

var result = courses.filter2(function (course, index, array) {
    // console.log(course, index, array);
    return course.coin > 700;
});

console.log(result);


