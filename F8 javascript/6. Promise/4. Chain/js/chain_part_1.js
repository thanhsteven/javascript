// Chain : tính chất chuỗi

// Tạo 1 Promise
var myPromise = new Promise( (resolve, reject) => {
    resolve();
});

myPromise
.then(function () {
    return new Promise( (resolve) => {
        setTimeout(function () {
            resolve([1,2,3]);
        }, 3000);
    });
})
.then(function (data) {
    console.log(data);
    return 2;
})
.then(function (data) {
    console.log(data);
    return 3;
})
.then(function (data) {
    console.log(data);
})
.catch(function () {
    console.log('Fail !');
})
.finally(function () {
    console.log('Done !');
});


// Sửa bài toán ở phần đầu
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
};

sleep(1000)
.then(function () {
    console.log(1);
    return sleep(1000);
})
.then(function () {
    console.log(2);
    return sleep(1000);
})
.then(function () {
    console.log(3);
    return sleep(1000);
})
.then(function () {
    console.log(4);
    return sleep(1000);
})