---
title: Bài 23 - Kỹ thuật lập trình cơ sở
subtitle: Bài tập mảng 2 chiều C/C++
category:
  - kỹ thuật lập trình cơ sở
author: Ngọc Danh
date: 2020-09-11T19:59:59.000Z
featureImage: /uploads/getting-started-hero.jpg
---

> Bài 23, Viết chương trình thực hiện:  
> 
> *   Nhập ma trận vuông n hàng, n cột với các số nguyên ( n<=50)
> 
> *   Hiện ma trận đó ra màn hình
> 
> *   Tính tích hàng k, hàng k nhập từ bàn phím
> 
> *   Tìm hàng có tổng các phần tử nhỏ nhất
> 
> *   cho biết có bao nhiêu phần tử âm
> 
> *   sắp xếp các phần tử ma trận giảm dần theo từng cột và hiển thị ra ma trận mới

[![](https://1.bp.blogspot.com/-TdepDGTAz64/Xje9vTxeW7I/AAAAAAAAcfM/JKpEkslucw83XyWRvjQqoK1O-fVRsFFFQCLcBGAsYHQ/s400/23.png)](https://1.bp.blogspot.com/-TdepDGTAz64/Xje9vTxeW7I/AAAAAAAAcfM/JKpEkslucw83XyWRvjQqoK1O-fVRsFFFQCLcBGAsYHQ/s1600/23.png)

> Bài viết nằm trong: [Series thực hành cơ sở lập trình](https://ndanh1.blogspot.com/search/label/th%E1%BB%B1c%20h%C3%A0nh%20l%E1%BA%ADp%20tr%C3%ACnh%20c%C6%A1%20s%E1%BB%9F?max-results=7)

### Code: 

C/C++ `#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
    int n, i, j, v, a[100][100];

    //nhap vao n
    cout << "nhap vao so n: ";
    cin >> n;

    //a, nhap vao ma tran co n gia tri
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            cout << "nhap a[" << i << "][" << j << "]";
            cin >> a[i][j];
        }
    }
    cout << endl;

    //b, xuat ra ma tran vua nhap
    cout << "Mang sau khi da nhap la: " << endl;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            cout << setw(7) << a[i][j];
        }
        cout << endl;
    }
    cout << endl;

    // c, Tinh tich hang k
    int k, tich;
    tich = 1;
    cout << "Nhap gia tri hang k: ";
    cin >> k;
    for (j = 0; j < n; j++)
    {
        tich *= a[k][j];
    }
    cout << "\nTich hang k la: " << tich << endl;

    //d, hang co tong cac phan tu nho nhat
    int nn, s;
    s = 0;
    nn = 0;
    for (j = 0; j < n; j++)
    {
        nn += a[0][j];
    }
    for (i = 1; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            s += a[i][j];
        }
        if (s < nn)
        {
            nn = s;
        }
    }
    cout << "Hang co tong nho nhat la: " << nn << endl;

    //e, dem so phan tu am
    int dem;
    dem = 0;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (a[i][j] < 0)
            {
                dem++;
            }
        }
    }
    cout << "So phan tu am trong mang la: " << dem << endl;

    //f, sap xep ma tran giam dan theo cot
    cout << "Mang sau khi da sap xep giam dan theo cot la: " << endl;

    for (j = 0; j < n; j++)
    {
        for (i = 0; i < n; i++)
        {
            for (v = i + 1; v < n; v++)
            {
                if (a[v][j] < a[i][j])
                {
                    int tg = a[i][j];
                    a[i][j] = a[v][j];
                    a[v][j] = tg;
                }
            }
        }
    }
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            cout << setw(7) << a[i][j];
        }
        cout << endl;
    }
    cout << endl;
}`