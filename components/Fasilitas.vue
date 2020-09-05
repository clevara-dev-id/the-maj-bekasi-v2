<template>
    <div id="fasilitas" class="container mx-auto px-2 lg:px-16 pt-24 lg:pt-40">
        <Heading class="w-full lg:w-1/3" data-title="Fasilitas" data-caption="Untuk work-life balance yang lebih baik" />
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            <div v-for="facility in facilities.slice(0, itemShow)" :key="facility.id" class="flex mb-4 py-2 lg:hidden">
                <img :src="facility.image" :alt="facility.caption" class="w-8 h-8">
                <h6 class="text-xxs items-center px-2 lg:p-2 font-bold uppercase ml-2 w-24 lg:w-32">{{facility.caption}}</h6>
            </div>
            <div v-for="facility in facilities" :key="facility.id" class="flex mb-4 py-2 hidden lg:flex">
                <img :src="facility.image" :alt="facility.caption" class="w-8 h-8">
                <h6 class="text-xxs items-center px-2 lg:p-2 font-bold uppercase ml-2 w-24 lg:w-32">{{facility.caption}}</h6>
            </div>
        </div>
        <div class="text-center">
            <button @click="handleClickShow" :class="buttonActive" class="lg:hidden py-2 px-8 mt-4 inline-block border-2 border-orange-500 text-orange-500 font-bold uppercase text-center hover:bg-orange-500 hover:text-white focus:outline-none text-sm">view more</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            itemShow: 4,
            buttonActive: "show",
            facilities:[
                {
                    id:1,
                    image:"/fasilitas/1.svg",
                    caption:"Zen garden"
                },
                {
                    id:2,
                    image:"/fasilitas/2.svg",
                    caption:"ridesharing shelter"
                },
                {
                    id:3,
                    image:"/fasilitas/3.svg",
                    caption:"co-working space"
                },
                {
                    id:4,
                    image:"/fasilitas/4.svg",
                    caption:"parcel lockers"
                },
                {
                    id:5,
                    image:"/fasilitas/5.svg",
                    caption:"storage room"
                },
                {
                    id:6,
                    image:"/fasilitas/6.svg",
                    caption:"Game Room"
                },
                {
                    id:7,
                    image:"/fasilitas/7.svg",
                    caption:"olympic-size swimming pool"
                },
                {
                    id:8,
                    image:"/fasilitas/8.svg",
                    caption:"one-stop logistic centers"
                },
                {
                    id:9,
                    image:"/fasilitas/9.svg",
                    caption:"sky lounge"
                },
                {
                    id:10,
                    image:"/fasilitas/10.svg",
                    caption:"o2o kiosks"
                },
                {
                    id:11,
                    image:"/fasilitas/11.svg",
                    caption:"gym"
                },
                {
                    id:12,
                    image:"/fasilitas/12.svg",
                    caption:"smart access"
                },
                {
                    id:13,
                    image:"/fasilitas/13.svg",
                    caption:"outdoor communal space"
                },
                {
                    id:14,
                    image:"/fasilitas/14.svg",
                    caption:"jogging track"
                },
                {
                    id:15,
                    image:"/fasilitas/15.svg",
                    caption:"security"
                },
            ]
        }
    },
    methods: {
        handleClickShow() {
            this.itemShow = 15
            this.buttonActive = "hidden"
        }
    }
}
</script>
<style lang="scss">
    
</style>