let result = document.querySelector(".result-wrapper");
Th_Ds_Tivi.onclick = function () {
  let taptin = "dsTiVi.json";
  let ds = Doc_tap_tin(taptin);
  let dsTivi = JSON.parse(ds);
  let itemTivi = ``;
  for (let i = 0; i < dsTivi.length; i++) {
    let tivi = dsTivi[i];
    itemTivi += `<div class="item">
      <h3>Tên sản phẩm: ${tivi.Ten}</h3>
      <p>Đơn giá bán: ${dinh_dang_so(tivi.Don_gia_Ban)}</p>
      <p>Ký hiệu: ${tivi.Ky_hieu}</p>
      <p>Hãng sản xuất: ${tivi.Nhom.Ten}</p>
    </div>`;
    result.innerHTML = itemTivi;
  }
};

Th_Ds_Dienthoai.onclick = function () {
  let taptin = "dsDienThoai.json";
  let ds = Doc_tap_tin(taptin);
  let dsDienthoai = JSON.parse(ds);
  let itemDienthoai = ``;
  for (let i = 0; i < dsDienthoai.length; i++) {
    let dienthoai = dsDienthoai[i];
    itemDienthoai += `<div class="item">
      <h3>Tên sản phẩm: ${dienthoai.Ten}</h3>
      <p>Đơn giá bán: ${dinh_dang_so(dienthoai.Don_gia_Ban)}</p>
      <p>Hãng sản xuất: ${dienthoai.Nhom.Ten}</p>
    </div>`;
    result.innerHTML = itemDienthoai;
  }
};

Th_Ds_Thietbi.onclick = function () {
  let taptin = "dsMatHang.json";
  let ds = Doc_tap_tin(taptin);
  let dsMatHang = JSON.parse(ds);
  let itemMatHang = ``;
  for (let i = 0; i < dsMatHang.length; i++) {
    let mathang = dsMatHang[i];
    itemMatHang += `<div class="item">
      <h3>Tên sản phẩm: ${mathang.Ten}</h3>
      <p>Đơn giá bán: ${dinh_dang_so(mathang.Don_gia_Ban)}</p>
      <p>Hãng sản xuất: ${mathang.Nhom.Ten}</p>
    </div>`;
    result.innerHTML = itemMatHang;
  }
};
