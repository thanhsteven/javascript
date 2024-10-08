// * DOM: Documen Object Model
// * DOM Attributes: href, src, rel,...
// * DOM Node: thẻ <a>, <div>, <p>,...

// * Selecting Node
// * 2.1 Document Query Selector
let titleH1 = document.querySelector("h1");
let descript = document.querySelector("p");
let button = document.querySelector("button");
console.log(titleH1, descript, button);

// * 2.2 Document Query Selector All
//- Trả về một NodeList -> Giống Array nhưng không thể sử dụng được các phương thức cơ bản của Array.
//- Nhưng có thể sử dụng vòng lặp for được.
const li = document.querySelectorAll("li");
console.log(li); //-> NodeList
for (let i = 0; i < li.length; i++) {
  console.log(li[i]);
}

// * Document.getElementsByTagName(thẻ HTML)
//- Trả về 1 HTML Collection chứa danh sách các node, nếu không có thì trả về là empty.
let tagLi = document.getElementsByTagName("li");
console.log(tagLi);

// * Document.getElementByClassName("Tên Class")
//- Trả về một HTML Collection chứa các Node, nếu không có thì là empty.
let itemLi = document.getElementsByClassName("item");
console.log(itemLi);

// * Document.getElementById("Tên ID")
//- Trả về duy nhất 1 Node
let ulList = document.getElementById("item-list");
console.log(ulList.getAttribute("id"));

// * Get Attributes
// * attribute -> thuộc tính: href, id, class, src, style
// * selector : 1 cái
// * Lấy ra giá trị attribute selector
let h1Title = document.querySelector(".heading-1");
console.log(h1Title.getAttribute("class"));

let liItem = document.querySelectorAll(".item");
console.log(liItem);
liItem.forEach(function (item) {
  console.log(item.getAttribute("class"));
});

// * Set Attributes
// * Gán thuộc tính cho Selector đó
let link = document.querySelector(".link-item");
link.setAttribute("rel", "nofollow");
link.setAttribute("target", "_blank");
console.log(link);

// * Remove Attributes
// * Xoá thuộc tính trong Node
link.removeAttribute("target");
link.removeAttribute("rel");
console.log(link);

// * Has Attributes
// * Kiểm tra xem trong selector đó có thuộc tính này hay không.
//- Trả về giá trị boolean
console.log(link.hasAttribute("href"));
if (ulList.hasAttribute("id")) {
  console.log("Đúng là nó có thuộc tính này");
}

