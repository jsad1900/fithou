---
title: Bài 8 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-15
featureImage: /uploads/baiviet/java.png
---

> Bài 8, Ngân hàng ABC muốn lưu giữ thông tin của mỗi tài khoản như sau:  
> 
> *   Số tài khoản
> 
> *   Tên tài khoản
> 
> *   Số tiền trong tài khoản
> 
> a, Thiết kế lớp taiKhoan để lưu trữ các thông tin, lớp gồm các phương thức sau:  
> 
> *   Phương thức khởi tạo (constructor): có 2 phương thức khởi tạo( mặc định và đầy đủ tham số)
> 
> *   Các phương thức set, get cho từng thuộc tính
> 
> *   Phương thức toString để trả về chuỗi chứa toàn bộ thông tin tài khoản, yêu cầu định dạng tiền tệ
> 
> b, Thêm các thông tin sau vào lớp taiKhoan:  
> 
> *   Hằng số lãi suất có giá trị khởi tạo là 0.05
> 
> *   Phương thức khởi tạo có 2 đối số: Số tài khoản, Tên tài khoản. Phương thức khởi tạo này có số tiền mặc định là 100.
> 
> *   Phương thức gửi tiền vào tài khoản: Số tiền trong tài khoản+ số tiền nạp vào.
> 
> *   Phương thức rút tiền: Số tiền hiện tại trong tài khoản - (Số tiền muốn rút+ Phí rút tiền)
> 
> *   Phương thức đáo hạn: Mỗi lần đến kỳ rút đáo hạn thì số tiền trong tài khoản = số tiền trong tài khoản + Số tiền trong tài khoản\*Laisuat.
> 
> Chú ý: Mỗi thao tác phải kiểm tra số tiền gửi, rút có hợp lệ hay không. Ví dụ nhập vào <0, tiền rút nhiều hơn tiền trong tài khoản thì thông báo không hợp lệ và yêu cầu nhập lại.  
> c, Xây dựng lớp TaiKhoanTest có chứa các phương thức main để thực hiện test các chức năng trên.

### Code đầy đủ: 

[`Bài 8.zip`](https://bit.ly/31jbIfR)  

pass giải nén: `fithou.netlify.app`

Với yêu cầu đề bài, bài này sử dụng try catch throw để check lỗi khi nhập sai. Có cách khác là sử dụng if else để check lỗi.  
Tạo 2 class là TAIKHOAN và TAIKHOANTEST để chạy.

### class `TAIKHOAN.java`

```java
package TH3.bai8;
import java.util.*;
public class TAIKHOAN {
    public int soTaiKhoan;
    public String tenTaiKhoan;
    public double soTien;
    public final double laiSuat = 0.05; // hang so lai suat
    public TAIKHOAN() {
        // phuong thuc khoi tao khong co tham so
        soTaiKhoan=0;
        tenTaiKhoan= "";
        soTien = 0;
    }
    public TAIKHOAN(int soTaiKhoan, String tenTaiKhoan, double soTien) {
        // phuong thuc khoi tao co tham so
        super();
        this.soTaiKhoan= soTaiKhoan;
        this.soTien= soTien;
        this.tenTaiKhoan= tenTaiKhoan;
    }
    // phuong thuc set
    public void setSoTaiKhoan(int soTaiKhoan) {
        this.soTaiKhoan = soTaiKhoan;
    }

    public void setSoTien(float soTien) {
        this.soTien = soTien;
    }

    public void setTenTaiKhoan(String tenTaiKhoan) {
        this.tenTaiKhoan = tenTaiKhoan;
    }
    //phuong thuc get
    public double getSoTien() {
        return soTien;
    }

    public int getSoTaiKhoan() {
        return soTaiKhoan;
    }

    public String getTenTaiKhoan() {
        return tenTaiKhoan;
    }

    public TAIKHOAN(int soTaiKhoan, String tenTaiKhoan) {
        this.soTien = 100;
    }
    public boolean guiTien(double tienGui) throws Exception {
        if(tienGui<0) {// se khong xay ra dau bang
            throw new Exception("So tien nhap khong hop le.");
            // throw nem ra mot ngoai le trong java
        }
        else {
            this.soTien += tienGui;
            return true;
        }
    }
    public boolean rutTien(double tienMuonRut, double phiRut) throws Exception {
        if(tienMuonRut <0 ||(tienMuonRut+phiRut)> soTien){
            throw new Exception("Khong rut duoc, kiem tra so du va nhap lai.");
            // throw nem ra mot ngoai le trong java blog.ndanh.com
        }
        else {
            soTien -= tienMuonRut+ phiRut;
            return true;
        }
    }
    public void daoHan() {
        soTien += soTien*laiSuat;
    }
    @Override
    public String toString() {
        return "\nTai khoan: {" +
                "soTaiKhoan=" + soTaiKhoan +
                ", tenTaiKhoan='" + tenTaiKhoan + '\'' +
                ", soTien=" + soTien +
                '}';
    }
}
```

### class `TAIKHOANTEST.java` chứa hàm main()

```java
package TH3.bai8;

public class TAIKHOANTEST {
    public static void main(String...ngocdanh) {
        TAIKHOAN tk1 = new TAIKHOAN(58757, "Ngoc Danh", 578);
        TAIKHOAN tk2 = new TAIKHOAN(68754, "My Duyen", 569);
        TAIKHOAN tk3 = new TAIKHOAN(25741, "Hoang Nam", 785);
        TAIKHOAN tk4 = new TAIKHOAN(35474, "Hoang Duy", 157);

        //test nhap tien vao tai khoan
        try {
            // doc lai kien thuc ve try catch throw
            tk1.guiTien(632);
            tk2.guiTien(100);
            tk3.guiTien(574);
        }
        catch(Exception err){
            System.out.print("\nLoi "+err.getMessage());
        }

        System.out.printf("\n===tai khoan sau khi nhap tien vao:=== ");
        System.out.printf(tk1.toString());
        System.out.printf(tk2.toString());
        System.out.printf(tk3.toString());
        //test rut tien khoi tai khoan
        try {
            tk2.rutTien(200, 20);
            tk4.rutTien(40, 20);
        }
        catch(Exception err) {
            System.out.print("\nLoi "+ err.getMessage());
        }
        System.out.printf("\n===tai khoan sau khi rut tien:=== ");
        System.out.printf(tk2.toString());
        System.out.printf(tk4.toString());

        // so tien sau khi dao han
        tk1.daoHan();
        tk2.daoHan();
        tk3.daoHan();
        tk4.daoHan();
        System.out.printf("\n===tai khoan sau khi dao han:=== ");
        System.out.printf(tk1.toString());
        System.out.printf(tk2.toString());
        System.out.printf(tk3.toString());
        System.out.printf(tk4.toString());
    }

}
```

### Kết quả test

[![](https://1.bp.blogspot.com/-yejd4eW1C2E/XnOhjkRJzUI/AAAAAAAAd3s/KT-kOKei08879Wo9LJALVvgOsp_V5V4swCLcBGAsYHQ/s640/bai8.png)](https://1.bp.blogspot.com/-yejd4eW1C2E/XnOhjkRJzUI/AAAAAAAAd3s/KT-kOKei08879Wo9LJALVvgOsp_V5V4swCLcBGAsYHQ/s1600/bai8.png)