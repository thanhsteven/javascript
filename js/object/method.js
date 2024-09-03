// ! Object.keys(object)
// * Trả về 1 mảng (array) chứa tất cả các key của object
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
const keys = Object.keys(student);
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
const newUserA = userA; //=>
newUserA.firstName = "kimthanh";
console.log(userA); // {firstName: 'kimthanh'}
console.log(newUserA); // {firstName: 'kimthanh'}
