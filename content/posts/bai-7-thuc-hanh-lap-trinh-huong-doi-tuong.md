---
title: Bài 7 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-15
featureImage: /uploads/baiviet/java.png
---

> Bài 7, Cho lớp DIEM (điểm) để mô tả một điểm trong không gian gồm:  
> 
> *   Thuộc tính: x, y (Tọa độ trong không gian)
> 
> *   Phương thức: Khởi tạo( Không có tham số, có tham số), nhập, xuất,tính chiều dài, ...
> 
> Xây dựng lớp DOAN THANG(đoạn thẳng) gồm:  
> 
> *   Thuộc tính: A(điểm đầu), B(điểm cuối)
> 
> *   Phương thức: Khởi tạo(Không có tham số, có tham số), nhập, xuất, tính chiều dài,...
> 
> Áp dụng:  
> 
> *   Nhập vào danh sách các DOANTHANG
> 
> *   In lại danh sách  các DOANTHANG vừa nhập
> 
> *   cho biết thông tin DOANTHANG có độ dài lớn nhất
> 
> *   Tính tổng các độ dài tất cả các đoạn thẳng đã nhập

### Mô tả bài toán

Với yêu cầu bài toán, ta lần lượt tạo các class:

*   DIEM: để quản lý điểm. VD điểm A(x, y)
*   DOAN THANG: để quản lý các đoạn thẳng ( mỗi đường thẳng chứa 2 điểm)
*   DSDOANTHANG: Quản lý các đoạn thẳng . VD: cần quản lý n đoạn thẳng 
*   QLDOANTHANG: Chứa hàm main() để gọi các hàm khác vào.

### code

#### class `DIEM.java`

```java
package BaiTH3.bai7;
 import java.util.Scanner;
 public class DIEM {
     public float x, y;
     public DIEM() {
         x =0;
         y = 0;
     }
     public DIEM(float x, float y) {
         this.x = x;
         this.y = y;
     }
     public void nhap() {
         Scanner sc = new Scanner(System.in);
         System.out.print("Nhap chieu rong x: ");
         x = sc.nextFloat();
         System.out.print("Nhap chieu dai y: ");
         y = sc.nextFloat();
     }
     public void xuat() {
         System.out.print("\nChieu rong x la: "+x);
         System.out.print("\nChieu dai y la: "+y+"\n");
     }
     public float getX() {
         return x;
     }
     public float getY() {
        return y;
     }
     public String toString() {
         return "\nChieu dai:" +y +"\nChieu rong: "+x;
     }
 }
```

#### class `DOANTHANG.java`

```java
package BaiTH3.bai7;
 public class DOANTHANG {
     DIEM A = new DIEM();
     DIEM B = new DIEM();
     public void nhapDT() {
         System.out.print("\nNhap toa  do doan thang:");
         System.out.print("\nNhap toa do diem A:\n");
         A.nhap();
         System.out.print("\nNhap toa do diem B:\n");
         B.nhap();
     }
     public void xuatDT() {
         System.out.print("\nToa do diem A: ");
         A.xuat();
         System.out.print("Toa do diem B: ");
         B.xuat();
         System.out.print("chieu dai doan AB: "+tinhCD()+"\n");
     }
     public float  tinhCD(){
         float cd;
         cd = (float)Math.pow((A.x - B.x), 2)+ (float)Math.pow((A.y - B.y), 2);
         cd = (float)Math.sqrt(cd);
         return cd;
     }
 }
```

#### class `DSDOANTHANG.java`

```java
package BaiTH3.bai7;
 import java.util.*;
 public class DSDOANTHANG {
     ArrayList<DOANTHANG> DT;
     public void nhapDS() {
         Scanner sc = new Scanner(System.in);
         int n;
         System.out.print("Nhap so doan thang: ");
         n = sc.nextInt();
         DT = new ArrayList<>(n);
         for (int i = 0; i < n; i++) {
             DOANTHANG x = new DOANTHANG();
             x.nhapDT();
             DT.add(x);
         }
     }
     public void xuatDS() {
         System.out.print("\nDanh sach doan thang: \n");
         for(DOANTHANG x:DT){
             System.out.print("\nToa do doan thang:");
             x.xuatDT();
         }
     }
     public void tongDT() {
         float s;
         s =0;
         for(DOANTHANG x:DT){
             s+= x.tinhCD();
         }
         System.out.print("\nTong chieu dai doan thang: "+s);
     }
     public void maxDT() {
         float max;
         max = 0;
         for(DOANTHANG x:DT){
             if(max<x.tinhCD()){
                 max = x.tinhCD();
             }
         }
         System.out.print("\nDoan thang dai nhat co do dai: "+max);
     }
 }
```

#### class `QLDOANTHANG.java`

Các bạn gọi các hàm tương ứng vào hàm main(). 

### Dữ liệu test

[![](https://1.bp.blogspot.com/-71DpUHCjeD0/Xm914T06uaI/AAAAAAAAduQ/NNzYhZd8tNE7AluB-ZPK_Fr_SDyziRP5ACLcBGAsYHQ/s1600/2020-03-16_194908.jpg)](https://1.bp.blogspot.com/-71DpUHCjeD0/Xm914T06uaI/AAAAAAAAduQ/NNzYhZd8tNE7AluB-ZPK_Fr_SDyziRP5ACLcBGAsYHQ/s1600/2020-03-16_194908.jpg)

  

Thắc mắc hãy để lại comment để mình giải đáp nhé!