// không cho phép
// vì nó tương đương với var i bên ngoài

let i = 100;

{
	var i = 100;
};

console.log(i);

let a = 6;
var a = 7;
console.log(a);

//=> Đã khai báo let rồi thì không được khai báo lại với var và ngược lại