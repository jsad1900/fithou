---
title: Cấu trúc struct trong C/C++
subtitle: bài tập thực hành trong C/C++
category:
  - kỹ thuật lập trình cơ sở
author: Ngọc Danh
date: 2020-10-24
featureImage: /uploads/baiviet/cpp.png
---

Khi quản lý danh sách gồm nhiều đối tượng khác nhau, trong C/C++ chúng ta sử dụng kiểu cấu trúc struct. 

Với một mảng bình thường, ta sẽ chỉ lưu được các dữ liệu cùng kiểu. Ví dụ 

Ví dụ Quản lý danh sách nhiều học sinh gồm các thuộc tính họ tên, lớp, mã sinh viên.

## Code:

```c++
 #include <iostream>
#include <stdio.h>
#include <iomanip>


using namespace std;

//fithou.netlify.app
struct MA {
    float donGia;
    char tenMonAn[30], donViTinh[10];
};

void menu(int n, MA ds[]);

void nhapDS(int &n, MA ds[]);

void xuatDS(int n, MA ds[]);

void xuat(MA ds);

void timMA(int n, MA ds[]);

void thongKe(int &n, MA ds[]);

int main() {
    MA ds[100];
    int n = 0;
    menu(n, ds);
    return 0;
}

void menu(int n, MA ds[]) {
    while (true) {
        system("CLS");
        cout << "*********************************************\n";
        cout << "**      CHUONG TRINH QL MON AN              **\n";
        cout << "**      1. Nhap du lieu                     **\n";
        cout << "**      2. In danh sach mon an              **\n";
        cout << "**      3. Tim mon an co gia cao nhat       **\n";
        cout << "**      4. Thong ke mon an trong [x,y]      **\n";
        cout << "**      0. Thoat khoi chuong trinh          **\n";
        cout << "**      Nhap lua chon cua ban               **\n";
        int chon;
        cin >> chon;
        switch (chon) {
            case 1:
                nhapDS(n, ds);
                cout << "An phim bat ky de tiep tuc\n";
                getch();
                break;
            case 2:
                xuatDS(n, ds);
                cout << "An phim bat ky de tiep tuc\n";
                getch();
                break;
            case 3:
                timMA(n, ds);
                cout << "An phim bat ky de tiep tuc\n";
                getch();
                break;
            case 4:
                thongKe(n, ds);
                cout << "An phim bat ky de tiep tuc\n";
                getch();
                break;
            case 0:
                cout << "ban da chon thoat chuong trinh";
                exit(0);
        }
    }
}

void nhapDS(int &n, MA ds[]) {
    cout << "Nhap so mon an: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "\nNhap mon an thu " << i + 1 << endl;

        cout << "Nhap ten mon an: ";
        cin >> ds[i].tenMonAn;

        cout << "Nhap don vi tinh: ";
        fflush(stdin);
        gets(ds[i].donViTinh);

        cout << "Nhap gia mon an: ";
        cin >> ds[i].donGia;

    }
}

void xuat(MA x) {
    cout << setw(25) << x.tenMonAn;
    cout << setw(25) << x.donGia;
    cout << setw(15) << x.donViTinh << endl;
}

void xuatDS(int n, MA ds[]) {
    if (n > 0) {
        cout << setw(25) << "Mon An" << setw(25) << "Don Gia" << setw(15) << "Don Vi" << endl;

        for (int i = 0; i < n; i++) {
            xuat(ds[i]);
        }
    } else {
        cout << "Danh sach khong ton tai!" << endl;
    }
}

void timMA(int n, MA ds[]) {
    int max = 0;
    int j = 0;
    cout << "----------------------------------" << endl;
    for (int i = 0; i < n; i++) {
        if (ds[i].donGia > max) {
            max = ds[i].donGia;
            j = i;
        }
    }
    cout << "Don gia co gia tri lon nhat la: " << endl;
    cout << setw(25) << "Mon An" << setw(25) << "Don Gia" << setw(15) << "Don Vi" << endl;
    xuat(ds[j]);
}

void ghiFile(MA ds, int i) {
    FILE *f;
    f = fopen("thucdon.dat", "ab");
    fwrite(&ds, sizeof(MA), 1, f);
    fclose(f);
}

void xuatFile(int &n, MA ds[]) {
    FILE *f;
    f = fopen("thucdon.dat", "rb");
    if (f == NULL) {
        cout << "Khong tim thay file" << endl;
        exit(1);
    }
    n = 0;
    while (fread(&ds[n], sizeof(MA), 1, f) == 1) {
        n++;
    }
    fclose(f);
    cout << "Danh sach doc tu File" << endl;
    xuatDS(n, ds);
}

void thongKe(int &n, MA ds[]) {
    float x, y;
    cout << "Nhap vao khoang x: ";
    cin >> x;
    cout << "Nhap vao khoang y: ";
    cin >> y;

    int j = 0;
    for (int i = 0; i < n; i++) {
        if (ds[i].donGia >= x && ds[i].donGia <= y) {
            ghiFile(ds[i], j);
            j++;
        }
    }
    cout << "----------------------------------" << endl;
    cout << "Danh sach mon an trong khoang [x, y]" << endl;
    xuatFile(n, ds);
}

```