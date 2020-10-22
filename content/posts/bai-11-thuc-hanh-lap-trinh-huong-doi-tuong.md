---
title: Bài 11 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-16
featureImage: /uploads/baiviet/java.png
---

> **Bài 11,** (yêu cầu chung: xác định private, public, protected cho từng thuộc tính/phương thức của mỗi lớp, cài đặt constructor có tham số và không có tham số)  
> Giả sử cần xây dựng chương trình quản lý cho một học viện nghiên cứu giảng dạy và ứng dụng. Đối tượng quản lý bao gồm các sinh viên đang theo học, các nhân viên đang đi làm ở học viện, các khách hàng đến giao dịch mua bán sản phẩm ứng dụng. Dựa vào đặc tính của từng đối tượng, người quản lý cần đưa ra cách thức đánh giá khác nhau.  
> **Hãy xây dựng các lớp sau:**  
> 
> *   Lớp person: bao gồm họ tên, địa chỉ, phương thức toString()
> 
> *   các lớp Student, employee, customer( mô tả dưới đây) kế thừa lớp person.
> 
> *   lớp student: bao gồm các thuộct tính điểm môn học 1, điểm môn học 2 và các phương thức: tính điểm TB, đánh giá, overriding, phương thức toString trả về bảng điểm của sinh viên(gồm thông tin thuộc tính và điểm trung bình)
> 
> *   lớp Employee: bao gồm thuộc tính heSoLuong, và các phương thức tính lương, đánh giá, overriding, phương thức toString trả về bảng lương của nhân viên(gồm thông tin thuộc tính đối tượng và tiền lương).
> 
> *   lớp Customer: bao gồm thuộc tính tên công ty, giá trị hoá đơn, đánh giá và phương thức toString trả về thông tin hoá đơn cho khách hàng( gồm các thuộc tính của đối tượng)
> 
> lớp có một biến danh sách để lưu sinh viên, nhân viên, khách hàng( dùng 1 biến array person), biến lưu tổng số người trong danh sách, constructor mặc định khởi tạo array với dung lượng cho trước, phương thức thêm một người vào danh sách(thông số person), xoá 1 người khỏi danh sách(nhận thông số là họ tên của người cần xoá), sắp xếp danh sách theo thứ tự họ tên, phương thức xuất danh sách. Khi danh sách đầy thì tự động tăng dung lượng lên 50%.  
> Viết lớp cho phương thức main cho phần kiểm nhiệm. Giao tiếp với người dùng bằng menu( thể hiện tính đa hình bằng cách nhập vào thông tin là sinh viên, nhân viên hay khách hàng).

### Code đầy đủ

