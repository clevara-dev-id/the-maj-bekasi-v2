<template>
  <div>
    <div class="container mx-auto px-2 lg:px-16 mt-0 lg:mt-48 md:hidden">
      <img src="/partner/partner.svg" alt="partner logo">
    </div>
    <div class="hidden md:block">
			<VueSlickCarousel v-bind="settings">
				<div v-for="partner in dataPartners" :key="partner.id">
					<a :href="partner.link">
            <img class="w-48 grayscale focus:outline-none mx-auto" :src="$store.state.storage_url+partner.image" :alt="partner.name">
          </a>
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
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: true,
				speed: 500,
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