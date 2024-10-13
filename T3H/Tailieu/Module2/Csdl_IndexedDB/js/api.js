const Dia_chi_Dich_vu = 'https://dichvujs-kimthanh.herokuapp.com';

const apiDienThoai = () => {
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {};
        let Xu_ly_HTTP = new XMLHttpRequest();
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText;
            Du_lieu = JSON.parse(Chuoi_JSON);
            Ket_qua(Du_lieu);
        };
        let Tham_so = 'dsDienthoai';
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`;
        Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly);
        Xu_ly_HTTP.send();
    });
};