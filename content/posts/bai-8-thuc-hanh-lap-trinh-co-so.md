---
title: Bài 8 - thực hành lập trình cơ sở
subtitle: Kiểm tra 3 cạnh của tam giác
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-12
featureImage: /uploads/baiviet/cpp.png
---

> Bài 8, Viết chương trình nhập vào 3 số thực a, b, c. Kiểm tra chúng có thỏa mãn là 3 cạnh của tam giác hay không. Nếu tam giác đó là tam giác gì thường, cân đều, vuông, vuông cân

## Code:  

```c++
#include <iostream>
#include <math.h>
using namespace std;
int main() {
	//bai 8 - fithou.netlify.app - @NgocDanh
	float a, b, c;
	string thongBao;
	cout<<"Nhap vao do dai canh a cua tam giac: "; cin>> a;
	cout<<"Nhap vao do dai canh b cua tam giac: "; cin>> b;
	cout<<"Nhap vao do dai canh c cua tam giac: "; cin>> c;
 
	if(a+ b> c && a+c> b && b+c>a &&a*b*c !=0 ) {
 
		// kiem tra tam giac vuong
		float Va, Vb, Vc;
		Va = pow(a, 2)+ pow(b, 2) ;
		Vb = pow(b, 2)+ pow(c, 2);
		Vc = pow(c, 2)+ pow(a, 2);
		if(Va == pow(c, 2) || Vb == pow(a, 2) || Vc == pow(b, 2)) {
			if( a == b || a == c || b == c) {
				thongBao = "vuong can";
			}
			else {
				thongBao = "vuong";
			}
		}
			//kiem tra tam giac can, deu
		else if (a == b == c) {
			thongBao = "deu";
		}
		else if( a == b || a == c || b == c) {
			thongBao = "can";
		}
		else {
			thongBao = "thuong";
		}
 
			cout<<"Ba canh nhap vao la do dai cua tam giac "<<thongBao;
	}
	else {
		cout<<"Do dai ba canh khong phai la cua mot tam giac";
	}
	return 0;
}
 
```

## Dữ liệu test:  

[![](https://1.bp.blogspot.com/-rLTDFuIolLI/Xhjdv1mV2fI/AAAAAAAAb4M/LUzSKLnkn1cSzVYFPHm8lCVY5TKlHWMUwCLcBGAsYHQ/s1600/b91.png)](https://1.bp.blogspot.com/-rLTDFuIolLI/Xhjdv1mV2fI/AAAAAAAAb4M/LUzSKLnkn1cSzVYFPHm8lCVY5TKlHWMUwCLcBGAsYHQ/s1600/b91.png)

[![](https://1.bp.blogspot.com/-uEnEzE0CCfU/XhjdvxF1kwI/AAAAAAAAb4I/Sze8pz7QrlIhA9EVa48QD7tg5x-RzyaNQCLcBGAsYHQ/s1600/b92.png)](https://1.bp.blogspot.com/-uEnEzE0CCfU/XhjdvxF1kwI/AAAAAAAAb4I/Sze8pz7QrlIhA9EVa48QD7tg5x-RzyaNQCLcBGAsYHQ/s1600/b92.png)