// * Viết function theo cách thông thường (regular function)
// * Cách 1
function f1(x, y, z) {
	return x + y + z;
};

console.log("F1 =",f1(2, 5, 9));

// * Cách 2
var f2 = function (x, y, z) {
	return x + y + z;
};
console.log("F2 =",f2(2, 5, 9));


// * Dùng arrow function
// * Ngăn cách giữa hàm và thân hàm là dấu =>
var f3 = (x,y,z) => {
	return x + y + z;
}
console.log("F3 =",f3(2, 5, 9));


// * Khi chỉ có 1 tham số, thì có thể bỏ dấu ()
// * Khi trong thân hàm chỉ có 1 dòng thì bỏ dấu {} 
// * Lưu ý trong trường hợp này không được viết return. Vì bản chất viết tắt 1 dòng code đã return rồi 
var f4 = x => x + 1;

var f4 = (x) => {
	return x + 1;
}
// : Cách viết thuần
function f4(x) {
	return x + 1;
}
console.log("F4 =",f4(5));

// * Tương đương với
var f5 = x => {
	return x + 1;
}

console.log("F5 =",f5(5));

var f6 = x => document.write(x);
f6(5);

// * Trường hợp không có tham số
var f7 = () => "haha";

function f7() {
	return "haha";
}
console.log("F7 =",f7());