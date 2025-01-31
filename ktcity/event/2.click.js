// * addEventListener
const button = document.querySelector(".button");
button.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click button");
});

// * Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick());
function handleClick() {
  console.log("click me !");
}
// * Đúng là phải ghi như này
// button.addEventListener("click", handleClick);

document.body.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click Body");
});

// * Bubbling : Nổi bọt
const span = document.querySelector(".button span");
span.addEventListener("click", function (e) {
  // e.stopPropagation();
  // e.stopImmediatePropagation();
  console.log("click span");
});

// * Ngoài sử dụng Bubbling ra thì mình còn có thể sử dụng thêm Capture

span.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("Click span 2");
  },
  { capture: true }
);
span.addEventListener("click", handleClick, { capture: true });

