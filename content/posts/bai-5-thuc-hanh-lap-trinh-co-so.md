---
title: Bài 5 - thực hành lập trình cơ sở
subtitle: Xuất ra chữ số lớn nhất
category:
  - thực hành lập trình cơ sở
  - kỹ thuật lập trình cơ sở
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-08-11T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> Bài 5, Viết chương trình nhập vào số nguyên N gồm 3 chữ số. Xuất ra màn hình chữ số lớn nhất ở vị trí nào?  
> Ví dụ N = 497 . Chữ số lớn nhất nằm ở hàng chục

## Code  
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

## Dữ liệu test  

[![](https://1.bp.blogspot.com/-bMm6IiKTXR0/XhjaWEoA7EI/AAAAAAAAb3s/GdlnV291iwMRJpUyUjA_oYBSyUtE55tQQCLcBGAsYHQ/s320/5.png)](https://1.bp.blogspot.com/-bMm6IiKTXR0/XhjaWEoA7EI/AAAAAAAAb3s/GdlnV291iwMRJpUyUjA_oYBSyUtE55tQQCLcBGAsYHQ/s1600/5.png)