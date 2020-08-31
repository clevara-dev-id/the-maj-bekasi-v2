<template>
  <div id="blog-detail">
    {{ data }}
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    const data = params.slug
    return { data }
  }
}
</script>

<style lang="scss" scoped>
  #blog-detail {
    height: 100vh !important;
    padding-top: 103.2px;
  }
</style>