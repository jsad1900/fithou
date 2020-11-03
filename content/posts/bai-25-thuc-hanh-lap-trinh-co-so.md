---
title: Bài 25 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Hùng k19
date: 2020-09-26T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 25: ** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include<bits/stdc++.h>
using namespace std ;
int main()
{
	char a[50],x[1],y[1];
	cout<<"nhap chuoi ki tu: ";
	cin>>a;
	cout<<endl;
	cout<<"nhap ki tu x: ";
	cin>>x[0];
	cout<<"nhap ki tu y: ";
	cin>>y[0];
	int l=strlen(a);
	cout<<"ki tu "<<x[0]<<" xuat hien o vi tri:";
	for(int i=0;i<l;i++)
		if(a[i]==x[0])
			cout<<setw(5)<<i+1;
	cout<<endl;
	cout<<"chuoi sau khi thay ki tu "<<x[0]<<" bang ki tu"<<y[0]<<" la: ";
	for(int i=0;i<l;i++)
		if(a[i]==x[0])
			a[i]=y[0];
	for(int i=0;i<l;i++)
		cout<<a[i];
}

```