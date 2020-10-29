---
title: Bài 40 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-27T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 40**

## Code:

```c++
 #include <iostream>
#include <stdio.h>
#include <string.h>
#include <iomanip>
using namespace std;
struct DS {
    int maTX, namSinh, luong;
    char tenTX[30], bienSo[30], gioiTinh[30];

};
void nhapDS(int &n, DS a[]);
void luuDS(int &n, DS a[]);
void docDS(int n, DS a[]);
void inDS(int n, DS a[]);
void chinhSua(int n, DS a[]);
void sapXep(int n, DS a[]);
void trichTT(int n, DS a[]);

int main()
{
    int n;
    DS a[100];
    nhapDS(n, a);
    luuDS(n, a);
    docDS(n, a);
    inDS(n, a);
    chinhSua(n, a);
    sapXep(n, a);
    trichTT(n, a);
}
void nhapDS(int &n, DS a[])
{
    cout<<"Nhap vao so tai xe: ";
    cin>>n;
    for(int i =0; i<n; i++) {
        cout<<"\n------------------\n";
        cout<<"Thong tin tai xe thu "<<i+1<<endl;
        cout<<"Ho va ten tai xe: ";
        fflush(stdin);
        gets(a[i].tenTX);
        cout<<"Ma tai xe: ";
        cin>>a[i].maTX;
        cout<<"Nam sinh tai xe: ";
        cin>>a[i].namSinh;
        cout<<"Luong tai xe: ";
        cin>>a[i].luong;
        cout<<"Bien so xe: ";
        cin>>a[i].bienSo;
        cout<<"Gioi tinh: ";
        cin>>a[i].gioiTinh;
    }
}
void luuDS(int &n, DS a[])
{
    FILE *file;
    file = fopen("taixe.txt", "wb");
    for(int i =0; i<n; i++) {
        fwrite(&a[i], sizeof(DS), 1, file);
    }
    fclose(file);
}

void docDS(int n, DS a[])
{
    FILE *file;
    file = fopen("taixe.txt", "rb");
    if(file == NULL) {
        cout<<"khong tim thay file"<<endl;
    }
    n=0;
    while(fread(&a[n], sizeof(DS), 1, file) == 1) {
        n++;
    }
    fclose(file);
}
void inDS(int n, DS a[])
{
    docDS(n, a);
    cout<<"In ra danh sach thong tin cac tai xe\n";
    cout<<"\n------------------\n";
    cout<<setw(20)<<setfill(' ')<<"Ho va ten";
    cout<<setw(15)<<setfill(' ')<<"Ma tai xe";
    cout<<setw(15)<<setfill(' ')<<"Nam sinh";
    cout<<setw(15)<<setfill(' ')<<"Luong";
    cout<<setw(15)<<setfill(' ')<<"Bien so";
    cout<<setw(15)<<setfill(' ')<<"Gioi tinh\n";
    for(int i = 0; i<n; i++) {
        cout<<setw(20)<<setfill(' ')<<a[i].tenTX;
        cout<<setw(15)<<setfill(' ')<<a[i].maTX;
        cout<<setw(15)<<setfill(' ')<<a[i].namSinh;
        cout<<setw(15)<<setfill(' ')<<a[i].luong;
        cout<<setw(15)<<setfill(' ')<<a[i].bienSo;
        cout<<setw(15)<<setfill(' ')<<a[i].gioiTinh<<endl;
    }
}
void chinhSua(int n, DS a[])
{
    int maTX, luongTX, i;
    docDS(n, a);
    cout<<"Nhap vao ma tai xe: ";
    cin>>maTX;
    for(i =0; i< n; i++) {
        if(a[i].maTX == maTX) {
            cout<<"Luong tai xe hien tai: "<<a[i].luong<<endl;
            break;
        }
    }
    cout<<"Nhap vao luong thay doi cua tai xe: ";
    cin>>luongTX;
    a[i].luong = luongTX;
    luuDS(n, a);
    inDS(n, a);
}
void sapXep(int n, DS a[])
{
    docDS(n, a);
    DS tg;

    for(int i =0; i<n; i++) {
        for(int j=i+1; j<n; j++) {
            if( strcmp(a[i].tenTX, a[j].tenTX)>0) {
                tg = a[i];
                a[i] = a[j];
                a[j] = tg;
            }
        }
    }
   //luu danh sach
   FILE *file;
    file = fopen("taixesx.txt", "wb");
    for(int i =0; i<n; i++) {
        fwrite(&a[i], sizeof(DS), 1, file);
    }
    fclose(file);

    file = fopen("taixesx.txt", "rb");
    n=0;
    while(fread(&a[n], sizeof(DS), 1, file) == 1) {
        n++;
    }
    fclose(file);
    cout<<"In ra danh sach tai xe sau khi sap xep\n";
    cout<<"\n------------------\n";
    cout<<setw(20)<<setfill(' ')<<"Ho va ten";
    cout<<setw(15)<<setfill(' ')<<"Ma tai xe";
    cout<<setw(15)<<setfill(' ')<<"Nam sinh";
    cout<<setw(15)<<setfill(' ')<<"Luong";
    cout<<setw(15)<<setfill(' ')<<"Bien so";
    cout<<setw(15)<<setfill(' ')<<"Gioi tinh\n";
    for(int i = 0; i<n; i++) {
        cout<<setw(20)<<setfill(' ')<<a[i].tenTX;
        cout<<setw(15)<<setfill(' ')<<a[i].maTX;
        cout<<setw(15)<<setfill(' ')<<a[i].namSinh;
        cout<<setw(15)<<setfill(' ')<<a[i].luong;
        cout<<setw(15)<<setfill(' ')<<a[i].bienSo;
        cout<<setw(15)<<setfill(' ')<<a[i].gioiTinh<<endl;
    }

}
void trichTT(int n, DS a[]) {
    docDS(n, a);
    int j =0;
    for(int i =0; i<n; i++) {
        if(strcmp(a[i].gioiTinh, "nu") ==0) {
            a[j] = a[i];
            j++;
        }

    }
    // luu vao file taixenu.txt
    FILE *file;
    file = fopen("taixenu.txt", "wb");
    for(int i =0; i<=j; i++) {
        fwrite(&a[i], sizeof(DS), 1, file);
    }
    fclose(file);

    file = fopen("taixesx.txt", "wb");
    for(int i =0; i<n; i++) {
        fwrite(&a[i], sizeof(DS), 1, file);
    }
    fclose(file);

    file = fopen("taixenu.txt", "rb");
    n=0;
    while(fread(&a[n], sizeof(DS), 1, file) == 1) {
        n++;
    }
    fclose(file);
    cout<<"In ra danh sach tai xe nu\n";
    cout<<"\n------------------\n";
    cout<<setw(20)<<setfill(' ')<<"Ho va ten";
    cout<<setw(15)<<setfill(' ')<<"Ma tai xe";
    cout<<setw(15)<<setfill(' ')<<"Nam sinh";
    cout<<setw(15)<<setfill(' ')<<"Luong";
    cout<<setw(15)<<setfill(' ')<<"Bien so";
    cout<<setw(15)<<setfill(' ')<<"Gioi tinh\n";
    for(int i = 0; i<n-1; i++) {
        cout<<setw(20)<<setfill(' ')<<a[i].tenTX;
        cout<<setw(15)<<setfill(' ')<<a[i].maTX;
        cout<<setw(15)<<setfill(' ')<<a[i].namSinh;
        cout<<setw(15)<<setfill(' ')<<a[i].luong;
        cout<<setw(15)<<setfill(' ')<<a[i].bienSo;
        cout<<setw(15)<<setfill(' ')<<a[i].gioiTinh<<endl;
    }
}
```