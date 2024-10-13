// ! Viết 1 function tạo ra thông báo
function createNotification(title) {
  const template = `<div class="noti">
      <img src="./images/thuy-tinh-isoglass.jpg" class="noti-image" />
      <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
  "Nguyễn Anh Thư",
  "Nguyễn Huỳnh Minh Châu",
  "Phạm Kim Thành",
  "Cao Hoàng Sơn",
  "Nguyễn Minh Tuấn",
];
let lastTitle;
const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 5000);

