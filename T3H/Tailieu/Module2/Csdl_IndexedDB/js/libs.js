const Xuat_Dien_thoai = (dsDienThoai) => {
    let html = ``;
    dsDienThoai.forEach(dienThoai => {
        html += `
        <div class="khung">
            <img src="${Dia_chi_Dich_vu}/${dienThoai.Ma_so}.png" alt="">
            <h2>${dienThoai.Ma_so}</h2>
            <h2>${dienThoai.Ten}</h2>
            <h4>${Tao_Chuoi_The_hien_So_nguyen_duong(dienThoai.Don_gia_Ban)}đ - ${dienThoai.Nhom_Dien_thoai.Ma_so}</h4>
        </div>`;
    });
    return html;
};

const Xuat_Danh_sach_Chon = (dsChon) => {
    let html = '';
    dsChon.forEach(item => {
        html += `<option value="${item.Ma_so}">${item.Ten}</option>`;
    });
    return html;
};

const Xuat_Danh_sach_Chon_key = (dsChon) => {
    let html = '';
    dsChon.forEach(item => {
        html += `<option value="${item}">${item}</option>`;
    });
    return html;
};