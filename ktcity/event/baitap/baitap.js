// - Bài tập 1 - Change Random Background Color
const button = document.querySelector(".change");
const colors = tao_mau_ngau_nhien(10);
button.addEventListener("click", handleChangeColor);
function handleChangeColor() {
  document.body.style.backgroundColor = mau_ngau_nhien();
}
// Tạo array chứa các mã màu
function tao_mau_ngau_nhien(n) {
  const colors = [];
  for (let i = 0; i < n; i++) {
    const color =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    colors.push(color);
  }
  return colors;
}
// Tạo 1 mã màu random
function mau_ngau_nhien() {
  let color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return "#" + color;
}

// - Bài tập 2
const btnMinus = document.querySelector(".counter-descrease");
const btnPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = Number(counterNumber.textContent);
btnPlus.addEventListener("click", function (e) {
  // 3 cách viết
  counterValue++;
  // counterValue = counterValue + 1;
  // counterValue += 1;
  counterNumber.textContent = counterValue;
});
btnMinus.addEventListener("click", function (e) {
  if (counterValue <= 0) {
    return 0;
  }
  // 3 cách viết
  // counterValue--;
  // counterValue = counterValue - 1;
  counterValue -= 1;
  counterNumber.textContent = counterValue;
});

// - Bài tập 3 - Menu
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
  event.target.classList.toggle("fa-times");
  event.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  console.log(event.target);
  if (menu.contains(event.target) && !event.target.matches(".is-show")) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  }
}

// - Bài tập 4 - Tab
const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItems].forEach(function (item) {
  item.addEventListener("click", handleTagClick);
});
function handleTagClick(event) {
  [...tabItems].forEach((item) => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
  const tabNumber = event.target.dataset.tab;
  // console.log(tabNumber);
  [...tabContent].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
  // [...tabContent][tabNumber - 1].classList.add("active");
}
