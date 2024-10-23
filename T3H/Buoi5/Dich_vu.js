var http = require("http");
var port = 8080;
var fs = require("fs");

var Dich_vu = http.createServer((Yeu_cau, Dap_ung) => {
  let method = Yeu_cau.method;
  let url = Yeu_cau.url;
  Dap_ung.setHeader("Access-Control-Allow-Origin", "*");

  // * Method GET
  if (method == "GET") {
    // * Danh sách học sinh
    if (url == "/dsHocSinh") {
      let Ket_qua = ``;
      Ket_qua = fs.readFileSync("./dulieu/dsHocsinh.json", "utf-8");
      Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
      Dap_ung.end(Ket_qua);
    }
    // * Danh sách Điện thoại
    else if (url == "/dsDienThoai") {
      let Ket_qua = "";
      Ket_qua = fs.readFileSync("./dulieu/Dien_thoai.json", "utf-8");
      Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
      Dap_ung.end(Ket_qua);
    }
    // * Danh sách Mặt hàng
    else if (url == "/dsMatHang") {
      let Ket_qua = "";
      Ket_qua = fs.readFileSync("./dulieu/Mat_hang.json", "utf-8");
      Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
      Dap_ung.end(Ket_qua);
    }
    // * Danh sách Tivi
    else if (url == "/dsTivi") {
      let Ket_qua = "";
      Ket_qua = fs.readFileSync("./dulieu/Tivi.json", "utf-8");
      Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
      Dap_ung.end(Ket_qua);
    }
    // * Lấy hình ảnh từ Server
    else if (url.match(".png$")) {
      let imagePath = `images/${Yeu_cau.url}`;
      if (!fs.existsSync(imagePath)) {
        imagePath = `images/PET.png`;
      }
      let fileStream = fs.createReadStream(imagePath);
      Dap_ung.writeHead(200, { "Content-Type": "image/png" });
      fileStream.pipe(Dap_ung);
    } else {
      Dap_ung.end("Danh sách không tồn tại");
    }
  }

  // * Method POST
  else if (method == "POST") {
    var Noi_dung_nhan = "";
    Yeu_cau.on("data", function (data) {
      Noi_dung_nhan += data;
    });
    if (url == "/Cap_nhat_Tivi") {
      Yeu_cau.on("end", function () {
        let Doi_tuong = JSON.parse(Noi_dung_nhan);
        // * Xử lý phía Server
        // * Trả lại kết quả
        Dap_ung.end(JSON.stringify(Doi_tuong));
      });
    } else if (url == "/Dangnhap") {
      Yeu_cau.on("end", function () {
        let thongTin = JSON.parse(Noi_dung_nhan);
        console.log(thongTin);
        // * Xử lý thông tin
        // * Trả lại kết quả
        Dap_ung.end(JSON.stringify(thongTin));
      });
    }
  } else {
    Dap_ung.end(`Server NodeJS - Method : ${method} - Url : ${url}`);
  }
});

Dich_vu.listen(port, console.log(`Services run host: http:localhost:${port})`));

