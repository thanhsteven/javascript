1. Block Scope

- Block Scope : là các dòng code nằm trong cặp dấu {} và chúng ta chỉ có thể truy xuất được những gì bên trong cặp {} này thôi.
- Và truy xuất thì cũng phải truy xuất bên trong cặp {} đó luôn chứ nếu ra ngoài rùi thì không còn truy xuất được gì nữa. --> Không thể truy xuất ra ngoài

Ví dụ
if (2 > 1) {
let number = 100;
const number2 = 999;
console.log(number) --> Đúng
console.log(number2) --> Đúng
}
console.log(number) --> Sai
console.log(number2) --> Sai

2. Global Scope

- Là từ khoá var
- Đối với var thì nó là global scope và để nó ở đâu cũng có thể truy xuất vào được vì nó bị hoisting
- Hoisting là đưa cái biến đó lên trước tiên rồi mới chạy tiếp các chương trình khác.

chỉ số speed index: 0 - 3.4s

- Các trang con bỏ banner slideshow hết -> chỉ có trang chủ là có thôi. => done
- Viết lại cho đúng format của iSOGIFT.
- Bỏ chức năng tìm kiếm trên header (phía trên góc phải). => done
- H1 không nằm ở vị trí sau logo -> Tốt nhất là dưới menu, và nằm dưới breadcrumbs luôn -> trang chủ để sau slideshow. => done
- Hỏi lại logo iSOGIFT. => confirm, done
- Đem H1 ở sau Slideshow thêm 1 đoạn sapo giới thiệu. --> chưa có content
- Cái usb sau H1 thì lấy y chang bên in bắc việt => done
- Section giới thiệu: đoạn sapo sau H2 là đoạn sapo của trang trong (quà tặng, in hộp giấy) -> button là dofollow -> trỏ hết về theo từng trang trong. Cái hình cũng trỏ link luôn y chang cái button. => done
- Section lý do chọn chúng tôi -> copy chang bên in ấn bắc việt -> lấy content giống y chang bên in ấn -> Thiết kế layout 3 cục thôi. => done
- Thêm section tầm nhìn sứ mệnh -> Lấy y chang của isoglass đem qua -> chủ yếu cần 4 cục chạy các con số là được -> Bỏ cái section đang trống content đi và thay bằng section này là được.
- Trong trang isoglass chỗ header bên phải là button hotline -> phải custom lại -> thêm nofollow cho nó. Trang isogift cũng thiết kế header giống vậy. => done

Trang con :

- Breadcrumb => done
- H1 dưới breadcrumb => done
- Show các hình gallery của sản phẩm ra => done
- Sapo (khoảng 4 dòng) --> sapo sẽ đem qua trang chủ => done
- Content dài => done
- Sidebar giống in logo ly thuỷ tinh
  => Nói chung là giống y chang in logo ly thuỷ tinh
- Không cần bộ câu hỏi -> làm giống tới phần content dài là được
- Có thêm phần comment bên dưới là được rồi

- Trang liên hệ -> làm giống isoglass.
- Trang giới thiệu -> làm giống isoglass -> bỏ bộ theo dõi -> các section còn lại thì giống y chang được.

* Ngày 23/08/2024
- Sửa thẻ h5 ở footer thành thẻ p => done
- bỏ button trong gallery hình ảnh giữa 2 page quà tặng và in vỏ hộp => done
- thêm canonical vào thêm trang page
- sửa cái h3 trong page quà tặng và in vỏ hộp bên dưới kèm theo cái h5 => done

