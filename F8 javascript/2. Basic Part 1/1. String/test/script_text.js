// Cách tạo chuỗi
var fullName = "Kim Thành";

var myString = "Học lập trình JS JS và JS JS JS frontend tại F8";

console.log(myString.indexOf("JS"));
console.log(myString.indexOf("JS",16));
console.log(myString.lastIndexOf("JS"));
console.log(myString.lastIndexOf("SJ"));
console.log(myString.search("JS"));

console.log(myString.slice(40));
console.log(myString.slice(-3));

var string = myString.replace("JS","Javascript");
console.log(string);

var string = string.replace(/JS/g,"Javascript");
console.log(string);

var string = string.toLowerCase().toUpperCase();
var string = string.replace(/JAVASCRIPT/g,"");
console.log(string);

var myString = "Javascript is the most";
console.log(myString.split(" "));

console.log(myString.charAt(8));