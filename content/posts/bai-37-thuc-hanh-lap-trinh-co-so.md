---
title: Bài 37 - thực hành lập trình cơ sở
subtitle: bài tập thực hành trong C/C++
category:
  - thực hành lập trình cơ sở
author: Ngọc Danh
date: 2020-09-27T19:59:59.000Z
featureImage: /uploads/baiviet/cpp.png
---
> **Bài 37** xem đề tại [đây](/de-bai-thuc-hanh-lap-trinh-co-so)

## Code:

```c++
#include <bits/stdc++.h>

using namespace std;

// bai 37 - fithou.netlify.app - @NgocDanh

struct TB {
    int cuocPhi, soThueBao;
    char tenKH[30], ngayLap[20];
};
void nhapDS(int &n, TB ds[]);
void xuatDS(int n, TB ds[]);
void sapXepDS(int n, TB ds[]);
void thueBao(int n, TB ds[]);
void themThueBao(int &n, TB ds[]);
void xoaThueBao(int &n, TB ds[]);
int main() {
    int n, dem;
    TB ds[100];

    while(true) {
        system("cls");
        cout<<"*********************************************\n";
        cout<<"**    CHUONG TRINH QUAN LY THUE BAO          **\n";
        cout<<"**      1. Nhap du lieu                      **\n";
        cout<<"**      2. In danh sach thue bao             **\n";
        cout<<"**      3. Thue bao cuoc phi cao nhat        **\n";
        cout<<"**      4. Sap xep thu tu theo cuoc phi      **\n";
        cout<<"**      5. Xoa cac thue bao phi duoi 10.000  **\n";
        cout<<"**      6. Them moi thue bao vao danh sach   **\n";
        cout<<"**      0. Thoat khoi chuong trinh           **\n";
        cout<<"**       Nhap lua chon cua ban          **\n";
        cin>>dem;
        switch (dem) {
        case 1:
            cout<<"\nBan da chon nhap thong tin thue bao! \n";
            cout<<setw(50)<<setfill('-')<<endl;
            nhapDS(n, ds);
            cout<<"An phim bat ky de tiep tuc\n";
            break;
        case 2:
            cout<<"Ban da chon xuat danh sach thue bao! \n";
            cout<<setw(50)<<setfill('-')<<endl;
            xuatDS(n, ds);
            cout<<"An phim bat ky de tiep tuc\n";
            break;
        case 3:
            cout<<"\nBan da chon sap xep danh sach theo cuoc phi! \n";
            cout<<setw(50)<<setfill('-')<<endl;
            sapXepDS (n, ds);
            cout<<"An phim bat ky de tiep tuc\n";
            break;
        case 4:
            cout<<"\nBan da chon tim thue bao cuoc phi cao nhat! \n";
            cout<<setw(50)<<setfill('-')<<endl;
            thueBao(n, ds);
            cout<<"An phim bat ky de tiep tuc\n";
            break;
        case 5:
            cout<<"\nBan da chon them moi thue bao! \n";
            cout<<setw(50)<<setfill('-')<<endl;
            themThueBao(n, ds);
            cout<<"An phim bat ky de tiep tuc\n";
            break;
        case 6:
            cout<<"\nBan da chon xoa thue bao cuoc duoi 10000! \n";
            cout<<setw(50)<<setfill('-')<<endl;
            xoaThueBao(n, ds);
            cout<<"An phim bat ky de tiep tuc\n";
            break;
        case 0:
            cout<<"ban da chon thoat chuong trinh";
            exit(1);
        }
    }





}

//nhap vao danh sach thue bao

void nhapDS(int &n, TB ds[]) {
    int i =0;
    int stb, sdt;
    do {

        cout<<"\nNhap thong tin thue bao "<<i+1;
        cout<<"\nSo dien thoai thue bao: ";
        cin>>sdt;


        if(sdt == 0) {
            break;
        } else {
            ds[i].soThueBao = sdt;
            cout<<"Ho va ten thue bao: ";
            fflush(stdin);
            cin.getline(ds[i].tenKH, 30);
            cout<<"Cuoc Phi thue bao: ";
            cin>>ds[i].cuocPhi;
            cout<<"Ngay lap thue bao: ";
            fflush(stdin);
            cin>>ds[i].ngayLap;
            i++;

        }

    } while(stb != 0);
    n = i;
}

// in ra thong tin cua danh sach cac thue bao
void xuatDS(int n, TB ds[]) {
    cout<<setw(70)<<setfill('*');
    cout<<setw(20)<<setfill(' ')<<"STT";
    cout<<setw(20)<<setfill(' ')<<"So thue bao";
    cout<<setw(20)<<setfill(' ')<<"Ho Ten";
    cout<<setw(20)<<setfill(' ')<<"Cuoc Phi";
    cout<<setw(20)<<setfill(' ')<<"Ngay lap\n";
    for(int i = 0; i<n; i++ ) {
        cout<<setw(20)<<setfill(' ')<<i+1;
        cout<<setw(20)<<setfill(' ')<<ds[i].soThueBao;
        cout<<setw(20)<<setfill(' ')<<ds[i].tenKH;
        cout<<setw(20)<<setfill(' ')<<ds[i].cuocPhi;
        cout<<setw(20)<<setfill(' ')<<ds[i].ngayLap<<endl;
    }

}

// Sap xep thue bao theo thu tu giam dan cua tien phi cuoc
void sapXepDS ( int n, TB ds[]) {
    TB tg;
    for(int i = 0; i <n; i++) {
        for (int j =i+1; j< n; j++) {
            if(ds[i].cuocPhi < ds[j].cuocPhi ) {
                tg = ds[i];
                ds[i] = ds[j];
                ds[j] = tg;

            }
        }
    }
    cout<<"\nDanh sach sau khi sap xep giam dan cuoc phi "<<endl;
    xuatDS(n, ds);
}

void thueBao(int n, TB ds[]) {
    int MAX;
    MAX =0;
    for(int i = 0; i <n; i++) {
        if(MAX < ds[i].cuocPhi ) {
            MAX = ds[i].cuocPhi;
        }
    }
    cout<<"\nCuoc phi cao nhat la: "<<MAX<<endl;

}
void themThueBao (int &n, TB ds[]) {
    cout<<"Nhap vao thong tin thue bao muon them vao danh sach: "<<endl;


    cout<<"Ho va ten thue bao: ";
    fflush(stdin);
    cin.getline(ds[n].tenKH, 30);
    cout<<"So dien thoai thue bao: ";
    cin>>ds[n].soThueBao;
    cout<<"Cuoc Phi thue bao: ";
    cin>>ds[n].cuocPhi;
    cout<<"Ngay lap thue bao: ";
    cin>>ds[n].ngayLap;
    n++;

    xuatDS(n, ds);
}
void xoaThueBao(int &n, TB ds[]) {
    int dem =n;
    for (int i =0; i<n; i++) {

        if(ds[i].cuocPhi <10000) {
            ds[i] = ds[i+1];
            for(int j=i; j<n; j++) {
                ds[j] = ds[j+1];
            }
            i--;
            n--;
        }
    }

    cout<<"\ndanh sach sau khi xoa  la: "<<endl;

    xuatDS(n, ds);
}

```