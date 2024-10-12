// ! Object
console.log('Đối tượng Object');
var myInfo = {
    name : 'Kim Thanh',
    age : 25,
    address : 'HCM, VN',
    "last-name" : 'Pham'
};
console.log(myInfo);

// Đặt key bình thường.
myInfo.email = 'kimthanhpham96@gmail.com';

// Đặt Key dưới dạng String
myInfo['regional-language'] = 'vietnamese';

// Lấy giá trị của 1 object ra => cần biết tên key của giá trị đó
console.log('FirstName đối tượng: ',myInfo.name);

// Lấy giá trị của 1 key dưới dạng String
console.log('LastName đối tượng: ',myInfo['last-name']);

// Thêm một key mới từ 1 biến
var emailKey = 'email-sub';
// Xong đưa biến vào object
var myInfo = {
    name : 'Kim Thanh',
    age : 25,
    address : 'HCM, VN',
    'last-name' : 'Pham',
    [emailKey] : 'kimthanhpham1996@gmail.com',
};
console.log(myInfo);

console.log('Object Constructor');

// ! Object Constructor - Xây dựng đối tượng
// Hiểu là : Xây dựng Ngôi Nhà
// Tạo Object Contructor

// Đây là một bản thiết kế dùng chung cho các đối tượng.
// Và các mô tả dùng chung cho bản thiết kế này.
// ! Sau này khi đối tượng đc khởi tạo sẽ có thuộc tính là firstname = một tham số là firstname được truyền vào khi khởi tạo đối tượng.

function User(firstName, lastName, Avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Avatar = Avatar;
    // Từ khóa this : mô tả thuộc tính sẽ có cho đối tượng khi được khởi tạo từ object constructor.

    // Thêm một phương thức vào object
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
        // Từ khóa this trong function, nó sẽ được gọi từ đối tượng của chúng ta.
    };
};

var teacher = new User('Thanh', 'Kim', 'Avatar');
var student = new User('Chau', 'Minh', 'Avatar');

teacher.title = 'Chia sẻ tại F8';
student.comment = 'Khóa học javascript basic';

console.log(teacher);
// Cách xem lại bảng thiết kế từ chính đối tượng được khởi tạo từ một bảng thiết kế.
console.log(teacher.constructor === User); // ra true là đúng.
console.log(student);

console.log('Object Prototype');

// ! Object Prototype - Basic
function Member(firstName, lastName, Avatar, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Avatar = Avatar;
    this.age = age;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
};

var Mem1 = new Member('Vu','Nguyen','avatar', 18);
var Mem2 = new Member('Ha','Pham','avatar, 20');

// Thêm 1 thuộc tính mới vào Object User.
// ! Đây gọi là 1 thuộc tính.
Member.prototype.className = 'Lớp F8';

// Thêm 1 phương thức vào.
// ! Đây gọi là 1 phương thức
Member.prototype.getClassName = function() {
    return this.className; // this lúc này là getClassName.
}
console.log(Mem1);
console.log(Mem2);
console.log(Mem1.className);
console.log(Mem2.getClassName());