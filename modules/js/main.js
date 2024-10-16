// * Hàm chuẩn hoá chuỗi
// function chuan_hoa_chuoi(chuoi) {
//   let chuoi_tam = chuoi.trim().toLowerCase();
//   while (chuoi_tam.indexOf("  ") >= 0) {
//     chuoi_tam = chuoi_tam.replace("  ", " ");
//   }
//   return chuoi_tam;
// }

// * Hàm chuyển dấu tiếng việt
// function bo_dau_tieng_viet(chuoi) {
//   let chuoi_tam = chuan_hoa_chuoi(chuoi);
//   return chuoi_tam
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/đ/g, "d")
//     .replace(/Đ/g, "D")
//     .replace(/[^a-zA-Z0-9 ]/g, "");
// }

// * Hàm viết hoa chữ cái đầu câu
// function viet_hoa_dau_cau(chuoi) {
//   let chuoi_tam = chuan_hoa_chuoi(chuoi);
//   let chuoi_ket_qua =
//     chuoi_tam.charAt(0).toUpperCase() + chuoi_tam.slice(1).toLowerCase();
//   return chuoi_ket_qua;
// }

// * HÀM VIẾT IN HOA TOÀN BỘ
// function viet_in_hoa_toan_bo(chuoi) {
//   let chuoi_tam = chuan_hoa_chuoi(chuoi);
//   return chuoi_tam.toUpperCase();
// }

// * hàm viết thường toàn bộ
// function viet_thuong_toan_bo(chuoi) {
//   let chuoi_tam = chuan_hoa_chuoi(chuoi);
//   return chuoi_tam.toLowerCase();
// }

// * Hàm Viết Hoa Ký Tự Đầu
// function viet_hoa_ky_tu_dau(chuoi) {
//   let chuoi_tam = chuan_hoa_chuoi(chuoi);
//   let chuoi_mang = chuoi_tam.toLowerCase().split(" ");
//   let chuoi_ket_qua = chuoi_mang.map(function (element) {
//     let firstWord = element.charAt(0).toUpperCase();
//     let otherWord = element.slice(1).toLowerCase();
//     return firstWord + otherWord;
//   });
//   return chuoi_ket_qua.join(" ");
// }

// * Hàm viết hoa ký tự đầu
// function capitalizeWord(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(" ");
//   let arrFilter = arrStr.filter(function (element) {
//     return element !== "";
//   });
//   let arrMap = arrFilter.map(function (element) {
//     let firstChar = element.toLowerCase().charAt(0).slice().toUpperCase();
//     let otherChar = element.toLowerCase().slice(1);
//     return firstChar + otherChar;
//   });
//   return arrMap.join(" ");
// }

// * Hàm viết in hoa toàn bộ
// function uppercaseWord(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(" ");
//   let arrFilter = arrStr.filter(function (element) {
//     return element !== "";
//   });
//   let arrMap = arrFilter.map(function (element) {
//     return element.toUpperCase();
//   });
//   return arrMap.join(" ");
// }

// * Hàm viết thường toàn bộ
// function lowerWord(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(" ");
//   let arrFilter = arrStr.filter(function (element) {
//     return element !== "";
//   });
//   let arrMap = arrFilter.map(function (element) {
//     return element.toLowerCase();
//   });
//   return arrMap.join(" ");
// }

// * Hàm viết hoa đầu câu
// function capitalizeSentences(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(" ");
//   let arrFilter = arrStr.filter(function (element) {
//     return element !== "";
//   });
//   let firstChar = arrFilter[0].toLowerCase().charAt(0).toUpperCase();
//   let otherChar = arrFilter.join(" ").toLowerCase().slice(1);
//   return firstChar + otherChar;
// }

// * Hàm chuyển chuỗi thành dạng url
// function chuyen_chuoi_thanh_url(chuoi) {
//   let chuoi_tam = chuan_hoa_chuoi(chuoi);
//   let chuoi_bo_dau = bo_dau_tieng_viet(chuoi_tam).split(" ");
//   let chuoi_mang = chuoi_bo_dau.filter(function (element) {
//     return element !== "-" && element !== "–" && element !== "";
//   });
//   return chuoi_mang.join("-");
// }

