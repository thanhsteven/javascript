// ! DOM -> Document Object Model
// - Là những cái mà chúng ta thấy trong html
// * Dom Attributes -> href, src,...
// * Dom node -> thẻ <a>, <div>, <p>,...

// ! Seclecting Node
// - Chọn node, chọn thẻ tag html
// * 2.1 Document Query Selector
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");
console.log(singleNode4);

// * 2.2 Document Query Selector All
// - Trả về một Nodelist chứa danh sách các node
// - Nếu không có thì trả về empty
// - Nó có thể loop nhưng không sử dụng được các phương thức của array như push, pop, shift,...
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);
for (let i = 0; i < multiNodes.length; i++) {
  console.log(multiNodes[i]);
}

// ! Document.getElementsByClassName("classname")
// - Trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);

// ! Document.getElementsByTagName(tagName)
// - Trả về một HTML Collection chứa danh sách các node, nếu không có thì trả về empty []
const tagNodes = document.getElementsByTagName("li");
console.log(tagNodes);

// ! Document.getElementsById("id")
// - Trả về 1 node
const idNode = document.getElementById("spinner");
console.log(idNode);

// * Hay dùng nhất là document.querySelector(tag, class, id)
// * Tương tự luôn là document.querySelectorAll(tag, class, id)

