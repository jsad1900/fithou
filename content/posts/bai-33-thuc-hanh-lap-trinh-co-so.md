---
title: Bài 33 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-10-23
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 33** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include <bits/stdc++.h>

using namespace std;

// bai 33 - fithou.netlify.app - @NgocDanh

struct XE {
    int soCho, namSanXuat, giaThue;
    char tenXe[20], mauXe[20];
};
void nhapTT(int n, XE a[]);
void xuatTT(int n, XE a[]);
void xoaXe(int &n, XE a[]);
void tangGia(int n, XE a[]);
int main()
{
    int n, dem;
    XE a[100];

    do {
        cout<<"Nhap vao so luong xe: ";
        cin>>n;
    }
    while(n<=0);
    cout<<"******************************************\n";
    cout<<"**    CHUONG TRINH QUAN LY XE           *\n";
    cout<<"**      1. Nhap du lieu                 **\n";
    cout<<"**      2. In danh sach xe              **\n";
    cout<<"**      3. xoa bo cac xe cach n nam     **\n";
    cout<<"**      4. Tang gia 10% cho nam y       **\n";
    cout<<"**      5. Thoat khoi chuong trinh      **\n";
    cout<<"**       Nhap lua chon cua ban          **\n";

    while(true) {
        cin>>dem;
        switch (dem) {
        case 1:
            cout<<"\nBan da chon nhap thong tin xe! \n";
            cout<<setw(50)<<setfill('-');
            nhapTT(n, a);
            cout<<"\nNhap vao cac tuy chon khac!\n";
            break;
        case 2:
            cout<<"Ban da chon xuat thong tin xe! \n";
            cout<<setw(50)<<setfill('-');
            xuatTT(n, a);
            cout<<"\nNhap vao cac tuy chon khac!\n";
            break;
        case 3:
            cout<<"\nBan da chon nhap nhap vao n nam de xoa xe! \n";
            cout<<setw(50)<<setfill('-');
            xoaXe (n, a);
            xuatTT(n, a);
            cout<<"\nNhap vao cac tuy chon khac!\n";
            break;
        case 4:
            cout<<"\nBan da chon nhap vao nam y de tang gia xe! \n";
            cout<<setw(50)<<setfill('-');
            tangGia(n, a);
            xuatTT(n, a);
            cout<<"\nNhap vao cac tuy chon khac!\n";
            break;
        case 5:
            cout<<"ban da chon thoat chuong trinh";
            return 0;
        default:
            cout<<"Ban nhap so khong co trong danh sach!\n ";

            break;
        }
    }





}

//nhap vao danh sach xe

void nhapTT(int n, XE a[])
{
    for(int i = 0; i< n; i++ ) {
        cout<<"\nNhap thong tin xe so "<<i+1<<endl;
        cout<<"Ten xe: ";
        fflush(stdin);
        gets(a[i].tenXe);
        cout<<"Mau xe: ";
        gets(a[i].mauXe);
        cout<<"Nam san xuat: ";
        cin>>a[i].namSanXuat;
        cout<<"So cho ngoi: ";
        cin>>a[i].soCho;
        cout<<"Gia thue ngay: ";
        cin>>a[i].giaThue;
        cout<<setw(30)<<setfill('-');
    }
}

// in ra thong tin cua danh sach cac xe
void xuatTT(int n, XE a[])
{
    cout<<setw(70)<<setfill('*');
    cout<<setw(20)<<setfill(' ')<<"STT";
    cout<<setw(20)<<setfill(' ')<<"Ten Xe";
    cout<<setw(20)<<setfill(' ')<<"Mau xe";
    cout<<setw(20)<<setfill(' ')<<"So cho ngoi";
    cout<<setw(20)<<setfill(' ')<<"nam SX";
    cout<<setw(20)<<setfill(' ')<<"Gia cho thue\n";
    for(int i = 0; i<n; i++ ) {
        cout<<setw(20)<<setfill(' ')<<i+1;
        cout<<setw(20)<<setfill(' ')<<a[i].tenXe;
        cout<<setw(20)<<setfill(' ')<<a[i].mauXe;
        cout<<setw(20)<<setfill(' ')<<a[i].soCho;
        cout<<setw(20)<<setfill(' ')<<a[i].namSanXuat;
        cout<<setw(20)<<setfill(' ')<<a[i].giaThue<<endl;
    }

}

// xoa xe tu cach x nam so voi hien tai
void xoaXe ( int &n, XE a[])
{
    int p;
    cout<<"Nhap vao N nam: ";
    cin>> p;
    for(int i =0; i < n; i++) {
        if(2019 - p== a[i].namSanXuat) {
            for(int j= i; j<n; j++) {
                a[j].giaThue = a[j+1].giaThue;
                a[j].namSanXuat = a[j+1].namSanXuat;
                strcpy(a[j].tenXe, a[j+1].tenXe);
                strcpy(a[j].mauXe, a[j+1].mauXe);
                a[j].soCho = a[j+1].soCho;
            }
            n--;

        }
    }
    cout<<"Danh sach xe sau khi xoa la: \n";
}

void tangGia(int n, XE a[])
{
    int y;
    cout<<"nhap vao nam san xuat Y: ";
    cin>>y;
    for(int i = 0; i<n; i++) {
        if(a[i].namSanXuat == y && a[i].soCho) {
            a[i].giaThue = a[i].giaThue*1.1;
        }
    }
}
```