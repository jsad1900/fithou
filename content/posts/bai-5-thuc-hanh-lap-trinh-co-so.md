---
title: Bài 5 - thực hành lập trình cơ sở
subtitle: Xuất ra chữ số lớn nhất
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-12T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> Bài 5, Viết chương trình nhập vào số nguyên N gồm 3 chữ số. Xuất ra màn hình chữ số lớn nhất ở vị trí nào?  
> Ví dụ N = 497 . Chữ số lớn nhất nằm ở hàng chục

## Code  

### Cách 1

```c++
#include <iostream>
#include <math.h>
using namespace std;
int main() {
   int N, max;
 
   //Nhap n tu ban phim
   cout<<"Nhap vao gia tri cua N: "; cin>>N;
   int hangDonVi = N%10;
    int hangChuc = (floorf)((N%100)/10);
    int hangTram = (floorf)(N/100);
 
     max = hangDonVi;
     if(max <= hangChuc ) {
        max = hangChuc;
        if(max <= hangTram) {
            cout<<" So lon nhat nam o hang Tram";
         }
         else {
            cout<< " so lon nhat o hang Chuc";
         }
     }
     else {
        if (max <= hangTram ) {
            max = hangTram;
            cout<<"so lon nhat o hang Tram";
         }
         else {
            cout<<"so lon nhat o hang Don Vi";
         }
     }
}
```

### Cách 2

- Có sử dụng toán tử 3 ngôi dạng với `c` là kết quả thì `a>b?c=a:c=b`, nếu `a>b` đúng thì `c= a`, nếu sai `c=b`. So sánh 3 số với nhau là kết quả của phép so sánh 2 cặp số.

```c++
#include <iostream>

using namespace std;

int main(){
	// bai 5 - fithou.netlify.app - @NgocDanh
	int n;

	cout<<"nhap n: ";
	cin>>n;

	int a[4];
	a[0] = n%10;
	a[1] = (n%100)/10;
	a[2] = n/100;
	
	int j;
	(a[0]>a[1])?j=0:j=1;
	(a[j]>a[2])?j:j=2;

	if(j==0){
		cout<<"so lon nhat o hang don vi";
	}
	else if(j==1){
		cout<<"so lon nhat o hang chuc";
	}
	else {
		cout<<"so lon nhat o hang tram";
	}
	
	return 0;
}
```

## Dữ liệu test  

[![](https://1.bp.blogspot.com/-bMm6IiKTXR0/XhjaWEoA7EI/AAAAAAAAb3s/GdlnV291iwMRJpUyUjA_oYBSyUtE55tQQCLcBGAsYHQ/s320/5.png)](https://1.bp.blogspot.com/-bMm6IiKTXR0/XhjaWEoA7EI/AAAAAAAAb3s/GdlnV291iwMRJpUyUjA_oYBSyUtE55tQQCLcBGAsYHQ/s1600/5.png)