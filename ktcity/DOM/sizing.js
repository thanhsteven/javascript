// ! offsetWidth, offsetHeight, offsetLeft, offsetTop, offsetParent

const boxed = document.querySelector(".boxed");
function log(value) {
  console.log(value);
}

log(boxed.offsetWidth); // Độ rộng của toàn bộ phần tử
log(boxed.offsetHeight); // Chiều cao của phần tử
log(boxed.offsetLeft); // Vị trí của của nó bên trái
log(boxed.offsetTop); // Vị trí của nó ở trên
log(boxed.offsetParent); // Lấy ra phần tử cha

// ! clientWidth, clientHeight, clientLeft, clientTop
log(boxed.clientWidth); // Độ rộng thuần của phần tử
log(boxed.clientHeight); // Chiều cao thuần của phần tử
log(boxed.clientLeft); // Vị trí so với bên trái
log(boxed.clientTop); // Vị trí so với bên trên

// ! window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
log(window.innerHeight);
log(window.outerHeight);
log(window.innerWidth);
log(window.innerHeight);

// ! selector.getBoundingClientRect()
// * Lấy ra tọa độ, vị trí và kích thước của phần tử
log(boxed.getBoundingClientRect());
// - left, x : vị trí của khối so với bên trái
// - top: vị trí của khối so với phía trên
// - bottom: chiều cao của khối + top
// - right: độ rộng của khối + left
// - width: độ rộng
// - height: chiều cao

// ! HTML Collection
const li1 = document.getElementsByTagName("li");
const li2 = document.querySelectorAll("li");
log(li1);
log(li2);

// * Điểm giống:
// - Có thể truy cập bằng index, có độ dài giống mảng (length)

// * Điểm khác:
// - Không sử dụng được các phương thức giống như map, forEach -> Giống mảng nhưng không phải là mảng: không sử dụng được các phương thức đã học về mảng.
// - NodeList: sử dụng được forEach

// ! Sự khác nhau giữa parentNode và parentElement
// - parentElement có thể null.
log(document.documentElement.parentElement);
// - parentNode nếu không có thẻ nào ngoài cùng nữa thì nó sẽ lấy chính nó luôn.
log(document.documentElement.parentNode);
