// Node Properties
var boxElement = document.querySelector('.box');

// Console.log element đó dưới dạng {} hoặc [].
// Để xem được hết tất cả các thuộc tính và phương thức của nó.
// Mỗi lần cần cái gì thì lôi nó ra xài.
// => Đây là cách đơn giản nhất
console.log([boxElement]);

// Một vài ví dụ:

// Kích thước element
console.log('KT chiều dọc : ', boxElement.clientHeight);
console.log('KT chiều ngang : ', boxElement.clientWidth);
// Hoặc
console.log(boxElement.offsetHeight);
console.log(boxElement.offsetWidth);

// Kiểm tra thẻ cha đang chứa
console.log(boxElement.offsetParent);
// Hoặc
console.log(boxElement.parentElement);
console.log(boxElement.parentNode);


console.log('Trục X : ', boxElement.clientLeft);
console.log('Trục Y : ', boxElement.clientTop);
console.log('Attribute : ', boxElement.attributes);
console.log('URl hiện tại : ', boxElement.baseURI);
console.log('Dấu xuống dòng : ', boxElement.nodeValue);
console.log('Số lượng Node bên trong : ', boxElement.childElementCount);
console.log('Tên của Node : ',boxElement.nodeName);
console.log('Title Attribute : ',boxElement.title);


// classList : giúp quản lý các attribute Class của 1 element
console.log(boxElement.classList);

// nextElementSibling : trả về thẻ tag (element) tiếp theo của element hiện tại
console.log(boxElement.nextElementSibling);

// nextSibling : trả về cái node tiếp theo bao gồm cả textNode và ElementNode
console.log(boxElement.nextSibling);


// Cách kiểm tra xem 1 thằng có phải là element node hay không ?
// * nodeType = 1 => Element Node
// * nodeType = 2 => Attribute
// * nodeType = 3 => TextNode
console.log(boxElement.nodeType);

// Kiểm tra tài liệu đang sở hữu
console.log(boxElement.ownerDocument);

// Kiểm tra lỗi chính tả => true | false
console.log(boxElement.spellcheck); 