---
title: Bài 13 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
  - lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-21T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---
> Bài 13, Cho một tập danh sách các cán bộ cần quản lý của một cơ quan nhà nước:  
> 
> *   CHUYÊN VIÊN: Cán bộ làm việc tại các phòng ban
> *   GIẢNG VIÊN: Cán bộ làm công tác giảng dạy tại các khoa
> *   QUẢN LÝ: Cán bộ làm công tác quản lý (trưởng- phó) tại các khoa và phòng ban
> 
> **Yêu cầu quản lý:**   
> 
> 1.  Thông tin từng cán bộ
> 
> 1.  Tính tiền lương và phụ cấp cho cán bộ như sau:
> 
> *   CHUYÊN VIÊN: tiền lương = Hệ số lương\*1.350.000, không phụ cấp
> 
> *   GIẢNG VIÊN: tiền lương = (Hệ số lương\*1.350.000)+phụ cấp đặc biệt ngành(20% lương)
> 
> *   QUẢN LÝ: tiền lương = (hệ số lương+ hệ số phụ cấp)\*1.350.000
> 
> **Yêu cầu sinh viên:**   
> 
> 1.  Dùng kiến thức mô hình hoá dữ liệu trong lập trình hướng đối tượng để xây dựng các lớp
> 2.  Thiết kế mô hình cây phân bố các lớp. Mối quan hệ giữa các lớp và interface
> 3.  Chuyển từ mô hình trên sang ngôn ngữ lập trình java. (Chuyển sang thiết kế các lớp và interface tương ứng bằng ngôn ngữ lập trình java)
> 4.  Cài đặt chương trình test chương trình áp dụng nhập vào một danh sách đối tượng. Cán bộ bất kỳ(Có thể là CHUYÊN VIÊN hoặc GIẢNG VIÊN hoặc QUẢN LÝ). Sau đó in lại danh sách thông tin các đối tượng Cán bộ đã nhập.

  

Với bài toán này, chúng ta phải sử dụng khái niệm lớp trừu tượng kế thừa từ interface.

Thực ra, với interface hay một class bình thường thì vẫn không khác nhau gì với bài này. Nhưng trong nhiều bài toán khác, việc định nghĩa hàm từ interface, khiến việc kế thừa sau này phải tuân thủ theo luật từ lớp interface.

