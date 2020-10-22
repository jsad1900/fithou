---
title: Bài 18 - thực hành lập trình cơ sở
subtitle: bài tập về số nguyên
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-13
featureImage: /uploads/baiviet/cpp.png
---

> Bài 18, Nhập vào từ bàn phím dãy số gồm n số nguyên ( n>0) và thực hiện các yêu cầu sau đây:
> 
> *   Hiển thị dãy số ra màn hình
> 
> *   Nhập vào từ bàn phím số nguyên x. Hãy cho biết x xuất hiện trong dãy số bao nhiêu lần và vị trí xuất hiện của x
> 
> *   xóa các số có giá trị bằng 0 trong dãy
> 
> *   sắp xếp các số nguyên tố về đầu dãy, các số không nguyên tố về cuối  dãy
> 
> *   Tính trung bình cộng các số chia hết cho 3 trong dãy

## Code:

```c++
#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
    int n, i,x, tg, p, dem, a[100];
    dem =0;
    cout<<"nhap n so nguyen can nhap: ";
    cin>>n;
 
//a,Nhap vao day so nguyen n phan tu
    for(i=0; i<n; i++) {
        cout<<"nhap vao gia tri thu "<<i<<": ";
        cin>>a[i];
    }
 
//xuat ra day so
    cout<<"Hien thi day vua nhap la: "<<endl;
    for(i=0; i<n; i++) {
        cout<<setw(7)<<a[i];
    }
    cout<<endl;
 
//b, nhap vao so nguyen x va cho biet xuat hien bao nhieu lan
    cout<<"nhap vao so nguyen x: ";
    cin>>x;
    cout<<"so "<<x<<" xuat hien tai cac vi tri: ";
    for(i=0; i<n; i++) {
        if(a[i] == x) {
            dem++;
            cout<<setw(7)<<i;
        }
    }
    cout<<endl;
    cout<<"so "<<x<<" xuat hien "<<dem<<" lan"<<endl;
 
//c, xoa cac ky tu bang 0 trong day
    i=0;
    do {
        if(a[i] ==0) {
            n--;
            for(int v = i; v<n; v++) {
                a[v] = a[i+1];
                i++;
            }
            i--;
 
        }
        i++;
 
    }
    while(i<n);
    cout<<"mang sau khi da xoa so 0 la: "<<endl;
 
    for(i=0; i<n; i++) {
        cout<<setw(7)<<a[i];
    }
    cout<<endl;
 
 
    //e, tbc cac so chia hetcho 3
    int S;
    float tbc;
    S=0;
    dem=0;
    for(i=0; i<n; i++) {
        if(a[i]%3 ==0) {
            S += a[i];
            dem++;
        }
 
    }
    tbc= S/dem;
    cout<<"\ntrung binh cong cac so chia het cho 3 la: "<<tbc<<endl;
 
    //d, dua so ngto len dau day, so k ngto xuong cuoi
    int b[100], c[100], demNT, demKNT;
    demKNT =-1;
    demNT = -1;
    for (i = 0; i<n; i++) {
        dem = 0;
        int j;
        for(j = 2; j<a[i]; j++) {
            if( a[i]%j == 0) {
                demKNT++;
                dem++;
                break;
            }
        }
        if(dem > 0) {
            c[demKNT] = a[i];
        }
        else {
                demNT++;
            b[demNT] = a[i];
        }
    }
 
 
    cout<<"day sau khi sap xep so nguyen to dau day la: "<<endl;
    for(i=0; i<=demNT; i++) {
        cout<<setw(7)<<b[i];
    }
    for(i = 0; i<=demKNT; i++) {
         cout<<setw(7)<<c[i];
    }
 
}
```

##   Dữ liệu test:

[![](https://1.bp.blogspot.com/-zylVoherNWY/XhshEf6i5DI/AAAAAAAAcAI/bJ33a0_Bc3UhxTZ93ZZe3aAnJdldLBYtACLcBGAsYHQ/s1600/BAI18-T.png)](https://1.bp.blogspot.com/-zylVoherNWY/XhshEf6i5DI/AAAAAAAAcAI/bJ33a0_Bc3UhxTZ93ZZe3aAnJdldLBYtACLcBGAsYHQ/s1600/BAI18-T.png)