---
title: Bài 15 - thực hành lập trình cơ sở
subtitle: Kiểm tra số chính phương
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-02
featureImage: /uploads/baiviet/cpp.png
---

> Bài 15, Số chính phương hay gọi là số hình vuông, là số tự nhiên có căn bậc 2 là số nguyên. Hãy viêt CT nhập vào các số nguyên đến khi gặp 0 thì dừng.


### Thuật toán: 

> Số chính phương là số có căn bậc 2 là số nguyên.  
> 
> - VD khi căn 4 sẽ ra 2 => 4 là số chính phương.  
> - Ở đây tôi sẽ khai căn một số n được nhập vào, kiểm tra nếu kết quả đó là số nguyên thì số đó là số chính phương:  
> -  Sử dụng biểu thức if(sqrt(n) - (floorf)(sqrt(n)) == 0), giải nghĩa là căn bậc 2 số đó, kiểm tra xem số đó có bằng số đó khi được làm tròn xuống hay không? Bằng nhau tức là số được khai căn là số nguyên.

### Code:

```c++
#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int n, i, dem,demDuong, S;
    float tbc;
    i = 0;
    dem = 0;
    demDuong = 0;
    S = 0;
    do
    {
        cout<<"nhap vao so n: ";
        cin>>n;
        if(n ==0 )
        {
            break;
        }
        else
        {
            if(sqrt(n) - (floorf)(sqrt(n)) == 0)
            {
                if(n%2 == 0)
                {
                    S += n;
                    demDuong++;
                }
                dem++;
            }
            i++;
        }
    }
    while( n != 0);
    //in ra so luong cac so chinh phuong
    cout<<" so luong cac so chinh phuong la: "<<dem<<endl;
 
    //trung binh cong cac so chinh phuong
    if(demDuong > 0)
    {
        tbc = S/demDuong;
        cout<<"Trung binh cong cac so chinh phuong chan la: "<<tbc;
    }
}
```

### Dữ liệu test:

[![](https://1.bp.blogspot.com/-wCnGrCiFMUc/XhsCFZ3GXyI/AAAAAAAAb-c/CQPFhMteK5INC0nbl2Yd-xihYoK_S5AegCLcBGAsYHQ/s1600/bai15-t.png)](https://1.bp.blogspot.com/-wCnGrCiFMUc/XhsCFZ3GXyI/AAAAAAAAb-c/CQPFhMteK5INC0nbl2Yd-xihYoK_S5AegCLcBGAsYHQ/s1600/bai15-t.png)