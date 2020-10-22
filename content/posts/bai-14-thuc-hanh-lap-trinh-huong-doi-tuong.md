---
title: Bài 14 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-16
featureImage: /uploads/baiviet/java.png
---

> **Bài 14**, Với 1 tập mini các loại xe trong thế giới thực cho bên dưới:  
> Xe đạp điện, xe máy, xe trẻ con, xe đạp, ô tô tải, xe hơi  
> **Yêu cầu quản lý:**  
> 
> 1.  Thông tin từng loại xe
> 
> 1.  Tính tiền thuế cho từng chiếc xe dựa trên giá trị xe như sau:
> 
> *   Xe đạp: Không đóng thuế
> 
> *   Xe máy: VAT=10% và thuế trước bạ 5%
> 
> *   Xe ô tô khách: Thuế tiêu thụ đặc biệt 30%(số chỗ >=5), 50%(Số chỗ <5), thuế VAT=10%, thuế trước bạ 20%
> 
> *   Xe ô tô tải: VAT=10%, thuế trước bạ 2%
> 
> **Yêu cầu sinh viên:**  
> 
> 1.  Dùng kiến thức mô hình hoá dữ liệu trong lập trình hướng đối tượng để xây dựng các lớp
> 
> 1.  Thiết kế mô hình cây phân bố các lớp. Mối quan hệ giữa các lớp và interface
> 
> 1.  Chuyển từ mô hình trên sang ngôn ngữ lập trình java. (Chuyển sang thiết kế các lớp và interface tương ứng bằng ngôn ngữ lập trình java)
> 
> 1.  Cài đặt test chương trình

