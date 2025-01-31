const span01 = document.querySelector(".span-01");
const link = document.querySelector(".link");
console.log(span01.dataset.toggle);

link.addEventListener("click", function (event) {
  event.preventDefault();
  let title = event.target.title;
  let href = event.target.href;
  let name = event.target.dataset.name;
  let keyword = event.target.dataset.keyword;
  console.log(name);
  console.log(title);
  console.log(keyword);
  console.log(href);
});
