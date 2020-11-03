---
title: Bài 18 - thực hành lập trình cơ sở
subtitle: bài tập về số nguyên
category:
  - thực hành lập trình cơ sở
author: Đạt k20
date: 2020-10-21
featureImage: /uploads/baiviet/cpp.png
---

> Bài 18, Nhập vào từ bàn phím dãy số gồm n số nguyên ( n>0) và thực hiện các yêu cầu sau đây:
> 
> *   Hiển thị dãy số ra màn hình
> 
> *   Nhập vào từ bàn phím số nguyên x. Hãy cho biết x xuất hiện trong dãy số bao nhiêu lần và vị trí xuất hiện của x
> 
> *   xóa các số có giá trị bằng 0 trong dãy
> 
> *   sắp xếp các số nguyên tố về đầu dãy, các số không nguyên tố về cuối  dãy
> 
> *   Tính trung bình cộng các số chia hết cho 3 trong dãy

## Code:

```c++
#include <iostream>
#include <math.h>
using namespace std;

void xoa(int a[], int &n, int vt)
{
	for (int i=vt; i<=n; i++) a[i]=a[i+1];
	n--;
}

int main()
{
	int n;
	cout << "Nhap so phan tu cua day: "; cin >> n;
	if (n<=0) cout << "Nhap sai. n phai lon hon 0";
	else
	{
		int a[n];
		for (int i=1; i<=n; i++)
		{
			cout << "Nhap phan tu thu " << i << " cua mang: ";
			cin >> a[i];
		}
		system("cls");
		//a)
		cout << "Day ban vua nhap la: ";
		for (int i=1; i<=n; i++) cout << "   " << a[i];
		//b)
		int x;
		cout << "\nNhap x: "; cin >> x;
		int demx=0;
		for (int i=1; i<=n; i++) 
			if (a[i]==x) demx++; 
		if (demx==0) cout << "x khong xuat hien trong day so";
		else 
		{
			cout << "x xuat hien trong day so " << demx << " lan." << endl << "Cac vi tri cua x xuat hien trong day la: ";
			for (int i=1; i<=n; i++)
				if (a[i]==x) cout << "   " << i;
		}
		//c)
		for (int i=1; i<=n; i++) 
			if (a[i]==0) xoa(a,n,i);
		cout << "\nDay sau khi xoa so 0 la: ";
		for (int i=1; i<=n; i++) cout << "   " << a[i];
		//d)
		//chia day
		int snt=0, knt=0, b[100], c[100];
		for (int i=1; i<=n; i++) 
			switch (a[i])
			{
				case 1: knt++; b[knt]=a[i]; break;
				case 2: snt++; c[snt]=a[i]; break;
				default: 
				bool check=true;
				for (int j=2; j<=sqrt(a[i]); j++) 
					if (a[i]%j==0) check=false;
				if (check==true) c[++snt]=a[i];
				else b[++knt]=a[i];
			}
		//Cach 1
		//hop day
		for (int i=1; i<=snt; i++) a[i]=c[i];
		int j=0;
		for (int i=snt+1; i<=n; i++) a[i]=b[++j];
		//xuat day
		cout << "\nd) Day sau khi sap xep; ";
		for (int i=1; i<=n; i++) cout << "   " << a[i];
		//Cach 2
		cout << "\nd) Day sau khi sap xep; ";
		for (int i=1; i<=snt; i++) cout << "   " << c[i];
		for (int i=1; i<=knt; i++) cout << "   " << b[i];
		//e)
		int dem=0, tong=0;
		for (int i=1; i<=n; i++) 
			if (a[i]%3==0) 
			{
				dem++;
				tong+=a[i];
			}
		cout << "\ne) Trung binh cong cac so chia het cho 3 co trong day la: " << (float)tong/dem;
	}
	return 0;
}

```

>Thắc mắc xin trao đổi [Duy Đạt](https://www.facebook.com/duydat2002/)