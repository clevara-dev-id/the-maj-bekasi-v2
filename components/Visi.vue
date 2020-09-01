<template>
  <div
    class="container mx-auto px-8 lg:px-16 py-24 lg:py-8 lg:my-48 lg:bg-white lg:shadow-xl lg:rounded-lg"
  >
    <h1 class="text-heading text-center font-bold text-indigo-500 mb-12">Visi Kami</h1>
    <div class="line-clamp text-justify">
      <p
        class="text-sm text-gray-700 lg:hidden"
        v-for="about in dataAbouts"
        :key="about.id"
      >{{about.tentang_kami.substring(0,265)}}</p>
      <p
        class="text-sm text-gray-700 hidden lg:block"
        v-for="about in dataAbouts"
        :key="about.id"
      >{{about.tentang_kami}}</p>
    </div>
    <div class="text-center my-4">
      <nuxt-link
        class="border-b font-bold tracking-widest border-orange-500 text-orange-500 uppercase text-xxs p-2 hover:text-indigo-500 hover:border-indigo-500"
        to="/tentang-kami"
      >selengkapnya</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['dataAbouts'],
};
</script>
<style lang="scss" scoped>
.line-clamp {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media screen and (min-width: 1024px) {
  .line-clamp {
    display: block;
    text-overflow: unset;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: visible;
  }
}
</style>