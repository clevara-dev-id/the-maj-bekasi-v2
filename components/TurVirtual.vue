<template>
  <div class="bg-v-tour">
    <div id="tur-virtual" class="container mx-auto px-8 lg:px-16 pt-16 py-8 lg:pt-48">
      <h1 class="text-2xl font-gray-900 text-center py-8 font-bold capitalize">tur virtual apartemen</h1>
      <VueSlickCarousel ref="vtour" v-bind="settings">
        <div v-for="(tour, index) in vtours" :key="tour.id" class="h-v-tour">
          <iframe :src="tour.link" width="100%" height="480px" frameborder="0"></iframe>
          <div class="flex items-center justify-center">
            <button
              @click="prevClick"
              class="focus:outline-none block rounded-full w-8 h-8 text-center hover:bg-orange-500 hover:text-indigo-500"
            >
              <img class="mx-auto" src="/vtour/chevron-down.svg" alt="icon left" />
            </button>
            <div class="mx-auto py-8">
              <h5 class="text-sm font-bold text-center uppercase text-black">{{tour.name}}</h5>
              <h6 class="text-sm text-center text-black py-4">{{index+1}} / {{vtours.length}}</h6>
            </div>
            <button
              @click="nextClick"
              class="focus:outline-none block rounded-full w-8 h-8 text-center hover:bg-orange-500 hover:text-indigo-500 transform rotate-180"
            >
              <img class="mx-auto" src="/vtour/chevron-down.svg" alt="icon left" />
            </button>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "TourVirtualComponent",
  components: { VueSlickCarousel },
  methods: {
    nextClick() {
      this.$refs.vtour.next();
    },
    prevClick() {
      this.$refs.vtour.prev();
    },
  },
  data() {
    return {
      vtours: [
        {
          id: 1,
          name: "Studio A & B",
          link: "https://my.matterport.com/show/?m=QkKWVhwxX8V&brand=0",
        },
        {
          id: 2,
          name: "Studio 2 Bedroom",
          link: "https://my.matterport.com/show/?m=8Hq58emEwf6",
        },
        {
          id: 3,
          name: "Lobby R 02",
          link: "https://poly.google.com/view/3I5SHJ3nUJ0/embed?chrome=min",
        },
        {
          id: 4,
          name: "Pool",
          link: "https://poly.google.com/view/eqDVNcBA-tr/embed?chrome=min",
        },
        {
          id: 5,
          name: "Sky Garden",
          link: "https://poly.google.com/view/5vqSNgUTff5/embed?chrome=min",
        },
      ],
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>
<style lang="scss">
.bg-v-tour {
  background-color: #e8e8e8;
}
.h-v-tour {
  height: 500px;
}
</style>