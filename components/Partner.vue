<template>
  <div>
    <div class="container mx-auto px-8 lg:px-16 mt-0 lg:mt-48 lg:hidden">
      <div class="flex justify-center flex-wrap">
        <div v-for="partner in dataPartners" :key="partner.id" class="p-2 w-1/3">
          <img
            class="grayscale"
            :src="$store.state.storage_url+partner.image"
            :alt="partner.name"
          />
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
			<VueSlickCarousel v-bind="settings">
				<div v-for="partner in dataPartners" :key="partner.id">
					<img class="w-48 grayscale" :src="$store.state.storage_url+partner.image" :alt="partner.name">
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
  name: "PartnerComponent",
  components: { VueSlickCarousel },
  props: ['dataPartners'],
  data() {
    return {
			partners: null,
			settings:{
				arrows: false,
				dots: false,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay: true,
				speed: 4000,
				autoplaySpeed: 4000,
				cssEase: "linear",
				pauseOnFocus: true,
				pauseOnHover: true,
			}
    };
  },
};
</script>
<style lang="scss">
.grayscale {
  filter: grayscale(1);
  opacity: 0.3;
  transition: 0.3s all;
}
.grayscale:hover {
  filter: grayscale(0);
  opacity: 1;
}
</style>