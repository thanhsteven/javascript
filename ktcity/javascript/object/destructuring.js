// ! Destructuring
// * Áp dụng rất mạnh trong việc viết function với object
const student = {
  firstName: "Thành",
  lastName: "Phạm",
  name: "Kim Thành",
  age: 20,
  gender: "male",
  major: "Digital Marketing",
  grades: {
    math: 90,
    english: 85,
    science: 88,
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  averageGrade: function () {
    let total = this.grades.math + this.grades.english + this.grades.science;
    return total / 3;
  },
};

// const name = student.name;
// const age = student.age;
// const gender = student.gender;

const { name, age, gender, ...rest } = student;
console.log(name, age, gender);
console.log(rest);

function whatYourInfo(name, age, gender) {
  console.log(name, age, gender);
}
whatYourInfo();

