---
title: Bài 15 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-23T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

**Đề bài:**

Ở đây, mình thực hành cô Xuân, nên chỉ có yêu cầu như sau:

[![](https://1.bp.blogspot.com/-JmWiY2QPk78/XohbTCL2vXI/AAAAAAAAeVU/X6tmJEFqMOc9SrEVbVZ1cgy1Zyx9dypiwCLcBGAsYHQ/s640/1.png)](https://1.bp.blogspot.com/-JmWiY2QPk78/XohbTCL2vXI/AAAAAAAAeVU/X6tmJEFqMOc9SrEVbVZ1cgy1Zyx9dypiwCLcBGAsYHQ/s1600/1.png)Trong bài này, có yêu cầu nhập xuất file, là một yêu cầu mới

### Code đầy đủ:

[bai15.zip](https://bit.ly/2SOnk5x) 

pass giải nén: `fithou.netlify.app`

#### Tạo class ```nguoi.java```

```java
package TH5.bai15;

import java.io.Serializable;
import java.util.Scanner;

public class NGUOI implements Serializable {
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

####  Tạo class `hocSinh.java` để quản lý thông tin 1 học sinh

```java
package TH5.bai15;

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

#### Tạo lớp `DSHOCSINH.java` để quản lý các học sinh

>Phần này có đọc, ghi file trong java  

```java
package TH5.bai15;

import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;


public class DSHOCSINH {
    ArrayList<HOCSINH> DS;

    public void nhap() {
        int n, i;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.print("\nNhap so hoc sinh: ");
            n = sc.nextInt();
        } while (n <= 0);
        DS = new ArrayList<>(n);
        for (i = 0; i < n; i++) {
            HOCSINH x = new HOCSINH();
            System.out.printf("Nhap hoc sinh thu %d: \n", i + 1);
            x.nhap();
            DS.add(x);
        }
    }

    public void xuat() {

        System.out.printf("%20s%20s%20s\n", "ho ten", "gioi tinh", "lop");
        for (HOCSINH x : DS) {

            x.xuat();
        }
    }

    public void gioiTinh() {
        Scanner sc = new Scanner(System.in);
        String gT;
        System.out.print("\nNhap vao gioi tinh: ");
        gT = sc.nextLine();
        System.out.print("\nDanh sach theo gioi tinh: \n");
        for (HOCSINH x : DS) {
            if (gT.equals(x.gioiTinh) == true) {
                x.xuat();
            }
        }
    }
    public void ghiFile() {
        try {
            FileOutputStream fileOut = new FileOutputStream("input.txt");
            ObjectOutputStream objOut = new ObjectOutputStream(fileOut);
            objOut.flush();
            objOut.writeObject(DS);
            objOut.close();
            fileOut.close();
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
    }
    public void docFile() {
        try {
            DS = new ArrayList<HOCSINH>();
            FileInputStream fin = new FileInputStream("input.txt");
            ObjectInputStream fout = new ObjectInputStream(fin);
            DS = (ArrayList)fout.readObject(); for(HOCSINH x:DS) {
                x.xuat();
            }
            fin.close();
            fout.close();

        }
        catch(FileNotFoundException e) {
            System.out.print("\nKhong thay file.");
        }
        catch(Exception ex) {
            ex.printStackTrace();
        }
    }

}
```

### Tạo class `bai15.java` có menu để gọi ra các yêu cầu

Tải và xem ở mục code đầy đủ  

### Kết quả test:

[![](https://1.bp.blogspot.com/-XJScMuNo2hY/XohdyQPkUFI/AAAAAAAAeVk/C2WdchP-P9ElL3hOYg0TobQNupX9AphQwCLcBGAsYHQ/s400/Screen%2BShot%2B2020-04-04%2Bat%2B5.12.09%2BPM.png)](https://1.bp.blogspot.com/-XJScMuNo2hY/XohdyQPkUFI/AAAAAAAAeVk/C2WdchP-P9ElL3hOYg0TobQNupX9AphQwCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-04%2Bat%2B5.12.09%2BPM.png)