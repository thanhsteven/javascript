let Danh_sach_Nhom_Tivi = [
    { "Ma_so": "LG", "Ten": "Tivi LG", "Don_gia": 500000 },
    { "Ma_so": "SAMSUNG", "Ten": "Tivi Samsung", "Don_gia": 150000 },
    { "Ma_so": "SONY", "Ten": "Tivi Sony", "Don_gia": 450000 },
    { "Ma_so": "KHAC", "Ten": "Tivi Khác", "Don_gia": 250000 }
];

Danh_sach_Nhom_Tivi.forEach(function(tivi) {
    console.log(tivi);
});



var listTivi = Danh_sach_Nhom_Tivi.every(function(tivi) {
    return tivi.Ma_so !== "iphone";
});
console.log(listTivi);



var listName = Danh_sach_Nhom_Tivi.some(function(tiviName) {
    return tiviName.Ten == "Tivi Sony";
});
console.log(listName);



var tiviSamSung = Danh_sach_Nhom_Tivi.find(function(tivi) {
    return tivi.Ma_so === "SAMSUNG";
});
console.log(tiviSamSung);



var tivi = Danh_sach_Nhom_Tivi.filter(function(tivi) {
    return tivi.Ten = "tivi";
});
console.log(tivi);