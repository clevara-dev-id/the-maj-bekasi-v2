<template>
  <div class="bg-v-tour">
    <div v-if="modalShow" class="w-full h-full bg-gray-200 bg-opacity-50 fixed inset-0 z-50">
      <div class="w-full md:w-1/2 mx-auto my-48 bg-white p-4 lg:p-8 rounded-lg shadow-xl">
        <div class="text-center relative">
          <button class="absolute right-0 top-0" @click="modalShow = !modalShow">
            <svg
              class
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L8 6.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L6.93934 8L0.46967 14.4697C0.176777 14.7626 0.176777 15.2374 0.46967 15.5303C0.762563 15.8232 1.23744 15.8232 1.53033 15.5303L8 9.06066L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L9.06066 8L15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967Z"
                fill="#232323"
              />
            </svg>
          </button>
          <div class="p-2 py-8 lg:p-8">
            <!-- <h1 class="text-heading text-indigo-500 font-bold capitalize">Thank You!</h1> -->
            <a target="_blank" :href="modalLink" class="text-base inline-block text-blue-500 underline hover:no-underline hover:text-indigo-500">
              {{modalLink}}  
            </a>
            <h5 class="text-base capitalize mt-4">Anda akan diarahkan menuju halaman di atas.</h5>
            <a target="_blank" :href="modalLink" class="px-8 py-4 bg-indigo-500 text-white hover:bg-orange-500 mt-8 block">Lihat Tur Virtual</a>
          </div>
        </div>
      </div>
    </div>
    <div id="tur-virtual" class="container mx-auto px-4 lg:px-16 pt-32 py-8 lg:mt-48">
      <h1 class="text-2xl font-gray-900 text-center py-8 font-bold capitalize">tur virtual apartemen</h1>
      <VueSlickCarousel ref="vtour" v-bind="settings">
        <div v-for="(tour, index) in vtours" :key="tour.id" class="w-full h-full focus:outline-none">
          <a class="w-full cursor-pointer" @click="showModal(tour.link)">
            <img class="w-full" :src="tour.image" :alt="tour.name" />
          </a>
          <div class="flex items-center justify-between w-3/4 lg:w-1/3 mx-auto">
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
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "TourVirtualComponent",
  components: { VueSlickCarousel },
  methods: {
    nextClick() {
      this.$refs.vtour.next()
    },
    prevClick() {
      this.$refs.vtour.prev()
    },
    showModal(obj) {
      this.modalShow = true
      this.modalLink = obj
    },
  },
  data() {
    return {
      modalShow: false,
      modalLink: "none",
      vtours: [
        {
          id: 1,
          name: "Studio A & B",
          link: "https://my.matterport.com/show/?m=QkKWVhwxX8V&brand=0",
          image: "/vtour/Studio.jpg",
        },
        {
          id: 2,
          name: "2 Bedroom",
          link: "https://my.matterport.com/show/?m=8Hq58emEwf6",
          image: "/vtour/2-Bedroom.jpg",
        },
        {
          id: 3,
          name: "Lobby",
          link: "https://poly.google.com/view/3I5SHJ3nUJ0/embed?chrome=min",
          image: "/vtour/Loby.jpg",
        },
        {
          id: 4,
          name: "Pool",
          link: "https://poly.google.com/view/eqDVNcBA-tr/embed?chrome=min",
          image: "/vtour/Swiming-Pool.jpg",
        },
        {
          id: 5,
          name: "Sky Garden",
          link: "https://poly.google.com/view/5vqSNgUTff5/embed?chrome=min",
          image: "/vtour/Sky-Garden.jpg",
        },
      ],
      settings: {
        dots: false,
        arrows: false,
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