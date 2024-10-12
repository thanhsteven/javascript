// Event listener
// => Một phương pháp khác giúp bạn lắng nghe được các sự kiện diễn ra ở trong DOM

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe | Hủy bỏ lắng nghe

var btn = document.querySelector('button');
console.log(btn);


// ! DOM Event
btn.onclick = function () {
    // Viec 1
    console.log('Viec 1');
    // Viec 2
    console.log('Viec 2');
    // Viec 3
    alert('Viec 3');
};

// Ví dụ 1: khi click vào btn thì sau 3s nó mới lắng nghe được sự kiện
setTimeout(function () {
    btn.onclick = function () {
        // Viec 1
        console.log('Viec 1');
        // Viec 2
        console.log('Viec 2');
        // Viec 3
        alert('Viec 3');
    };
}, 3000);



// Ví dụ 2: sau 3s thì không muốn btn lắng nghe nữa
btn.onclick = function () {
    // Viec 1
    console.log('Viec 1');
    // Viec 2
    console.log('Viec 2');
    // Viec 3
    alert('Viec 3');
};

// => Truyền vào cho nó 1 function rỗng
// => Ghi đè nó

setTimeout(function () {
    btn.onclick = function () {};
}, 3000);

// ! Event Listener
// Mỗi event khi được thêm vào thì sẽ được thực hiện từng cái theo thứ tự chứ không bị ghi đè giống DOM event

btn.addEventListener('click', function (e) {
    console.log(Math.round(Math.random() * 100));
});

btn.addEventListener('click', function (e) {
    console.log(Math.round(Math.random() * 100));
});

btn.addEventListener('click', function (e) {
    console.log(Math.round(Math.random() * 100));
});

// Hoặc ghi như sau

function viec1() {
    console.log('Viec 1');
};

function viec2() {
    console.log('Viec 2')
};

btn.addEventListener('clcik', viec1);
btn.addEventListener('clcik', viec2);

// Hủy bỏ lắng nghe
btn.removeEventListener('clcik', viec2);