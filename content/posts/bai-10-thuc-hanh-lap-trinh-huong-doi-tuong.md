---
title: Bài 10 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-17T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

> Bài 10, Tạo các lớp theo sơ đồ theo sơ đồ phân cấp sau:  
> **MATHANG**tenHang: String  
> maHang: int  
> nuocSX: String  
> nhap()   
> hienThi()  
> **TULANH** kế thừa từ **MATHANG**dungTich: int  
> mauSac: String  
> hangSX: String  
> soLuong: int  
> donGia: float  
> nhap()  
> hienThi()  
> thanhTien()  
> **Yêu cầu:** 
> 
> *   Xây dựng mỗi lớp ở một file riêng biệt, ngoài các thành phần đã liệt kê, có thể bổ sung thêm lớp phương thức và thuộc tính cho phù hợp
> 
> *   Mỗi lớp đều có phương thức khởi tạo có tham số và không có tham số
> 
> **Áp dụng:**  
> 
> *   Nhập danh sách các tủ lạnh
> 
> *   In danh sách các tủ lạnh đã nhập
> 
> *   Liệt kê danh sách tủ lạnh theo hãng sản xuất nào đó được nhập từ bàn phím
> 
> *   Tính tổng tiền danh sách các tủ lạnh đã được nhập
> 
> *   In các tủ lạnh có dung tích trên 200 lít
> 
> *   sắp xếp danh sách các tủ lạnh theo thứ tự giảm dần của số lượng

### Code đầy đủ: 

