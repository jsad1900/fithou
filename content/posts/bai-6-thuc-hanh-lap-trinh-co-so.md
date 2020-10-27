---
title: Bài 6 - thực hành lập trình cơ sở
subtitle: Xử lý tọa độ trong C/C++
category:
  - thực hành lập trình cơ sở
author: Văn Trường
date: 2020-09-01
featureImage: /uploads/baiviet/cpp.png
---

> Bài 6 (TH-CSLT-07):Nhập vào từ bàn phím toạ độ 2 điểm P, Q với P(xP, yP), Q(xQ,yQ)
>
>a. In ra màn hình phương trình đường thẳng đi qua 2 điểm PQ.
>
>b. Cho điểm I có toạ độ I(XI, YI). Hãy cho biết điểm I có thuộc đường thẳng đi
>qua 2 điểm PQ hay không?
>**Gợi ý:**
>-Phương trình đường thẳng đi qua 2 điểm AB có dạng: Ax +By +C=0.
>
>Trong đó A=yQ - yP,  B= xP - xQ, C=xQ*yP - xP* yQ
>
>Đặt F(XI, YI)= AXI+ BYI +C.
>
>Nếu F(XI, YI)= 0 thì I thuộc đường thẳng PQ
>
>Nếu F(XI, YI) != 0 thì I không thuộc đường thẳng PQ


## Code  
```c++
#include<iostream>
using namespace std;
int main() {
    float xp, yp, xq, yq, a, b, c, d, xi, yi;
    cout << "P(Xp,Yp) trong do Xp, Yp lan luot la: \n";
    cin >> xp >>yp;
    cout << "\nQ(Xq,Yq) trong do Xq, Yq lan luot la: \n", cin >> xq >>yq;
    a = yq - yp;
    b = xp - xq;
    c = (xq * yp) - (xp * yq);
    cout << "\nPhuong trinh duong thang di qua 2 diem la: "<<a<<"X1 + "<<b<<"Y1 + "<<c<<" = 0";
    cout << "\nF(Xi, Yi) trong do Xi, Yi lan luot la: \n";
    cin >> xi >> yi;
    d = a * xi + b * yi + c;
    if(d == 0)
        cout << "\nI thuoc duong thang PQ";
    else {
        cout << "\nI khong thuoc duong thang PQ";
    }
	return 0;
}
```

## Dữ liệu test

![](https://i.ibb.co/RYTmvF5/image.png)