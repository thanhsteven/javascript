// ! this keyword
// - This : nó sẽ đề cập tới object gần nhất
const student = {
  name: "Kim Thành",
  age: 27,
  male: true,
  "last-name": "Phạm",
  hi: function () {
    console.log(
      `Tôi là ${this["last-name"]} ${this.name} và tôi ${this.age} years old !`
    );
  },
};

student.hi();

