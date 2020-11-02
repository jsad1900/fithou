---
title: Bài 34 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-27T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 34** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include <bits/stdc++.h>
using namespace std;

// bai 34 - fithou.netlify.app - @NgocDanh

struct DS {
    char hoTen[30], ngaySinh[30];
    int lop, soBuoiAn, tongTien, maHocSinh;
};
void nhapDS(int &n, DS a[]);
void inDS(int n, DS a[]);
void timKiem(int n, DS a[]);
int main()
{
    int n;
    DS a[100];
    nhapDS( n,a);
    inDS( n, a);
    timKiem(n,a);
}
void nhapDS(int &n, DS a[])
{
    cout<<"nhap so HS: "; cin>>n;
    cout<<"nhap vao danh sach hoc sinh:\n";
    for(int i = 0; i<n; i++) {
        cout<<"nhap vao hoc sinh thu "<<i+1<<endl;
        cout<<"ho va ten: ";
        fflush(stdin);
        cin.getline(a[i].hoTen, 30);
        cout<<"lop: ";
        cin>>a[i].lop;
        cout<<"so buoi an: ";
        cin>>a[i].soBuoiAn;
        cout<<"Ma hoc sinh: ";
        cin>>a[i].maHocSinh;
        a[i].tongTien = a[i].soBuoiAn*25000;
    }
}
void inDS ( int n, DS a[])
{
    cout<<"------------\n";
    cout<<"in ra danh sach\n";
    for(int i = 0; i<n; i++) {
             cout<<"------------\n";
        cout<<"ho va ten: "<<a[i].hoTen;
        cout<<"\nlop: "<<a[i].lop;
        cout<<"\nso buoi an: "<<a[i].soBuoiAn;
        cout<<"\nMa hoc sinh: "<<a[i].maHocSinh;
        cout<<"\ntong tien an: "<<a[i].tongTien<<endl;
    }
}
void timKiem(int n, DS a[])
{
    char b[30];
     cout<<"------------\n";
    cout<<"\nnhap ten can tim ";
    fflush(stdin);
    cin.getline(b, 30);
    cout<<"thong tin hoc sinh"<<endl;
    for (int i = 0; i<n; i++) {

        if(strcmp(a[i].hoTen , b) == 0) {
            cout<<"ho va ten: "<<a[i].hoTen;
            cout<<"\nlop: "<<a[i].lop;
            cout<<"\nso buoi an: "<<a[i].soBuoiAn;
            cout<<"\nMa hoc sinh: "<<a[i].maHocSinh;
            cout<<"\ntong tien an: "<<a[i].tongTien;
        }
    }
}

```