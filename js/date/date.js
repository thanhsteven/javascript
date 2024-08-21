const now = new Date();
// * in ra ngày giờ hiện tại

// ! Built-in object
console.log(now);
// Fri Jul 26 2024 23:22:02 GMT+0700 (Indochina Time)
// Timezone: GMT+0700 (Indochina Time)
// Second: 02
// Minute: 22
// Hour: 23
// Year: 2024
// Month: Jul
// Day: 26
// Day of the week: Fri

// ! Timestamp và Epoch time
console.log(now.getTime());
console.log(new Date(0));
// Timestamp thường dùng để tính countdown hoặc thời gian hết hạn đăng ký

// Các hàm get trong Date
const birthday = new Date(1996, 1, 24);
console.log(`Năm sinh nhật là : ${birthday.getFullYear()}`);
console.log(`Tháng sinh nhật là : ${birthday.getMonth()}`);
console.log(`Ngày sinh nhật là : ${birthday.getDate()}`);
console.log(`Thứ sinh nhật là : ${birthday.getDay()}`);
console.log(`Giờ là : ${birthday.getHours()}`);
console.log(`Phút là : ${birthday.getSeconds()}`);
console.log(`Giây là : ${birthday.getMilliseconds()}`);
console.log(`In ra timestamp : ${birthday.getTime()}`);

console.log(`Ngày sinh của tôi là : ${birthday}`);
birthday.setFullYear(1995);
birthday.setMonth(1);
birthday.setDate(24);
birthday.setHours(23);
birthday.setMinutes(24);
birthday.setSeconds(24);
console.log(`My birthday after update: ${birthday}`);

// Date String

// * Trả về ngày giờ hiện tại
console.log(now.toDateString());
console.log(now.toTimeString());

// * Trả về mm/dd/yyyy
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("vi-VI"));
console.log(now.toISOString());

// Settimeout và setInterval/
// * Chức năng popup tự động hiển thị
const timeOut = setTimeout(function () {
  alert("Call me after 3 seconds");
}, 3000);
clearTimeout(timeOut);

// * Đồng hồ đếm ngược
const interval = setInterval(function () {
  console.log("Xin chào cô chú, xin chào các bạn");
}, 1000);
clearInterval(interval);