[Bài 10.zip](https://bit.ly/2Iuf4Gh)  

pass giải nén: `fithou.netlify.app`
  
>Với bài này, ta sẽ sử dụng ArrayList để quản lý danh sách. Ngoài ra, với phần sắp xếp, các bạn sử dụng Collections.sort() để sắp xếp  

### Tạo class `MATHANG.java`

```java
package TH4.bai10;
import java.util.Scanner;
public class MATHANG {
    public String matHang, nuocSX;
    public int maHang;

    public MATHANG() {
        matHang="";
        maHang=0;
        nuocSX = "";
    }
    public MATHANG(String matHang, int maHang, String nuocSX) {
        this.maHang = maHang;
        this.matHang= matHang;
        this.nuocSX = nuocSX;
    }
    public void nhap(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap ten mat hang: ");
        matHang = sc.nextLine();
        System.out.print("Nhap vao nuoc san xuat: ");
        nuocSX = sc.nextLine();
        System.out.print("Nhap ma hang: ");
        maHang = sc.nextInt();
    }
    public void xuat() {
        System.out.printf("\n%20s%15d%20s", matHang, maHang, nuocSX);
    }

}
```

### Tạo class `TULANH.java` để quản lý thông tin từng tủ lạnh

```java
package TH4.bai10;
import java.util.Scanner;

public class TULANH extends  MATHANG{
    public int dungTich, soLuong;
    public String mauSac,hangSX;
    public float donGia;
    public TULANH(){
        dungTich = 0;
        mauSac ="";
        hangSX = "";
        soLuong = 0;
        donGia = 0;
    }
    public TULANH(int dungTich, String mauSac, String hangSX, int soLuong, float donGia) {
        super();
        this.dungTich = dungTich;
        this.mauSac  = mauSac;
        this.donGia = donGia;
        this.soLuong = soLuong;
        this.hangSX= hangSX;
    }
    public void nhapTL() {
        Scanner input = new Scanner(System.in);
        nhap();
        System.out.print("Nhap mau sac: ");
        mauSac = input.nextLine();
        System.out.print("Nhap hang SX: ");
        hangSX = input.nextLine();
        System.out.print("Nhap dung tich: ");
        dungTich = input.nextInt();
        System.out.print("Nhap so luong: ");
        soLuong = input.nextInt();
        System.out.print("Nhap don gia: ");
        donGia = input.nextFloat();
    }
    public float thanhTien() {
        return soLuong*donGia;
    }
    public void xuatTL(){
        xuat();
        System.out.printf("%10d%15s%15s%10d%20.2f%20.2f", dungTich, mauSac, hangSX, soLuong, donGia, thanhTien());
    }


}
```

### Tạo class `DSTULANH.java` để quản lý một danh sách các tủ lạnh với arraylist

```java
package TH4.bai10;

import java.util.Comparator;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class DSTULANH {
    ArrayList<TULANH> listTL;

    public void nhapDS() {
        Scanner sc = new Scanner(System.in);
        int n;
        do {
            System.out.print("\nNhap vao so tu lanh: ");
            n = sc.nextInt();
        } while (n <= 0);
        listTL = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            TULANH tl = new TULANH();
            System.out.printf("\nNhap vao thong tin tu lanh %d\n", i + 1);
            tl.nhapTL();
            tl.thanhTien();
            listTL.add(tl);
        }

    }

    public void xuatDS() {

        System.out.printf("\n%20s%15s%20s%10s%15s%15s%10s%20s%20s",
                "Mat hang", "ma hang", "nuoc SX", "dung Tich", "mau Sac", "hang SX", "so Luong", "don Gia", "thanh tien");
        for (TULANH tl : listTL) {
            System.out.printf("\n%20s%15d%20s%10d%15s%15s%10d%20.2f%20.2f",
                    tl.matHang, tl.maHang, tl.nuocSX, tl.dungTich, tl.mauSac, tl.hangSX, tl.soLuong, tl.donGia, tl.thanhTien());
        }
    }

    public void dsHangX() {
        Scanner input = new Scanner(System.in);
        String hangX;
        int k = 0;
        System.out.print("\nNhap vao hang tu lanh can hien thi: ");
        hangX = input.nextLine();
        System.out.printf("\n%20s%15s%20s%10s%15s%15s%10s%20s%20s",
                "Mat hang", "ma hang", "nuoc SX", "dung Tich", "mau Sac", "hang SX", "so Luong", "don Gia", "thanh tien");
        for (TULANH tl : listTL) {
            if ((hangX).equals(tl.hangSX) == true) {
                System.out.printf("\n%20s%15d%20s%10d%15s%15s%10d%20.2f%20.2f",
                        tl.matHang, tl.maHang, tl.nuocSX, tl.dungTich, tl.mauSac, tl.hangSX, tl.soLuong, tl.donGia, tl.thanhTien());
                k++;
            }
        }
        if(k==0) {
            System.out.printf("\nKhong ton tai du lieu ve hang %s", hangX);
        }

    }
    public void tongTien(){
        float S;
        S =0;
        for(TULANH tl:listTL) {
            S+=tl.thanhTien();
        }
        System.out.printf("\nTong gia tri cac tu lanh nhap vao la: %2f", S);
    }
    public void tuLanh200() {
        int k =0;
        System.out.print("\ndanh sach tu lanh dung tich tren 200: ");
        System.out.printf("\n%20s%15s%20s%10s%15s%15s%10s%20s%20s",
                "Mat hang", "ma hang", "nuoc SX", "dung Tich", "mau Sac", "hang SX", "so Luong", "don Gia", "thanh tien");
        for (TULANH tl : listTL) {
            if (tl.dungTich >200) {
                System.out.printf("\n%20s%15d%20s%10d%15s%15s%10d%20.2f%25.2f",
                        tl.matHang, tl.maHang, tl.nuocSX, tl.dungTich, tl.mauSac, tl.hangSX, tl.soLuong, tl.donGia, tl.thanhTien());
                k++;
            }
        }
        if(k==0) {
            System.out.print("\nKhong ton tai du lanh dung tich tren 200 ");
        }
    }
    public void sapXepDS() {
        Collections.sort(listTL, new Comparator<TULANH>() {
            @Override
            public int compare(TULANH t1, TULANH t2) {
                if(t1.soLuong< t2.soLuong) {
                    return 1;
                }
                else if(t1.soLuong == t2.soLuong) {
                    return 0;
                }
                else {
                    return -1;
                }
            }
        });
        System.out.print("\nDanh sach sau khi sap xep giam dan so luong: ");
        System.out.printf("\n%20s%15s%20s%10s%15s%15s%10s%20s%20s",
                "Mat hang", "ma hang", "nuoc SX", "dung Tich", "mau Sac", "hang SX", "so Luong", "don Gia", "thanh tien");
        for(TULANH tl:listTL) {
            tl.xuatTL();
        }
    }
}
```

### Tạo Class `bai10.java` để gọi hàm main()

```java
package TH4.bai10;

public class bai10 {
    public static void main(String... arg){
        DSTULANH x = new DSTULANH();
        x.nhapDS();
        System.out.print("\nDanh sach tu lanh sau khi nhap: ");
        x.xuatDS();
        x.dsHangX();
        x.tongTien();
        x.tuLanh200();
        x.sapXepDS();
    }
}
```

### Kết quả test

[![](https://1.bp.blogspot.com/-Q_TzZFF4gQM/Xn4gT8iGnFI/AAAAAAAAeIQ/R9lMktpMQTMGcO7RxziTTg94CsqMxMO5QCLcBGAsYHQ/s640/Screen%2BShot%2B2020-03-27%2Bat%2B10.34.20%2BPM.png)](https://1.bp.blogspot.com/-Q_TzZFF4gQM/Xn4gT8iGnFI/AAAAAAAAeIQ/R9lMktpMQTMGcO7RxziTTg94CsqMxMO5QCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-03-27%2Bat%2B10.34.20%2BPM.png)