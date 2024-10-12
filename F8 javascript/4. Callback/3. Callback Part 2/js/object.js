var myInfo = {
    name: "Kim Thanh",
    last : "Pham",
    age: 18,
    email: 'pkt@gmail.com',
    getName : function () {
        return this.last + " " + this.name;
    },
};

// Cap nhat, them key va value
myInfo.address = 'HCM VN';

// lay value
console.log(myInfo.address);
console.log(myInfo);

// Chay key = function
console.log(myInfo.getName());

var Dienthoai = {
    "Ten": "Freetel ICE 2 8GB",
    "Ma_so": "ANDROID_3",
    "Don_gia_Ban": 9240000,
    "Don_gia_Nhap": 8240000,
    "Nhom_Dien_thoai": {
        "Ten": "Android",
        "Ma_so": "ANDROID"
    },
    "Danh_sach_Phieu_Dat": [],
    "Danh_sach_Phieu_Ban": [],
    "Danh_sach_Phieu_Nhap": [
        {
            "Ngay": "2018-04-20T02:52:11.072Z",
            "So_luong": 10,
            "Don_gia": 8240000,
            "Tien": 82400000,
            "Nhan_vien": {
                "Ho_Ten": "Trần Tiến Quang",
                "Ma_so": "NV_2"
            },
            "So_Phieu_Nhap": 1
        },
    ],
};

// Quan trong
let sp = 'Dien_thoai';
let nhom_dt = `Nhom_${sp}`;
console.log(`NSX : ${Dienthoai[`${nhom_dt}`].Ma_so}`);
console.log(`${Dienthoai[`${nhom_dt}`].Ma_so}`);


// Xoa key va value
delete Dienthoai["Danh_sach_Phieu_Dat"];
delete Dienthoai["Danh_sach_Phieu_Ban"];

console.log(Dienthoai);
console.log(`${Dienthoai[`${nhom_dt}`].Ten}`);

// lay Array trong Object
let ds = 'Danh_sach_Phieu_Nhap';
console.log(Dienthoai[ds][0]['Nhan_vien']['Ho_Ten']);

// 
console.log(`Nhan vien : ${Dienthoai['Danh_sach_Phieu_Nhap'][0]['Nhan_vien']['Ho_Ten']}`);

