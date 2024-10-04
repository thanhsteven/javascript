const student = {
  id: "S123456",
  name: "Nguyen Van An",
  age: 20,
  gender: "Male",
  email: "nguyenvanan@example.com",
  sayHi: function () {
    console.log("Hi");
  },
};

// ! Object.keys(object)
const keys = Object.keys(student);
// * Trả về 1 mảng (array) chứa tất cả các key của object
console.log(keys);
console.log(`Độ dài mảng: ${keys.length}`);

// ! Object.values(object)
// * Trả về 1 mảng (array) chứa tất cả các giá trị object
const values = Object.values(student);
console.log(values);

// ! Object.entries(object)
// * Trả về 1 mảng (array) nested (trong mảng có mảng) gồm có key và value
const entries = Object.entries(student);
console.log(entries);

// ! Object.assign(object)
// * Copy value từ object này sang object khác -> Gộp object
const a = { firstName: "Thành" };
const b = { lastName: "Phạm" };
const c = Object.assign(a, b);
console.log(c);

// * Hoặc là dùng {...a, ...b}
const d = { ...a, ...b };
console.log(d);

// ! Object.freeze(object)
// * Đóng băng object -> Ngăn chặn chỉnh sửa key và value của object
const car = { brand: "BMW" };
const newCar = Object.freeze(car);
console.log(newCar);
newCar.brand = "Audi";
console.log(newCar);

// ! Object.seal(object)
// * Cho phép chỉnh sửa key và value nhưng không được phép thêm vào cái mới
const user = { userName: "Kim Thành" };
const newUser = Object.seal(user);
newUser.userName = "Phạm Kim Thành";
newUser.age = 28;
console.log(newUser);

// ! Copy object
// * Sao chép 1 object -> Spread Operator: {...object}
const userA = { firstName: "Kim Thành" };
const newUserA = userA;
newUserA.firstName = "kimthanh";
console.log(userA); // {firstName: 'kimthanh'}
console.log(newUserA); // {firstName: 'kimthanh'}

// ! Copy object phức tạp hơn
const userB = {
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
      name: "Marketing",
    },
  },
};

const newUserBv2 = { ...userB };
console.log(newUserBv2);

const newUserBv3 = Object.assign({}, userB);
console.log("[-----New User B version 3-----]");
console.log(newUserBv3);

// - 2 Cách trên chỉ dùng cho object đơn giản thôi => Object đơn giản là object chỉ có 1 cấp duy nhất.
// - 2 Cách trên cũng chỉ copy được tới 1 cấp duy nhất trong Object chứ không copy được hết toàn bộ 1 object phức tạp => Object phức tạp là object bên trong có thêm 1 object nữa.

// * Cách tốt nhất là:
const newUserBv4 = JSON.parse(JSON.stringify(userB));
newUserBv4.company.room.name = "Leader Marketing";
newUserBv4.company.name = "Diamond";

console.log("[-----New User B version 4-----]");
console.log(newUserBv4);

console.log("[-----Object bản gốc-----]");
console.log(userB);
