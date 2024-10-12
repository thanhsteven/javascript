// Promise Method

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all


var promise = new Promise(function (resolve, reject) {
    resolve('Success !');
    reject('Fail !');
});

promise
.then(function (result) {
    console.log('Result : ', result);
})
.catch(function (error) {
    console.log('Result : ', error);
});

var promiseSuccess = Promise.resolve('Success!');

var promiseReject = Promise.reject('Error!');