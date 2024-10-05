const person = {
  name: "Kim Thành",
  age: 28,
  job: "Developer",
  isMarried: false,
  hobbies: ["reading", "gaming", "coding"],
  greet: function () {
    return "Xin chào, tôi tên là " + this.name;
  },
  address: {
    street: "91a Cao Thắng",
    city: "HCM city",
    country: "Vietnam",
  },
};

// * Destructuring nhiều lớp
const {
  name: myName,
  age: myAge,
  job,
  isMarried: married,
  address: { street, city, country },
  greet,
} = person;

console.log(
  `Tôi tên là ${myName}, năm nay tôi ${myAge} tuổi, tôi đang là một ${job}, tôi ${
    married == false ? "chưa kết hôn" : "đã kết hôn rồi"
  }. Địa chỉ mà tôi sinh sốn là ${street} ${city} ${country} và đây là lời nói đầu tiên của tôi khi gặp cô ấy: ${person.greet()}`
);

// * Thay đổi giá trị của object
person.address.street = "91a đường Cao Thắng";
person.address.street = "91a Đ. Cao Thắng, Phường 3, Quận 3";

// * Thêm thuộc tính key và giá trị cho object
person.address["district"] = "Quận 3";
console.log(person);

// * Xóa thuộc tính key và giá trị của obejct
delete person.address["district"];
console.log(person);

// * Cách tạo ra 1 mảng chứa các tên thuộc tính (key) của object
let keys = Object.keys(person);
console.log(keys);

// * Cách tạo ra 1 mảng chứa các giá trị (values của object
let values = Object.values(person);
console.log(values);

// * Tạo ra 1 mảng chứa các phần tử con bên trong lần lượt là các thuộc tính của object
let entries = Object.entries(person);
console.log(entries);

// * Đóng băng object -> ngăn không cho chỉnh sửa
Object.freeze(person);
person.isMarried = true;
console.log(person);

// * Cho phép chỉnh sửa nhưng không được thêm vào cái mới
Object.seal(person);
person.address.street = "91a đường Cao Thắng";
person["hasChild"] = false;
console.log(person);

// * Sao chép Object
const objectD = { name: "Akiho Yoshizawa" };
const objectF = { name: "Yui Hatano" };
const newObecjt = objectF;

newObecjt.name = "Yua Mikami";
console.log(newObecjt);

// * Copy value hoặc gộp object - có 2 cách
// * Cách 1
const objectA = { firstName: "Thành" };
const objectB = { lastName: "Phạm" };
const objectC = { middleName: "Kim" };
let assign = Object.assign(objectB, objectC, objectA);
console.log(assign);
console.log(Object.entries(assign));

// * Cách 2
let nested = { ...objectB, ...objectC, ...objectA };
console.log(nested);

// * Sao chép Object phức tạp hơn
const user = {
  lastName: "Nguyễn",
  firstName: "Châu",
  age: 20,
  gender: "Male",
  email: "nguyenvanan@example.com",
  sayHi: function () {
    console.log("Hi");
  },
  company: {
    name: "XLibre",
    address: "91a Cao Thang",
    room: {
      name: "Content Marketing",
    },
  },
};

const newUser = { ...user };
console.log(newUser);

const copyUser = Object.assign({}, user);
console.log(copyUser);

const minhchau = {
  name: "Minh Châu",
  age: 25,
  isMale: "Female",
  isMarried: true,
};

// * Destructuring là một cách viết ngắn gọn hơn khi sử dụng các thuộc tính key của object. Tuy nhiên các tên biến bắt buộc phải trùng với tên key của object, bởi vì JavaScript sẽ tìm kiếm các thuộc tính trong object dựa trên tên key mà bạn chỉ định.
let { name, age, isMale } = minhchau;
console.log(name, age, isMale);

// * Một cách khác để đặt tên theo ý muốn
const {
  name: fullName,
  age: yourAge,
  isMale: gender,
  grade = "Đại học",
} = minhchau;

console.log(
  `Bạn ${fullName} năm nay ${yourAge} tuổi là ${
    gender === "Female" ? "Nữ" : "Nam"
  } và đang học ${grade}`
);

// * Vòng lặp trong Object
for (let key in person) {
  console.log(key + " : " + person[key]);
}

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});

for (let [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}
