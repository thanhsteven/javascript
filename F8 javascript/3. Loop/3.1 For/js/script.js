// For Loop
for (var i = 1; i <= 10; i++) {
    console.log(`Hello lần thứ ${i}`);
};

// var i = 1 --> i là index.
// i <= 100 là biểu thức điều kiện => Nếu biểu thức này là sai thì không thực hiện đoạn mã ở bên trong
// i++ tăng i lên 1 đơn vị.

// Các cách viết
var i = 0;
for ( ;i <= 10; i++) {
    console.log(`Hello ${i}`);
};

// Các trường hợp như sau sẽ bị treo máy
// var i = 0;
// for ( ; ; i++) {};
// for ( ;i > 0; i++) {};
// for ( ;true; i++) {};
// for ( ; ;) {i++; /* your code */ };

var langauge = ['javascript','php','angular','nodejs','dart','python'];

// Lấy phần tử javascript ra
console.log('chỉ số 0 của language =',langauge[0]);

// Để lấy hết các phần tử của Array ra
for (var i = 0; i < langauge.length; i++) {
    console.log(`Chỉ số thứ ${i} của Language: ${langauge[i]}`);
};