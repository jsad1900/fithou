---
title: Bài 3 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-10T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

> Bài 3, Lập trình tính diện tích tam giác theo công thức Heron

#### Code:

```java
import java.util.Scanner;
//https://fithou.netlify.app/
public class Bai3 {
    public static void main(String arg[]) {
        float a, b, c;
        float p, cv;
        Scanner input = new Scanner(System.in);
        System.out.print("Nhap vao gia tri a: ");
        a = input.nextInt();
        System.out.print("Nhap vao gia tri b: ");
        b = input.nextInt();
        System.out.print("Nhap vao gia tri c: ");
        c = input.nextInt();
        p = (a + b + c) / 2;
        cv = (float) Math.sqrt(p * (p - a) * (p - b) * (p - c));
        if (a + b > c && a + c > b && b + c > a) {
            System.out.print("Dien tich tam giac la: " + cv);
        } else {
            System.out.print("3 canh nhap khong phai cua mot tam giac");
        }
    }
}
```

#### Dữ liệu test:

[![](https://1.bp.blogspot.com/-M40TMm_4pRU/XhXhUKJgX5I/AAAAAAAAbtk/8d51PQstjnMkyTUOHO9ciVuhfmQG3tAawCLcBGAsYHQ/s1600/3.1.png)](https://1.bp.blogspot.com/-M40TMm_4pRU/XhXhUKJgX5I/AAAAAAAAbtk/8d51PQstjnMkyTUOHO9ciVuhfmQG3tAawCLcBGAsYHQ/s1600/3.1.png)