---
title: Kinh nghiệm BTL Cấu trúc & Giải thuật
subtitle: Code + hướng dẫn + file BTL
category:
  - cấu trúc dữ liệu và giải thuật
author: Ngọc Danh
date: 2020-10-10T03:49:49.295Z
featureImage: /uploads/baiviet/kinhnghiem-ctgt.jpg
---
Hôm nay mình sẽ hướng dẫn các bạn làm bài tập lớn môn "Cấu trúc và giải thuật".  Môn này được đánh giá khá khó và quan trọng trong chương trình học. Khi có một nền tảng giải thuật tốt, bạn có thể giải quyết rất nhiều bài toán khó. Bắt đầu thôi nào ^^

## 1. Yêu cầu từ thầy cô

Ở trường, môn CT & GT được chia làm theo nhóm tối đa 4 bạn. Yêu cầu như sau:

![đề bài cấu trúc giải thuật](/uploads/baiviet/kinhnghiem-ctgt-debai.jpg)

## 2. Create a New Campaign

Go to "Campaigns" in the main navigation of the Mailchimp dashboard and then click the "Create Campaign" button on the top right.

## 3. Start Signup Form

From the modal overlay that appears choose "Signup Form", then click "Begin" under "Embedded Form"

![Mailchimp create signup form](/uploads/screen-shot-2019-08-01-at-1.03.08-pm.png)

## 4. Get Form Action

Under "Copy/paste onto your site" you'll see the markup  for the newsletter form. Just copy the form action value from the form

![copy form action from mailchimp](/uploads/screen-shot-2019-08-01-at-1.05.09-pm.png)

## 5. Add the Action to the Awake Site Configuration

```
// Can be the form action on a mail chimp form, a hubspot form,
// or any other url you want to post the form data tomailchimp: {
    on: true,
    formAction:'enter url here'
}
```
