// * target vs currentTagrget
const button = document.querySelector(".button");
button.addEventListener("click", function (event) {
  console.log(`event.target: ${event.target}`);
  console.log(`event.currentTarget: ${event.currentTarget}`);
});

// * event.preventDefault()
// * Ngăn chặn 1 hành vi mặc định nào đó
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link tag a");
});
