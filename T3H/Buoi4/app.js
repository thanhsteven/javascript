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

// Xây dựng lớp hình chữ nhật
// Phương thức khởi tạo: thuộc tính DAI, RONG
// Phương thức tính toán: DIEN_TICH, CHU_VI

class HCN {
  // Phương thức khởi tạo
  constructor(_dai, _rong) {
    this.Dai = _dai;
    this.Rong = _rong;
  }
  // Phương thức tính toán
  chuvi() {
    return `Chu vi = ${(this.Dai + this.Rong) * 2}`;
  }
  dientich() {
    return `Diện tích = ${this.Dai * this.Rong}`;
  }
  thongtin() {
    return `Hình chữ nhật có chiều dài là ${this.Dai} và chiều rộng là ${this.Rong}`;
  }
}

let hcn_1 = new HCN(6, 4);
console.log(hcn_1.chuvi() + "\n" + hcn_1.dientich());
