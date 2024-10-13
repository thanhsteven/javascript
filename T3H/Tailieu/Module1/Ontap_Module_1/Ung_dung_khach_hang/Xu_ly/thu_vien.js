// Xu ly button San pham
var btnTags = document.querySelectorAll("#Th_Ds_button button");
for (var i = 0; i <= btnTags.length - 1; i++) {
    var btnTag = btnTags[i];
    btnTag.onclick = function () {
        var Tham_so_url = this.getAttribute("data-url"); // dsDienthoai
        var loai_san_pham = this.value; // Dien_thoai

        // Xuat Danh sach
        var Ds_san_pham = api_Danh_sach_san_pham(Tham_so_url); // ra array 54 sp
        Xuat_Danh_sach_san_pham(Ds_san_pham, Th_Danh_sach, loai_san_pham);

        // Active button
        var btnActive = document.querySelectorAll("#Th_Ds_button button");
        removeClassActive(btnActive);
        this.classList.add("active");

        // Xu ly noi dung
        var noi_dung_theo_btn = this.getAttribute("key");
        var legendTags = document.querySelectorAll("legend");
        legendTags.forEach(x => { x.innerHTML = `DANH SÁCH ${noi_dung_theo_btn}` });

        // Phan loai san pham
        if (noi_dung_theo_btn === "TI VI") {
            Th_sanpham_1.innerHTML = "SAMSUNG";
            Th_sanpham_1.setAttribute("key", "SAMSUNG");
            Th_sanpham_2.innerHTML = "SONY";
            Th_sanpham_2.setAttribute("key", "SONY");
            // Xuat hien button 3 va 4
            Th_sanpham_3.classList.remove("d-none");
            Th_sanpham_4.classList.remove("d-none");
        }
        else if (noi_dung_theo_btn === "MẶT HÀNG") {
            Th_sanpham_1.innerHTML = "CÀ PHÊ";
            Th_sanpham_1.setAttribute("key", "CA_PHE");
            Th_sanpham_2.innerHTML = "MÓN ĂN";
            Th_sanpham_2.setAttribute("key", "MON_AN");
        }
        else if (noi_dung_theo_btn === "ĐIỆN THOẠI") {
            Th_sanpham_1.innerHTML = "ANDROID";
            Th_sanpham_1.setAttribute("key", "ANDROID");
            Th_sanpham_2.innerHTML = "IPHONE";
            Th_sanpham_2.setAttribute("key", "IPHONE");
        };

        // Xoa tim kiem 
        Th_gtTim.value = "";
    };
};

// Remove Active
function removeClassActive(btnTags) {
    for (var i = 0; i <= btnTags.length - 1; i++) {
        var btnTag = btnTags[i];
        btnTag.classList.remove("active");
    };
};

// Tat ca san pham
Th_Home.onclick = () => {
    var Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    var thamso_url = Ds_dang_active.getAttribute("data-url");
    var Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
    var loai_san_pham = Ds_dang_active.value;
    Xuat_Danh_sach_san_pham(Ds_san_pham, Th_Danh_sach, loai_san_pham)
};

// Loc san pham 1
Th_sanpham_1.onclick = function () {
    var Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    var thamso_url = Ds_dang_active.getAttribute("data-url");
    var Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
    var value_sp = Ds_dang_active.value;
    var nhom_sp = `${value_sp}`;
    var loai_sp = this.getAttribute("key");
    var Ds_loc_san_pham = Ds_san_pham.filter((item) => item[`Nhom_${nhom_sp}`].Ma_so == loai_sp);
    Xuat_Danh_sach_san_pham(Ds_loc_san_pham, Th_Danh_sach, nhom_sp);
};
// Loc san pham 2
Th_sanpham_2.onclick = function () {
    var Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    var thamso_url = Ds_dang_active.getAttribute("data-url");
    var Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
    var value_sp = Ds_dang_active.value;
    var nhom_sp = `${value_sp}`;
    var loai_sp = this.getAttribute("key");
    var Ds_loc_san_pham = Ds_san_pham.filter((item) => item[`Nhom_${nhom_sp}`].Ma_so == loai_sp);
    Xuat_Danh_sach_san_pham(Ds_loc_san_pham, Th_Danh_sach, nhom_sp);
};
// Loc san pham 3
Th_sanpham_3.onclick = function () {
    var Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    var thamso_url = Ds_dang_active.getAttribute("data-url");
    var Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
    var value_sp = Ds_dang_active.value;
    var nhom_sp = `${value_sp}`;
    var loai_sp = this.getAttribute("key");
    var Ds_loc_san_pham = Ds_san_pham.filter((item) => item[`Nhom_${nhom_sp}`].Ma_so == loai_sp);
    Xuat_Danh_sach_san_pham(Ds_loc_san_pham, Th_Danh_sach, nhom_sp);
};
// Loc san pham 4
Th_sanpham_4.onclick = function () {
    var Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    var thamso_url = Ds_dang_active.getAttribute("data-url");
    var Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
    var value_sp = Ds_dang_active.value;
    var nhom_sp = `${value_sp}`; console.log(nhom_sp);
    var loai_sp = this.getAttribute("key"); console.log(loai_sp);
    var Ds_loc_san_pham = Ds_san_pham.filter((item) => item[`Nhom_${nhom_sp}`].Ma_so == loai_sp);
    Xuat_Danh_sach_san_pham(Ds_loc_san_pham, Th_Danh_sach, nhom_sp);
};

