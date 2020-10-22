---
title: Bài 7 - thực hành lập trình cơ sở
subtitle: Kiểm tra năm nhuận
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-12
featureImage: /uploads/baiviet/cpp.png
---

> Bài 7, Năm nhuận là năm có tháng 2 gồm 29 ngày, để xét 1 năm có phải là năm nhuận hay không người ta kiểm tra bằng cách xem năm đó có chia hết cho 4 đồng thời không chia hết cho 100 hoặc năm đó chia hết cho 400 hay không? Hãy viết chương trình nhập vào một năm. Hiện ra đáp án xem năm đó có phải năm nhuận hay không?

## Code:  

```c++
#include <iostream>
 
using namespace std;
 
int main(int argc, char** argv) {
	//bai 7
	int n;
	cout<<"Moi ban nhap vao nam can tra: "; cin>> n;
	if(n%4 == 0 && n%100 != 0 || n%400 == 0) {
		cout<<"Nam "<<n<<" la nam nhuan";
	}
	else {
		cout<<"Nam "<<n<<" khong phai la nam nhuan";
	}
	return 0;
}
```

## Dữ liệu test:  

[![](https://1.bp.blogspot.com/-av7fSvT7bPM/XhjcX5w-aGI/AAAAAAAAb34/XnTnYPqfG-4HG0JyYICUomFYhXzvspxNgCLcBGAsYHQ/s1600/b71.png)](https://1.bp.blogspot.com/-av7fSvT7bPM/XhjcX5w-aGI/AAAAAAAAb34/XnTnYPqfG-4HG0JyYICUomFYhXzvspxNgCLcBGAsYHQ/s1600/b71.png)

[![](https://1.bp.blogspot.com/-gniqqUf9A9M/XhjcXxsLHHI/AAAAAAAAb38/LqxgwiF4RUst2sXtbRVHpDRwjexrlYvkwCLcBGAsYHQ/s1600/b72.png)](https://1.bp.blogspot.com/-gniqqUf9A9M/XhjcXxsLHHI/AAAAAAAAb38/LqxgwiF4RUst2sXtbRVHpDRwjexrlYvkwCLcBGAsYHQ/s1600/b72.png)