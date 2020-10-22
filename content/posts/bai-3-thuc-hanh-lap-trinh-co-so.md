---
title: Bài 3 - thực hành lập trình cơ sở
subtitle: Tính tổng các chữ số C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-12
featureImage: /uploads/baiviet/cpp.png
---

> Bài 3, Viết chương trình nhập vào một số nguyên dương N có 2 chữ số từ bàn phím, xuất ra màn hình tổng các chữ số của N.
>
>Ví vụ nhập N= 48, kết quả in ra là 4+8 = 12.

## Code  
```c++
#include <iostream>

using namespace std;

int main(){
	// bai 3 - fithou.netlify.app - @NgocDanh
	
	int n;
	
	cout<<"nhap so: ";
	cin>>n;
	
	int sum = n/10 + n%10;
	cout<<n/10<<" + "<<n%10<<" = "<<sum<<endl;
	
	return 0;
}

```

## Dữ liệu test  

![](https://i.ibb.co/YPGt47V/bai3-thcs.jpg)