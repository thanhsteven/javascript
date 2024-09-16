// ! getAttribute("attribute")
// * attribute -> thuộc tính: href, id, class, src, style
// * selector : 1 cái
// * Lấy ra giá trị attribute selector

const link = document.querySelector(".link");
if (link) {
  console.log(link.getAttribute("href"));
}

const li = document.querySelectorAll(".item");
console.log(li);

li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
