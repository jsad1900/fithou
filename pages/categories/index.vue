<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="Danh mục" image="/uploads/coder-min.jpg" />
    <main-section theme="one-column">
      <categories-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Danh mục | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