// Tim kiem bang Click
Th_Tim.onclick = () => {
    let gt_tim = Th_gtTim.value.trim();
    if (gt_tim == "") {
        Th_Thong_bao.innerHTML = `<strong>Vui lòng điền giá trị cần tìm</strong>`;
        Th_gtTim.focus();
        return false;
    };
    let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    let thamso_url = Ds_dang_active.getAttribute("data-url");
    let Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
    let Ds_tim = Ds_san_pham.filter(x => x.Ten.toLowerCase().includes(gt_tim.toLowerCase()));
    let value_sp = Ds_dang_active.value;
    let nhom_sp = `${value_sp}`;
    Xuat_Danh_sach_san_pham(Ds_tim, Th_Danh_sach, nhom_sp);
    if (Ds_tim.length == 0) {
        Th_Thong_bao.innerHTML = `Không tìm thấy sản phẩm chứa <strong>${gt_tim}</strong> trong Danh sách`;
        Th_gtTim.focus();
        return false;
    };
};

// Tim kiem bang Enter
function enter_Timkiem(event) {
    if (event.keyCode == 13) {
        let gt_tim = event.target.value.trim();
        if (gt_tim == "") {
            Th_Thong_bao.innerHTML = `<strong>Vui lòng điền giá trị cần tìm</strong>`;
            Th_gtTim.focus();
            return false;
        };
        let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
        let thamso_url = Ds_dang_active.getAttribute("data-url");
        let Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
        let Ds_tim = Ds_san_pham.filter(x => x.Ten.toLowerCase().includes(gt_tim.toLowerCase()));
        let value_sp = Ds_dang_active.value;
        let nhom_sp = `${value_sp}`;
        Xuat_Danh_sach_san_pham(Ds_tim, Th_Danh_sach, nhom_sp);
        if (Ds_tim.length == 0) {
            Th_Thong_bao.innerHTML = `Không tìm thấy sản phẩm chứa <strong>${gt_tim}</strong> trong Danh sách`;
            Th_gtTim.focus();
            return false;
        };
    };
};

// Loc
Th_Loc_gia.onchange = () => {
    let gt_loc = Th_Loc_gia.value;
    let ds_loc = gt_loc.split("-");
    let gt_dau = Number(ds_loc[0]);
    let gt_cuoi = Number(ds_loc[1]);

    let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    let thamso_url = Ds_dang_active.getAttribute("data-url");
    let Ds_san_pham = api_Danh_sach_san_pham(thamso_url);

    var Ds_loc_theo_gia = Ds_san_pham.filter(x => x.Don_gia_Ban >= gt_dau && x.Don_gia_Ban <= gt_cuoi);
    if (Ds_loc_theo_gia.length <= 0) {
        Th_Thong_bao.innerHTML = `<strong>Không có sản phẩm thỏa điều kiện trong Danh sách</strong>`;
        return false;
    };

    let value_sp = Ds_dang_active.value;
    let nhom_sp = `${value_sp}`;
    Xuat_Danh_sach_san_pham(Ds_loc_theo_gia, Th_Danh_sach, nhom_sp);
};



// Sap xep
Th_Sap_xep.onchange = () => {
    let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    let thamso_url = Ds_dang_active.getAttribute("data-url");
    let Ds_san_pham = api_Danh_sach_san_pham(thamso_url);
    let value_sp = Ds_dang_active.value;
    let nhom_sp = `${value_sp}`;

    let gia_tri = Th_Sap_xep.value;
    switch (Number(gia_tri)) {
        case 1: Sap_Tang_theo_Ten(Ds_san_pham); break;
        case 2: Sap_Giam_theo_Ten(Ds_san_pham); break;
        case 3: Sap_Tang_Gia(Ds_san_pham); break;
        case 4: Sap_Giam_Gia(Ds_san_pham); break;
        default: Xuat_Danh_sach_san_pham(Ds_san_pham, Th_Danh_sach, nhom_sp);
    };
};


// Ham sap xep
function Sap_Tang_theo_Ten(ds) {
    ds.sort((a, b) => a.Ten.localeCompare(b.Ten));
    let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    let value_sp = Ds_dang_active.value;
    let nhom_sp = `${value_sp}`;
    Xuat_Danh_sach_san_pham(ds, Th_Danh_sach, nhom_sp);
};

function Sap_Giam_theo_Ten(ds) {
    ds.sort((a, b) => b.Ten.localeCompare(a.Ten));
    let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    let value_sp = Ds_dang_active.value;
    let nhom_sp = `${value_sp}`;
    Xuat_Danh_sach_san_pham(ds, Th_Danh_sach, nhom_sp);
};

function Sap_Tang_Gia(ds) {
    ds.sort((a, b) => { return parseInt(a.Don_gia_Ban) - parseInt(b.Don_gia_Ban) });
    let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    let value_sp = Ds_dang_active.value;
    let nhom_sp = `${value_sp}`;
    Xuat_Danh_sach_san_pham(ds, Th_Danh_sach, nhom_sp);
};

function Sap_Giam_Gia(ds) {
    ds.sort((a, b) => { return parseInt(b.Don_gia_Ban) - parseInt(a.Don_gia_Ban) });
    let Ds_dang_active = document.querySelector("#Th_Ds_button button.active");
    let value_sp = Ds_dang_active.value;
    let nhom_sp = `${value_sp}`;
    Xuat_Danh_sach_san_pham(ds, Th_Danh_sach, nhom_sp);
};

