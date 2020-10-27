<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
    </site-hero>
    <div class="container khoa-hoc"></div>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/prism.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-cpp.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-c.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-java.min.js"></script>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'
const ig = document.getElementsByTagName('img')
for (const i of ig) {
  i.style.display = 'table'
  i.style.margin = '0 auto'
}
const hf = document.querySelectorAll('#post-page a')
for (const i of hf) {
  i.setAttribute('target', '_blank')
}
export default {
  name: 'HomePage',
  head() {
    return {
      title: `${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
.khoa-hoc {
  display: none;
  padding-top: 30px;
}
</style>
