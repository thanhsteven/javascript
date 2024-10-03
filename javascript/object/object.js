// ! Object là một tập hợp các key và value
// * Cách khai báo: 2 cách
// * Cách 1: Object Literral -> Cách được sử dụng nhiều nhất
const objectLiteral = {};
// * Cách 2: Object constructor
const objectConstructor = new Object();
const student = {
  name: "Kim Thành",
  "last-name": "Phạm",
  "middle-name": "Kim",
  age: 27,
  male: true,
  hi: function () {
    console.log("Hello Kim Thành");
  },
  // - function mà nằm trong objec thì được gọi là method
};

// ! 2 cách truy xuất giá trị của object
// * 2.1: Dot notation => .
console.log(student.name);
// * 2.2: Bracket Notation => ["key"]
console.log(`Số tuổi: ${student["age"]} tuổi`);
console.log(student["last-name"] + " " + student["name"]);

// ! Thay đổi giá trị của Object
// * Để thay đổi thì phải biết cái key của nó.
student.age = 20;
student.isDeveloper = true;
student["is-developer"] = false;
console.log(student);

// ! Cách xóa giá trị trong object
delete student["is-developer"];
console.log(student);
