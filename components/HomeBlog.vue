<template>
  <div class="container mx-auto px-2 lg:px-16 pt-16 lg:pt-48">
    <h1 class="text-heading font-bold text-indigo-500 capitalize text-center mb-16">update terbaru</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-4">
      <div v-for="blog in dataBlogs.slice(0,3)" :key="blog.id">
        <nuxt-link :to="`/blog/${blog.heading.replace(/\+s/, '-')}`">
          <div
            class="w-full h-post-thumbnail"
            :style="`background:url(${$store.state.storage_url+blog.image}) center center / cover no-repeat;`"
          ></div>
          <h4 class="text-xl font-bold text-indigo-500 my-4">{{blog.heading}}</h4>
          <h6
            class="text-xxs font-bold text-orange-500 capitalize"
          >posted on {{blog.created_at.replace(/-/g, ' ')}}</h6>
        </nuxt-link>
      </div>
    </div>
		<div class="my-16 text-center">
			<nuxt-link class="bg-orange-500 px-8 py-4 text-sm text-white uppercase verlag tracking-widest mx-auto text-center" to="/blog">selengkapnya</nuxt-link>
		</div>
  </div>
</template>
<script>
export default {
  props: ['dataBlogs'],
};
</script>
<style lang="scss">
.h-post-thumbnail {
  height: 350px;
}
</style>