---
title: Bài 16 - thực hành lập trình hướng đối tượng
subtitle: bài tập thực hành trong java
category:
  - thực hành lập trình hướng đối tượng
author: Ngọc Danh
date: 2020-09-24T19:59:59.000Z
featureImage: /uploads/baiviet/java.png
---

> Bài 16, vẽ sơ đồ bằng java như hình sau: 

[![](https://1.bp.blogspot.com/-KBgvWszwE_c/XokZXuSFKzI/AAAAAAAAeWI/ivcv8ZXNh04PglR7HI-t2bXFELZP6Ht2wCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-05%2Bat%2B6.32.29%2BAM.png)](https://draft.blogger.com/#)

Đây là một kiến thức mới so với những bài trước, để vẽ được hình này thì bạn phải sử dụng thư viện awt trong java, ngoài ra còn có thể sử dụng Swing nữa!

  
>Một bài hướng dẫn cơ bản về sử dụng awt để vẽ biểu đồ: [https://javatutorial.net/display-text-and-graphics-java-jframe](https://javatutorial.net/display-text-and-graphics-java-jframe)  

### Code đầy đủ 

[`Bài 16.zip`](https://bit.ly/34ViadI)

pass giải nén: `fithou.netlify.app`

### Tạo lớp biểu đồ để vẽ theo hình

```java
package TH6.bai16;

import java.awt.*;
import java.awt.event.*;
import java.util.Collections;


public class bieuDo extends Frame implements ActionListener {
    Label l1, l2, l3, l4;
    TextField t1, t2, t3, t4; //nhap gia tri vao
    Button click;
    int val1, val2, val3, val4; // value o TextField

    bieuDo() {
        super("Bảng biểu đồ NDanh");
        l1 = new Label("Red");
        l2 = new Label("Blue");
        l3 = new Label("Green");
        l4 = new Label("yellow");
        l1.setBounds(50, 50, 50, 20);
        l2.setBounds(140, 50, 50, 20);
        l3.setBounds(230, 50, 50, 20);
        l4.setBounds(330, 50, 50, 20);

        t1 = new TextField("70");
        t2 = new TextField("50");
        t3 = new TextField("100");
        t4 = new TextField("80");
        t1.setBounds(80, 50, 50, 20);
        t2.setBounds(170, 50, 50, 20);
        t3.setBounds(270, 50, 50, 20);
        t4.setBounds(380, 50, 50, 20);


        click = new Button("Click");
        click.setBounds(170, 100, 100, 30);
        click.addActionListener(this);
        add(t1);
        add(t2);
        add(t3);
        add(t4);
        add(l1);
        add(l2);
        add(l3);
        add(l4);
        add(click);

        setSize(500, 500);
        setLayout(null);
        setVisible(true);
        setBackground(Color.CYAN);

        String s1=t1.getText(),
                s2=t2.getText(),
                s3=t3.getText(),
                s4=t4.getText();
        val1 = Integer.parseInt(s1);
        val2 = Integer.parseInt(s2);
        val3 = Integer.parseInt(s3);
        val4 = Integer.parseInt(s4);

    }
    public void paint(Graphics grap) {
        grap.drawLine(50,100,50,450);
        grap.drawLine(50,450,450,450);

        grap.setColor(Color.red);
        grap.fillRect(100, 450-val1, 30, val1);
        grap.drawString(String.valueOf(val1), 100, 450-val1-4);

        grap.setColor(Color.blue);
        grap.fillRect(180, 450-val2, 30, val2);
        grap.drawString(String.valueOf(val2), 180, 450-val2-4);

        grap.setColor(Color.green);
        grap.fillRect(260, 450-val3, 30, val3);
        grap.drawString(String.valueOf(val3), 260, 450-val3-4);

        grap.setColor(Color.yellow);
        grap.fillRect(340, 450-val4, 30, val4);
        grap.drawString(String.valueOf(val4), 340, 450-val4-4);
    }
    @Override
    public void actionPerformed(ActionEvent event) {
        String s1=t1.getText(),
                s2=t2.getText(),
                s3=t3.getText(),
                s4=t4.getText();
        val1 = Integer.parseInt(s1);
        val2 = Integer.parseInt(s2);
        val3 = Integer.parseInt(s3);
        val4 = Integer.parseInt(s4);
        if (event.getSource()==click) {
            repaint();//ve lai
        }

    }


}
```

### Tạo lớp `bai16.java` để test vẽ hình

Tải và xem ở mục Code đầy đủ  

### Kết quả test

![](https://1.bp.blogspot.com/-_gUoYWFTHX0/XomFJbZx_xI/AAAAAAAAeWU/yW18wWwq8TEydfw6hyH5LKktnCflkMQOgCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-05%2Bat%2B2.12.05%2BPM.png)](https://1.bp.blogspot.com/-_gUoYWFTHX0/XomFJbZx_xI/AAAAAAAAeWU/yW18wWwq8TEydfw6hyH5LKktnCflkMQOgCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-05%2Bat%2B2.12.05%2BPM.png)