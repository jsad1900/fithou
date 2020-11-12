---
title: Bài 23 - thực hành lập trình cơ sở
subtitle: bài tập thực hành ngôn ngữ C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-10-22
featureImage: /uploads/baiviet/cpp.png
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

---

### Code: 

```c++
#include <iostream>
#include <iomanip>
using namespace std;

void nhap(int arr[][100], int n){
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cout<<"nhap arr["<<i<<"]["<<j<<"]: ";
            cin>>arr[i][j];
        }
    }
}

void hien(int arr[][100], int n){
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cout<<arr[i][j]<<setw(3);
        }
        cout<<endl;
    }
}

int tichK(int arr[][100], int n, int k){
    k--;
    int tich =1;
    for(int i=0; i<n; i++){
        tich = tich*arr[k][i];
    }
    return tich;
}

int hangNN(int arr[][100], int n){
    int min =INT_MAX; // do lon toi da cua int
    int k;
    for(int i=0; i<n; i++){
        int tong =0;
        for(int j=0; j<n; j++){
            tong = tong + arr[i][j];
        }
        if(tong <min){
            min = tong;
            k = i;
        }
    }
    return k+1;
}

int checkAm(int arr[][100], int n){
    int check =0;
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            if(arr[i][j]<0)
                check++;
        }
    }
    return check;
}

void sapXep(int arr[][100], int n){
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            for(int k=j; k<n; k++){
                if(arr[j][i]<arr[k][i])
                    swap(arr[j][i], arr[k][i]);
            }
        }
    }
}

int main() {
    int n;
    cout<<"Nhap n: ";
    cin>>n;

    int arr[100][100];

    //nhap mang hai chieu
    nhap(arr, n);

    //xuat mang hai chjeu
    cout<<"Hien mang vua nhap"<<endl;
    hien(arr, n);

    //tich hang k
    int k;
    do {
        cout<<"Nhap vao hang k";
        cin>>k;
    } while(k<=0 || k>n);
    cout<<"Tich hang "<<k<<" la: "<<tichK(arr, n, k)<<endl;

    // tong hang nho nhat
    cout<<"Tong hang nho nhat la: "<<hangNN(arr, n)<<endl;

    //phan tu am
    cout<<"Phan tu am trong mang la:"<<checkAm(arr, n)<<endl;

    // sap xep theo cot
    sapXep(arr,n);
    cout<<"Hien mang sau khi sap xep cot"<<endl;
    hien(arr, n);

    return 0;
}
```