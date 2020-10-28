---
title: Kinh nghiệm làm bài tập lớn môn "Kỹ thuật lập trình cơ sở"
subtitle: Bài tập lớn môn C/C++
category:
  - kỹ thuật lập trình cơ sở
author: BEU Team
date: 2020-10-25
featureImage: /uploads/bg/6.jpg
---

Bước vào giảng đường đại học, các em sẽ được tiếp xúc với nhiều sự thay đổi. Ở hình thức chấm thi, cách đánh giá học tập. Trong số đó thì `bài tập lớn` được đưa ra để đánh giá một số môn học, trong đó chủ yếu là các môn về lập trình. ` Bài tập lớn ` bao gồm các yêu cầu có sẵn các bài toán tùy thuộc vào đề, các em sẽ phải trình bày trên một quyển và dùng nó để đi thi.

Hôm nay `fithou notes` sẽ hướng dẫn các em chi tiết về cách làm bài tập lớn của môn ` Kỹ thuật lập trình cơ sở `. Trình bày về cách trình bày word, cách in quyển bài tập lớn,...

### Q & A
**Mục này tóm tắt vài câu hỏi ngắn về bài tập lớn**

- Bài tập lớn là gì?
>Bài tập lớn là bài dùng để đánh giá quá trình học tập của môn. Hôm thi bài tập lớn sẽ in ra thành quyển và nộp cho thầy cô, đề thi cũng nằm trong bài tập lớn.

- Trình bày bài tập lớn như nào?
> Bài tập lớn sẽ được trình bày lên word sau đó in thành quyển. Trong đó phải đáp ứng yêu cầu từ thầy cô như có code, bộ test dữ liệu,...

- Thầy cô ra đề thi cuối kỳ thì bài tập nằm trong bài tập lớn hay ở đâu?
>Khóa anh khi đi thi thì thầy cô sẽ ra 1 câu trong quyển bài tập lớn và viết lại trên máy tính của trường. Ví dụ: Các em làm lại bài 7 trong bài tập lớn của mình lên máy tính.

- Thi ở đâu? Thi giấy hay máy tính? 
> Đầu tiên, sẽ thi tại phòng máy tầng 3 của khoa. Các em sẽ thi trên máy tính của trường và các máy tính thì sẽ tất nhiên được ngắt internet.  Các em mang theo quyển BTL + quyển thực hành để lấy điểm.

- Chấm điểm bài cuối kỳ ra sao?
> Điểm sẽ được tính dựa vào chấm quyển bài tập lớn + điểm thi thực hành + điểm thi và quy ra điểm của học kỳ chiếm `70%` tổng điểm môn.

- Bài tập lớn có quan trọng không?
> Như trên thì bài tập lớn rất quan trọng. Nó sẽ là tiền đề để thầy cô chấm điểm cuối kỳ. Vậy nên nó sẽ quyết định điểm số hoặc có qua môn hay không.

## Quy trình làm bài tập lớn

**Bài tập lớn được hoàn thiện theo các bước cơ bản sau**:

