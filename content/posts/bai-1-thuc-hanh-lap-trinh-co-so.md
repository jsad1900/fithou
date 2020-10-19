---
title: Bài 1 - thực hành lập trình cơ sở
subtitle: Tính toán cơ bản C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-12T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> Bài 1, Vận tốc của phương tiện được tính bằng quãng đường đi được `S` trong khoảng thời gian `T`. Hãy thực hiện nhập giá trị cho `S` và `T`, sau đó hiển thị vận tốc của phương tiện với độ chính xác là 02 chữ số phần thập phân. Lưu ý quãng đường đi được có thể không nguyên, còn thời gian quy định là số nguyên.

## Chú ý
Để in ra đúng 2 chữ số thập phân thì sử dụng `setprecision(2)` và thuộc thư viện `iomanip`.

## Code  
```c++
#include <iostream>
#include <iomanip>
using namespace std;

int main(){
	// bai 1 - fithou.netlify.com - @NgocDanh
	int T;
	float S, V;

	//Nhap gia tri
	cout<<"Quang duong di duoc la: ";
	cin>>S;

	cout<<"Thoi gian di duoc la: ";
	cin>>T;

	V = S/T;
	cout<<setprecision(3);
	cout<<"Van toc xe la: "<<V<<endl;
	return 0;
}

```

## Dữ liệu test  

![](https://i.ibb.co/k0kLyNN/bai1-thcs.jpg)