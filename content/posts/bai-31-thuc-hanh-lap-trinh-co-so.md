---
title: Bài 31 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-27T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 31**

## Code:
#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    int a[100], b[100], c[100], n, S, i;
    S=0;
    cout<<"Nhap vao so phan tu trong mang: ";
    cin>>n;
    cout<<"nhap mang a"<<endl;
    for(i =0; i<n; i++) {
        cout<<"a["<<i<<"]: ";
        cin>>a[i];
    }
    cout<<"nhap mang b"<<endl;
    for(i =0; i<n; i++) {
        cout<<"b["<<i<<"]: ";
        cin>>b[i];
    }

    for(i=0; i<n; i++) {
        c[i] = a[i]+b[i];
        S += c[i];
    }

//in 3 mang
    cout<<"in mang a"<<endl;
    for (i=0; i<n; i++) {
        cout<<setw(7)<<a[i];
    }
    cout<<"\nin mang b"<<endl;
    for (i=0; i<n; i++) {
        cout<<setw(7)<<b[i];
    }
    cout<<"\nin mang c"<<endl;
    for (i=0; i<n; i++) {
        cout<<setw(7)<<c[i];
    }
    cout<<endl;

    //tinh tong mang
    cout<<"tong cac phan tu mang c la: "<<S;
    return 0;
}
```