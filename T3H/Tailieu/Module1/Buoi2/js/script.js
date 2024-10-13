// Phân tích họ tên
Th_phan_tich.onclick = () => {
    let fullName = Chuan_hoa_chuoi(Th_Hoten.value);

    let soho = fullName.indexOf(" ");
    let lastName = fullName.slice(0,soho).trim();

    let soten = fullName.lastIndexOf(" ");
    let firstName = fullName.slice(soten).trim();

    let middleName = fullName.slice(soho,soten).trim();
    
    Th_chieu_dai.value = fullName.length;
    Th_ho.value = lastName;
    Th_ten.value = firstName;
    Th_ten_lot.value = middleName;
    Th_cau_chao.value = fullName
};

// Tính điểm trung bình
Th_tinh.onclick = () => {
    let diem = Th_Diem.value.trim();
    let arrDiem = diem.split(" ");
    let sum = 0;
    for (let i = 0; i <= arrDiem.length - 1; i++) {
        sum += Number(arrDiem[i]);
    };
    Th_ket_qua.innerHTML = sum / arrDiem.length;
};