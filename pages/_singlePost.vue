<template>
  <div id="post-page" class="page-wrapper post-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <span
        v-if="author && $siteConfig.posts.displayAuthor"
        class="author-wrapper"
      >
        <strong>Tác giả:</strong> {{ author }}
      </span>
      <span v-if="date" class="date-wrapper">
        <strong>Đăng lúc:</strong> {{ date }}
      </span>
    </site-hero>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="post-wrapper">
          <markdown :markdown="$store.state.content" />
          <div class="author-active">
            <h2>
              Liên hệ
            </h2>
            <p>
              Nếu có bất kỳ thắc mắc về bài thực hành, bài tập lớn, chương trình
              học, có thể liên hệ với anh tại:
              <a href="https://www.facebook.com/ngocdanh0508"
                >facebook Ngọc Danh</a
              >
            </p>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/prism.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-cpp.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-c.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-java.min.js"></script>
          <div class="other-posts">
            <h6 class="subtitle is-size-4">
              Bài đăng khác
            </h6>
            <!-- Related Posts -->
            <posts-grid :number="3" :category="category" :exclude="slug" />
          </div>
          <disqus-comments :identifier="$route.params.singlePost" />
        </div>
      </template>
      <template v-slot:sidebar>
        <post-sidebar />
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import PostSidebar from '~/components/PostSidebar'
export default {
  components: {
    Markdown,
    PostSidebar
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
      'featureImage',
      'underSubtitle',
      'author',
      'category',
      'slug'
    ]),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'post', slug: params.singlePost })
  }
}
</script>
<style scoped lang="scss">
.edit-post {
  margin-bottom: 20px;
}
</style>
