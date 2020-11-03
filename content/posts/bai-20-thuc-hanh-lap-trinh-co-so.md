---
title: Bài 20 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Đạt k20
date: 2020-10-22
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 20: ** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include <iostream>
using namespace std;
int main()
{
	float a[100];
	int i=1, n=0;
	//Nhap
	cout << "Nhap day khong qua 100 phan tu. Nhan 0 de ket thuc day.\n";
	do
	{
		cout << "Nhap phan tu thu " << i << ": "; 
		cin >> a[i];
		if (a[i]==0) break;
		i++;
	}
	while (i<=100);
	n=i-1;
	//Xuat
	cout << "\n\n\nDay ban vua nhap la: ";
	for (i=1; i<=n; i++) cout << a[i] << " ";
	//Tong khong am va trung binh cong
	int tongkam=0, tongam=0, demam=0;
	for (i=1; i<=n; i++)
		if (a[i]>=0) tongkam+=a[i];
		else 
		{
			tongam+=a[i];
			demam++;
		}
	cout << "\nTong cac phan tu khong am trong mang: " << tongkam;
	if (demam==0) cout << "\nKhong co so am nao trong mang";
	else cout << "\nTrung binh cong cac phan tu am trong mang: " << (float)tongam/demam;
	//Sap xep giam dan
	int j, tg;
	for (i=1; i<n; i++)
		for (j=i+1; j<=n; j++)
			if (a[i]<a[j])
			{
				tg=a[i];
				a[i]=a[j];
				a[j]=tg;
			}
	cout << "\nDay sau khi sap xep theo trat tu giam dan la: ";
	for (i=1; i<=n; i++) cout << a[i] << "  ";
	//Giam chan 10%
	for (i=1; i<=n; i++)
		if (i%2==0) a[i]=(float)a[i]*0.9;
	cout << "\nDay sau khi thuc hien giam gia tri chan 10% la: ";
	for (i=1; i<=n; i++) cout << a[i] << "  ";
	//Xoa vi tri le
	cout << "\nDay sau khi xoa cac phan tu o vi tri le la: ";
	for (i=2; i<=n; i+=2) cout << a[i] << "  ";
	return 0;
}

```

>Thắc mắc xin trao đổi [Duy Đạt](https://www.facebook.com/duydat2002/)