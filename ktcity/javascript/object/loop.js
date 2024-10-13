const student = {
  name: "Thành",
  age: 28,
  isDeveloper: true,
  "last-name": "Phạm",
  middleName: "Kim",
  sayHi: function () {
    console.log(`Hi ${middleName} ${name}`);
  },
};

for (let key in student) {
  if (key === "name") {
    console.log("Hello name");
  }
  const value = student[key];
  console.log(`${key}: ${value}`);
}

