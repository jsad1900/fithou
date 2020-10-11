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
          <div class="tile is-child box">
            <h1 class="title-box">
              Kỹ thuật lập trình cơ sở
            </h1>
            <hr />
            <div class="content">
              <div>
                <h3>
                  Tài liệu:
                </h3>
              </div>
              <p>Bài tập lớn word:</p>
              <a href="#">BTL_word.zip</a>
            </div>
          </div>
          <div class="tile is-child box">
            <h1>Lập trình hướng đối tượng</h1>
          </div>
          <div class="tile is-child box">
            <h1>Cấu trúc dữ liệu và giải thuật</h1>
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
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
