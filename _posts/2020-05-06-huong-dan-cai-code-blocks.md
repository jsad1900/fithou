---
layout: post
title:  "Hướng dẫn cài Code::Blocks học C/C++"
categories: [software]
---

Khi bắt đầu học lập trình, có rất nhiều bạn bắt đầu với ngôn ngữ C/C++. Với cú pháp mạch lạc, chạy nhanh cũng như khả năng logic, hiện nay C/C++ được sử dụng trong các trường đại học cho những sinh viên năm nhất.

Hôm nay, tôi sẽ hướng dẫn các bạn cài Code::Blocks, một IDE dùng để viết C/C++ rất phổ biến. Chi tiết qua hình ảnh.

[![](https://1.bp.blogspot.com/-Di3QLc7UMNM/XzcwO1bHlbI/AAAAAAAAi2o/BzUsq6ikzNUCPalf0Ql-2uSLNNRvHmobwCLcBGAsYHQ/s0/codeblocks-featured.png)](https://1.bp.blogspot.com/-Di3QLc7UMNM/XzcwO1bHlbI/AAAAAAAAi2o/BzUsq6ikzNUCPalf0Ql-2uSLNNRvHmobwCLcBGAsYHQ/s246/codeblocks-featured.png)

1, Tải phần mềm
---------------

Các bạn tải Code::Blocks theo đường dẫn sau, phiên bản là 17.12. 

[//codeblocks-17.12mingw.exe](https://bit.ly/2E87lvm)

*   Phiên bản mới hơn hiện tại là 20.3 nhưng trong quá trình chạy sẽ gặp vài lỗi, nên tôi khuyên bạn chạy 17.12
*   Phiên bản đã tích hợp MingW, Compiler để chạy C/C++
*   Muốn tải thêm các phiên bản khác, xem [ở đây](https://sourceforge.net/projects/codeblocks/files/Binaries/)

2, Cài đặt
----------

Sau khi tải xong về máy, bạn chuột trái để mở file để cài đặt

[![](https://1.bp.blogspot.com/-vbmApuK7dqU/XzczhCk0VmI/AAAAAAAAi20/NIUCJ6IVga4NBD-27WVS5HMTpcTs0ZloQCLcBGAsYHQ/s0/1.jpg)](https://1.bp.blogspot.com/-vbmApuK7dqU/XzczhCk0VmI/AAAAAAAAi20/NIUCJ6IVga4NBD-27WVS5HMTpcTs0ZloQCLcBGAsYHQ/s499/1.jpg)

[![](https://1.bp.blogspot.com/-tsdvgmsbmfQ/Xzczj4ijKZI/AAAAAAAAi24/K_-RX-E5aKUHGSZ2z7EsBh-SNRNwbYXrQCLcBGAsYHQ/s0/2.jpg)](https://1.bp.blogspot.com/-tsdvgmsbmfQ/Xzczj4ijKZI/AAAAAAAAi24/K_-RX-E5aKUHGSZ2z7EsBh-SNRNwbYXrQCLcBGAsYHQ/s499/2.jpg)

[![](https://1.bp.blogspot.com/-xr14YeIMRVs/XzczmvPL5KI/AAAAAAAAi28/wNwI5YhID78pZl0ndXKanhW9FWlWVWO-gCLcBGAsYHQ/s0/3.jpg)](https://1.bp.blogspot.com/-xr14YeIMRVs/XzczmvPL5KI/AAAAAAAAi28/wNwI5YhID78pZl0ndXKanhW9FWlWVWO-gCLcBGAsYHQ/s499/3.jpg)

[![](https://1.bp.blogspot.com/-oKpxcDfQ954/XzczpNg-zII/AAAAAAAAi3A/e-idoakMmsoG5TImm4qYI4XU2VuJw0qMgCLcBGAsYHQ/s0/4.jpg)](https://1.bp.blogspot.com/-oKpxcDfQ954/XzczpNg-zII/AAAAAAAAi3A/e-idoakMmsoG5TImm4qYI4XU2VuJw0qMgCLcBGAsYHQ/s499/4.jpg)

[![](https://1.bp.blogspot.com/-YsuI5EI0e_k/XzczrwNJQPI/AAAAAAAAi3E/ievzANZ1b5ob-HpFN975RkiMMykI4oCUgCLcBGAsYHQ/s0/5.jpg)](https://1.bp.blogspot.com/-YsuI5EI0e_k/XzczrwNJQPI/AAAAAAAAi3E/ievzANZ1b5ob-HpFN975RkiMMykI4oCUgCLcBGAsYHQ/s499/5.jpg)

[![](https://1.bp.blogspot.com/-fTBGCKZ8vEs/XzczumoP2oI/AAAAAAAAi3I/vt0Jq8qrb9gAcIq7neglC8wlfNYByTJMwCLcBGAsYHQ/s0/6.jpg)](https://1.bp.blogspot.com/-fTBGCKZ8vEs/XzczumoP2oI/AAAAAAAAi3I/vt0Jq8qrb9gAcIq7neglC8wlfNYByTJMwCLcBGAsYHQ/s499/6.jpg)

Cài đặt xong, chúng ta sẽ thử chạy một chương trình C cơ bản.

[![](https://1.bp.blogspot.com/-KpjmRWRVIWE/Xzczxo4bsiI/AAAAAAAAi3Q/7G65pm6FtAolFQen8AOpFxAKr9v_cnoQwCLcBGAsYHQ/s640/8.jpg)](https://1.bp.blogspot.com/-KpjmRWRVIWE/Xzczxo4bsiI/AAAAAAAAi3Q/7G65pm6FtAolFQen8AOpFxAKr9v_cnoQwCLcBGAsYHQ/s864/8.jpg)

Chương trình C/C++ cơ bản

3, Tùy chỉnh Code::Blocks
-------------------------

Những tùy chỉnh sau là không bắt buộc nhưng sẽ giúp Code::Blocks dễ dàng sử dụng hơn trong quá trình Code

### Tắt kiểm tra chính tả

*   Bước 1: Vào đường dẫn **Settings/Editor...**

[![](https://1.bp.blogspot.com/-3OW9JvRnSNk/Xzc1UcE0BXI/AAAAAAAAi3o/mUuGby0S32E6tKGdVUksRSOMzOL9X1yigCLcBGAsYHQ/s640/9.jpg)](https://1.bp.blogspot.com/-3OW9JvRnSNk/Xzc1UcE0BXI/AAAAAAAAi3o/mUuGby0S32E6tKGdVUksRSOMzOL9X1yigCLcBGAsYHQ/s850/9.jpg)

*   Bước 2: Tìm đến **SpellChecker**, sau đó tắt hết mục **Enable...** ở bên cạnh

[![](https://1.bp.blogspot.com/-wwD5lfY6a4k/Xzc1o3_61II/AAAAAAAAi3w/2OySdU1lFqkhaIO1iL9yfcdtUmp95UtCwCLcBGAsYHQ/s640/10.jpg)](https://1.bp.blogspot.com/-wwD5lfY6a4k/Xzc1o3_61II/AAAAAAAAi3w/2OySdU1lFqkhaIO1iL9yfcdtUmp95UtCwCLcBGAsYHQ/s894/10.jpg)

### Tạo phím tắt Format Code

Khi viết code, nếu bị lộn xộn và lệch hàng chúng ta cần chỉnh lại vị trí để dễ nhìn hơn. Trong Code::Blocks có hỗ trợ việc Format Code, sau khi sử dụng code sẽ được tự động làm thẳng hàng.

[![](https://1.bp.blogspot.com/-kjqhu-_c60c/Xzc3FWVA-mI/AAAAAAAAi38/MDVrkMS1_NkgMq8JrCWSfb65AAyc2G2YgCLcBGAsYHQ/s640/11.jpg)](https://1.bp.blogspot.com/-kjqhu-_c60c/Xzc3FWVA-mI/AAAAAAAAi38/MDVrkMS1_NkgMq8JrCWSfb65AAyc2G2YgCLcBGAsYHQ/s894/11.jpg)

*   Bước 1: Vào **Setting/Editor....**
*   Bước 2: Tìm đến **Keyboard ShortCuts**(1) tìm đến mục **Plugins/Source code Formatter(Astyle)**
*   Bước 3: Nhìn ở cột bên phải mục **New shortcut**(4), đặt con trỏ chuột ở ô rồi ấn tổ hợp phím **Ctrl+Alt+L**. Sau đó bạn sẽ thấy ở mục **Current shorcut**(5) sẽ hiện phím tắt.

Vậy là đã thêm phít tắt thành công, sau này mỗi khi cần Format Code chỉ cần dùng tổ hợp phím **Ctrl+Alt+L** để làm gọn gàng lại code.