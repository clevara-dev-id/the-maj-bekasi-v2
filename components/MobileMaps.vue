<template>
    <div>
        <div>
            <VueSlickCarousel ref="carouselmap" v-bind="settings">
                <div class="focus:outline-none" v-for="location in dataMaps" :key="location.id">
                    <NuxtGoogleMaps :data-marker="location.marker" />
                    <div class="flex justify-center">
                        <button @click="prevMap" class="mx-4 focus:outline-none"><img :src="icon" alt="left icon"></button>
                        <h5 class="text-sm text-center uppercase my-4">{{location.name}}</h5>
                        <button @click="nextMap" class="mx-4 focus:outline-none"><img class="transform rotate-180" :src="icon" alt="left icon"></button>
                    </div>
                    <ul class="mt-8">
                        <li class="mb-2 uppercase text-xxs " v-for="marker in location.marker" :key="marker.id">
                            <div class="flex items-center">
                                <img class="mr-4 w-6" :src="`/maps/${marker.icon}.svg`" alt="maps marker icon">
                                <span class="text-orange-500">&#177; {{marker.estimasi}}</span> KE {{marker.name}}
                            </div>
                        </li>
                    </ul>
                </div>
            </VueSlickCarousel>        
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    props: ['dataMaps'],
    methods: {
        prevMap(){
            this.$refs.carouselmap.prev()
        },
        nextMap(){
            this.$refs.carouselmap.next()
        }
    },
    name: "MapComponent",
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                fade: true,
                dots: false,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            locations:null,
            icon: "/maps/left.svg"
        }
    },
}
</script>
<style lang="scss">
    
</style>