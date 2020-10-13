---
title: Bài 5 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-12T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

> Bài 5, Viết chương trình tính diện tích, chu vi hình chữ nhật.  
> Hãy viết lớp HCN gồm:  
> Các thuộc tính chiều dài, chiều rộng  
> Phương thức thiết lập (set) và lấy (get) thông tin chiều dài, chiều rộng  
> Phương thức tính diện tích, chu vi  
> Phương thức toString để hiển thị thông tin dài, rộng, diện tích, chu vi.  
> Xây dựng lớp HCNtest có chứa phương thức main để test  
> Chiều dài, chiều rộng của HCN nhập từ bàn phím.

### Code đầy đủ:

[bai5.zip](https://bit.ly/3drMa4L)

pass giải nén: `fithou.netlify.app`

### Code: 

#### Xây dựng lớp HCN

```java
package BaiTH2.bai5;
 public class HCN {
     public float chieuDai, chieuRong;
     public float dienTich, chuVi;
     public float getChieuRong() {
         return chieuRong;
     }
     public float getChieuDai() {
         return chieuDai;
     }
     public void setChieuDai(float chieuDai) {
         this.chieuDai = chieuDai;
     }
     public void setChieuRong(float chieuRong) {
         this.chieuRong = chieuRong;
     }
     public float tinhDT(float chieuDai, float chieuRong) {
         dienTich = chieuDai*chieuRong;
         return dienTich;
     }
     public float tinhCV(float chieuDai, float chieuRong) {
         chuVi = (chieuDai+chieuRong)*2;
         return chuVi;
     }
     public void toString(float chieuDai, float chieuRong, float dienTich, float chuVi) {
         System.out.print("Chieu dai hinh chu nhat la: "+chieuDai);
         System.out.print("\nChieu rong hinh chu nhat la: "+chieuRong);
         System.out.print("\nDien tich hinh chu nhat la: "+dienTich);
         System.out.print("\nChu vi hinh chu nhat la: "+chuVi);
     }
 }
```

#### Xây dựng lớp HCNtest 

```java
package BaiTH2.bai5;
 import java.util.Scanner;
 public class HCNtest {
     public static void main(String ngocdanh[]) {
         float chieuDai, chieuRong;
         Scanner sc = new Scanner(System.in);
         HCN cn = new HCN();
         System.out.print("Nhap vao chieu dai: ");
         chieuDai = sc.nextFloat();
         System.out.print("Nhap vao chieu rong: ");
         chieuRong = sc.nextFloat();
         float dienTich = cn.tinhDT(chieuDai, chieuRong);
         float chuVi = cn.tinhCV(chieuDai, chieuRong);
         cn.setChieuRong(chieuRong);
         cn.setChieuDai(chieuDai);
         cn.toString(chieuDai, chieuRong, dienTich, chuVi);
     }
 }
```

### Kết quả test 

Chạy class HCNtest.java lên được như sau:

[![](https://1.bp.blogspot.com/-qyrpMK7J1gY/XmlNNtmKi6I/AAAAAAAAdlE/oVkpWly1yiUU0TjUTX5rtJcxIeEifSEWgCLcBGAsYHQ/d/2020-03-12_034217.jpg)](https://1.bp.blogspot.com/-qyrpMK7J1gY/XmlNNtmKi6I/AAAAAAAAdlE/oVkpWly1yiUU0TjUTX5rtJcxIeEifSEWgCLcBGAsYHQ/s1600/2020-03-12_034217.jpg)