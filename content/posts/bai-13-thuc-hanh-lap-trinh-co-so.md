---
title: Bài 13 - thực hành lập trình cơ sở
subtitle: Kiểm tra số hoàn thiện
category:
  - thực hành lập trình cơ sở
author: Văn Trường
date: 2020-10-21
featureImage: /uploads/baiviet/cpp.png
---

> **Bài 13** (TH-CSLT-03): Một số hoàn thiện là một số có tổng các ước của nó (không kể nó) bằng chính nó. Hãy nhập vào một số nguyên dương n và kiểm tra xem n có phải là số hoàn thiện không.
>
>Ví dụ: số `6` là số hoàn thiện và tổng các ước số là `1+2+3 = 6`.

## Lưu ý:

- Xác định những số chia hết cho `n` nhập vào. Chỉ cần xét từ `1` đến `n`. Ngoài ra có thể xét `n/2` hoặc `sqrt(n)` để tối ưu bài toán hơn.

## Code:

```c++
#include<iostream>
using namespace std;
int main(){
	//bai 13 - fithou.netlify.app - Van Truong
	int n,  sum = 0;
	cout << "Nhap n = ";
	cin >> n;
	for(int i = 1; i <= n/2; i++){
	    if(n%i==0)
	       sum = sum + i;
    }
	if(sum == n)
	   cout << "\nSo "<<n<<" la so hoan thien";
	else{
	   cout << "\nSo "<<n<<" khong la so hoan thien";
	}
	return 0;
}
```

## Dữ liệu test:

![](https://i.ibb.co/JsBV1xD/image.png)

![](https://i.ibb.co/gtc9RXH/image.png)