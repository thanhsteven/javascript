// Object Constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return this.firstName + " " +this.lastName;
    };
};

var teacher = new User('Son', 'Dang', 'avatar');
var student = new User('Thanh', 'Kim', 'avatar');

teacher.title = 'Chia se tai F8';
student.comment = 'Khi nao giau';

console.log(teacher.getName());
console.log(student.getName());

console.log(teacher);
console.log(student);

// Goi truc tiep Prototype
console.log(teacher.constructor === User);


// Object Constructor

User.prototype.className = 'F8';
// Khai báo bên ngoài thì đối tượng không thấy được


// Prototype giúp mình thêm vào 1 thuộc tính ở bên ngoài cái hàm tạo

console.log('className : ',teacher.className);
console.log('className : ',student.className);

console.log(teacher);

User.prototype.getClassName = function () {
    return this.className;
};

console.log(teacher.getClassName());

console.log(student);

