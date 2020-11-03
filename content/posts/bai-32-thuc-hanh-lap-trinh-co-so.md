---
title: Bài 32 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Hùng k19
date: 2020-09-27T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 32** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:
```c++
#include<bits/stdc++.h>
using namespace std;
void caesar(char str[], int k);
int main()
{
	int k;
	char str[100];
	cout<<"nhap chuoi ki tu: ";
	cin>>str;
	cout<<"\nnhap k: ";
	cin>>k;
	cout<<"\nchuoi ki tu sau ma hoa la: ";
	caesar(str,k);
}
void caesar(char str[], int k)
{
	int gtmh;
	for(int i=0;i<strlen(str);i++)
	{
		gtmh=((int)str[i]-97+k) % 26+97;
		cout<<(char)gtmh;
	}
}

```