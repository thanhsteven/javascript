var language1 = "Javascript";
var language2 = "PHP";
var language3 = "Angular";

// Các tên ngôn ngữ trong languages được gọi là 1 phần tử của mảng.
// Mảng có đặc tính là tự đánh chỉ mục cho từng phần tử, bắt đầu bằng 0.
// Array sẽ tự động đánh chỉ mục cho từng phần tử và bắt đầu bằng 0 từ trái qua phải trong Javascript.

// ! Có 2 cách khai báo Mảng
// ! Cách 1
var languages = ['Javascript','PHP','Angular'];
console.log(languages);

// ! Cách 2 --> Không sử dụng
var languages = new Array('Javascript','PHP','Angular');
console.log(languages);

// Cách kiểm tra xem phần tử có phải là 1 array không vì kiểu dữ liệu của array luôn là object
console.log(Array.isArray(languages));

var language = ['Javascript','PHP','Angular'];

// Làm việc với Mảng - Array
// ! 1. To String
// Chuyển kiểu dữ liệu từ Array sang String
// Tự động thêm dấu phẩy để ngăn cách các phần tử --> Không chỉnh sửa dấu phẩy được.
console.log('toString =', language.toString());

// ! 2. Join
// Chuyển dữ liệu từ array sang string và --> CÓ THỂ chỉnh dấu phẩy.
console.log('Join =',language.join(' - '));

var ngonngu = ['Nodejs','Jquery','Bootstrap'];

// ! 3. Pop
// Xóa đi phần tử cuối của mảng và trả về chính phần tử đã xóa.
console.log(ngonngu.pop());
console.log(ngonngu);


// ! 4. Push
// Thêm phần tử cuối mảng, thêm 1 hoặc nhiều phần tử.
console.log(ngonngu.push('Reactjs'));
console.log(ngonngu);

// ! 5. Shift
//  Xóa đi phần tử đầu mảng và trả về phần tử đã xóa.
console.log(ngonngu.shift());
console.log(ngonngu);


// ! 6. Unshift
// Thêm 1 hoặc nhiều phần tử vào đầu mảng.
// Trả về độ dài mới của mảng.
console.log(ngonngu.unshift('Nodejs'));
console.log(ngonngu);

// ! 7. Splicing
// Xóa, cắt hoặc chèn phần tử mới vào mảng.
// Tham số 1 là xóa phần tử từ đâu ? tham số 2 là số lượng phần tử muốn xóa.
console.log(ngonngu.splice(1,2)); // Dùng để xóa.
console.log(ngonngu.splice(1,0,'Medusa'));

// ! 8. Concat
// Nối được Array. Hợp nhất 2 Array lại với nhau.
var fullName1 = ['Phạm','Kim','Thành'];
var fullName2 = ['Nguyễn','Huỳnh','Minh','Châu'];
// : Thằng nào đứng trước thì thằng đó làm gốc.
console.log(fullName1.concat(fullName2));

// ! 9. Slice
// Cắt một vài Element của Mảng.
// Có thể sử dụng nó để cắt toàn bộ Elenment hoặc là cắt lấy một vài element của mảng.
console.log(ngonngu.slice(1,2));
console.log(ngonngu);