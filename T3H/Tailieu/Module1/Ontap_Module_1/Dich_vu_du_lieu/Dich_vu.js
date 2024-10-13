var http = require("http");
var fs = require("fs");
var port = 8080;
var Dich_vu = http.createServer(function (Yeu_cau, Dap_ung) {
    Dap_ung.setHeader("Access-Control-Allow-Origin", "*");
    if (Yeu_cau.method === "GET") {
        if (Yeu_cau.url === "/Cuahang") {
            let Ket_qua = "";
            Ket_qua = fs.readFileSync("./dulieu/CuaHang.json", "utf-8");
            Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
            Dap_ung.end(Ket_qua);
        }
        else if (Yeu_cau.url === "/dsHocsinh") {
            let Ket_qua = "";
            Ket_qua = fs.readFileSync("./dulieu/dsHocsinh.json", "utf-8");
            Dap_ung.writeHead(200, { "Content-Type": "text/json ; charset=utf-8" });
            Dap_ung.end(Ket_qua);
        }
        else if (Yeu_cau.url === "/dsDienthoai") {
            let Ket_qua = "";
            Ket_qua = fs.readFileSync("./dulieu/dsDienthoai.json", "utf-8");
            Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
            Dap_ung.end(Ket_qua);
        }
        else if (Yeu_cau.url === "/dsMathang") {
            let Ket_qua = "";
            Ket_qua = fs.readFileSync("./dulieu/dsMatHang.json", "utf-8");
            Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
            Dap_ung.end(Ket_qua);
        }
        else if (Yeu_cau.url === "/dsTivi") {
            let Ket_qua = "";
            Ket_qua = fs.readFileSync("./dulieu/dsTivi.json", "utf-8");
            Dap_ung.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
            Dap_ung.end(Ket_qua);
        }
        else if (Yeu_cau.url.match("\.png$")) {
            var imagePath = `images/${Yeu_cau.url}`;
            if (fs.existsSync(imagePath)) {
                let fileStream = fs.createReadStream(imagePath);
                Dap_ung.writeHead(200, { "Content-Type": "image/png" })
                fileStream.pipe(Dap_ung);
            } else {
                imagePath = "images/PET.png";
                let fileStream = fs.createReadStream(imagePath);
                Dap_ung.writeHead(200, { "Content-Type": "image/png; charset=utf-8" });
                fileStream.pipe(Dap_ung);
            }
        }
        else {
            Dap_ung.end("Danh sách không tồn tại");
        };
    };
});
Dich_vu.listen(port,
    console.log(`Server is running on host: http://localhost:${port}`)
);