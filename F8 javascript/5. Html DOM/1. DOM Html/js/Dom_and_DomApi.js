
// Document : chính là cái thằng đại diện cho toàn bộ website của bạn
console.log(document);
document.write('Hello Kim Thành');

// HTML DOM
// => Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.
// => DOM không phải là của Javascript

//  ! Thành phần HTML DOM
//  1. Element
//  2. Attribute
//  3. Text

// ! Document.querySelector(), ...
// => chỉ là cái phương tiện để giúp các bạn truy suất được vào cái mô hình DOM của chúng ta thôi.
// => Mô hình DOM là của W3C, còn Js sẽ cung cấp cho chúng ta 1 bộ công cụ để giúp chúng ta trỏ vào cái element của DOM mà thôi.

// --------- Ranh giới giữa JS và DOM -------------- //

// * HTML DOM không phải là của Javascript
// * DOM là quy chuẩn hay tiêu chuẩn cho các Dev khi lập trình web đều phải tuân thủ theo quy chuẩn này.

// ! Javascript chỉ cung cấp các bộ phương tiện để chúng ta truy xuất vào các HTML DOM mà thôi

// Javascript : Browser (chrome, cốc cốc, firefox, ...) || Server (nodeJS)
// Browser : HTML --> DOM --> WEB API

// API : Application Programming Interface : cổng giao tiếp kết nối để browser trỏ được vào DOM
