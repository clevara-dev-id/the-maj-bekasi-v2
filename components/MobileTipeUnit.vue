<template>
  <div class="bg-gray-100 px-6 py-12 tipe-unit">
    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">An error occured :(</p>
    <div v-for="(unit, index) in units" :key="unit.id">
      <h6 class="text-xxs text-center text-black uppercase tracking-widest font-bold">pilih unit</h6>
      <h2 class="text-lg text-center text-black uppercase font-bold my-2">{{unit.unit_name}}</h2>
      <h6 class="text-xxs text-center text-black uppercase tracking-widest font-semibold">
        {{unit.specs.luas}} m
        <sup>2</sup>
      </h6>
      <VueSlickCarousel v-bind="settings">
        <div>
          <img
            class="w-full focus:outline-none"
            :src="`http://localhost:8000/storage/${unit.specs.denah_ruang}`"
            alt="denah ruang"
          />
        </div>
        <div>
          <img
            class="w-full focus:outline-none"
            :src="`http://localhost:8000/storage/${unit.specs.denah_bangunan}`"
            alt="denah ruang"
          />
        </div>
      </VueSlickCarousel>
      <div class="mt-16">
        <h5 class="text-sm font-bold text-indigo-500 uppercase">spesifikasi</h5>
        <ul class="list-disc mt-4 list-column">
          <li
            v-for="list in unit.room_list"
            :key="list.id"
            class="list-inside text-xxs capitalize"
          >{{list.name}}</li>
        </ul>
      </div>
      <div class="mt-16">
        <h5 class="text-sm font-bold text-indigo-500 uppercase text-center">REVIEW UNIT</h5>
				<VueSlickCarousel
					ref="m"
					v-bind="settingsTwo"
					:asNavFor="$refs.mx[index]"
				>
					<div v-for="pic in unit.gallery" :key="pic.id">
						<img class="w-full" :src="`http://localhost:8000/storage/${pic.gambar}`" :alt="pic.nama">
					</div>
			</VueSlickCarousel>
			<VueSlickCarousel
				ref="mx"
				:asNavFor="$refs.m[index]"
				:v-bind="settingsThree"
			>
				<div v-for="pic in unit.gallery" :key="pic.id">
					<img class="w-full" :src="`http://localhost:8000/storage/${pic.gambar}`" :alt="pic.nama">
				</div>
		</VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "@nuxtjs/axios";

export default {
  async fetch() {
    this.units = await fetch("http://localhost:8000/api/units").then((res) =>
			res.json()
		);
	},
  name: "TabComponent",
	components: { VueSlickCarousel },
	mounted: function() {
		this.$nextTick(()=>{
			let self = this
		});
	},
  data() {
    return {
			units: null,
      settings: {
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
			},
			settingsTwo:{
				arrows:"false",
				dots:"false",
				focusOnSelect:"true",
			},
			settingsThree:{
				arrows:"false",
				dots:"false",
				focusOnSelect:"true",
				slidesToShow:4,
			}
    };
  },
};
</script>
<style lang="scss">
.list-column {
  -moz-column-count: 2;
  -moz-column-gap: 1rem;
  -webkit-column-count: 2;
  -webkit-column-gap: 1rem;
  column-count: 2;
  column-gap: 1rem;
}
</style>