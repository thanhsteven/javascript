let Danh_sach_Tivi = [
    { "Ma_so": "LG", "Ten": "Tivi LG", "Don_gia": 500000 },
    { "Ma_so": "SAMSUNG", "Ten": "Tivi Samsung", "Don_gia": 150000 },
    { "Ma_so": "TOSHIBA", "Ten": "Tivi Toshiba", "Don_gia": 650000 },
    { "Ma_so": "PANASONIC", "Ten": "Tivi Sony", "Don_gia": 450000 },
    { "Ma_so": "SKYWORTH", "Ten": "Tivi Sony", "Don_gia": 550000 },
    { "Ma_so": "KHÁC", "Ten": "Tivi Khác", "Don_gia": 250000 }
];

let Ngon_ngu = ['javascript', 'php', 'ruby', 'reactjs'];

// ForEach
Danh_sach_Tivi.forEach(function (Tivi) { return console.log(Tivi) });
console.log('----------------------------------')

// Every
var bien_Every = Danh_sach_Tivi.every(function (element) {
    return element.Ten.includes('Tivi');
});
var bien_Every = Danh_sach_Tivi.every(x => x.Don_gia > 300000);
console.log(bien_Every);



// Some
var bien_Some = Danh_sach_Tivi.some(function (element) {
    return element.Don_gia > 400000;
});
var bien_Some = Danh_sach_Tivi.some(x => x.Don_gia > 200000);
console.log(bien_Some);

// Find
var bien_Find = Danh_sach_Tivi.find(function (element) {
    return element.Ma_so === 'SKYWORTH';
});
var bien_Find = Danh_sach_Tivi.find(x => x.Ma_so === 'SKYWORTH');
console.log(bien_Find);

// FindIndex
var bien_FindIndex = Danh_sach_Tivi.findIndex(function (element) {
    return element.Ma_so === "PANASONIC";
});
var bien_FindIndex = Danh_sach_Tivi.findIndex(x => x.Ma_so === "PANASONIC");
console.log(bien_FindIndex);

// Filter
var bien_Filter = Danh_sach_Tivi.filter(function (item) {
    return item.Ten === "Tivi Sony";
});
console.log(bien_Filter);
var bien_Filter_2 = Danh_sach_Tivi.filter(x => x.Don_gia > 300000);
console.log(bien_Filter_2);




