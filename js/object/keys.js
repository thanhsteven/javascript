// ! object.keys()
// - Trả về 1 mảng (array) chứa tất cả các key của object
const student = {
  id: "S123456",
  name: "Nguyen Van An",
  age: 20,
  gender: "Male",
  email: "nguyenvanan@example.com",
};
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
