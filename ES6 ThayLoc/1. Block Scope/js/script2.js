var b = "haha";
// let b = "haha"; //=> Lỗi Hosting
if (4 > 3) {
	let b = "hello";
	document.write("Trong block: " + b);
};
document.write("<br>");
document.write("Ngoài block: " + b);