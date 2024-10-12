// Promise Concept

// Tạo ra Promise : cần 2 bước
// 1. new Promise
// 2. Viết hàm Executor

// Pending : là trạng thái đang thực thi, đang chạy
// Resolve : là hàm mang ý nghĩa giải quyết, thành công
// Reject : là hàm mang ý nghĩa thất bại
// Trong hàm Executor bắt buộc phải gọi 1 trong 2 thằng trên.
// Nếu không gọi thì nó sẽ phát sinh ra 1 vấn đề gọi là Memory Leak (rò rỉ bộ nhớ)

var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic
        // Thành công : resolve
        // Thất bại : reject

        // reject();
        resolve([{ id: 1, course: 'Javascript', coin: 180 }]);
    }
);

// 3 phương thức bên dưới đều nhận về 1 cái callback
// ! Vấn đề : khi nào callback được thực thi ?
// - Khi Resolve trong Executor được gọi thì callback của .then được gọi
// - Khi Reject được gọi thì thằng .catch được gọi
// - Khi 1 trong 2 thằng Resolve và Reject được gọi thì .finally đều được gọi


promise
    // resolve
    .then(function (course) {
        console.log('Successfully !', course);
    })
    // reject
    .catch(function () {
        console.log('Failure !');
    })
    // resolve | reject
    .finally(function () {
        console.log('Done !');
    });



// Ví dụ :
var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var bien = Math.round(Math.random() * 100);
        if (bien >= 50) {
            resolve(bien);
        } else {
            reject(bien);
        };
    }, 2000);
});

myPromise
.then(function (bien) {
    console.log('Thanh cong : ', bien);
})
.catch(function (error) {
    console.log('That bai : ', error);
})
.finally(function () {
    console.log('Hoan thanh');
});