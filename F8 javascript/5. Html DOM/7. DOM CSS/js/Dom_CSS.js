// DOM CSS
var boxElement = document.querySelector('.box');

// Style : Cung cấp những cái geter và seter
console.log(boxElement.style);

boxElement.style.height = '100px';
boxElement.style.width = '100px';
boxElement.style.backgroundColor = 'red';
boxElement.style.borderRadius = '4px';

// Cách viết ngắn gọn hơn
Object.assign(boxElement.style, {
    width : '100px',
    height : '100px',
    backgroundColor : 'green',
});

console.log(boxElement.style.width);
