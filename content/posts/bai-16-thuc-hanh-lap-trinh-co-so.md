---
title: Bài 16 - thực hành lập trình cơ sở
subtitle: Tìm n thỏa mãn
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-22T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---

> Bài 15, số pi theo công thức Euler:
> `pi^2/6 = 1/1^2 + 1/2^2+... + 1/n^2` dừng khi `1/n^2<10^-6`
>Tìm n để tính


### Thuật toán: 

> Ta có `1/n^2 <10^-6` tương đương với `n^2<10^6`. Vậy chỉ cần dùng while, chạy và tìm ra `n = 1000`

### Code:

```c++
#include <iostream>
#include <math.h>

using namespace std;

int main(){
	// bai 16 -fithou.netlify.app - @NgocDanh
	int n=1;
	float m = pow(10, 6);
	while(n*n<m){
		n++;
	}
	cout<<"n la: "<<n<<endl;
	return 0;
}
```

### Dữ liệu test:

![](https://i.ibb.co/WGsSpbH/image.png)