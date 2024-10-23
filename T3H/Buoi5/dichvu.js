var http = require("http");
var port = 8080;
var fs = require("fs");

var dich_vu = http.createServer(function (yeu_cau, dap_ung) {
  let method = yeu_cau.method;
  let url = yeu_cau.url;

  dap_ung.setHeader("Access-Control-Allow-Origin", "*");

  if (method == "GET") {
    if (url == "/dsHocSinh") {
      let ket_qua = ``;
      ket_qua = fs.readFileSync("./dulieu/dsHocsinh.json", "utf-8");
      dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
      dap_ung.end(ket_qua);
    } else if (url == "dsDienThoai") {
      let ket_qua = ``;
      ket_qua = fs.readFileSync("./dulieu/dsDienThoai.json", "utf-8");
      dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
      dap_ung.end(ket_qua);
    } else if (url.match(".png$")) {
      let imagePath = `images/${Yeu_cau.url}`;
      if (!fs.existsSync(imagePath)) {
        imagePath = `images/PET.png`;
      }
      let fileStream = fs.createReadStream(imagePath);
      Dap_ung.writeHead(200, { "Content-Type": "image/png" });
      fileStream.pipe(Dap_ung);
    } else {
      dap_ung.end("Danh sách không tồn tại");
    }
  } else if (method == "POST") {
    let noi_dung_nhan = ``;
    yeu_cau.on("data", function (data) {
      noi_dung_nhan += data;
    });
  } else {
    dap_ung.end(`Server NodeJS - Method : ${method} - Url : ${url}`);
  }
});

