// DOM event

// 1. Input | Select
// 2. Key up | down

var inputElement = document.querySelector('input[type="text"]');

console.log(inputElement);
console.log([inputElement])

// onchange 
// onchange chỉ chạy khi mà các bạn blur ra ngoài.
// blur có nghĩa là khi các bạn bỏ cái focus con trỏ chuột ra ngoài.
// Hoặc click ra ngoài thì nó mới bắt sự kiện,
var inputValue;
inputElement.onchange = function (e) {
    inputValue = e.target.value;
};

// oninput
// ghõ tới đâu thì nó lấy tới đó.
inputElement.oninput = function (e) {
    console.log(e.target.value);
};

var checkbox = document.querySelector('input[type="checkbox"]');
checkbox.onchange = function (e) {
    console.log(e.target.checked)
};

var selectElement = document.querySelector('select');
console.log(selectElement);
selectElement.onchange = function (e) {
    console.log(e.target.checked);
    console.log(e.target.value);
};

// 2. Key up | down
// Khi ấn bất kỳ 1 nút nào trên bàn phím, ấn xuống và thả lên
inputElement.onkeyup = function (e) {
    console.log(e.target.value);
    console.log(e.which);

    switch (e.which) {
        case 27:
            console.log('ESC');
            break;
        case 13:
            console.log('Enter');
            break;
    };
};

document.onkeydown = function (e) {
    switch (e) {
        case 27:
            console.log('Enter');
            break;
    };
};


