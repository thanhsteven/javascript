// innerText , textContent
// => đây là thuộc tính có tồn tại trong Element Node.

var headingText = document.querySelector('h1');

// Kiểm tra các thuộc tính có sẵn của element
console.log({ Element: headingText });


// innerText : trả về kết quả text như những gì user thấy trên màn hình
console.log(headingText.innerText);

// textContent : trả về kết quả thực sự của text bên trong element.
console.log(headingText.textContent);

headingText.innerText = 'New Heading';
headingText.textContent = 'New Heading 2';

// geter : sử dụng công cụ hỗ trợ việc lấy ra
// seter : đặt lại, thay đổi nội dung của 1 thuộc tính đối tượng



