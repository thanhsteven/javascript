const countRepeatedDates = (datesArray) => {
  let countMap = {};
  let previousDate = null;
  // Duyệt qua từng phần tử trong mảng
  datesArray.forEach((date) => {
    // Nếu phần tử giống với phần tử trước đó
    if (date === previousDate) {
      // Tăng số lần lặp lại
      countMap[date] = (countMap[date] || 1) + 1;
    } else {
      // Cập nhật phần tử trước đó
      previousDate = date;
    }
  });
  // In kết quả
  for (const [date, count] of Object.entries(countMap)) {
    console.log(`${date} - ${count} lead`);
  }
};

countRepeatedDates(datesArray);
