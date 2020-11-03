---
title: Bài 2 - thực hành lập trình cơ sở
subtitle: Nhập xuất cơ bản C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-10-20
featureImage: /uploads/baiviet/cpp.png
---

> Bài 2, Viết chương trình nhập vào thông tin của một học sinh bao gồm: Mã học sinh, Họ Tên, Ngày sinh, Ngày sinh, Lớp, Số buổi ăn bán trú. In ra màn hình các thông tin: Mã học sinh, Họ tên, Ngày sinh, Lớp, Số buổi ăn bán trú, Số tiền ăn bán trú(Biết đơn giá là 25000đ/1 buổi ăn bán trú). _Thông tin in ra theo 2 cách: Các thông tin in hết trong một dòng hoặc mỗi thông tin in trên 1 dòng_

## Chú ý
- Dùng `gets` thay cho `cin` khi nhập để tránh lỗi khi nhập tên khoảng trắng
- Dùng `setw` của thư viện `iomanip` để tự động căn 

## Code  
```c++
#include <iostream>
#include <iomanip>

using namespace std;

int main(){
	// bai 2 - fithou.netlify.com - @NgocDanh

	int maHS, soBuoiAn;
	float tienAn;
	char hoTen[30], ngaySinh[30], lop[30];

	//Nhap thong tin
	cout<<"Ma hoc sinh: ";
	cin>>maHS;

	cout<<"Ho Ten: ";
	fflush(stdin);
	gets(hoTen);

	cout<<"Ngay sinh: ";
	cin>>ngaySinh;

	cout<<"Lop hoc: ";
	cin>>lop;

	cout<<"so buoi an ban tru: ";
	cin>>soBuoiAn;

	//Tinh 
	tienAn = soBuoiAn*25000;

	// xuat thong tin
	cout<<"ma HS"<<setw(15)<<"Ho ten"<<setw(20)<<"Ngay sinh"<<setw(15)<<"lop"<<setw(15)<<"so buoi an"<<setw(15)<<"Tien an"<<endl;
	cout<<maHS<<setw(15)<<hoTen<<setw(20)<<ngaySinh<<setw(15)<<lop<<setw(15)<<soBuoiAn<<setw(15)<<tienAn<<endl;
	return 0;
}

```

## Dữ liệu test  

![](https://i.ibb.co/YW867dT/bai3-thcs.jpg)