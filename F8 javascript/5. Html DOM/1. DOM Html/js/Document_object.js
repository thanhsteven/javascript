// Document Object : chính là ĐẠI DIỆN cho cả 1 website của bạn

// Tất cả những gì bạn code nằm trong cặp thẻ <html>...</html> thì khi trình duyệt browser bắt đầu đọc mã html thì nó sẽ đồng thời tạo ra 1 Document Object Models (DOM)

// Khi nó tạo ra 1 DOM như vậy thì nó sẽ lưu hết vào cái biến gọi là document này.

//=> Điều này có nghĩa là khi các bạn muốn truy cập vào:
// 1. Element
// 2. Attribute
// 3. Text
// => Chúng ta sẽ phải luôn luôn đi qua cái đối tượng gọi là DOCUMENT


console.log(document);

// Method Document.write
document.write('<br>');
document.write('Good Luck to you !');

//=> Nó sẽ ghi vào phần tử (element) cuối cùng của thẻ html.
//=> Trước thẻ <script>

