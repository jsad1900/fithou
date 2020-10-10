---
title: Kinh nghiệm BTL Cấu trúc & Giải thuật
subtitle: Code + hướng dẫn + file BTL
category:
  - cấu trúc dữ liệu và giải thuật
author: Ngọc Danh
date: 2020-10-10T03:49:49.295Z
featureImage: /uploads/baiviet/kinhnghiem-ctgt.jpg
---
Hôm nay mình sẽ hướng dẫn các bạn làm bài tập lớn môn "Cấu trúc và giải thuật".  Môn này được đánh giá khá khó và quan trọng trong chương trình học. Khi có một nền tảng giải thuật tốt, bạn có thể giải quyết rất nhiều bài toán khó. Bắt đầu thôi nào ^^

## 1. Yêu cầu bài tập lớn

Ở trường, môn CT & GT được chia làm theo nhóm tối đa 4 bạn. Ví dụ yêu cầu như sau:

![đề bài cấu trúc giải thuật](/uploads/baiviet/kinhnghiem-ctgt-debai.jpg)

## 2. Làm như thế nào?

Các nhóm sẽ có những đề riêng khác nhau. Nhưng sẽ có một khung yêu cầu chung:
### Sử dụng 4 thuật toán chính: liên kết đơn, liên kết đôi, ngăn xếp, hàng đợi.
Các thuật toán để quản lý đối tượng có thể chung chức năng với nhau. Nhóm sẽ thảo luận để đưa ra các chức năng mà viết được trên cả 4 thuật toán. Ví dụ:
- Tìm kiếm theo `mã khách sạn` 
- Thống kê các phòng có `giá lớn hơn 2000`.
- ...
### Thuật toán cây hoặc đồ thị (khó hơn các thuật toán trên).
Kỳ này có thay đổi so với kỳ trước khi bổ sung mục này. Nhóm 4 người thì khó chia, phần này mình không có kinh nghiệm nhiều. Mình sẽ bổ sung phần này sau.
### Quản lý tối thiểu 2 đối tượng
Các bạn xem đề bài mẫu ở mục 1, đề là "Quản lý thuê phòng khách sạn". Sẽ chọn 2 đối tượng liên quan đến đề của mình được cho. Ví dụ đề trên sẽ chọn `phòng` và `khách hàng`
#### Phòng
`mã phòng`, `số tầng`, `giá phòng`, `xếp hạng phòng` ( thường, thương gia,, tổng thống), `tình trạng`(vẫn còn/ đã cho thuê).

#### Khách hàng
`mã khách hàng`, `tên khách hàng`, `tuổi`, `số CMND`, `số điện thoại`, `đến từ` (New York, Hà Nội, ...)

Mọi người có thể chọn thuộc tính phù hợp với đối tượng. Không nên làm quá nhiều thuộc tính, rất mất công nhập, chỉ cần các đối tượng khác nhau > 2 thuộc tính. Nếu có nhiều đối tượng cần quản lý thì bạn làm hơn 2 đối tượng cũng được nhưng đó là không cần thiết.

### Tối thiểu 20 chức năng
Tuy nói rằng 20 chức năng nhưng bạn không cần phải làm 20 tính năng. Vì có 2 đối tượng cần quản lý, chúng ta sẽ viết 10 chức năng cho mỗi đối tượng. Vậy chỉ cần thay các thuộc tính ở trong là được. Nếu bạn không chọn được thì có thể tham khảo:

**Thêm**

- Thêm một đối tượng vào đầu danh sách
- Thêm một đối tượng vào cuối danh sách

  **Tìm kiếm** 
  
- Tìm và in ra `mã khách hàng`
- Tìm và in ra khách hàng có tổng tiền `>= 2000`

  **Sắp xếp**
  
- Sắp xếp theo thứ tự tăng dần `họ tên`.
- Sắp xếp theo `giá phòng`.

  **Xóa**

- Xóa khách hàng có `mã` được nhập vào.
- Xóa các khách hàng đến từ `thành phố` được nhập vào.

  **Thống kê**

- Thống kê (đếm) số khách hàng đến từ `thành phố` được nhập vào.
- In ra các phòng có giá trên `400`.

## 3. Phân chia nhóm

Nhóm có rất nhiều việc để làm. Có thể kể ra như sau:
- Trình bày BTL trên word
- Vẽ sơ đồ 
- Viết code
- Test và chụp lại kết quả
- In BTL
Để chia tốt nhất các bạn nên có nhóm trưởng. Phân các thành viên các nhiệm vụ ở mỗi tuần mà giảng viên yêu cầu. Theo mình, các bạn có thể phân như sau:
- Họp với nhau chọn các chức năng nào phù hợp. Cả 4 sẽ viết các chức năng giống nhau chỉ khác về thuật toán.
- Có 4 thành viên theo trình độ thì thực hiện mỗi người một thuật toán: `liên kết đôi`, `liên kết đơn`, `ngăn xếp`, `hàng đợi`.
- 1 bạn code cây/đồ thị.
- 1 bạn thì trình bày file word.
-  2 bạn vẽ sơ đồ + chụp code test.
## 4. Tài liệu

Sau đây, mình chia sẻ bài tập lớn do mình và các khóa trước làm. Các bạn tham khảo.

**Bài tập lớn file Word + Code**
[BTL_CTDL.zip](https://drive.google.com/file/d/1eEHFah4Ef91EO7GpuPqG6F_8yNwUSWyE/view?usp=sharing)
pass giải nén: `fithou.netlify.app`

**Yêu cầu BTL của cô Như**
[yc_BTL.doc](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxxdXluaG5odTA4Nzl8Z3g6NDE0MDE5ZDZhOWU0ZjY5OQ)

## 5. Kinh nghiệm thi

Đây là kinh nghiệm của mình ở kỳ vừa rồi. Có thể kỳ này các bạn sẽ thi khác chút về đề. Nhưng có thể tham khảo.
- Khi thi cả nhóm 4 người in duy nhất 1 quyển BTL, bạn nào thi trước thì nộp
- Thi bằng laptop cá nhân, các bạn copy code + file word BTL vào máy
**Đề thi bao gồm 2 phần: câu hỏi + thực hành**

_Câu hỏi_ (có các dạng sau)

- Liên kết đơn và liên kết đôi khác nhau như nào?
- Stack chèn phần tử vào đâu? 
- Trình bày ý tưởng xóa một phần tử bất kỳ trong liên kết đơn?
- ...

_Thực hành_

- Làm lại một chức năng theo yêu cầu giảng viên
- Ví dụ chưa có sắp xếp theo họ tên thì "viết hàm sắp xếp theo họ tên"
- Sẽ hỏi về phần đã làm trong BTL (ai nhận phần nào thì khi thi thầy hỏi phần đó)
Good Luck, muốn trao đổi hãy liên hệ [fb.com/ngocdanh0508](fb.com/ngocdanh0508).


