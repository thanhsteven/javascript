var backends = ['php', 'nodejs', 'java', 'python', 'C++'];

var frontends = ['html', 'css', 'javascript', 'reactJS'];

console.log('Độ dài của Mảng backdends =',backends.length);
console.log('Độ dài của Mảng Frontends =',frontends.length);

console.log(`----------------------------------`);

console.log('toString() =',backends.toString());
console.log('join() =',frontends.join(' , '));

console.log(`----------------------------------`);

console.log('pop() = ',backends.pop());
console.log('push() =' ,frontends.push('angular', 'jquery'));

console.log('----------------------------------');

console.log('shift() =' ,backends.shift());
console.log('unshift() =' ,frontends.unshift('angular', 'jquery'));

console.log('----------------------------------');

var fullName = ['nam' ,'thanh', 'nguyen', 'pham', 'trung', 'doanh', 'thanh', 'chau'];

console.log('indexOf() =', fullName.indexOf('thanh'));
console.log('lastIndexOf() =', fullName.lastIndexOf('thanh'));

console.log('----------------------------------');

console.log(backends);
console.log('splice(1, 2) =',backends.splice(1,2));
console.log('splice(1, 2, item1) =',backends.splice(1,0,'.NET'));

console.log('----------------------------------');
console.log(frontends);
console.log('slice() =',frontends.slice(0));

console.log('----------------------------------');
var fullName = ['Pham', 'Kim', 'Thanh'];
var middName = 'hello kim thanh';
console.log(middName.split(' '));
console.log(typeof fullName.pop());