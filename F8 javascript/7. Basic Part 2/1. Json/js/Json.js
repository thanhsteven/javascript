// JSON

// ! JSON không phải là 1 kiểu dữ liệu
// 1. là một định dạng (format) dữ liệu dạng chuỗi
// 2. JavaScript Object Notation => JSON
// 3. JSON giúp thể các kiểu dữ liệu trong JS : Number, String, Boolean, Null, Array, Object


// Có 2 thao tác:
// 1. Mã hóa | Giải mã => Encode | Decode
// 2. Stringify | Parse

// ! Luư ý: các key trong Json phải để trong cặp dấu nháy kép ""

var jsonArr = '["Javascript", "PHP", "Dark"]';
var jsonObj = '{"name" : "Kim Thanh", "age" : "28", "address" : "HCM VN"}';

var number = 12345;
var string = 'Hello Word';

// Parse : chuyển JSON --> Javascript
console.log(JSON.parse(jsonArr));
console.log(JSON.parse(jsonObj));

// Stringify : Chuyển Javascript --> JSON (string)
console.log(JSON.stringify(number));
console.log(JSON.stringify(string));
console.log(JSON.stringify(['Javascript','PHP','Dark']));
console.log(JSON.stringify({name : 'Kim Thanh', age : 29, address : 'HCM VN'}));