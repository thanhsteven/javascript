// Đối với Object
var myInfo = {
    firstName: 'Thanh',
    lastName: 'Kim',
    age: 18,
    address: 'HCM, VN',
};

for (var key in myInfo) {
console.log(`${key} : ${myInfo[key]}`);
};

// Đối với Array
var language = ['javascript','php','python','nodejs','reactjs'];
for (var key in language) {
console.log(`${key} : ${language[key]}`);
};

// Đối với Chuỗi
var myString = 'javascript';
for (var key in myString) {
console.log(`${key} : ${myString[key]}`);
};