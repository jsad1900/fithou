---
title: Bài 14 - thực hành lập trình cơ sở
subtitle: Tính giá trị biểu thức
category:
  - thực hành lập trình cơ sở
author: Văn Trường
date: 2020-09-18T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> **Bài 14** (TH-CSLT-06): Viết chương trình nhập vào số nguyên dương n và tính tổng theo công thức: 
>                        `S = 1 + 1/3 + …… + 1/(2*n-1)`


## Lưu ý:

- nếu để `1/bieuthuc` thì sẽ in ra kết quả sai vì `int/int` sẽ ra `int` rồi mới chuyển vào `float s`. Vậy ta phải để `1.0` hoặc `(float)1` thì sẽ in ra đúng vì `float/int` sẽ là `float`. 

## Code:

### Cách 1

```c++
#include<iostream>
using namespace std;
int main(){
	//bai 14 - fithou.netlify.app - Van Truong
	int n;
	float s = 1;
	cout << "Nhap n = ";
	cin >> n;
	for(int i = 2; i <= n; i++ )
        s =  s + 1.0/(2.0*i-1.0);
    cout << "Tong S = " <<s;
	return 0;	
}
```

### Cách 2

>Sử dụng đệ quy

```c++
#include <iostream>
using namespace std;

float slove(int n){
	if(n==1)
		return n;
	return 1.0/(2*n-1)+ slove(n-1);
}

int main(){
	//bai 14 - fithou.netlify.app - @NgocDanh
	int n;
	cout<<"Nhap n: ";
	cin>>n;
	
	cout<<"Gia tri bieu thuc: "<<slove(n);
	return 0;
}
```

## Dữ liệu test:

![](https://i.ibb.co/cX3Nx32/image.png)
