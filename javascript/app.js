//  Javascript là một ngôn ngữ lập trình chạy ở phía Client
// console.log là nơi để log code ra bên ngoài của tab console

console.log("Hello Word");
// Biến - Variables --> đùng để lưu giá trị dữ liệu và sử dụng đi sử dụng lại ở nhiều nơi và chỉ cần thay đổi ở 1 chỗ mà thôi.
// Khi sử dụng biến thì phải đặt tên cho biến. Đặt theo định dạng cameCase --> Không đặt Tiếng Việt, hoặc có dấu, hoặc các kí tự đặc biệt, các từ của hệ thống Javascript.

/*
- Declare variables: Khai báo biến.
- const và let.
- const : Hằng số và không thay đổi tức là không thể thay đổi giá trị của nó nữa.
- let : tạo biến số và có thể thay đổi giá trị được.
*/

const number = 100;
console.log(number);
// number = 200; => Lỗi nha bạn

let number2 = 200;
number2 = 500;
console.log(number2);

/*
- Hoisting
- Show ra kết quả trước khi trình duyệt thực hiện chức năng nào đó ra
- Ví dụ bên dưới là mình gọi biến number3 ra trước khi khai báo nó --> nó báo lỗi
*/
console.log(number3); // Lỗi hoisting
const number3 = 200;
