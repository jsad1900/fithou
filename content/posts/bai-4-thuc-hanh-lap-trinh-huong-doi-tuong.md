---
title: Bài 4 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-15
featureImage: /uploads/baiviet/java.png
---

> **Bài 4,** Cho thông tin học sinh gồm: Mã số học sinh, Họ tên, lớp, số tiền ăn bán trú. Viết chương trình theo hướng đối tượng để quản lý danh sách Học sinh với các yêu cầu sau:  
> 
> *   Nhập danh sách học sinh
> 
> *   In lại danh sách học sinh
> 
> *   Tính tổng tiền ăn bán trú của tất cả học sinh (tiền bán trú = số buổi ăn bán trú\*30000)
> 
> *   Sắp xếp học sinh theo thứ tự tăng dần của tiền ăn bán trú
> 
> *   Thực hiện in danh sách tên các học sinh có buổi ăn bán trú trên 20 buổi.

### Code: 

  

Bài này được viết lúc mình chưa được học arraylist, nên sử dụng constructor

```java
package BaiTH2;
 import java.util.Scanner;
 // https://fithou.netlify.app/
 public class bai4 {
     private String maHS, hoTen, lop;
     private int  tienAn, buoiAn;
     public void nhap() {
         Scanner sc = new Scanner(System.in);
         System.out.print("Nhap ho ten: ");
         hoTen = sc.nextLine();
         System.out.print("Nhap ma hoc sinh: ");
         maHS = sc.nextLine();
         System.out.print("Nhap lop hoc sinh: ");
         lop = sc.nextLine();
         System.out.print("Nhap so buoi an: ");
         buoiAn = sc.nextInt();
         tienAn = buoiAn*30000;
     }
     public void xuat() {
         System.out.printf("\n%15s%15s%10s%10d%10d", hoTen, maHS, lop, buoiAn, tienAn);
     }
 
     public static void nhapDS(int n, bai4[] hs) {
         Scanner sc = new Scanner(System.in);
         for(int i=0; i<n; i++) {
             hs[i] = new bai4();
             System.out.println("Nhap thong tin hoc sinh thu "+ (i+1));
             hs[i].nhap();
         }
     }
     public static void xuatDS(int n, bai4[] hs) {
         System.out.printf("\n%15s%15s%10s%10s%10s", "Ho ten", "Ma hoc Sinh", "lop", "buoi An", "tien An");
         for(int i=0; i<n; i++) {
             hs[i].xuat();
         }
     }

     public static void tongTien(int n, bai4[] hs) {
         int tong =0;
         for(int i=0; i<n; i++) {
             tong+= hs[i].tienAn;
         }
         System.out.println("\nTong tien an cua cac hoc sinh la: "+tong);
     }
   
     public static void sapxep(int n, bai4[] hs) {
         bai4 tg = new bai4();
         for(int i=0; i<n; i++) {
             for(int j=i+1; j<n; j++) {
                 if(hs[i].tienAn > hs[j].tienAn) {
                   tg = hs[i];
                   hs[i] = hs[j];
                   hs[j] = tg;
                 }
             }
         }
         System.out.println("\nDanh sach sau khi sap xep tien tang dan:");
         xuatDS(n, hs);
     }
     
     public static void an20(int n, bai4[] hs) {
         System.out.println("\nDanh sach hoc sinh co buoi an tren 20 la:");
         System.out.printf("%15s%15s%10s%10s%10s", "Ho ten", "Ma hoc Sinh", "lop", "buoi An", "tien An");
         for(int i=0; i<n;i++) {
             if(hs[i].buoiAn > 20) {
                 System.out.printf("\n%15s%15s%10s%10d%10d", hs[i].hoTen, hs[i].maHS, hs[i].lop, hs[i].buoiAn, hs[i].tienAn);
             }
         }
     }
     public static void main(String ngocdanh[]) {
         int n;
         Scanner sc = new Scanner(System.in);
         System.out.print("Nhap vao so luong hoc sinh: ");
         n = sc.nextInt();
         bai4[] hs = new bai4[n];
         nhapDS(n, hs);
         xuatDS(n, hs);
         tongTien(n, hs);
         sapxep(n, hs);
         an20(n, hs);
     }
 }
```

### Dữ liệu test

### [![](https://1.bp.blogspot.com/-eId9BF-Srwo/XklRB9xLr9I/AAAAAAAAc9s/kGvMFBCVPeU5CrWH1AYg3Aq8LyjrvEp8wCLcBGAsYHQ/s1600/2020-02-16_210422.jpg)](https://1.bp.blogspot.com/-eId9BF-Srwo/XklRB9xLr9I/AAAAAAAAc9s/kGvMFBCVPeU5CrWH1AYg3Aq8LyjrvEp8wCLcBGAsYHQ/s1600/2020-02-16_210422.jpg)