---
title: Bài 21 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-03
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 21**, Viết chương trình nhập vào mảng hai chiều các số thực. Áp dụng:  
>- In lại mảng 2 chiều phần tử dưới dạng bảng  
>- In các phần tử hàng thứ  k của mảng 2 chiều (k>=0)  
>- Tính tổng các phần tử của cột thứ v của mảng 2 chiều ( v>=0)  
>- Thực hiện tìm kiếm phần tử có giá trị x, cho biết vị trí tìm thấy đầu tiên của phần tử trong trường hợp tìm thấy

## Code:

```c++
#include <bits/stdc++.h>
using namespace std;

int main(){
	int n, m;
	cout<<"nhap so hang: ";
	cin>>n;
	cout<<"nhap so cot: ";
	cin>>m;
	int a[n+1][m+1];

	for(int i=0; i<n; i++){
		for(int j=0; j<m; j++){
			cout<<"nhap a["<<i<<"]["<<j<<"]: ";
			cin>>a[i][j];
		}
	}

	// in ra mang vua nhap
	cout<<"Mang vua nhap la:"<<endl;
	for(int i=0; i<n; i++){
		for(int j=0; j<m; j++){
			cout<<a[i][j]<<"  ";
		}
		cout<<endl;
	}
	
	//in ra hang k
	int k;
	cout<<"Nhap vao hang thu k: ";
	cin>>k;
	if(k>=n)
		cout<<"gia tri k khong hop le"<<endl;
	else {
		cout<<"in ra hang "<<k<<endl;
		for(int i=0; i<m; i++){
			cout<<a[k][i]<<"  ";
		}
		cout<<endl;

	}

	//tong cot v
	int v;
	cout<<"nhap vao cot v: ";
	cin>>v;
	if(v>=m)
		cout<<"gia tri v khong hop le"<<endl;
	else {
		int sum =0;
		for(int i=0; i<n; i++){
			sum+=a[i][v];
		}
		cout<<"tong cot "<<v<<" la: "<<sum<<endl;
	}

	// tim vi tri dau tien phan tu x
	int x;
	cout<<"nhap vao gia tri x: ";
	cin>>x;
	int i, j;
	int b,c;
	for(i=0; i<n; i++){
		for(j=0; j<m; j++){
			if(a[i][j]==x){
				b=i; c=j;
			}
		}
	}
	if(i==n-1 && j==m-1)
		cout<<"khong tim thay "<<x<<endl;
	else {
		cout<<x<<" tim thay tai hang "<<b<<" va cot "<<c<<endl;
	}

	return 0;
}
```