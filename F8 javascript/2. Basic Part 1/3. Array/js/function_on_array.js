var languages = ["javascript","php","reactjs","nodejs","ruby","dart"];

// * 1. toString và join
console.log(languages.toString()); // Chuyển thành chuỗi nhưng Không sửa được dấu phẩy.
console.log(languages.join(" - ")); // Chuyển thành chuỗi và sửa được dấu phẩy.


// * 2. pop và push : xóa và thêm ở CUỐI MẢNG
var ngonngu = ["javascript","php","reactjs","nodejs","ruby","dart"];
// Xóa đi phần tử cuối mảng và trả về nó.
console.log(ngonngu.pop());
// Thêm phần tử mới vào cuối mảng và trả về độ dài mới của mảng.
console.log(ngonngu.push("bootstrap","java","C++"));
console.log(ngonngu);


// * 3. Shift và Unshift
// Xóa bỏ phần tử đầu tiên khỏi mảng và trả về phần tử đó.
console.log(ngonngu.shift());
// Thêm các phần tử mới vào đầu mảng và trả về độ dài mới của mảng.
console.log(ngonngu.unshift("html","css"));
console.log(ngonngu);


// * 4. Splice
// Xóa các phần tử khỏi một mảng.
// Trả về một Array chứa các phần tử đã xóa.
console.log(ngonngu.splice(0,2));
console.log(ngonngu);

// Xóa 1 hoặc nhiều phần từ trong mảng và thêm 1 hoặc phần tử mới vào vị trí đã xóa của mảng đó.
console.log(ngonngu.splice(0,2,"html"));
console.log(ngonngu.splice(5,1,"css"));
console.log(ngonngu);


// * 5. Concat
// Ví dụ cho 3 mảng:
var lang = ["javascript"];
var lang2 = ["php"];
var lang3 = ["ruby"];
var lang4 = ["angular"];
// Kết hợp hai hoặc nhiều mảng lại với nhau.
// Phương thức này trả về một mảng mới mà không sửa đổi bất kỳ mảng hiện có nào.
console.log(lang.concat(lang2,lang3,lang4));


// * 6. Slice
// Cắt một vài Element của Mảng và trả về một mảng mới là bản sao của mảng cũ.
// Có thể sử dụng nó để cắt toàn bộ Elenment hoặc là cắt lấy một vài element của mảng.
console.log(ngonngu);
console.log(ngonngu.slice(1,3));
console.log(ngonngu);


// * 7. Sort và Reverse
var number = [51, 7, 1, 2, 9, 9.7, 9.2, 9.4, "8", "11"];
// Hàm sort sắp xếp theo thứ tự tăng dần bằng anonymuous function.
console.log(number.sort(function(a,b) {return a - b;}));
// Hàm Sort sắp xếp theo thứ tự giảm dần bằng anonymous function.
console.log(number.sort((a,b) => {return Number(b) - Number(a)}));
// ! Tăng dần là a - b; Giảm dần là b - a.
// * Hàm reverse
console.log(number.reverse(function(a,b) {return b - a;}));
// * Dùng function cho Sort và Reverse đều được.


// * 8. indexOf và lastIndexOf
var member = ["nam", "nhan", "hai", "thanh", "hai", "tien", "thanh", "tien", "nam"];
console.log(member.indexOf("thanh"));
console.log(member.lastIndexOf("nam"));


// * 9. includes
// Ra kết quả True hoặc False.
console.log(member.includes("nhan"));


// * 10. Foreach
// là duyệt các phần tử trong hàm thay vì phải dùng hàm for of.
// Trước khi dùng nó thì ta phải làm 1 hàm gọi là callback
// Hàm callback là nó sẽ duyệt từng phần tử trong mảng, y hệt hàm for/of hay for.
// Mỗi 1 lần duyệt 1 phần tử, nó sẽ lấy 1 giá trị của mảng bỏ vào hàm bằng value.
// ! Foreach không tạo ra mảng mới mà dùng lại chính mảng cũ.

var foreachArray = [5, 7, 1, 2, 9];
var newarrforeach = foreachArray.forEach(callbackForEach, 1);
function callbackForEach(value, index, arr) {
    console.log(index + ":" + (value  + this));
};
// ? Hàm For each trả về kết quả là gì ? Có phải là một array mới hay ko ?


// * 11. Map
// Cập nhật và tạo ra một mảng mới từ 1 mảng cũ, số lượng phần tử là như nhau, chỉ có giá trị được cập nhật.
var mapArray = [5, 7, 1, 2, 9];
function callbackMap(value, index, arr) {
    return value + this;
};
mapArray.map(callbackMap,3);
console.log(mapArray);


// * 12. Filter
// Tạo mảng mới từ các phần tử của mảng cũ dựa vào điều kiện.
var filterArray = [5, 7, 1, 2, 9];
var arr29 = filterArray.filter(callbackFilter, 4);
function callbackFilter(value, index, arr) {
    return value >= this;
};
console.log(arr29);

var arr30 = ["Toan","Ly","Hoa","Van","Sinh","Dia"];
var arr31 = arr30.filter(callbacksubject,"a");
function callbacksubject(value, index, arr) {
    return value.includes(this);
};
console.log(arr31);