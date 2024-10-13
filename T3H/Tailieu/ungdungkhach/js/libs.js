const Xuat_Cua_hang=(cuaHang)=>{
    let html=``
    html=`<img src="${Dia_chi_Dich_vu}/${cuaHang.Ma_so}.png" alt="">
          <h1>${cuaHang.Ten}</h1>
          <h4>${cuaHang.Dia_chi} - ${cuaHang.Email} </h4>`
    return html;
}

const Xuat_Dien_thoai=(dsDienThoai)=>{
    let html=``
    dsDienThoai.forEach(dienThoai=>{
        html+=`
        <div class="khung">
            <div class="khung_sp">
            <img src="${Dia_chi_Dich_vu}/${dienThoai.Ma_so}.png" alt="">
            <h2>${dienThoai.Ten}</h2>
            <h4>${Tao_Chuoi_The_hien_So_nguyen_duong(dienThoai.Don_gia_Ban)}<sup>đ</sup> - ${dienThoai.Nhom_Dien_thoai.Ma_so}</h4>
            <div class="khungCN">
            Số lượng Mua: <input type="number" value=1 id="${dienThoai.Ma_so}soluong" min=1 max=10 />
            <button onclick="addtocart('${dienThoai.Ma_so}')">Add to Cart</button>
            </div>
            </div>
        </div>
        `
    })
    return html;
}


