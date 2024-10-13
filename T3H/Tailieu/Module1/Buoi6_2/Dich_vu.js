var http = require("http");
var port = 8080;
var fs = require("fs");

var Dich_vu = http.createServer(
    (Yeu_cau, Dap_ung) => {
        let url = Yeu_cau.url;
        let method = Yeu_cau.method;
        Dap_ung.setHeader("Access-Control-Allow-Origin","*");

        if (method == "GET") {
            if (url == "/dsHocsinh") {
                let Ket_qua = "";
                Ket_qua = fs.readFileSync("./dulieu/dsHocsinh.json", "utf8");
                Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
                Dap_ung.end(Ket_qua);
            }

            else if (url == "/dsDienthoai") {
                let Ket_qua = "";
                Ket_qua = fs.readFileSync("./dulieu/Dien_thoai.json", "utf8");
                Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
                Dap_ung.end(Ket_qua);
            }

            else if (url == "/dsMatHang") {
                let Ket_qua = "";
                Ket_qua = fs.readFileSync("./dulieu/dsMatHang.json", "utf8");
                Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
                Dap_ung.end(Ket_qua);
            }

            else if (url == "/dsTivi") {
                let Ket_qua = "";
                Ket_qua = fs.readFileSync("./dulieu/Tivi.json", "utf8");
                Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
                Dap_ung.end(Ket_qua);
            }

            else if (url == "/dsNguoiDung") {
                let Ket_qua = "";
                Ket_qua = fs.readFileSync("./dulieu/dsNguoidung.json", "utf8");
                Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
                Dap_ung.end(Ket_qua);
            }

            else if (url.match("\.png$")) {
                var imagePath = `images/${Yeu_cau.url}`;
                let fileStream = fs.createReadStream(imagePath);
                Dap_ung.writeHead(200, { "Content-Type": "image/png" });
                fileStream.pipe(Dap_ung);
                if (!fs.existsSync(imagePath)) {
                    imagePath = `images/PET.png`;
                };
            }

            else {
                Dap_ung.end("Danh sach khong ton tai");
            };
        }

        else if (method == "POST") {
            var Noi_dung_nhan = "";
            Yeu_cau.on("data", function (data) {
                Noi_dung_nhan += data;
            });

            if (url == "/cap_nhat_tivi") {
                Yeu_cau.on("end", function () {
                    let Doi_tuong = JSON.parse(Noi_dung_nhan);
                    Dap_ung.end(JSON.stringify(Doi_tuong));
                });
            }

            else if (url == "/Dangnhap") {
                Yeu_cau.on("end", function () {
                    let thongTin = JSON.parse(Noi_dung_nhan);
                    console.log(thongTin);
                    // Xử lý thông tin
                    // Trả lại kết quả
                    Dap_ung.end(JSON.stringify(thongTin));
                });
            }
        }

        else {
            Dap_ung.end(`Server NodeJS - Method : ${method} - Url : ${url}`);
        }
    }
);

Dich_vu.listen(port,
    console.log(`Server run host: http://localhost:${port}`)
);