var languages = ['javascript', 'nodejs', 'php', 'mysql'];

// Biến array thành 1 chuỗi
console.log(languages.join(', '));
console.log(languages.join(' - '));
console.log(languages.join(' '));

// Xóa phần tử cuối mảng và trả lại chính phần tử đã xóa
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages);

// Thêm 1 hoặc nhiều phần tử vào cuối mảng.
// Trả về độ dài mới của mảng.
console.log(languages.push('javascript','php', function() {}, {}));
console.log(languages);
console.log(languages.push('nodejs'));
console.log(languages);

// Xóa phần tử ở đầu mảng
// Trả về phần tử đã xóa
console.log(languages.shift());
console.log(languages);

// Thêm 1 hoặc nhiều phần tử vào đầu mảng
// Trả về độ dài mới của mảng
console.log(languages.unshift('dark'));
console.log(languages);

// Xóa, cắt hoặc chèn phần tử mới vào mảng
// Xóa
console.log(languages.splice(1,2));
console.log(languages);

// Chèn
console.log(languages.splice(1, 0, 'dark'));
console.log(languages);

var subject = ['javascript', 'php', 'angular', 'nodeJs'];
console.log(Array.isArray(subject));
