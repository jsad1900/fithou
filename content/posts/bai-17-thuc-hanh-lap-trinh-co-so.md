---
title: Bài 17 - thực hành lập trình cơ sở
subtitle: Bài tập về mảng
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-04T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> Bài 17, Hãy viết chương trình nhập vào dãy số đến khi gặp số 0 thì dừng, sau đó tách số chẵn và lẻ ra 2 mảng khác nhau. Tính trung bình cộng các số chẵn dương và các trung bình cộng các số lẻ âm.

## Thuật toán:

> Để tách mảng a\[\] thành 2 mảng khác nhau. Ta tách lần lượt mảng chẵn vào mảng b\[\], mảng lẻ vào mảng c\[\]. Sau đó in ra 2 mảng b\[\], c\[\].

## Code:

```c++
#include <iostream>
#include <iomanip>
using namespace std;
 
int main()
{
    int n, i, a[100], b[100], c[100], tongDuong, tongAm, j, k;
    float tbcD, tbcA;
    tongDuong = 0;
    tongAm = 0;
    n = 0;
    j =0;
    k = 0;
    do
    {
        cout<<"Nhap vao gia tri cua a["<<n<<"]: ";
        cin>> a[n];
 
        if(a[n]== 0)
        {
            break;
 
        }
        else
        {
            n++;
        }
    }
    while(n!= 0);
    cout<<"\n mang sau khi da nhap la: "<<endl;
    for(i = 0; i< n; i++)
    {
        cout<<setw(7)<<a[i];
    }
    // truyen gia tri vao mang
    for(i = 0; i<n; i++)
    {
        if(a[i]%2 == 0 && a[i]>0)
        {
            b[j] = a[i];
            tongDuong+= b[j];
            j++;
        }
        else
        {
            c[k] = a[i];
            tongAm += c[k];
            k++;
        }
    }
    cout<<endl;
 
    // in ra hai mang am va duong
    cout<<"mang cac so chan duong la:"<<endl;
    if(j>0)
    {
        for(i = 0; i< j; i++)
        {
            cout<<setw(7)<<b[i];
        }
        cout<<endl;
    }
 
 
    cout<<"mang cac so le am la:"<<endl;
    if(k >0)
    {
        for(i = 0; i< k; i++)
        {
            cout<<setw(7)<<c[i];
        }
        cout<<endl;
    }
 
 
    tbcD = tongDuong/j;
    tbcA = tongAm/k;
 
    // xuat ra thong bao man hinh
    cout<<"tong so trung binh cong chan duong la: "<<tbcD<<endl;
    cout<<"tong so trung binh cong le am la: "<<tbcA;
 
 
}
```

##   Dữ liệu test:

[![](https://1.bp.blogspot.com/-pV0ZJFRlPUk/XhsbejeNSBI/AAAAAAAAb_E/CSECuwQahEI-K2d14zftu9OAvN9sLrhgACLcBGAsYHQ/s1600/bai17-t.png)](https://1.bp.blogspot.com/-pV0ZJFRlPUk/XhsbejeNSBI/AAAAAAAAb_E/CSECuwQahEI-K2d14zftu9OAvN9sLrhgACLcBGAsYHQ/s1600/bai17-t.png)