// * Hàm tách keyword Google Ads
// function keywordAnalysis_capsen(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(",");
//   let arrMap = arrStr.map(function (element) {
//     return capitalizeSentences(element);
//   });
//   return arrMap;
// }

// * Hàm chuyển String thành url
// function convertStringToUrl(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(" ");
//   let arrFilter = arrStr.filter(function (element) {
//     return element !== "" && element !== "-" && element !== "–";
//   });
//   let arrMap = arrFilter.map(function (element) {
//     return removeVietnameseTones(element).toLowerCase();
//   });
//   return arrMap.join("-");
// }

// * Viết hoa ký tự đầu
// function viet_hoa_ky_tu_dau_gg_ads(chuoi) {
//   let chuoi_tam = chuoi.trim();
//   let chuoi_arr = chuoi_tam.split(",");
//   let chuoi_xoa_khoang_trang = [];
//   chuoi_arr.forEach(function (element) {
//     chuoi_xoa_khoang_trang.push(element.trim());
//   });
//   let chuoi_map = chuoi_xoa_khoang_trang.map(function (element) {
//     let arrElement = element.split(" ");
//     let arrElementMap = arrElement.map(function (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return arrElementMap.join(" ");
//   });
//   return `${chuoi_map.join(" ")} <br>`;
// }

// * Hàm tách keyword Google Ads - Viết hoa ký tự đầu
// function capitalizeFirstSen_GG(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(",");
//   let arrMap = arrStr.map(function (element) {
//     return capitalizeWord(element);
//   });
//   return arrMap;
// }

// * Hàm viết hoa đầu câu - Google Ads
// function viet_hoa_dau_cau_google_ads(tu_khoa) {
//   let chuoi_tam = chuan_hoa_chuoi(tu_khoa);
//   let chuoi_mang = chuoi_tam.split(",");
//   let chuoi_map = chuoi_mang.map(function (element) {
//     return `${viet_hoa_dau_cau(element)}<br>`;
//   });
//   let chuoi_ket_qua = chuoi_map.join("");
//   return chuoi_ket_qua;
// }

// * Hàm tách keyword Google Ads - Viết hoa chữ cái đầu
// function capitalizeGGadsKeywords(string) {
//   if (string.length == 0) return false;
//   let arrStr = string.split(",");
//   let arrMap = arrStr.map(function (element) {
//     return element.trim();
//   });
//   let arrMap2 = arrMap.map(function (element) {
//     let arrE = element.split(" ");
//     let arrE2 = arrE.split(" ");

//     let firstChar = arrE2[0].charAt(0).toUpperCase();
//     let otherChar = arrE2.join(" ").slice(1);
//     let capChar = firstChar + otherChar;
//     return arrE2;
//   });
//   return arrMap2;
// }

// * Hàm đếm số lượng từ
function dem_so_luong_tu(van_ban) {
  let van_ban_chuan = chuan_hoa_chuoi(van_ban);
  let so_ky_tu = van_ban_chuan.length;
  let so_tu = van_ban_chuan.split(" ").length;
  return {
    so_tu: so_tu,
    so_ky_tu: so_ky_tu,
  };
}
// console.log(
//   dem_so_luong_tu(
//     "iSOGIFT cung cấp giải pháp Quà tặng doanh nghiệp và Bao bì đóng gói cho ngành F&B. Với những sản phẩm chất lượng, từng chi tiết nhỏ đều được chúng tôi chăm chút một cách tỉ mỉ từ khâu lựa chọn chất lượng sản phẩm cho đến trải nghiệm nhận quà của khách hàng. Với iSOGIFT, bạn có thể tùy chỉnh thiết kế và chất liệu theo yêu cầu, đảm bảo rằng mỗi món quà không chỉ thể hiện được phong cách của doanh nghiệp bạn mà còn mang đến sự trân trọng, để lại ấn tượng riêng cho khách hàng và đối tác của bạn."
//   )
// );

// * Hàm chuẩn hóa con số
