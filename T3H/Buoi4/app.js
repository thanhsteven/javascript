// * Định nghĩa 1 lớp object
class hocvien {
  // * Thuộc tính
  // * Phương thức khởi tạo
  constructor(_maso, _hoten, _gioitinh) {
    this.Maso = _maso;
    this.Hoten = _hoten;
    this.Gioitinh = _gioitinh;
  }
  // * Phương thức tính toán
  Thongtin() {
    return `Tên học sinh là: ${this.Hoten}`;
  }
}

// * Khai báo và khởi tạo đối tượng thuộc tính học viên
let hv1 = new hocvien("A001", "Phạm Kim Thành", true);
hv1.Hocbong = 100000;
let hv2 = hv1;
console.log(hv2);
console.log(hv2.Thongtin());
console.log(hv2.Hocbong);

