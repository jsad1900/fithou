---
title: Bài 4 - thực hành lập trình cơ sở
subtitle: Nhập xuất cơ bản C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-01
featureImage: /uploads/baiviet/cpp.png
---

> Bài 4, Viết chương trình tính lương cho một người theo các yêu cầu sau: 
> - Nhập tên của người được lĩnh lương
> - Nhập tiền công 1 ngày, số ngày làm việc trong tháng, và số tiền đã tạm ứng.
>- Yêu cầu xuất ra màn hình như sau:
>> Ong/ba: ?
>> So tien duoc huong: ?
>> So tien da tam ung: ?
>> So tien con duoc linh: ?
> **Công thức tính tiền lương như sau:**
>- Số tiền được hưởng = Tiền công 1 ngày*Số ngày làm việc
>- Số tiền còn lĩnh = Số tiền được hưởng - Số tiền tạm ứng

## Code  
```c++
#include <bits/stdc++.h>
using namespace std;

int main(){
	// bai 4 - fithou.netlify.com - @NgocDanh
	char hoTen[30];
	int ngayLam;
	float tienCongNgay, tienTamUng;

	//nhap
	cout<<"Nhap ten nguoi dung duoc linh: ";
	gets(hoTen);

	cout<<"Nhap so ngay cong: ";
	cin>>ngayLam;

	cout<<"Nhap tien cong theo ngay: ";
	cin>>tienCongNgay;

	cout<<"Nhap tien tam ung";
	cin>>tienTamUng;
	
	//tinh toan
	float tienHuong,tienConLinh;
	tienHuong = tienCongNgay*ngayLam;
	tienConLinh = tienHuong- tienTamUng;

	// xuat noi dung
   cout<<"\nThong tin hien thi";
	cout<<"Ong/Ba: "<<hoTen<<endl;	
	cout<<"So tien luong duoc huong: "<<tienHuong<<endl;
	cout<<"So tien da tam ung: "<<tienTamUng<<endl;
	cout<<"So tien con duoc linh: "<<tienConLinh<<endl;

	return 0;
}

```

## Dữ liệu test  

![](https://i.ibb.co/9hrfd8G/bai4-thcs.jpg)