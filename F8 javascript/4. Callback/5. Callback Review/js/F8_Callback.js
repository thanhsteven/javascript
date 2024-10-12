// Xây dựng hàm

function myCallback(value) {
    console.log('Value : ', value);
};


function myFunction(callback) {
    if (typeof callback === 'function') {
        callback('Hoc lap trinh Javascript');
    };
};

// Gọi hàm myFunction và truyền hàm myCallback vào làm đối số của myFunction thì lúc này myCallback chính thức trở thành callback

myFunction(myCallback);


// Khi bạn định nghĩa ra 1 function, sau đó truyền nó qua đối số của 1 function khác thì đó gọi là callback => vậy thôi.

function Ham_A(param) {
    param('Hoc lap trinh Javascript');
};


function Ham_B(value) {
    console.log('Value : ', value);
};

Ham_B(123);

Ham_A(Ham_B);
