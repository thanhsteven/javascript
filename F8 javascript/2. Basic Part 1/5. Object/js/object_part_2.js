// Thêm 1 key mới hoặc định nghĩa ra 1 key mới ở trong object bằng 1 biến
// Phải khai báo ở trước object mới được.
var salaryKey = 'salary';

var myInfo = {
    name : 'Kim Thanh',
    age : '22',
    address : 'HCM VN',
    'myjob' : 'Digital Marketing',
    [salaryKey] : 50000000,
};

// Thêm thuộc tính cho biến đối tượng
myInfo.email = 'kimthanhpham96@gmail.com';
myInfo['status'] = 'Single';

console.log(myInfo);

console.log('Tên : ' + myInfo.name);
console.log('Tuổi : ' + myInfo.age);
console.log('Công việc : ' + myInfo['myjob']);
console.log('Email : ' + myInfo['email']);

var myKey = 'address';
// 2 thằng bên dưới là như nhau
console.log(myInfo[myKey]);
console.log(myInfo['address']);

// Xóa đi value hoặc 1 cặp key value trong object
delete myInfo.age;
delete myInfo['address'];
delete myInfo['myjob'];

console.log(myInfo);

var adrress = 'address';

var myName = {
    lastName : 'Phạm',
    middleName : 'Kim',
    firstName : 'Thành',
    ['age'] : 22,
    [adrress] : 'HCM VN',
    fullName : function() {
        return `${this.lastName} ${this.middleName} ${this.firstName}`;
    },
    getAge : function() {
        return `Tuổi là : ${this.age}`;
    },
    phone : '0908 633 244',
};

// Trong trường hợp key là 1 function thì chúng ta sẽ gọi là phương thức,
// Còn những trường hợp còn lại thì gọi nó là thuộc tính

// fucntion --> phương thức / method
// Others --> thuộc tính / property

console.log('fullName : function = ' + myName.fullName());

console.log(myName);
console.log(myName.getAge());

// * Object Constructor
// Xây dựng đối tượng

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.lastName} ${this.firstName}`;
    };
};

var teacher = new User('Phạm', 'Thanh', 'avatar');
var hocvien = new User('Vu', 'Nguyen', 'avatar');

console.log(teacher);
console.log(hocvien);

// Thêm thuộc tính vào đối tượng
teacher.title = 'Digital Marketing';
hocvien.comment = 'study Javascript';

console.log(teacher);
console.log(hocvien);

console.log(teacher.getName());
console.log(hocvien.getName());

/* 
 
Object Prototype - Basic
    1. Prototype là gì ?
    2. Sử dụng khi nào ?

*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.lastName} ${this.firstName}`;
    };
};

// Thêm 1 thuộc tính ở bên ngoài hàm tạo Constructor
User.prototype.className = 'F8';
User.prototype.getFullName = function() {
    return `${this.lastName} ${this.firstName}`;
}

var user1 = new User('Kim','Thanh','avatar');

console.log(user1);
console.log(user1.className);
console.log(user1.getFullName());


