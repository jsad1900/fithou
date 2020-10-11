<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Giới thiệu"
      subtitle="Chia sẻ, hướng dẫn tại FITHOU"
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h2>Giới thiệu trang web</h2>
          <p>
            Trang web là dự án tổng hợp lại quá trình học tập của
            <code>Ngọc Danh</code> tại khoa công nghệ thông tin đại học Mở Hà
            Nội.
          </p>
          <p>
            Tổng hợp bài thực hành, bài tập lớn, kinh nghiệm học tập,... Dù đã
            cố gắng nhưng sẽ không tránh khỏi một số lỗi. Nếu thấy bài viết
            thiếu sót hãy báo lại để sửa chữa.
          </p>
          <p>
            Chia sẻ là kết nối, mỗi ngày trôi qua có những điều mới mẻ trong
            cuộc sống.
          </p>

          <h2>Đóng góp bài viết</h2>
          <p>
            Tôi quá nhỏ bé để chia sẻ hết được và cũng không giỏi trong nhiều
            môn khác.
          </p>
          <p>
            Nếu bạn muốn viết các chủ đề trong trang web, hoàn toàn dễ dàng. Tên
            của bạn sẽ hiện ở bài viết, sự đóng góp của bạn sẽ được mọi người
            ghi nhận. Nhắn cho tôi trong phần liên hệ để thêm bài viết của bạn
            :D
          </p>

          <h2>Liên hệ</h2>
          <p>
            - Email:
            <a href="mailto:ngocdanh.fithou@gmail.com" target="_blank">
              ngocdanh.fithou@gmail.com</a
            >
          </p>
          <p>
            - Facebook:
            <a href="https://www.facebook.com/ngocdanh0508" target="_blank">
              https://facebook.com/ngocdanh0508</a
            >
          </p>
          <p>
            - Telegram:
            <a href="https://www.t.me/ngocdanh0508">
              https://t.me/ngocdanh0508</a
            >
          </p>
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
