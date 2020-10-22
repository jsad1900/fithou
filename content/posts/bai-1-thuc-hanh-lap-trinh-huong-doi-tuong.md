---
title: Bài 1 - thực hành lập trình hướng đối tượng
subtitle: bài tập về mảng trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-08T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

>Bài 1, Viết chương trình nhập vào một mảng các số nguyên từ bàn phím. Thực hiện:
>- In lại các phần tử mảng đã nhập
>- Tính tổng các phần tử mảng
>- In các phần tử lẻ có trong mảng
>- Cho biết giá trị và vị trí phần tử nhỏ nhất có trong mảng

## Code:

```java
import java.util.Scanner;
public class Bai1 {
    public static void main(String arg[]) {
        int a[], n, i;
        a = new int[20];
        Scanner input = new Scanner(System.in);
        System.out.print("Nhap vao so phan tu: ");
        n = input.nextInt();
    
        for (i = 0; i < n; i++) {
            System.out.print("a[" + i + "]: ");
            a[i] = input.nextInt();
        }
    
        System.out.println("In ra cac phan tu trong mang:");
        for (i = 0; i < n; i++) {
            System.out.printf("%5d", a[i]);
        }
     
        int s;
        s = 0;
        for (i = 0; i < n; i++) {
            System.out.printf("%5d", a[i]);
            s += a[i];
        }
        System.out.printf("\nTong cac phan tu trong mang: %d", s);
        
        System.out.println("\nIn ra cac phan tu le trong mang:");
        for (i = 0; i < n; i++) {
            if (a[i] % 2 != 0) {
                System.out.printf("%5d", a[i]);
            }
        }
    
        int min = a[0];
        int vt;
        for (i = 0; i < n; i++) {
            if (min > a[i]) {
                min = a[i];
            }
        }
        System.out.print("\nPhan tu " + min + " co gia tri nho nhat tai vi tri: ");
        for (i = 0; i < n; i++) {
            if (a[i] == min) {
                System.out.printf("%5d", i + 1);
            }
        }
    }
}
```

## Dữ liệu test

![](https://1.bp.blogspot.com/-NaWKVdL6sno/XhXbWsTCdiI/AAAAAAAAbs0/e4tQUwcJ_f4piZCqii-7etEI2Qvbh7MhQCLcBGAsYHQ/s1600/2020-01-08_203806.png)