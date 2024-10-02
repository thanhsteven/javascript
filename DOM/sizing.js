// ! offsetWidth
// * Độ rộng thực sự của element đó
const boxed = document.querySelector(".boxed");
function log(value) {
  console.log(value);
}

log(boxed.offsetWidth); // Độ rộng của phần tử
log(boxed.offsetHeight); // Chiều cao của phần tử
log(boxed.offsetLeft); // Vị trí của của nó bên trái
log(boxed.offsetTop); // Vị trí của nó ở trên
log(boxed.offsetParent); // Lấy ra phần tử cha

