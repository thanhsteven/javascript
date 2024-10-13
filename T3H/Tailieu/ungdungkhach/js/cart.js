var cuaHang = {};
var dsDienthoai = []
var carts = []

const addtocart = (key) => {
    
    let maso = key;
    let value = Number(document.querySelector(`#${maso}soluong`).value);
    let vt = -1;

    
    
    // // Lưu vào sessionStorage
    if (sessionStorage.getItem("carts") != undefined) {
        carts = JSON.parse(sessionStorage.getItem("carts"))
        vt = carts.findIndex(item => item.maso == key);
    }

    if (vt == -1) {
        let tmp = dsDienthoai.find(x => x.Ma_so == key);
        let cart = {
            maso: key,
            soluong: value,
            ten: tmp.Ten,
            dongiaban: Number(tmp.Don_gia_Ban)
        }

        carts.push(cart) // Thêm 
    } else {
        //carts.splice(vt, 1) // Xóa
        carts[vt].soluong += value // Cập nhật lại số lượng
    }


    if (carts.length > 0) {
        sessionStorage.setItem("carts", JSON.stringify(carts))
    } else {
        sessionStorage.removeItem("carts")
    }
    Th_Gio_hang.innerHTML = `<u>${carts.length}</u>`

}

const openCart = () => {
    if (sessionStorage.getItem("carts") !== undefined) {
        window.location = `cart.html`
    }
}

const Xuat_Dien_thoai_Mua = (carts, Th_Cha) => {
    Th_Cha.innerHTML = ""
    var noi_dung_HTML = ``
    carts.forEach(Dien_thoai_Mua => {
        let thanhTien = Dien_thoai_Mua.soluong * Dien_thoai_Mua.dongiaban
        noi_dung_HTML += `
        <tr>
            <td scope="row">
                <img src=${Dia_chi_Dich_vu}/${Dien_thoai_Mua.maso}.png style="width:80px" />
            </td >
            <td class="text-nowrap">${Dien_thoai_Mua.ten}</td>
            <td>
                <input onchange="soLuong('${Dien_thoai_Mua.maso}',this)" type="number" min="1" max="10" value="${Dien_thoai_Mua.soluong}" class="text-right" />
            </td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai_Mua.dongiaban)}<sup>đ</sup></td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(thanhTien)}<sup>đ</sup></td>
            <td class='xoa' onclick="xoaGiohang('${Dien_thoai_Mua.maso}')"> Xóa </td>
        </tr >
        `
    })
    noi_dung_HTML += `
        <tr>
                <td colspan="6" id="Th_Tong" style="text-align: right;"></td>
                
        </tr>
    `
    Th_Cha.innerHTML = noi_dung_HTML
    tongThanhtien()

}


const tongThanhtien = () => {
    let kq = 0
    carts = JSON.parse(sessionStorage.getItem("carts"))
    carts.forEach(dt => {
        kq += dt.soluong * dt.dongiaban
    })
    Th_Tong.innerHTML = `<strong>Tổng thành tiền:</strong> ${Tao_Chuoi_The_hien_So_nguyen_duong(kq)}<sup>đ</sup>`
}


const soLuong = (maSo, sl) => {
    console.dir(sl)
    let tr = sl.parentNode.parentNode
    let soLuong = sl.value
    let dt = carts.find(x => x.maso == maSo)
    dt.soluong = Number(soLuong)
    sessionStorage.setItem("carts", JSON.stringify(carts))
    let thanhTien = Number(soLuong) * Number(dt.dongiaban)
    tr.children[4].innerHTML = `${Tao_Chuoi_The_hien_So_nguyen_duong(thanhTien)}<sup>đ</sup>`
    tongThanhtien()
}

const xoaGiohang = (maSo) => {
    let vt = carts.findIndex(x => x.maso == maSo)
    carts.splice(vt, 1)
    if (carts.length > 0) {
        sessionStorage.setItem("carts", JSON.stringify(carts))
        Xuat_Dien_thoai_Mua(carts, Th_Carts)
        tongThanhtien()
    } else {
        Th_XoaCarts.click()
    }
}
