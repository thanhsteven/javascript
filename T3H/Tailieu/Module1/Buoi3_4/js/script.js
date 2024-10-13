// Tính điểm trung bình
Th_Dong_y.onclick = function () {
    let tenFile = Th_Diem.value;
    let dsDiem = Doc_Tap_tin(tenFile);
    let diem = Chuan_hoa_chuoi(dsDiem);
    let arrDiem = diem.split(" ");
    let sum = 0;
    for (let i = 0; i <= arrDiem.length - 1; i++) {
        sum += arrDiem[i] * 1;
    };
    Th_Kq.innerHTML = sum / arrDiem.length;
};

// Thể hiện danh sách tivi
Th_danh_sach.onclick = () => {
    let tapTin = Chuan_hoa_chuoi(Th_ten_ds.value);
    let chuoiJson = Doc_Tap_tin(tapTin);
    let dsTivi = JSON.parse(chuoiJson);
    Th_Ds.innerHTML = Xuat_danh_sach(dsTivi);
};