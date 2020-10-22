---
title: Bài 9 - thực hành lập trình cơ sở
subtitle: Tính giá trị biểu thức
category:
  - thực hành lập trình cơ sở
author: Văn Trường
date: 2020-09-12
featureImage: /uploads/baiviet/cpp.png
---

> Bài 9 (TH-CSLT-05): Viết chương trình nhập vào 3 số nguyên `a`, `b`, `c`. 
>
>Tính và giá trị của f(x) theo công thức:
>
>`f(x) = (a+c)/b` nếu `b <> 0 (1)` Hoặc `f(x) = a-c` nếu `b = 0 (2)`

## Code:  

```c++
 #include<iostream>
using namespace std;
int main(){
	//bai 9 - fithou.netlify.app - Van Truong
	int a, b, c;
	cout << "a = "; cin >> a;
	cout << "b = "; cin >> b;
	cout << "c = "; cin >> c;
	if(b != 0)
	   cout << "F(x) = (a + c) / b = " << (a + c) / b;
	else{
		cout << "F(x) = a + c =  " << a + c;
	}
	return 0;
}
```

## Dữ liệu test:
![](https://i.ibb.co/sWQ7pRf/122189977-871032180098300-8045954566134336144-n.png)