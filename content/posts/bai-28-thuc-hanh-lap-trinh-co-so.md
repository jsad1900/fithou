---
title: Bài 28 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Hùng k19
date: 2020-09-26T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 28: ** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include<bits/stdc++.h>
using namespace std ;
int main() 
{
	char a[100];
	int i,l,j,lb;
	cout<<"xin hay nhap chuoi: ";
	gets(a);
	l=strlen(a);
	for(i=0;i<l;i++)
	{
		if((a[i]==' ')&&(a[i+1]==' '))
		{
			for(j=i;j<l;j++)
				a[j]=a[j+1];
			l--;
			i--;
		}
	}
	cout<<"Chuoi sau khi ki tu trong thua la: ";
	puts(a);
	for(i=0;i<l;i++)
	{
		if(a[i]!=' '&&a[i]!='\0')
			b[j++] = a[i];
		else
		{
			
			
		}
	}
}

```