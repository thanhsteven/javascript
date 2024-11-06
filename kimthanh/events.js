// ! addEventListener
// * Click
const button = document.querySelector("#change-text-btn");
button.addEventListener("click", handleClick);
button.addEventListener("click", function () {
  console.log("click me 1");
});

function handleClick() {
  console.log("Click button");
}

// * Bubbling: Nổi bọt
// - Sự kiện nổi bọt: là nổi từ bên dưới lên trên, nổi từ trong ra ngoài
// - Để ngăn chặn bubbling --> Sử dụng event.stopPropagation
const buttonFirst = document.querySelector(".button-first");
buttonFirst.addEventListener("click", handleClick);

const span = document.querySelector(".button-first span");
span.addEventListener("click", function (event) {
  // * Chặn sự kiện bubbling
  event.stopPropagation();
  // * Vừa chặn bubbling vừa chặn function trùng sự kiện
  event.stopImmediatePropagation();
  console.log("Click span 2");
});

span.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Click span");
});

// * Capture: Ngược lại với bubbling là chạy ngược lại từ ngoài vào trong

// * target và currentTarget
// - chỉ suất hiện khi mà phát sinh 1 sự kiện nào đó ví dụ như click
// - event.target: chọn chính xác element mà mình click tới
// - event.currentTarget: chọn phần tử mà mình click, tức là chọn phần tử bao bọc ngoài cùng chứ không quan tâm bên trong có thêm thẻ gì đi nữa.
const button03 = document.querySelector(".button-03");
button03.addEventListener("click", function (event) {
  console.log(`event.target: ${event.target}`);
  console.log(`event.currentTarget: ${event.currentTarget}`);
});

// * event.preventDefault()
