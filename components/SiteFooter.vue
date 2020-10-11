<template>
  <footer class="site-footer">
    {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
    Rights Reserved
    <br />
    Made with <span style="color: #e25555;">&#9829;</span> with Nuxt.js and
    Netlify
  </footer>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  mounted() {
    Prism.highlightAll()
  }
  name: 'SiteFooter'
}
</script>

<style scoped>
footer {
  background: #eee;
  padding: 20px 10px;
  text-align: center;
  transition: 0.5s ease all;
}
</style>
