
// Default Parameter Values
// Định nghĩa ra những giá trị mặc định cho tham số
// Tham số là của hàm => Làm việc với hàm

function logger(log) {
    console.log(log);
};
logger('Message...');

// ? Mình muốn có một giá trị mặc định nào đó cho cái log này thì phải làm sao ?

function v_logger(log) {
    if (typeof log === 'undefined') {
        log = 'Gia tri mac dinh';
    };
    console.log(log);
};

// Khi truyền đối số vào thì nó trả ra đối số
v_logger('Đây là Message');

// ! Chỉ có duy nhất trường hợp không truyền thì nó trả ra giá trị mặc định
v_logger(); //=> Trả ra giá trị mặc định
v_logger(undefined); //=> Hoặc dùng undefined thẳng vào


// Trên thực tế khi nào sử dụng trường hợp này ?
//=> Khi mà mình có những tham số không nhất thiết phải nhập giá trị vào thì mình cứ để nó ở giá trị mặc định nào đó.

function x_logger(log, isAlert = false) {
    if (isAlert) return alert(`Khi nào cần dùng thì isALert = ${isAlert}`);
    console.log(log);
};

x_logger('Message...');

// Alert khi nào cần truyền tham số vào cho nó
x_logger('Message...', true);
