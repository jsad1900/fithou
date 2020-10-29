---
title: Bài 29 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-26T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 29**

## Code:

```c++
#include <iostream>
using namespace std;

// bai 29- fithou.netlify.app - @NgocDanh
int kiemtra(int a, int &b) {
    int r;
    while(a!=0) {
    r = b%a;
    b= a;
    a= r;
}
}

int main() {
    int a, b;
cout<<"Nhap a: "; cin>>a;
cout<<"Nhap b: "; cin>>b;

kiemtra(a, b);
if(b == 1) {
    cout<<"Hai so la so nguyen cung nhau";
}
else {
    cout<<"Hai so khong phai so nguyen cung nhau";
}
}


```