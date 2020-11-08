---
title: Bài 17 - thực hành lập trình cơ sở
subtitle: Bài tập về mảng
category:
  - thực hành lập trình cơ sở
author: Đạt k20
date: 2020-10-21
featureImage: /uploads/baiviet/cpp.png
---

> Bài 17, Hãy viết chương trình nhập vào dãy số đến khi gặp số 0 thì dừng, sau đó tách số chẵn và lẻ ra 2 mảng khác nhau. Tính trung bình cộng các số chẵn dương và các trung bình cộng các số lẻ âm.

>Thắc mắc bài 17 xin trao đổi [Duy Đạt](https://www.facebook.com/duydat2002/)

## Code:

```c++
#include <iostream>
using namespace std;
int so[1000], chan[1000], le[100], i, dem, c, l, scd, sla, demcd, demla;
int main()
{
	    // bai 17 - fithou.netlify.app - @Dat
	i=0;
	so[0]=1;
	while (so[i]!=0)
	{
		i++;
		cout << "Nhap phan tu thu " << i << " cua day: ";
		cin >> so[i];
	}
	//in day
	dem=i-1;
	cout << "Day ban vua nhap la:             ";
	for (i=1; i<=dem; i++) cout << "   " << so[i];
	//tach
	c=0; l=0; demcd=0; demla=0; scd=0; sla=0;
	for (i=1; i<=dem; i++)
		if (so[i]%2==0)
		{
			c++;
			chan[c]=so[i];
			if (chan[c]>0)
			{
				demcd++;
				scd+=chan[c];
			}
		}
		else
		{
			l++;
			le[l]=so[i];
			if (le[l]<0)
			{
				demla++;
				sla+=le[l];
			}
		}
	//in day chan le
	cout << "\nDay cac so chan ban vua nhap la: ";
	for (i=1; i<=c; i++) cout << "   " << chan[i];
	cout << "\nDay cac so le ban vua nhap la:   ";
	for (i=1; i<=l; i++) cout << "   " << le[i];
	cout << "\nTrung binh cong cac so chan duong cua day la: " << (float)scd/demcd;
	cout << "\nTrung binh cong cac so le am      cua day la: " << (float)sla/demla;
	return 0;
}

```
