// ! Thêm, xóa, sửa node trong Javascript
// * Tạo ra element trong Javscript
const div = document.createElement("div");

// * seclector.appendChild
const body = document.body; // lấy được element body
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem";
body.appendChild(div);

const card = document.createElement("div");
card.setAttribute("class", "card");
card.classList.add("wrapper");
const cardImage = document.createElement("img");
cardImage.setAttribute("src", "./images/thuy-tinh-isoglass.jpg");
cardImage.className = "card-image";
card.appendChild(cardImage);

const cardContent = document.createElement("div");
cardContent.classList.add("card-content");
const cardHeading = document.createElement("h3");
cardHeading.classList.add("card-heading");
cardContent.appendChild(cardHeading);
cardHeading.textContent = "This is Name Card";
card.appendChild(cardContent);
body.appendChild(card);
