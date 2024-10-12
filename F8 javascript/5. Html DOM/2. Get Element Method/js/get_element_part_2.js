//=> 1. getElementById => Số ít => Element
//=> 4. querySelector => Số ít => Element

// 2. getElementsByClassName
// 3. getElementsByTagName
// 5. querySelectorAll
//=> Trả về 1 nodeList có tính chất giống như mảng.

// Trong 5 phương thức trên thì chỉ có số 1 vs 4 là trả về trực tiếp element
// Còn những phương thức còn lại thì trả về 1 HTML collection và 1 NodeList
// => Hãy cẩn thận khi sử dụng.

// 6. HTML collection
// 7. document.write

var h1_heading = document.getElementById('heading');
console.log(h1_heading);
// Đây mới chính là Element.

var headings = document.getElementsByTagName('h2');
console.log(headings);
// ! đây là 1 HTML Collection chứ không phải là element
// ! Và để lấy được thẻ h2 thì phải thêm [index] vào => Tính chất giống MẢNG
console.log(headings[0]); // => Đây mới là Element

// element : là khi console.log() ra thì thấy rõ cái element đó
// nodelist : là một tập hợp gần giống với mảng

// => Cách lấy element ngắn gọn hơn chính xác hơn
console.log(document.forms[1]);
// Hoặc
console.log(document.forms['form-1']);