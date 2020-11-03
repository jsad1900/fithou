---
title: Bài 26 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Hùng k19
date: 2020-09-26T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 26: ** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include<bits/stdc++.h>
using namespace std ;
int main()
{
	char x[30],strl[100],*s;
	cout<<"nhap chuoi ki tu: ";
	gets(strl);
	cout<<"\nban muon cat chuoi o tren bat dau tu dau: ";
	gets(x);
	s=strstr(strl,x);
	if(s!=NULL)
		cout<<"\nchuoi sau khi cat la: "<<s;
	else
		cout<<"\nkhong tim thay chuoi '"<<x<<"' o chuoi ban dau";
}

```