<template>
  <div id="galeri" class="pt-24 lg:pt-32 lg:mt-12">
    <div class="bg-indigo-500 py-16 galeri">
      <div class="w-11/12 lg:w-full mx-auto px-8 lg:px-0">
        <h1 class="text-heading capitalize text-white font-bold text-center mb-12">Galeri</h1>
        <VueSlickCarousel ref="galericarousel" v-bind="settings" @afterChange="handleSwipe">
          <div
            v-for="(gallery, index) in dataGalleries"
            :key="index"
            class="focus:outline-none lg:px-4"
          >
            <img class="w-full" :src="$store.state.storage_url+gallery.gambar" :alt="gallery.nama" />
          </div>
        </VueSlickCarousel>
        <div
          v-for="(gallery, index) in dataGalleries"
          :key="index"
          :class="{active: activeClass === index}"
          class="text-center w-full lg:w-1/4 mx-auto text-white mt-12 justify-between items-center not-active"
        >
          <button
            @click="prevClick"
            class="focus:outline-none hidden lg:block rounded-full w-8 h-8 text-center hover:bg-orange-500 hover:text-indigo-500"
          >
            <img class="mx-auto" src="/gallery/chevron-down.svg" alt="icon left" />
          </button>
          <div class="mx-auto">
            <h5 class="text-base">{{gallery.nama}} - {{gallery.unit ? gallery.unit.unit_name : ''}}</h5>
            <h6 class="text-sm mt-6">{{index+1}} / {{dataGalleries.length}}</h6>
          </div>
          <button
            @click="nextClick"
            class="focus:outline-none hidden lg:block rounded-full w-8 h-8 text-center hover:bg-orange-500 hover:text-indigo-500 transform rotate-180"
          >
            <img class="mx-auto" src="/gallery/chevron-down.svg" alt="icon left" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "GalleryComponent",
  components: { VueSlickCarousel },
  props: ["dataGalleries"],
  methods: {
    handleSwipe(event, slick, direction) {
      this.activeClass = event;
    },
    nextClick() {
      this.$refs.galericarousel.next();
    },
    prevClick() {
      this.$refs.galericarousel.prev();
    },
  },
  data() {
    return {
      currentIndex: null,
      activeClass: 0,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: "250px",
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              fade: false,
              centerPadding: "250px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              fade: true,
              centerMode: true,
              centerPadding: "0",
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              fade: true,
              centerPadding: "0",
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
.galeri {
  @media screen and (min-width: 1024px) {
    .slick-slide {
      padding: 0 30px;
      transition: 1s all;
    }
    .slick-list {
      margin: 5rem auto;
    }
    .slick-track {
      height: auto;
      padding-top: 1rem;
    }
    .slick-active {
      transform: scale(1.08);
    }
  }
  .not-active.active {
    display: flex !important;
  }
  .not-active {
    display: none;
  }
}
</style>