[`Bài 11.zip`](https://bit.ly/2GNgfA6)  

pass giải nén: `fithou.netlify.app`

### Tạo Class `PERSON.java`

```java
package TH4.bai11;

import java.util.Scanner;

public class PERSON {
    public String hoTen, diaChi;

    public PERSON() {
        hoTen = "";
        diaChi = "";
    }

    public PERSON(String hoTen, String diaChi) {
        this.hoTen = hoTen;
        this.diaChi = diaChi;
    }

    public void nhap() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap ho ten: ");
        hoTen = sc.nextLine();
        System.out.print("Nhap dia chi: ");
        diaChi = sc.nextLine();
    }

    public void xuat() {
        System.out.printf("\nHo ten: %s\n", hoTen);
        System.out.printf("Dia chi: %s\n", diaChi);
    }

    public String getDiaChi() {
        return diaChi;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    @Override
    public String toString() {
        return "PERSON{" +
                "hoTen='" + hoTen + '\'' +
                ", diaChi='" + diaChi + '\'' +
                '}';
    }
}
```

### Tạo class `STUDENT.java`

```java
package TH4.bai11;
import java.util.Scanner;
public class STUDENT extends PERSON {
    public float diem1, diem2;
    public STUDENT(){
        super();
        diem2 = 0.2f;
        diem1 = 0.2f;
    }
    public STUDENT(float diem1, float diem2) {
        this.diem1 = diem1;
        this.diem2 = diem2;
    }


    public void nhap(){
        Scanner sc = new Scanner(System.in);
        super.nhap();
        System.out.print("Nhap diem 1: ");
        diem1= sc.nextFloat();
        System.out.print("Nhap diem 2: ");
        diem2 = sc.nextFloat();
    }
    public float diemTB() {
        return (diem1+diem2)/2;
    }
    public void xuat() {
        super.xuat();
        System.out.printf("Diem 1: %.2f\n",diem1);
        System.out.printf("Diem 2: %.2f\n",diem2);
    }

    public float getDiem1() {
        return diem1;
    }

    public float getDiem2() {
        return diem2;
    }

    public void setDiem1(float diem1) {
        this.diem1 = diem1;
    }

    @Override
    public void setDiaChi(String diaChi) {
        super.setDiaChi(diaChi);
    }

    @Override
    public String toString() {
        return "STUDENT{" +
                "hoTen=" + hoTen +
                ", diaChi=" + diaChi +
                ", diem1='" + diem1 + '\'' +
                ", diem2='" + diem2 + '\'' +
                '}';
    }
}
```
 

### Tạo class `EMPLOYEE.java`

```java
package TH4.bai11;

import java.util.Scanner;

public class EMPLOYEE extends  PERSON{
    public float hSL, luong;
    public EMPLOYEE(){
        super();
        hSL= 0.2f;
    }
    public EMPLOYEE(float hSL) {
        this.hSL = hSL;
    }

    public float gethSL() {
        return hSL;
    }

    public void sethSL(float hSL) {
        this.hSL = hSL;
    }

    public void nhap(){
        Scanner sc = new Scanner(System.in);
        super.nhap();
        System.out.print("Nhap he so luong: ");
        hSL= sc.nextFloat();
        luong = hSL*1650000;
    }
    public void tinhLuong(){
        luong = hSL*1650000;
    }
    public void xuat() {
        super.xuat();
        System.out.printf("He so luong: %.2f\n",hSL);
        System.out.printf("luong: %.2f\n",luong);
    }

    @Override
    public String toString() {
        return "EMPLOYEE{" +
                "Hoten=" + hoTen +
                ", diaChi=" + diaChi +
                ", heSL='" + hSL + '\'' +
                ", luong='" + luong + '\'' +
                '}';
    }
}
```

### Tạo class `CUSTOMER.java`

```java
package TH4.bai11;

import java.util.Scanner;

public class CUSTOMER extends  PERSON {
    public String tenCTy;
    public float giaTriHD, tienThue, tienNop;
    public CUSTOMER() {
        super();
        tenCTy = "";
        giaTriHD = 0.2f;
    }
    public CUSTOMER(String tenCTy, float giaTriHD) {
        this.giaTriHD = giaTriHD;
        this.tenCTy = tenCTy;
    }

    public String getTenCTy() {
        return tenCTy;
    }

    public float getGiaTriHD() {
        return giaTriHD;
    }

    public void setGiaTriHD(float giaTriHD) {
        this.giaTriHD = giaTriHD;
    }

    public void setTenCTy(String tenCTy) {
        this.tenCTy = tenCTy;
    }

    public void nhap(){
        Scanner sc = new Scanner(System.in);
        super.nhap();
        System.out.print("Nhap ten cong ty: ");
        tenCTy= sc.nextLine();
        System.out.print("Nhap gia tri hop dong: ");
        giaTriHD = sc.nextFloat();
    }
    public void tinhTienThue(){
        tienThue = (float)0.1*giaTriHD;
    }
    public void tinhTienNop() {
        tienNop = (float)1.1*giaTriHD;
    }
    public void xuat() {
        super.xuat();
        System.out.printf("Ten cong ty: %s\n",tenCTy);
        System.out.printf("Gia tri hD: %.2f\n",giaTriHD);
        System.out.printf("Tien thue: %.2f\n",tienThue);
        System.out.printf("Tien nop: %.2f\n",tienNop);
    }

    @Override
    public String toString() {
        return "CUSTOMER{" +
                "hoTen='" + hoTen + '\'' +
                ", diaChi=" + diaChi +
                ", giaTriHD=" + giaTriHD +
                ", tenCongTy=" + tenCTy +
                ", tienThue=" + tienNop +
                ", tienNop='" + tienNop + '\'' +
                '}';
    }
}
```

### Tạo lớp `DANHSACH.java` để quản lý

Xem ở mục `code đầy đủ`

### Kết quả test:

[![](https://1.bp.blogspot.com/-7gWEEn7UKCw/Xn8hl4WNjnI/AAAAAAAAeKo/Sd3J3YEopBY79YgmmBrULqm3y1_TbV2HgCLcBGAsYHQ/s640/Screen%2BShot%2B2020-03-28%2Bat%2B5.04.30%2BPM.png)](https://1.bp.blogspot.com/-7gWEEn7UKCw/Xn8hl4WNjnI/AAAAAAAAeKo/Sd3J3YEopBY79YgmmBrULqm3y1_TbV2HgCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-03-28%2Bat%2B5.04.30%2BPM.png)