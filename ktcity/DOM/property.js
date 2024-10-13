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

// ! selector.setAttribute("attribute", value)
// - Set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");
const listLinks = document.querySelectorAll("a.link");

li.forEach((item) => item.setAttribute("target", "_blank"));

// ! seclector.removeAttribute("attribute", value)
// - Xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");

// ! selector.hasAttribute("attribute")
// - Kiểm tra selector có Attribute nào đó không, nếu có -> true ngược lại không có thì trả về false.
console.log(p.hasAttribute("class"));
if (p.hasAttribute("id")) {
  console.log(p.hasAttribute("id"));
}
