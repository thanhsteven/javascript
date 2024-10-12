var string = "Hoc lap trinh tai F8";

console.log('Do dai = ',string.length);

for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
};

// => Dùng được cho String
// => Dùng được cho Array

var object = {
    name : "kim thanh",
    age : 19,
    "email" : "pktball@gmail.com",
};

console.log(object.length);

for (var i = 0; i < object.length; i++) {
    console.log(object[i].value);
};
