<template>
  <div class="w-full">
    <VueSlickCarousel ref="c2" v-bind="settings">
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
    </VueSlickCarousel>
    <div class="relative">
      <div class="w-2/3 absolute -mt-48 right-0">
        <VueSlickCarousel ref="c1" v-bind="settingsTwo">
          <div v-for="(g, index) in dataGaleries" :key="index" class="focus:outline-none px-2">
            <img class="focus:outline-none w-full" :src="$store.state.storage_url+g.gambar" :alt="g.nama" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
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
    };
  },
  mounted () {
    this.$nextTick(() => {
      const c1 = this.$refs.c1
      const c2 = this.$refs.c2
      if (c1.asNavFor) { return }
      c1.asNavFor = c2
      c2.asNavFor = c1
    })
  }
};
</script>
<style lang="scss">
</style>