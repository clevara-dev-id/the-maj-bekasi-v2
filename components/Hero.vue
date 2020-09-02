<template>
  <div class="pt-24">
    <div class="container mx-auto px-8">
        <VueSlickCarousel v-bind="settings" ref="herocarousel">
            <div class="relative focus:outline-none" v-for="(hero, index) in dataHeroes" :key="hero.id">
                <h1 class="mt-4 mb-6 text-heading text-indigo-500 font-bold leading-8 capitalize lg:hidden">
                    Investasi pasti dengan harga yang kompetitif
                </h1>
                <img class="w-full" :src="$store.state.storage_url+hero.image" :alt="`the maj bekasi ${hero.caption}`">
                <nuxt-link class="inline-block mt-6 bg-orange-500 w-full px-16 py-4 uppercase text-center text-sm text-white lg:hidden z-30 hover:bg-gray-500" :to="hero.link">jadwalkan tur</nuxt-link>
                <div class="hidden lg:block w-4/5 lg:px-8 lx:px-20 mt-content">
                    <div class="grid grid-cols-8">
                        <div class="col-span-5 bg-orange-500 h-48 pl-8 py-4 xl:pr-16">
                            <h1 class="text-heading font-bold text-white">
                                {{hero.caption}}
                            </h1>
                            <button class="px-12 py-3 uppercase text-orange-500 tracking-widest text-sm mt-4 bg-white inline-block z-10 hover:bg-gray-500 hover:text-black">
                                {{hero.button_text}}
                            </button>
                        </div>
                        <div class="col-span-1 h-10 z-10">
                            <button @click="showPrev" class="p-8 w-full bg-orange-500 hover:bg-white focus:outline-none">
                                <svg class="mx-auto text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.81066 11.9486L11.2803 19.3863C11.5732 19.678 11.5732 20.1508 11.2803 20.4425C10.9874 20.7341 10.5126 20.7341 10.2197 20.4425L2.21967 12.4767C1.92678 12.1851 1.92678 11.7122 2.21967 11.4206L10.2197 3.45481C10.5126 3.16317 10.9874 3.16317 11.2803 3.45481C11.5732 3.74645 11.5732 4.21929 11.2803 4.51093L3.81066 11.9486Z" fill="#232323"/>
                                </svg>
                            </button>
                        </div>
                        <div class="col-span-1 h-10 z-10">
                            <button @click="showNext" class="p-8 w-full bg-orange-500 hover:bg-white focus:outline-none">
                                <svg class="mx-auto transform rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.81066 11.9486L11.2803 19.3863C11.5732 19.678 11.5732 20.1508 11.2803 20.4425C10.9874 20.7341 10.5126 20.7341 10.2197 20.4425L2.21967 12.4767C1.92678 12.1851 1.92678 11.7122 2.21967 11.4206L10.2197 3.45481C10.5126 3.16317 10.9874 3.16317 11.2803 3.45481C11.5732 3.74645 11.5732 4.21929 11.2803 4.51093L3.81066 11.9486Z" fill="#232323"/>
                                </svg>
                            </button>
                        </div>
                        <div class="col-span-1 h-10">
                            <div class="lg:px-4 xl:px-6 py-8 w-full tracking-widest text-lg font-bold text-white">
                                {{index+1}} / {{dataHeroes.length}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    props: ['dataHeroes'],
    name: "HeroComponent",
    components: { VueSlickCarousel },
    data() {
        return {
            heroes:null
            // heroes: [
            //     {
            //         id: 1,
            //         image: "hero.png",
            //         caption: "Investasi Pasti Dengan Harga Yang Sangat Kompetitif",
            //         button: "jadwalkan tur",
            //         link: "/hubungi-kami"
            //     },
            //     {
            //         id: 2,
            //         image: "hero.png",
            //         caption: "Investasi Pasti Dengan Harga Yang Sangat Kompetitif",
            //         button: "jadwalkan tur",
            //         link: "/hubungi-kami"
            //     },
            //     {
            //         id: 3,
            //         image: "hero.png",
            //         caption: "Investasi Pasti Dengan Harga Yang Sangat Kompetitif",
            //         button: "jadwalkan tur",
            //         link: "/hubungi-kami"
            //     },
            // ]
            ,
            settings:{
                "fade": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
        }
    },
    methods: {
        showNext() {
            this.$refs.herocarousel.next()
        },
        showPrev() {
            this.$refs.herocarousel.prev()
        },
    },
}
</script>
<style lang="scss">
    .mt-content{
        margin-top: -5.5rem;
    }
</style>