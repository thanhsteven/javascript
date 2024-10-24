// * target vs currentTagrget
const button = document.querySelector(".button");
button.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "red";
  event.currentTarget.style.backgroundColor = "red";
  event.currentTarget.style.color = "yellow";
  event.target.style.fontWeight = "700";
  // console.log(`event.target: ${event.target}`);
  // console.log(`event.currentTarget: ${event.currentTarget}`);
});

// * event.preventDefault()
// * Ngăn chặn 1 hành vi mặc định nào đó
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  e.target.style.color = "red";
  // Lấy custom attribute data-abc
  console.log(e.target.dataset.name);
});