Thực ra, với thời gian thi thực hành gấp rút, nên mình không thể làm nổi bật sự ưu việt của interface, abstract. Nhưng vẫn đạt yêu cầu thầy cô rồi!  
Nên code bài này viết cũng không hay cho lắm. Có thời gian sẽ viết lại.  
Nếu bạn vẫn thắc mắc thì hãy đọc một bài khá hay về interface, abstract: [https://vntalking.com/interface-trong-java-ban-da-hieu-dung.html](https://vntalking.com/interface-trong-java-ban-da-hieu-dung.html)  

*   Bài này giống cách làm bài 13: [Tham khảo](/bai-13-thuc-hanh-lap-trinh-huong-doi-tuong)

### Code đầy đủ:

*   Phần dưới có thể thiếu, tải về đây để đúng yêu cầu bài
*   Code để tham khảo, Chúc các bạn sẽ học tập tốt.

[`Bài14.zip`](https://bit.ly/2SQtD8S)

pass giải nén: `fithou.netlify.app`

### Tạo lớp abstract xe.java để quản lý xe

Không khác gì so với việc sử dụng class. Vì bài này khai triển không được nhiều...

```java
package TH5.bai14;

import java.util.Scanner;

abstract class xe {
    public String tenXe, mauSac;
    public float tienThue, giaBan, thueTruocBa, thueDacBiet;

    public xe() {
        tenXe = "";
        mauSac = "";
        tienThue = 0.0f;
        giaBan = 0.0f;
    }

    public xe(String tienXe, String mauSac, float tienThue, float giaBan, float thueTruocBa, float thueDacBiet) {
        this.tenXe = tienXe;
        this.giaBan = giaBan;
        this.mauSac = mauSac;
        this.tienThue = tienThue;
        this.thueTruocBa = thueTruocBa;
        this.thueDacBiet = thueDacBiet;
    }

    public void nhap() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap vao ten xe: ");
        tenXe = sc.nextLine();
        System.out.print("Nhap vao mau xe: ");
        mauSac = sc.nextLine();
        System.out.print("Nhap vao gia ban: ");
        giaBan = sc.nextFloat();
    }
    public float thue() {
        return (float)(giaBan*0.1);
    }
    public void xuat() {
        System.out.print("\nTen xe: "+ tenXe);
        System.out.print("\nMau xe: "+ mauSac);
        System.out.print("\nGia ban: "+ giaBan);
    }

}

```

### Tạo interface `info.java` để khai báo hàm trừu tượng

```java
package TH5.bai14;  
 public interface info {  
     public void nhap();  
     public void xuat();  
 }
 ```

### Tạo lớp `xeDap.java `

```java
package TH5.bai14;
import  java.util.Scanner;
public class xeDap extends xe implements info{
    public int soBanh;
    public xeDap() {
        super();
        soBanh= 0;
    }
    public xeDap(int soBanh) {
        this.soBanh = soBanh;
    }
    public void nhap() {
        super.nhap();
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap so banh: ");
        soBanh = sc.nextInt();
    }
    public float thue() {
        tienThue= super.thue();
        return tienThue;
    }

    public void xuat() {
        super.xuat();
        System.out.print("\nso Banh xe: "+ soBanh);
        System.out.print("\nTien thue: "+thue());
    }
}

```

### Tạo lớp `xeMay.java`

```java
package TH5.bai14;

import java.util.Scanner;

public class xeMay extends xe implements info{
    public float dungTich;
    public xeMay() {
        super();
        dungTich= 0.0f;
    }
    public xeMay(float dungTich) {
        this.dungTich = dungTich;
    }
    public void nhap() {
        super.nhap();
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap dung tich xe: ");
        dungTich = sc.nextFloat();
    }
    public float thue() {
        tienThue= super.thue()+(float)(giaBan*0.05);
        return tienThue;
    }
    public void xuat() {
        super.xuat();
        System.out.print("\nDung tich xe: "+ dungTich);
        System.out.print("\nTien thue: "+thue());
    }
}

```

###  Tạo lớp `oToTai.java`

```java
package TH5.bai14;

import java.util.Scanner;

public class oToTai extends xe implements info{
    public float trongTai;
    public oToTai() {
        super();
        trongTai= 0.0f;
    }
    public oToTai(float dungTich) {
        this.trongTai = dungTich;
    }
    public void nhap() {
        super.nhap();
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap trong tai xe: ");
        trongTai = sc.nextFloat();
    }
    public float thue() {
        tienThue= super.thue()+(float)(giaBan*0.02);
        return tienThue;
    }
    public float getThue(){
        return tienThue;
    };
    public void xuat() {
        super.xuat();
        System.out.print("\nTrong tai xe: "+ trongTai);
        System.out.print("\nTien thue: "+thue());
    }
}

```

### Tạo lớp `oToKhach.java`

```java
package TH5.bai14;

import java.util.Scanner;

public class oToKhach extends xe implements info{
    public int soCho;
    public oToKhach() {
        super();
        soCho= 0;
    }
    public oToKhach(int soCho) {
        this.soCho = soCho;
    }
    public void nhap() {
        super.nhap();
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap so cho xe: ");
        soCho = sc.nextInt();
    }
    public float thue() {
        if(soCho >=5) {
            tienThue= super.thue()+(float)(giaBan*0.5);
        }
        else {
            tienThue= super.thue()+(float)(giaBan*0.7);
        }
        return tienThue;
    }
    public void xuat() {
        super.xuat();
        System.out.print("\nSo cho tren xe: "+ soCho);
        System.out.print("\nTien thue: "+thue());
    }
}

```

### Tạo `danhSach.java` để quản lý theo yêu cầu bài

```java
package TH5.bai14;

import java.util.Scanner;
import java.util.ArrayList;
public class danhSach {
    int dem;
    ArrayList<xe> DS;
    public void nhapDSXe(){
        Scanner input = new Scanner(System.in);
        int i, n, k;
        dem=0;
        System.out.print("\nNhap so xe: ");
        n = input.nextInt();
        DS = new ArrayList<>(n); // cap phat bo nho cho DS
        for (i = 0; i < n; i++) {
            System.out.print("\nCac loai xe nhap(1: xe dap, 2: xe may, 3: xe tai, 4: xe khach): ");
            k = input.nextInt();
            if (k == 1) {
                xeDap x= new xeDap();
                x.nhap();
                DS.add(x);
            }
            else if(k == 2) {
                xeMay x= new xeMay();
                x.nhap();
                DS.add(x);
            }
            else if(k == 3) {
                oToTai x= new oToTai();
                x.nhap();
                DS.add(x);
            }
            else if(k == 4) {
                oToKhach x= new oToKhach();
                x.nhap();
                DS.add(x);
                dem++;
            }
            else i--;
        }
    }
    public void xuatDSXe() {
        for(xe x:DS) {
            x.xuat();
        }
    }
    public void demXeKhach() {
       System.out.printf("\n\nSo xe khach la: %d\n",dem);
    }
    public void thueTai() {
        float max = 0.0f;
        for( xe x:DS) {
            if(x instanceof oToTai && ((oToTai) x).getThue()>max){
                max = ((oToTai) x).getThue();
            }
        }
        System.out.printf("\nThue o to tai cao nhat la: %.0f\n",max);
    }
    public void dSXeDap() {
        for(xe x:DS) {
            if(x instanceof xeDap && ((xeDap) x).soBanh>0) {
                x.xuat();
            }
        }
    }
}
```

### Tạo `bai14.java` để gọi hàm main()

Xem và tải từ phần **code đầy đủ**

### Kết quả test

[![](https://1.bp.blogspot.com/-fWE4WjfJuR0/XohV35vpwuI/AAAAAAAAeVA/ETcbJKCv8CwtoAuPEQuOx-C5BNDiNQGIwCLcBGAsYHQ/s320/Screen%2BShot%2B2020-04-04%2Bat%2B4.37.45%2BPM.png)](https://1.bp.blogspot.com/-fWE4WjfJuR0/XohV35vpwuI/AAAAAAAAeVA/ETcbJKCv8CwtoAuPEQuOx-C5BNDiNQGIwCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-04%2Bat%2B4.37.45%2BPM.png)

  

"/Users/danh/Documents/xxx/th\_lthdt/out/production/th\_lthdt" 

Nhap so xe: 4

  

Cac loai xe nhap(1: xe dap, 2: xe may, 3: xe tai, 4: xe khach): 2

Nhap vao ten xe: honda

Nhap vao mau xe: den

Nhap vao gia ban: 300

Nhap dung tich xe: 21

  

Cac loai xe nhap(1: xe dap, 2: xe may, 3: xe tai, 4: xe khach): 1

Nhap vao ten xe: viet nhat

Nhap vao mau xe: trag

Nhap vao gia ban: 30

Nhap so banh: 2

  

Cac loai xe nhap(1: xe dap, 2: xe may, 3: xe tai, 4: xe khach): 3

Nhap vao ten xe: truong phat

Nhap vao mau xe: xanh

Nhap vao gia ban: 500

Nhap trong tai xe: 12

  

Cac loai xe nhap(1: xe dap, 2: xe may, 3: xe tai, 4: xe khach): 4

Nhap vao ten xe: truong hai

Nhap vao mau xe: tin

Nhap vao gia ban: 900

Nhap so cho xe: 30

  

DANH SACH XE : 

Ten xe: honda

Mau xe: den

Gia ban: 300.0

Dung tich xe: 21.0

Tien thue: 45.0

Ten xe: viet nhat

Mau xe: trag

Gia ban: 30.0

so Banh xe: 2

Tien thue: 3.0

Ten xe: truong phat

Mau xe: xanh

Gia ban: 500.0

Trong tai xe: 12.0

Tien thue: 60.0

Ten xe: truong hai

Mau xe: tin

Gia ban: 900.0

So cho tren xe: 30

Tien thue: 540.0

  

So xe khach la: 1

  

Thue o to tai cao nhat la: 60

  

Danh sach xe dap: 

Ten xe: viet nhat

Mau xe: trag

Gia ban: 30.0

so Banh xe: 2

Tien thue: 3.0

Process finished with exit code 0