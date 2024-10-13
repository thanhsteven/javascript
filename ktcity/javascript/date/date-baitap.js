// Todo basic: In ra ngày tháng năm theo format của Việt Nam có số '0' ở trước tháng.
const now = new Date();
now.toDateString();
now.toLocaleDateString("vi-VI");
const myYear = now.getFullYear();
const myMonth = now.getMonth() + 1;
const prefixMonth = myMonth < 10 ? "0" : "";
const myDate = now.getDate();
const customTime = `${myDate}/${prefixMonth}${myMonth}/${myYear}`;
console.log(`Định dạng ngày theo Việt Nam là: ${customTime}`);

// Todo 2: Viết chương trình nhập vào năm sinh và in ra số tuổi.
const myYearBorn = 1996;
let myAge = now.getFullYear() - myYearBorn;
// console.log(`Tuổi của tôi là : ${myAge} tuổi`);

let myAge2 = function () {
  return now.getFullYear() - myYearBorn;
};
// console.log(`Hiện số tuổi của tôi là : ${myAge2()} tuổi`);

function calculateCurrentAge(yearBorn) {
  if (typeof yearBorn !== "number") return "Vui lòng nhập dưới dạng số";
  let myCurrentAge = now.getFullYear() - yearBorn;
  return `Tuổi của tôi là: ${myCurrentAge} tuổi`;
}
console.log(calculateCurrentAge(2001));

// Todo 3: Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài tập là 30 phút nếu chạy về 0 thì thông báo là hết thời gian.
function countdown(minutes = 1) {
  let seconds = minutes * 60;
  let counter = 0;
  const timer = setInterval(function () {
    counter = counter + 1;
    console.log(counter);
    if (counter === seconds) {
      clearInterval(timer);
      console.log("Your time is end !");
      if (seconds === 30 * 60) {
        countdown(2);
      } else {
        countdown(minutes);
      }
    }
  }, 1000);
}
// countdown(1);

// Todo 3* : Viết hàm countdown đếm ngược trong 7 ngày chuyên cho các ladipage. Trong hàm cho phép mình nhập số ngày muốn đếm ngược, số giờ muốn đếm ngược và số hiển thị luôn số giây sẽ đếm ngược luôn. Sau khi đếm xong khoảng thời gian đó thì hãy tự động quay về số ban đầu.

// 7 ngày 5 giờ 30 phút => đếm số giây
function thanhCountDown(dates = 0, hours = 0, minutes = 0) {
  let countMinutes = 60 * minutes;
  let countHours = 60 * minutes * hours;
  let countDates = 60 * 60 * hours * dates;
  let seconds = countDates + countHours + countMinutes;
  console.log(seconds);
  let counter = 0;
  let timer = setInterval(function () {
    counter = counter + 1;
    console.log(counter);
    if (counter === seconds) {
      console.log("Hết thời gian !");
      clearInterval(timer);
    }
  }, 1000);
}
// thanhCountDown(7, 4, 30);

// Todo 4: Viết chương trình có tên là timesince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại. Ví dụ bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online '3 phút trước', '2 tháng trước', '30 giây trước', '1 năm trước'
function timesince(date) {
  const now = new Date();
  const yourDate = new Date(date);
  const newTime = now.getTime() - yourDate.getTime();
  console.log(newTime);
}
