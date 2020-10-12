<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Bài tập lớn"
      subtitle="Tổng hợp bài tập lớn gồm file word + code"
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="manager-box">
          <div class="intro-box">
            <p>Trang tổng hợp bài tập lớn từ các khóa.</p>
            <p>
              Nếu bạn muốn đóng góp vào kho chung vui lòng gửi email tới:
              <a href="mailto:ngocdanh.fithou@gmail.com">Ngọc Danh</a>.
            </p>
          </div>
          <div class="tile is-child box">
            <h1 class="title-box">
              Kỹ thuật lập trình cơ sở
            </h1>
            <hr />
            <div class="content">
              <div class="tailieu-box">
                <h3>
                  Tài liệu:
                </h3>
                <ul>
                  <li>
                    <span>Bài tập lớn word:</span>
                    <a href="#" target="_blank">BTL_word.zip</a>
                  </li>
                  <li>
                    <span>Bài tập lớn code:</span>
                    <a href="#" target="_blank">BTL_word.zip</a>
                  </li>
                </ul>
              </div>
              <div class="tailieu-box">
                <h4>
                  Kinh nghiệm:
                </h4>
                <ul>
                  <li>
                    <span>Kinh nghiệm làm bài:</span>
                    <a href="#" target="_blank">tại đây</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <h1 class="title-box">
              Lập trình hướng đối tượng
            </h1>
            <hr />
            <div class="content">
              <div class="tailieu-box">
                <h3>
                  Tài liệu:
                </h3>
                <ul>
                  <li>
                    <span>Bài tập lớn word:</span>
                    <a href="#" target="_blank">BTL_word.zip</a>
                  </li>
                  <li>
                    <span>Bài tập lớn code:</span>
                    <a href="#" target="_blank">BTL_word.zip</a>
                  </li>
                </ul>
              </div>
              <div class="tailieu-box">
                <h4>
                  Kinh nghiệm:
                </h4>
                <ul>
                  <li>
                    <span>Kinh nghiệm làm bài:</span>
                    <a href="#" target="_blank">tại đây</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <h1 class="title-box">
              Cấu trúc dữ liệu và giải thuật
            </h1>
            <hr />
            <div class="content">
              <div class="tailieu-box">
                <h3>
                  Tài liệu:
                </h3>
                <ul>
                  <li>
                    <span>Bài tập lớn word+code:</span>
                  </li>
                </ul>
              </div>
              <div class="tailieu-box">
                <h4>
                  Kinh nghiệm:
                </h4>
                <ul>
                  <li>
                    <span>Kinh nghiệm làm bài:</span>
                    <a href="/kinh-nghiem-btl-cau-truc-giai-thuat">tại đây</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Bài viết mới nhất
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Bài tập lớn | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
