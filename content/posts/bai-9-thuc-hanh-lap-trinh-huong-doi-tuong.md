---
title: Bài 9 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-16T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

> Bài 9, Thêm vào lớp CongNhan đã cho ở bài 3 (phần II) phương thức:  
> \+ tinhluong(pc: float): float  
> INPUT: pc:float// % phụ cấp được hưởng  
> OUTPUT: lương của công nhân  
> XỬ LÝ: Tính lương theo công thức  
> Lương = lcb\*hsl\*(1+pc)  
> Viết chương trình:  
> 
> *   Cài đặt lương cơ bản của công nhân =1150, nhập vào danh sách N công nhân(0<n<=20)
> 
> *   Nhập mức phụ cấp P
> 
> *   Hiện danh sách công nhân với các thông tin: Họ tên, hệ số lương, Lương T(chưa gồm phụ cấp), Lương S(gồm phụ cấp)
> 
> *    tính tổng số tiền chênh lệch do chi trả phụ cấp.

Bài này được kế thừa từ bài 6: [https://blog.ndanh.com/2020/03/bai-6-nhap-in-danh-sach-cong-nhan-voi-arryalist-trong-java.html](https://blog.ndanh.com/2020/03/bai-6-nhap-in-danh-sach-cong-nhan-voi-arryalist-trong-java.html)  
Dựa vào bài 6, bổ sung một số thuộc tính lương phụ cấp, in ra sự thay đổi lương trước và sau khi có phụ cấp.  

Code đầy đủ:
------------

[`Bài 9.zip`](https://bit.ly/3lKe1Qu)  

pass giải nén: `fithou.netlify.app`

### class `CONGNHAN.java`

```java
package TH3.bai9;

import java.util.Scanner;

public class CONGNHAN {
    public float lCB, hSL, luongT, luongS, pc;
    public String hoTen;
    public void nhapCN() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap vao ho ten: ");
        hoTen = sc.nextLine();
        System.out.print("Nhap vao he so luong: ");
        hSL = sc.nextFloat();
        System.out.print("Nhap vao he so phu cap: ");
        pc = sc.nextFloat();
    }
    public void sethSL(float h) {
        hSL = h;
    }
    public float gethSL() {
        return hSL;
    }
    public void setHoTen(String ht) {
       hoTen= ht;
    }
    public String getHoTen() {
        return  hoTen;
    }
    public float tinhLuongT(float lCB) {
        this.lCB = lCB;
        luongT = hSL*lCB;
        return luongT;
    }
    public float tinhLuongS(float pc) {
        luongS = hSL*lCB*(1+pc);
        return luongS;
    }
    public void xuatCN() {
        System.out.printf("%20s%15.2f%15.2f%15.2f\n", hoTen, hSL, luongT, luongS);
    }
    public void xuatChenhLech() {
        System.out.printf("%20s%15.2f%15.2f%15.2f%20.2f\n", hoTen, hSL, luongT, luongS, luongS - luongT);
    }

}
```

#### class `DSCONGNHAN.java`

```java
package TH3.bai9;

import java.util.ArrayList;
import java.util.Scanner;

public class DSCONGNHAN {
    ArrayList<CONGNHAN> cn;
    public void nhapDS() {
        Scanner input = new Scanner(System.in);
        int i, n;
        do {
            System.out.print("\nNhap vao so cong nhan: ");
            n = input.nextInt();
        } while (n < 0 && n > 20);
        cn = new ArrayList<>(n); // cap phat bo nho cho n  cong nhan
        for (i = 0; i < n; i++) {
            CONGNHAN x = new CONGNHAN();
            System.out.printf("\nNhap cong nhan thu %d\n", i + 1);
            x.nhapCN();
            x.tinhLuongT(1150);
            x.tinhLuongS(x.pc);
            cn.add(x);
        }

    }
    public void xuatDS() {
        System.out.println("Danh sach cong nhan: \n");
        System.out.printf("%20s%15s%15s%15s","Ho ten","HS luong", "luong T", "luong S\n");
        for(CONGNHAN x:cn){
            x.xuatCN();
        }
    }
    public void xuatDSluongChenh() {
        Scanner sc = new Scanner(System.in);
        System.out.printf("\nDanh sach cong nhan luong chenh lech: \n");
        System.out.printf("%20s%15s%15s%15s%20s","Ho ten","HS luong", "luong T", "luong S","luong chenh lech\n");
        for(CONGNHAN x:cn) {
                x.xuatChenhLech();
        }
    }

}
```

#### class `QLCONGNHAN.java`

```java
package TH3.bai9;

public class QLCONGNHAN {
    public static void main(String... ngocdanh){
        DSCONGNHAN ds= new DSCONGNHAN();
        ds.nhapDS();
        ds.xuatDS();
        ds.xuatDSluongChenh();
    }
}
```

#### kết quả test:
-------------

Do mình xài linux nên không thể chụp kéo dài. Đây là kết quả test

  

TH3.bai9.QLCONGNHAN

  

Nhap vao so cong nhan: 3

  

Nhap cong nhan thu 1

Nhap vao ho ten: ngoc danh

Nhap vao he so luong: 2

Nhap vao he so phu cap: 1.1

  

Nhap cong nhan thu 2

Nhap vao ho ten: le bao

Nhap vao he so luong: 1.2

Nhap vao he so phu cap: 0.2

  

Nhap cong nhan thu 3

Nhap vao ho ten: My duyen

Nhap vao he so luong: 1.5

Nhap vao he so phu cap: 0.3

  

[![](https://1.bp.blogspot.com/-8yHUoc9PykA/XnOxXezwHhI/AAAAAAAAd38/Eu9KoFrujxwDYTfv5e0ogbrgTJwuziRjQCLcBGAsYHQ/s1600/bai9.png)](https://1.bp.blogspot.com/-8yHUoc9PykA/XnOxXezwHhI/AAAAAAAAd38/Eu9KoFrujxwDYTfv5e0ogbrgTJwuziRjQCLcBGAsYHQ/s1600/bai9.png)
