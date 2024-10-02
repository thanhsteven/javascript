// ! Viết 1 function tạo ra thông báo
function createNotification() {
  const template = `<div class="noti">
      <img src="./images/thuy-tinh-isoglass.jpg" class="noti-image" />
      <div class="noti-content">
        <h3 class="noti-title">Welcome to notification</h3>
        <p class="noti-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
const timer = setInterval(function () {
  createNotification();
}, 4000);