![](https://i.ibb.co/DWT6v5b/quy-trinh-btlktltcs.jpg)

Sau đây, sẽ trình bày một số phần quan trọng trong quá trình

## Viết code

Dựa theo đề được giao thực hiện code 10 bài theo từng đề riêng. Sau khi học xong thì các em sẽ có khả năng làm full 10 câu. 

Bởi mỗi đề sẽ có những câu khác nhau nên anh sẽ không đề cập. Chỉ lấy 1 ví dụ cho bài code hoàn chỉnh.

Ví dụ: Viết chương trình nhập một ký tự. Hãy cho biết đó là chữ viết hoa, thường, chữ số hay ký tự khác.

```c++
#include <iostream>

using namespace std;

int main()
{
    char kiemTra;
    cout<<"Moi nhap vao ky tu can tra: ";
    cin>>kiemTra;
    if(kiemTra>='A' &&kiemTra<='Z') {
        cout<<"Ky tu vua nhap la mot chu in hoa";
    }
    else if(kiemTra>='a' &&kiemTra<='z') {
        cout<<"Ky tu vua nhap la mot chu thuong";
    }
    else if(kiemTra>='0' &&kiemTra<<'9') {
        cout<<"Ky tu ban nhap vao la so";
    }
    else {
        cout<<"Ky tu nhap vao la bieu tuong";
    }
}
```

## Trình bày word

Sau khi code đầy đủ 10 bài, chúng ta sẽ trình bày chi tiết ra file word để in. 

Đây là mẫu báo cáo bài tập lớn môn "Kỹ thuật lập trình cơ sở"

[`Mẫu báo cáo BTL.docx`](https://bit.ly/35GGssr)

Dựa theo mẫu trên, các câu trong bài tập lớn sẽ phải đầy đủ các phần sau: 
- Input: xác định dữ liệu đầu vào
- Output: xác định kết quả cần đạt được
- Process: xác định sơ đồ thuật giải
- Code: file chương trình chi tiết
- Test: lập bảng có cả Input và Output tương ứng

## In bài tập lớn

**Khi in bài tập lớn, chúng ta sẽ có những lưu ý sau để bài tập lớn đẹp nhất:**
- Bài tập lớn được đóng bìa xanh
- Có thể đóng bìa bóng hoặc không cần
- Sử dụng font Times New Roman, bảng mã Unicode, cỡ chữ (size) 14;
- Dãn dòng (Line spacing) ở chế độ 1,5 line;
- Căn lề: Lề trên (top) 35mm; lề dưới (bottom) 30mm; lề trái (left)
35mm; lề phải(right) 20 mm, header 12.7mm, footer 12.7mm;
- Số trang được đánh ở giữa, phía trên đầu mỗi trang giấy. Trang 1 bắt
đầu tính từ Chương 1.
- Làm menu tự động

Sau khi in, quyển đạt yêu cầu sẽ như sau:

![](https://i.ibb.co/1M84Z03/IMG-20191120-111417.jpg "Bài tập lớn hoàn thành được in ra")

## Chia sẻ bài tập lớn các khóa trước

Để xem bài tập lớn các khóa, các em truy cập trang web hiện tại `fithou notes`, ở menu có mục `bài tập lớn`. Các em truy cập sẽ có các bài tập lớn  môn học tại đó.
Hoặc có thể truy cập link sau để xem bài tập lớn của khóa trước:
[`Thư mục BTL KTLTCS`](https://bit.ly/3lznNFh)

## Hỗ trợ làm bài tập lớn

Ở khoa CNTT, thì môn `Kỹ thuật lập trình cơ sở` là môn cực kỳ quan trọng. Vì sau đó sẽ có rất nhiều môn khác đi kèm. Chúng ta phải vượt qua môn thì mới được học "Kỹ thuật lập trình hướng đối tượng java", "Cấu trúc dữ liệu và giải thuật",...

Nếu để trật môn hay điểm thấp sẽ rất ảnh hưởng sau này. Ví dụ kỳ này trật môn này thì em phải chờ đến kỳ sau mới được mở lớp học tiếp. Và ở kỳ 2, các bạn cùng khóa đang học java thì chúng ta vẫn phải chờ năm sau học C++ mới được học java. 

Biết được điều đó sẽ ảnh hưởng quá trình học tập các em. `Team BEU` tụi anh với kinh nghiệm làm bài tập lớn cho các khóa trước. Team tư vấn, định hướng làm bài tập lớn cho các em miễn phí.

Ngoài ra, Team cũng hỗ trợ làm full bài gồm code+word dành cho các em không làm được BTL.

#### Xem chi tiết tại đây: 
[`Hỗ trợ bài tập lớn KTLTCS`](https://bit.ly/3jsssaA)