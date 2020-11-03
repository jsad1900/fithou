---
title: Bài 27 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Hùng k19
date: 2020-09-26T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 27: ** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include<bits/stdc++.h>
using namespace std ;
int main()
{
	int k,n,i=0,dem=0;
	char d[50][100];
	
	cout<<"ban can bai tho bao nhieu cau: ";
	cin>>n;
	while(i<n)
	{
		gets(d[dem]);
		if(strlen(d[dem])>0)
		i++;//dem so dong tho
		dem++;//dem so dong thuc
		
	}
	cout<<"ban muon hien kho thu may(1<=k<=n): ";
	cin>>k;
	puts(d[k]);
	cout<<"\n"<<dem;
	cout<<"\n"<<i;
}

```