>**Một số lưu ý là:**
>-   abstract thì có thể class chỉ có thể extends được 1 lần
>-  interface thì class có thể implements lại nhiều lần. 
>-   Hàm trừu tượng trong interface thì khi được class nào implements, bắt buộc class đó phải có những hàm trừu tượng đã implements từ interface đó (khá trừu tượng).
>-   Nếu bạn vẫn thắc mắc thì hãy đọc một bài khá hay về interface, abstract: [https://vntalking.com/interface-trong-java-ban-da-hieu-dung.html](https://vntalking.com/interface-trong-java-ban-da-hieu-dung.html)

### Code đầy đủ

[`Bài 13.zip`](https://bit.ly/3iZqnm1)

pass giải nén: `fithou.netlify.app`

### Tạo interface `person.java` với các lớp trừu tượng

```java
package TH5.bai13;

public interface person {
     public void xuat(); // khong co thuoc tinh private trong interface
     public void nhap();

     // mac dinh cac ham nay da la abstract
}
```

### Tạo class trừu tượng `canBo.java `

Nhìn qua, nó sẽ không khác gì cấu trúc class bình thường, các bạn chú ý ở dòng "abstract double tinhLuong();". Nó đang định nghĩa 1 hàm trừu tượng  
Ngoài ra, trong bài toán này, việc sử dụng interface để quản lý cái nào, và abstract quản lý cái nào. Thực ra chưa rõ ràng, vì thế, nên có thể viết các hàm abstract vào interface hay lớp abstract cũng không khác nhau nhiều.  

```java
package TH5.bai13;

abstract class canBo {
    public int maCV;
    public String hoTen;
    public double hSL;
    public double tienLuong;

    public canBo() {
        maCV = 0;
        hoTen = "";
        hSL = 0.0;
        tienLuong = 0.0;
    }

    public canBo(int maSV, String hoTen, double hSL, double tienLuong) {
        this.hoTen = hoTen;
        this.hSL = hSL;
        this.maCV = maSV;
        this.tienLuong = tienLuong;
    }
    abstract double tinhLuong();
}

```

### Tạo class `giangVien.java` để quản lý giảng viên

```java
package TH5.bai13;
import  java.util.Scanner;
public class giangVien extends  canBo implements  person{
    public String tenKhoa, nhomMon;
    public giangVien() {
        super();
        tenKhoa = "";
        nhomMon = "";
    }
    public giangVien(String tenKhoa, String nhomMon) {
        this.tenKhoa = tenKhoa;
        this.nhomMon = nhomMon;
    }
    @Override
    public void nhap() {
        Scanner input = new Scanner(System.in);
        System.out.print("Nhap ho ten: ");
        hoTen = input.nextLine();
        System.out.print("Nhap ten khoa: "+tenKhoa);
        tenKhoa = input.nextLine();
        System.out.print("Nhap nhom mon: "+nhomMon);
        nhomMon = input.nextLine();
        System.out.print("Nhap ma chuyen vien: ");
        maCV = input.nextInt();
        System.out.print("Nhap he so luong: ");
        hSL = input.nextDouble();
    }
    public double tinhLuong() {
        tienLuong = hSL*1350000*(1.2);
        return tienLuong;
    }
    @Override
    public void xuat() {
        System.out.print("\nHo ten: "+ hoTen);
        System.out.print("\nMa chuyen vien: "+ maCV);
        System.out.print("\nHe so luong: "+ hSL);

        System.out.print("\nTen khoa: "+tenKhoa);
        System.out.print("\nNhom mon: "+nhomMon);
        System.out.print("\nTien luong: "+tinhLuong()+"\n");
    }

}

```

### Tạo lớp `chuyenVien.java` để quản lý thông tin chuyên viên

```java
package TH5.bai13;
import java.util.Scanner;
public class chuyenVien extends canBo implements person {
    public String tenPB;
    public double tienTangThem;
    public  chuyenVien() {
        super();
        tenPB = "";
        tienTangThem = 0.0;
    }
    public chuyenVien(String tenPB, double tienTangThem) {
        this.tenPB = tenPB;
        this.tienTangThem= tienTangThem;
    }
    public void nhap() {
        Scanner input = new Scanner(System.in);
        System.out.print("Nhap ho ten: ");
        hoTen = input.nextLine();
        System.out.print("Nhap ten phong ban: ");
        tenPB = input.nextLine();
        System.out.print("Nhap ma chuyen vien: ");
        maCV = input.nextInt();
        System.out.print("Nhap he so luong: ");
        hSL = input.nextDouble();


        System.out.print("Nhap tien luong tang them: ");
        tienTangThem = input.nextDouble();
    }
    public double tinhLuong() {
        tienLuong = hSL*1350000+tienTangThem;
        return tienLuong;
    }
    public void xuat() {
        System.out.print("\nHo ten: "+ hoTen);
        System.out.print("\nMa chuyen vien: "+ maCV);
        System.out.print("\nHe so luong: "+ hSL);

        System.out.print("\nTen phong ban: "+tenPB);
        System.out.print("\nTien luong tang them: "+tienTangThem);
        System.out.print("\nTien luong: "+tinhLuong()+"\n");

    }

}

```

### Tạo lớp `quanLy.java` quản lý thông tin của quản lý :))

```java
package TH5.bai13;
import java.util.Scanner;
public class quanLy extends canBo implements person {
    public double hSPC;
    public quanLy() {
        hSPC = 0.0f;
    }
    public quanLy(double hSPC) {
        super();
        this.hSPC = hSPC;
    }
    public void nhap() {
        Scanner input = new Scanner(System.in);
        System.out.print("Nhap ho ten: ");
        hoTen = input.nextLine();
        System.out.print("Nhap ma chuyen vien: ");
        maCV = input.nextInt();
        System.out.print("Nhap he so luong: ");
        hSL = input.nextDouble();

        System.out.print("Nhap he so phu cap: ");
        hSPC = input.nextDouble();
    }
    public double tinhLuong() {
        tienLuong = (hSL+hSPC)*1350000;
        return tienLuong;
    }
    public void xuat() {
        System.out.print("\nHo ten: "+ hoTen);
        System.out.print("\nMa chuyen vien: "+ maCV);
        System.out.print("\nHe so luong: "+ hSL);

        System.out.print("\nHe so phu cap: "+hSPC);
        System.out.print("\nTien luong: "+tinhLuong()+"\n");

    }
}

```

### Tạo lớp `danhSach.java` để nhập, xuất danh sách các cán bộ

xem code ở phần code đầy đủ  
Do phần danhsach.java giống bài 11 nên mình sẽ không view code ở đây  

### Cuối cùng, tạo lớp `bai13.java` để in ra 
  
```java
package TH5.bai13;  
 public class bai13 {  
     public static void main(String... args) {  
         danhSach ds = new danhSach();  
         ds.nhapDS();  
         ds.inDS();  
     }  
 }
```

### Kết quả test 

Bài này chỉ in ra danh sách các bộ nhập vào

[![](https://1.bp.blogspot.com/-3JSFiii-dZg/XohCKANsXJI/AAAAAAAAeU0/76FgOmZDYEEG63afb-yIVGryqgSP3Nz5QCLcBGAsYHQ/d/Screen%2BShot%2B2020-04-04%2Bat%2B3.15.18%2BPM.png)](https://1.bp.blogspot.com/-3JSFiii-dZg/XohCKANsXJI/AAAAAAAAeU0/76FgOmZDYEEG63afb-yIVGryqgSP3Nz5QCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-04%2Bat%2B3.15.18%2BPM.png)