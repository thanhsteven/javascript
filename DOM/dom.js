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
