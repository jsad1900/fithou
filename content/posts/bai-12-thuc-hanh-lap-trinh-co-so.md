---
title: Bài 12 - thực hành lập trình cơ sở
subtitle: In thời khóa biểu
category:
  - thực hành lập trình cơ sở
author: Nguyễn Lan
date: 2020-09-18T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> **Bài 12**, Nhập vào số nguyên n thuộc [2,8]. Hãy cho biết môn học của bạn tương ứng với ngày thứ n trong tuần (Quy ước n = 8 là chủ nhật).

## Code:

```c++
#include<bits/stdc++.h>
using namespace std;
int main()
{
	//bai 12 - fithou.netlify.app - Nguyen Lan
    int n;
    cout<<"Nhap n: ";cin>>n;
    switch(n)
    {
        case 2: cout<<"\nThu 2 hoc toan";break;
        case 3: cout<<"\nThu 3 hoc van";break;
        case 4: cout<<"\nthu 4 hoc tieng anh";break;
        case 5: cout<<"\nthu 5 hoc tin dai cuong";break;
        case 6: cout<<"\nthu 6 hoc lap trinh";break;
        case 7: cout<<"\nthu 7 hoc co so du lieu";break;
        case 8: cout<<"\nchu nhat nghi";break;
        default: cout<<"khong hop le";
    }
	return 0;
}
```

## Dữ liệu test:

![](https://i.ibb.co/2PP6PW4/image.png)