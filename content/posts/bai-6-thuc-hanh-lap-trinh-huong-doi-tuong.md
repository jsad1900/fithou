---
title: Bài 6 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-13T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---
> Bài 6, Cho mô tả lớp congNhan(Công nhân) như sau:  
>- lcb/float (lương cơ bản)  
>- hsl/float(hệ số lương)  
>- hoten/Srting(Họ tên)  
>- setHsl(h:float):void  
>- getHsl(): float  
>- setHoten(ht:String):void  
>- getHoten(): String  
>- tinhLuong(): Float// Tính lương  
>
> Trong đó, phương thức tinhluong() hoạt động theo công công thức sau:  
>- luong = lcb\*hsl  
> **Viết chương trình:**  
> 
> *   Xây dựng lớp congNhan theo mô tả trên
> 
> *   cài đặt lương cơ bản của công nhân = 1150
> 
> *   Nhập danh sách n công nhân (0<n<20)
> 
> *   Hiện danh sách vừa nhập ra màn hình với thông tin mỗi công nhân gồm: Họ tên, Hệ số lương, Lương.
> 
> *   Nhập vào số thực S.
> 
> *   Hiện danh sách công nhân có lương >S

### Code đầy đủ:
------------

[Bài 6.zip](https://bit.ly/2GKtkdt)  

pass giải nén: `fithou.netlify.app`

### Code từng phần:  
-----------------

#### Tạo class `CONGNHAN.java` để quản lý thông tin từng công nhân

```java
package BaiTH2.bai6;
 import  java.util.Scanner;
 public class CONGNHAN {
     public float lCB, hSL, luong;
     public String hoTen;
     public void nhapCN() {
         Scanner sc = new Scanner(System.in);
         System.out.print("Nhap vao ho ten: ");
         hoTen = sc.nextLine();
         System.out.print("Nhap vao he so luong: ");
         hSL = sc.nextFloat();
     }
     public void sethSL(float h) {
         hSL = h;
     }
     public float gethSL() {
         return hSL;
     }
     public void setHoTen(String ht) {
        hoTen= ht;
     }
     public String getHoTen() {
         return  hoTen;
     }
     public float tinhLuong(float lCB) {
         this.lCB = lCB;
         luong = hSL*lCB;
         return luong;
     }
     public void xuatCN() {
         System.out.printf("%20s%15.2f%15.2f\n", hoTen, hSL, luong);
     }
 }
```
#### Tạo class `DSCONGNHAN.java` để quản lý việc nhập, xuất của n công nhân

```java
package BaiTH2.bai6;
 import java.util.*;
 public class DSCONGNHAN {
     ArrayList<CONGNHAN> cn;
     public void nhapDS() {
         Scanner input = new Scanner(System.in);
         int i, n;
         do {
             System.out.print("\nNhap vao so cong nhan: ");
             n = input.nextInt();
         } while (n < 0 && n > 20);
         cn = new ArrayList<>(n); 
         for (i = 0; i < n; i++) {
             CONGNHAN x = new CONGNHAN();
             System.out.printf("\nNhap cong nhan thu %d\n", i + 1);
             x.nhapCN();
             x.tinhLuong(1150);
             cn.add(x);
         }
     }
     public void xuatDS() {
         System.out.println("Danh sach cong nhan: \n");
         System.out.printf("%20s%15s%15s","Ho ten","HS luong", "luong\n");
         for(CONGNHAN x:cn){
             x.xuatCN();
         }
     }
     public void luongS() {
         float S;
         Scanner sc = new Scanner(System.in);
         System.out.print("\nNhap vao luong S can in danh sach: ");
         S = sc.nextFloat();
         System.out.printf("\nDanh sach cong nhan luong tren %f: \n", S);
         System.out.printf("%20s%15s%15s","Ho ten","HS luong", "luong");
         for(CONGNHAN x:cn) {
             if(x.luong > S) {
                 x.xuatCN();
             }
         }
     }
 }
```

#### class `QLCONGNHAN.java` chứa hàm main() 

```java
package TH2.bai6;

public class QLCONGNHAN {
    public static void main(String... baithuchanh){
        DSCONGNHAN  ds= new DSCONGNHAN();
        ds.nhapDS();
        ds.xuatDS();
        ds.luongS();
    }
}

```

Tải code chi tiết ở đầu bài

Kết quả test
------------

[![](https://1.bp.blogspot.com/-L0tN3WQrQ9g/XnDMxCn8bRI/AAAAAAAAdws/ffeeeBWKPdotZXUhTx5_w5D2Ccopp3TLQCLcBGAsYHQ/d/2020-03-17_201218.jpg)](https://1.bp.blogspot.com/-L0tN3WQrQ9g/XnDMxCn8bRI/AAAAAAAAdws/ffeeeBWKPdotZXUhTx5_w5D2Ccopp3TLQCLcBGAsYHQ/s1600/2020-03-17_201218.jpg)