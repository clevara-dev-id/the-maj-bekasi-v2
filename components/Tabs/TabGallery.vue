<template>
  <div class="thumb-example w-full">
    <!-- swiper1 -->
    <!-- <client-only> -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="tabGaleriC2">
      <swiper-slide class="slide-1 focus:outline-none px-2" v-for="(g, index) in dataGaleries" :key="index">
        <div class="grid grid-cols-6 gap-16">
          <div class="col-span-4">
            <img class="focus:outline-none w-full" :src="$store.state.storage_url+g.gambar" :alt="g.nama" />
          </div>
          <div class="col-span-2 pt-32">
            <h5 class="proxima-nova text-indigo-500">{{g.nama}}</h5>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <div class="relative">
      <div class="w-2/3 absolute -mt-48 right-0">
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="tabGaleriC1">
        <swiper-slide v-for="(g, index) in dataGaleries" :key="index" class="focus:outline-none px-2">
          <img class="focus:outline-none w-full" :src="$store.state.storage_url+g.gambar" :alt="g.nama" />
        </swiper-slide>
      </swiper>
      </div>
    </div>
    <!-- </client-only> -->
  </div>
  <!-- <div class="w-full"> -->
    <!-- <VueSlickCarousel ref="c2" :asNavFor="$refs.c1" v-bind="settings">
      <div v-for="(g, index) in dataGaleries" :key="index" class="focus:outline-none px-2">
        <div class="grid grid-cols-6 gap-16">
          <div class="col-span-4">
            <img class="focus:outline-none w-full" :src="$store.state.storage_url+g.gambar" :alt="g.nama" />
          </div>
          <div class="col-span-2 pt-32">
            <h5 class="proxima-nova text-indigo-500">{{g.nama}}</h5>
          </div>
        </div>
      </div>
    </VueSlickCarousel> -->
    <!-- <div class="relative">
      <div class="w-2/3 absolute -mt-48 right-0">
        <VueSlickCarousel ref="c1" :asNavFor="$refs.c2" v-bind="settingsTwo">
          <div v-for="(g, index) in dataGaleries" :key="index" class="focus:outline-none px-2">
            <img class="focus:outline-none w-full" :src="$store.state.storage_url+g.gambar" :alt="g.nama" />
          </div>
        </VueSlickCarousel>
      </div>
    </div> -->
  <!-- </div> -->
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "TabGaleriesComponent",
  components: { VueSlickCarousel },
  props: {
    dataGaleries: { type: Array, default: null },
  },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settingsTwo: {
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.tabGaleriC2.$swiper
      const swiperThumbs = this.$refs.tabGaleriC1.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
};
</script>
<style lang="scss">
</style>