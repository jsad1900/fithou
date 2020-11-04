---
title: Bài 22 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-10-22
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 22**.

![](https://i.ibb.co/Sv0RWGk/image.png)

## Ý tưởng

Giả sử có ma trận a nhập vào, ta có -1 tương ứng với ô trống, 1 tương ứng "X", 0 tương ứng với "O".

Với mỗi trường hợp của a[i][j], ta xét đường chéo, đường dọc, đường ngang với a[i][j]. Nếu thỏa mãn chiều dài các đoạn đó >=5 thì dừng và xuất ra, ngược lại nếu không có đoạn nào thỏa mãn thì in ra là hòa.

Bạn có thể thử đổi các vị trí ma trận để xem kết quả. Thuật toán được sử dụng gọi là quay lui hoặc duyệt trâu!

## Code:

```c++
#include <iostream>

using namespace std;

int main() {
    // ma tran 7*8
    int a[][8] = {
            {1, 0, 1,-1, 1,-1, 0, 1},
            {1, -1,-1,-1, 1,-1, 1, 1},
            {0, 0, 1,-1, 1, 0, 1, 1},
            {1, 0, 0, 1, 0,-1, 0, 1},
            {1, 0, 1, 1, 0,-1, 0, 0},
            {0, 0, 0,-1, 1, 1, 0, 1},
            {0, 0, 0, 1, 0,-1, 1, 1},
    };
    int l;
    int n = 7, m =8;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){

            int aa =0, bb=0, cc=0;
            int x=-1;
            if(a[i][j]==0)
                x = 1;
            else if(a[i][j]==1)
                x = 0;
            l =0;
            for(int k =i; k<n; k++){
                if(a[k][j]==-1 || a[k][j] == x)
                    break;
                aa++;
            }

            for(int k =j; k<m; k++){
                if(a[i][k]==-1 || a[i][k] == x)
                    break;
                bb++;
            }

            int q=i, k = j;
            while(q!=n && k!=m){
                if(a[q][k]==-1 || a[q][k] == x)
                    break;
                cc++;
                q++; k++;
            }
            if((aa>=5 || bb>=5 || cc>=5) && x!=-1){
                if(x==1)
                    cout<<"O thang"<<endl;
                else
                    cout<<"1 thang"<<endl;
                return 0;
            }
        }
    }
    cout<<"Ket qua hoa";
    return 0;
}
```

## Kết quả test

![](https://i.ibb.co/4Td3K8t/image.png)