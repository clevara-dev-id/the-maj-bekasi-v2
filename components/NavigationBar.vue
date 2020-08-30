<template>
  <div class="z-50 w-full fixed transition-all duration-300" :class="isTop">
    <nav class="flex items-center lg:justify-between flex-wrap p-6">
      <div class="block lg:hidden">
        <button
          @click="show"
          class="flex items-center text-orange-500 hover:text-indigo-500 focus:outline-none"
        >
          <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div class="lg:container mx-auto xl:px-16 flex">
        <div class="flex items-center flex-shrink-0 text-white mx-auto">
          <nuxt-link to="/"><img class="w-24 lg:w-32 lg:mx-16" src="~/assets/the-maj-bekasi-logo.svg" alt="the maj bekasi" /></nuxt-link>
        </div>
        <div class="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="ml-auto">
            <nuxt-link
              v-for="menu in menus"
              :key="menu.id"
              class="text-xxs uppercase font-bold lg:inline-block lg:mt-0 mr-8 transition-all duration-300 gilroy-bold"
              :class="isTop"
              :to="menu.link"
            >{{menu.name}}</nuxt-link>
            <div class="lg:inline-block lg:mt-0 mr-8">
              <button
                @click="isOpen = !isOpen"
                class="text-xxs flex uppercase font-bold focus:outline-none gilroy-bold"
              >
                Visi
                <svg
                  class="ml-1 pt-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.64645 4.14645C2.84171 3.95118 3.15829 3.95118 3.35355 4.14645L6 6.79289L8.64645 4.14645C8.84171 3.95118 9.15829 3.95118 9.35355 4.14645C9.54882 4.34171 9.54882 4.65829 9.35355 4.85355L6.35355 7.85355C6.15829 8.04882 5.84171 8.04882 5.64645 7.85355L2.64645 4.85355C2.45118 4.65829 2.45118 4.34171 2.64645 4.14645Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button
                v-if="isOpen"
                @click="isOpen = false"
                class="fixed inset-0 w-full h-full z-50"
              ></button>
              <div v-if="isOpen" class="absolute w-32 bg-white mt-2 shadow-xl rounded-sm py-2 z-50">
                <nuxt-link
                  to="/tentang-kami"
                  class="block py-2 px-4 text-xxs uppercase font-bold hover:bg-gray-200 gilroy-bold"
                >Visi</nuxt-link>
                <nuxt-link
                  to="/expertise"
                  class="block py-2 px-4 text-xxs uppercase font-bold hover:bg-gray-200 gilroy-bold"
                >Expertise</nuxt-link>
              </div>
            </div>
          </div>
          <nuxt-link
            class="w-contact-us text-center mt-0 inline-block px-4 py-2 uppercase tracking-widest font-bold verlag"
            to="/#hubungi-kami"
			:class="buttonIsTop"
          >Hubungi Kami</nuxt-link>
        </div>
      </div>
    </nav>
    <div
      id="navMenu"
      class="h-full top-0 z-50 overflow-x-hidden fixed bg-white w-0 transition-all duration-500 ease-in-out"
    >
      <div id="navContent" class="absolute top-0 w-full py-8 pl-6 pr-8 h-full hidden">
        <div class="flex items-center justify-between flex-wrap pb-6 border-b">
          <div class="flex items-center flex-shrink-0 text-white mx-auto">
            <img class="w-24" src="~/assets/the-maj-bekasi-logo.svg" alt="the maj bekasi" />
          </div>
          <button class="flex flex-grow w-auto items-center" @click="show">
            <svg
              class="ml-auto"
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
        </div>
        <div class="py-6">
          <ul>
            <li v-for="menu in menus" :key="menu.id" class="mb-6">
              <nuxt-link class="text-base text-black font-bold" :to="menu.link">{{menu.name}}</nuxt-link>
            </li>
            <li class="mb-6">
              <nuxt-link class="text-base text-black font-bold" to="/tentang-kami">Visi</nuxt-link>
            </li>
            <li class="mb-6">
              <nuxt-link class="text-base text-black font-bold" to="/expertise">Expertise</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
		isOpen: false,
		isTop: "bg-white text-black",
		buttonIsTop: "bg-indigo-500 text-white",
		menus: [
			{
			id: 1,
			name: "Beranda",
			link: "/",
			},
			{
			id: 2,
			name: "Fasilitas",
			link: "/#fasilitas",
			},
			{
			id: 3,
			name: "Tipe Unit",
			link: "/#denah-unit",
			},
			{
			id: 4,
			name: "Lokasi",
			link: "/#lokasi",
			},
			{
			id: 5,
			name: "Galeri",
			link: "/#galeri",
			},
			{
			id: 6,
			name: "Tur Virtual",
			link: "/tur-virtual",
			},
		],
		};
	},
  	methods: {
		show: function () {
				document.getElementById("navMenu").classList.toggle("w-full");
				document.getElementById("navContent").classList.toggle("hidden");
		},
		handlescroll() {
			if(window.scrollY > 100){
				this.isTop = "bg-black text-white"
				this.buttonIsTop = "bg-white text-black"
			}else{
				this.isTop = "bg-white text-black"
				this.buttonIsTop = "bg-indigo-500 text-white"
			}
		},
	},
	beforeMount() {
		window.addEventListener("scroll", this.handlescroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handlescroll);
	},
};
</script>
<style lang="scss">
.w-contact-us {
  width: 180px;
}
</style>