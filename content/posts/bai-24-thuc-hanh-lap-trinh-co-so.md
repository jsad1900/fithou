---
title: Bài 24 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Hùng k19
date: 2020-09-26T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 24: ** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include<bits/stdc++.h>
using namespace std ;
int main()
{
	int b[20][20],a[20][20],j,i=1,m=0,dem[20],h=-1,tong[20],k;
	cout<<"hay nhap mang"<<endl;
	do
	{

		j=1;
		dem[i]=-1;//gan gia tri -1 de khong dem gia tri 0
		tong[i]=0;
		do
		{

			cout<<" a["<<i<<"]["<<j<<"]: ";
			cin>>a[i][j];
			dem[i]++;//dem phan tu trong hang
			tong[i]+=a[i][j]; //tinh tong cua hang i
			j++;
		}while(a[i][j-1]!=0); //kiem tra phan tu a[i][j]=0 thi ket thuc
		i++;
		h++; //dem so hang
	}while(j-1!=1);//neu trong hang chi co 1 phan tu(phan tu 0) thi ket thuc

	cout<<"mang ban vua nhap la: "<<endl;
	for(i=1;i<=h;i++)
	{
		for(j=1;j<=dem[i];j++)
		cout<<setw(5)<<a[i][j];
		cout<<endl;//in mang
	}
	for(i=1;i<=h;i++)
		cout<<"trung binh cong cua hang "<<i<<" la: "<<setprecision(3)<<(float)tong[i]/dem[i]<<endl;
	for(i=1;i<=h;i++)
	{
		for(k=i+1;k<=h;k++)
		{
			if(dem[i]<dem[k])
			{
				swap(dem[i],dem[k]);//doi dem so hang i va i+1
				for(j=1;j<=dem[i];j++)
				{
					b[i][j]=a[k][j];
				}
			}
			else
				for(j=1;j<=dem[i];j++)
					b[i][j]=a[k][j];

		}
	}
	for(i=1;i<=h;i++)
	{
		for(j=1;j<=dem[i];j++)
		cout<<setw(5)<<b[i][j];
		cout<<endl;//in mang
	}
}


```