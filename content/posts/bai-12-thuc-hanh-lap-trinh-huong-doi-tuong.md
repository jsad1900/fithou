---
title: Bài 12 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-19T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---
 
> **Bài 12, xây dựng lần lượt theo các yêu cầu sau:**  
> Class nguoi quản lý 1 người
> 
> *   Thuộc tính:hoTen, gioiTinh
> 
> *   Phương thức: Khởi tạo(), nhap(), xuat(), toString(), ...
> 
> Class hocSinh quản lý 1 học sinh, kế thừa từ nguoi 
> 
> *   Thuộc tính: tenLop
> 
> *   Phương thức: khoiTao(), nhap(), xuat(), toString(),...
> 
> Class danhSach quản lý danh sách các học sinh
> 
> *   Thuộc tính: sử dụng ArrayList
> 
> *   Phương thức: Khởi tạo(), themNgươi(), XuatDS(), sapXepDS(),...
> 
> class ApDung: Chương trình chính, có hàm main để chạy

### Code đầy đủ

[Bai 12.zip](https://bit.ly/33UvqjG)

pass giải nén: `fithou.netlify.app`

#### Tạo class `NGUOI.java`

```java
package TH4.bai12;
import javafx.scene.shape.TriangleMesh;

import java.util.Scanner;
public class NGUOI {
    public String hoTen, gioiTinh;
    public NGUOI() {
        super();
        hoTen ="";
        gioiTinh ="";
    }
    public NGUOI(String hoTen, String gioiTinh) {
        this.hoTen = hoTen;
        this.gioiTinh= gioiTinh;
    }
    public void nhap() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap ho ten: ");
        hoTen = sc.nextLine();
        System.out.print("Nhap gioi tinh: ");
        gioiTinh = sc.nextLine();
    }
    public void xuat() {
        System.out.printf("%20s%20s", hoTen, gioiTinh);
    }

    public String getHoTen() {
        return hoTen;
    }

    @Override
    public String toString() {
        return "NGUOI{" +
                "hoTen='" + hoTen + '\'' +
                ", gioiTinh='" + gioiTinh + '\'' +
                '}';
    }
}
```

### Tạo class `HOCSINH.java`

```java
package TH4.bai12;
import java.util.Scanner;
public class HOCSINH extends NGUOI {
    public String tenLop;
    public HOCSINH() {
        super();
        hoTen = "";
        gioiTinh ="";
        tenLop = "";
    }
    public HOCSINH(String hoTen, String gioiTinh, String tenLop) {
        this.gioiTinh = gioiTinh;
        this.hoTen = hoTen;
        this.tenLop = tenLop;
    }
    public void nhap() {
        Scanner sc = new Scanner(System.in);
        super.nhap();
        System.out.print("Nhap ten lop: ");
        tenLop = sc.nextLine();
    }
    public void xuat() {

        super.xuat();
        System.out.printf("%20s\n", tenLop);
    }

    @Override
    public String toString() {
        return "HOCSINH{" +
                "hoten='" + hoTen + '\'' +
                ", gioitinh='" + gioiTinh + '\'' +
                ", lop='" + tenLop + '\'' +
                '}';
    }
}
```

### Tạo class `DSHOCSINH.java`

```java
package TH4.bai12;
import java.util.Scanner;
import java.util.ArrayList;
import  java.util.Collections;
import java.util.Comparator;
public class DSHOCSINH {
    ArrayList<HOCSINH> DS;
    public void nhap() {
        int n, i;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.print("\nNhap so hoc sinh: ");
            n = sc.nextInt();
        }while(n<=0);
        DS = new ArrayList<>(n);
        for(i=0; i<n; i++) {
            HOCSINH x = new HOCSINH();
            System.out.printf("Nhap hoc sinh thu %d: \n", i+1);
            x.nhap();
            DS.add(x);
        }
    }
    public void xuat() {

        System.out.printf("%20s%20s%20s\n", "ho ten", "gioi tinh", "lop");
        for(HOCSINH x:DS) {

            x.xuat();
        }
    }
    public void sapXep() {
        Collections.sort(DS, new Comparator<HOCSINH>() {
            @Override
            public int compare(HOCSINH hs1, HOCSINH hs2) {
                return (hs1.getHoTen().compareTo(hs2.getHoTen()));
            }
        });
        xuat();
    }
}
```

#### Tạo class `bai11.java` để quản lý

Xem phần **code đầy đủ** dể xem chi tiết

#### kết quả test 

[![](https://1.bp.blogspot.com/-v9LNrpJrApk/Xn8a-jfK3nI/AAAAAAAAeKY/2kp56-PQgYIj_o5xb7EaaagRlFo1UnXxgCLcBGAsYHQ/d/Screen%2BShot%2B2020-03-28%2Bat%2B4.37.12%2BPM.png)](https://1.bp.blogspot.com/-v9LNrpJrApk/Xn8a-jfK3nI/AAAAAAAAeKY/2kp56-PQgYIj_o5xb7EaaagRlFo1UnXxgCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-03-28%2Bat%2B4.37.12%2BPM.png)