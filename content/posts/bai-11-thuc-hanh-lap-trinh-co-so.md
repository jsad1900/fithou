---
title: Bài 11 - thực hành lập trình cơ sở
subtitle: In ngày tháng
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-18T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> **Bài 11**, Viết chương trình nhập vào từ bàn phím số nguyên n thuộc đoạn `\[1...12\]` và số nguyên m. In ra màn hình tháng và số ngày của tháng trong năm m ứng với số được nhập vào. Trong đó 1 tương ứng với "Tháng giêng có 31 ngày", 2 tương ứng với tháng 2,... 12 tương ứng với tháng 12. Nếu giá trị nhập vào không thuộc đoạn `\[1..12\]` thì thông báo "Không có tháng nào trong năm tương ứng với số bạn nhập".

## Code:

```c++
#include <iostream>
 
using namespace std;
int main() {
	int n;
	cout<<"Nhap vao thang: "; cin>>n;
	if(n>=1 && n<= 12) {
 
	}
		else {
		cout<<"Khong co thang nao trong nam tuong uong voi so ban da nhap"<<endl;
		cout<<"Moi ban nhap lai gia tri cua thang: "; cin>>n;
 
	}
	switch(n) {
		case 1: cout<<"Thang gieng co 31 ngay"; break;
		case 2: cout<<"Thang 2"; break;
		case 3: cout<<"Thang 3"; break;
		case 4: cout<<"Thang 4"; break;
		case 5: cout<<"Thang 5"; break;
		case 6: cout<<"Thang 6"; break;
		case 7: cout<<"Thang 7"; break;
		case 8: cout<<"Thang 8"; break;
		case 9: cout<<"Thang 9"; break;
		case 10: cout<<"Thang 10"; break;
		case 11: cout<<"Thang 11"; break;
		case 12: cout<<"Thang 12"; break;
	}
	return 0;
}
```

## Dữ liệu test:

[![](https://1.bp.blogspot.com/-NFwTd7Sd_4c/XhjfDaMuMbI/AAAAAAAAb4c/H6NhGoTBo18CitmXCcslla_pdaSOIi7WgCLcBGAsYHQ/s1600/b111.png)](https://1.bp.blogspot.com/-NFwTd7Sd_4c/XhjfDaMuMbI/AAAAAAAAb4c/H6NhGoTBo18CitmXCcslla_pdaSOIi7WgCLcBGAsYHQ/s1600/b111.png)