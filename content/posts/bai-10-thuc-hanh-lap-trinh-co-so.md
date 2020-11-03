---
title: Bài 10 - thực hành lập trình cơ sở
subtitle: Sử dụng if/else
category:
  - thực hành lập trình cơ sở
author: Văn Trường
date: 2020-10-21
featureImage: /uploads/baiviet/cpp.png
---

>Bài 10 (TH-CSLT-01). Body Mass Index (BMI) [1] là chỉ số cơ thể, thường được các chuyên gia hoặc các bác sĩ sử dụng để xác định tình trạng cơ thể của một người nào đó. Họ có bị thiếu hoặc thừa cân hay không? Chỉ số BMI được tính như sau:
>
>`BMI` = trọng lượng cơ thể (chiều cao \* chiều cao)
>
>Trong đó trọng lượng cơ thể được tính theo kg (có thể sử dụng 1 chữ sử dụng 02 chữ số >thập phân sau phần nguyên, ví dụ 1.65 m).
>
>Khi tính được BMI thì việc đánh giá sẽ được dựa trên bảng sau :
>
>| Stt | BMI | Kết Luận |
>| --- | --- | --- |
>| 1 | Ít hơn 18.5 | Dưới chuẩn |
>| 2 | Từ 18.5 đến 25 | Chuẩn |
>| 3 | Từ Trên 25 dưới 30 | Thừa cân |
>| 4 | Từ 30 đến 40 | Béo, cần giảm cân |
>| 5 | Trên 40 | Rất béo, cần giảm cân ngay |
>
>Hãy viết chương trình:
>- Nhận trọng lượng và chiều cao, tính BMI.
>- Đưa ra các kết luận tương ứng dựa trên bảng đã cho.

## Code:  

```c++
#include<iostream>
using namespace std;
int main(){
	//bai 10 - fithou.netlify.app - Van Truong
	float cannang, chieucao, BMI;
	cout << "Nhap can nang: "; cin >> cannang;
	cout << "\nNhap chieu cao: "; cin >> chieucao;
	BMI = cannang / (chieucao * chieucao);
	cout << "\nKet luan: ";
	if(BMI < 40){
	    if(BMI >= 30)
	         cout << "Beo, can giam can";
	    else if(BMI >= 25)
	         cout << "Thua can";
	    else if(BMI >= 18.5)
	         cout << "Chuan";
	    else
	    	cout << "Duoi chuan";
		
    }
	else{
		cout << "Rat beo, can giam can ngay";
	}
	return 0;
} 
```