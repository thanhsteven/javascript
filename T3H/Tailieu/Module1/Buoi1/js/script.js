// Làm lại
let btnRestart = document.querySelectorAll(".Th_lam_lai");
for (let i = 0; i <= btnRestart.length - 1; i++) {
    let btnReset = btnRestart[i];
    btnReset.onclick = () => {
        document.querySelectorAll("input[type='text']").forEach(item => {
            item.value = "";
        });
        Th_kq.innerHTML = "";
    }
}


// Kiểm tra chẳn lẻ
Th_kiem_tra.onclick = function () {
    let number = document.querySelector("#Th_so").value.trim();

    if (number == "") {
        Th_kq.innerHTML = "Vui lòng nhập số";
        Th_so.focus();
        return false;
    };

    if (isNaN(number)) {
        Th_kq.innerHTML = "Vui lòng nhập dưới dạng số";
        Th_so.select();
        return false;
    }

    let ketqua = kiemtraChanLe(number);

    if (ketqua) {
        thongBao = `Số ${number} là số chẵn`;
    } else {
        thongBao = `Số ${number} là số lẻ`;
    }
    Th_kq.innerHTML = thongBao;
};

// Câu chào
document.querySelector("#Th_cau_chao").onclick = function () {
    let name = document.querySelector("#Th_hoten").value.trim();

    if (name == "") {
        alert("Vui lòng nhập tên của bạn");
        Th_hoten.focus();
        return false;
    };

    if (isNaN(name) == false) {
        alert("Vui lòng nhập tên là chữ");
        Th_hoten.select();
        return false;
    } else {
        alert(`Xin chào ${name}`);
    }
};

// Tính 2 số
Th_cach_tinh.onclick = () => {
    let numA = numberA.value.trim();
    let numB = numberB.value.trim();
    Th_phep_tinh.value = Tonghaiso(Number(numA), Number(numB));
}

let btnTabs = document.querySelectorAll(".btn_group button");
for (let i = 0; i <= btnTabs.length - 1; i++) {
    let btnTab = btnTabs[i];
    btnTab.onclick = function () {
        let numA = numberA.value.trim();
        let numB = numberB.value.trim();
        if (numA == "") {
            alert("Vui lòng nhập số A");
            numberA.focus();
            return false;
        };
        if (isNaN(numA) == true) {
            alert("Vui lòng nhập số A dưới dạng chữ");
            numberA.select();
            return false;
        }

        if (numB == "") {
            alert("Vui lòng nhập số B");
            numberB.focus();
            return false;
        };
        if (isNaN(numB) == true) {
            alert("Vui lòng nhập số B dưới dạng chữ");
            numberB.select();
            return false;
        }

        let dataValue = this.getAttribute("data");
        if (dataValue == "+") {
            Th_phep_tinh.value = Tonghaiso(Number(numA), Number(numB));
        } else if (dataValue == "-") {
            Th_phep_tinh.value = Hieuhaiso(Number(numA), Number(numB));
        } else if (dataValue == "*") {
            Th_phep_tinh.value = Tichhaiso(Number(numA), Number(numB));
        } else {
            Th_phep_tinh.value = Thuonghaiso(Number(numA), Number(numB));
        };
    };
}