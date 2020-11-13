---
title: Bài 30 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Hùng k19
date: 2020-10-23
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 30** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:
```c++
#include<bits/stdc++.h>
using namespace std ;
int snt(int n)
{
	for(int i=2;i<=sqrt(n);i++)
		if(n%i==0)
			return 0;
		return 1;
}
int main()
{
	int n,dem=0,tong=0;
	cout<<"nhap so n: ";
	cin>>n;
	if(n<2)
		cout<<"khong la so nguyen to"<<endl;
	else {
		if(snt(n))
			cout<<n<<" la so nguyen to"<<endl;
		else
			cout<<n<<" khong la so nguyen to"<<endl;
	}
	for(int i=2;i<n;i++)
		if(snt(i))
		tong+=i;
	cout<<"\ntong cac so nguyen to nho hon "<<n<<" la: "<<tong;
}

```