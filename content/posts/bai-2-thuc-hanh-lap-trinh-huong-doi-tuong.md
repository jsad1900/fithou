---
title: Bài 2 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-09T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

> Bài 2, Viết chương trình nhập vào số nguyên n và thực hiện xuất ra màn hình n số đầu tiên của chuỗi Fibonaci( Có hai giá trị đầu là 1 và 1)

### Code:
```java
import java.util.Scanner;
public class Bai2 {
    public static void main(String arg[]) {
        int n, i, a[] = new int[30];
        a[0] = 1;
        a[1] = 1;
        Scanner input = new Scanner(System.in);
        System.out.print("Nhap vao n: ");
        n = input.nextInt();
        for (i = 2; i < n; i++) {
            a[i] = a[i - 1] + a[i - 2];
        }
        System.out.println("Day so fibonacy: ");
        for (i = 0; i < n; i++) {
            System.out.printf("%5d", a[i]);
        }
    }
}
```
### Dữ liệu test:

[![](https://1.bp.blogspot.com/-eUaphulP_F4/XhXd7XVCzGI/AAAAAAAAbtU/1goG-j7f3m8gTfGcPLxtmkimhMAIS83cACLcBGAsYHQ/d/2.1.png)](https://1.bp.blogspot.com/-eUaphulP_F4/XhXd7XVCzGI/AAAAAAAAbtU/1goG-j7f3m8gTfGcPLxtmkimhMAIS83cACLcBGAsYHQ/s1600/2.1.png)