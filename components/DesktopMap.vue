<template>
  <div>
    <div class="w-full map-border-bottom hidden lg:block">
      <div class="flex justify-between py-2">
        <div v-for="(location, index) in dataMaps" :key="index" class="text-gray-400 mx-8">
          <button
            @click="handleClick(index)"
            :class="{active: activeClass === index}"
            class="uppercase text-xxs focus:outline-none"
          >{{location.name}}</button>
        </div>
      </div>
    </div>
    <div class="w-full mt-6">
      <div
        class="d-maps hidden"
        v-for="(location, index) in dataMaps"
        :key="index"
        :class="{active: activeClass === index}"
      >
        <NuxtGoogleMaps :data-marker="location.marker" />
        <div class="mt-10 hidden lg:block">
          <div class="flex flex-wrap justify-center px-16">
            <div v-for="marker in location.marker" :key="marker.id" class="p-2 lg:w-1/4 xl:w-64">
              <div class="border-2 border-orange-500 text-sm py-2 px-3 flex items-center h-24">
                <img :src="`/maps/${marker.icon}.svg`" alt="icon maps" />
                <div class="pl-4 uppercase font-bold">
                  <h5 class="text-orange-500">&#177; {{marker.estimasi}} KE</h5>
                  <h5>{{marker.name}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/3 mx-auto block lg:hidden">
          <div class="flex justify-center">
            <button @click="prev" class="mx-4 focus:outline-none">
              <img src="/maps/left.svg" alt="left icon" />
            </button>
            <h5 class="text-sm text-center uppercase my-4">{{location.name}}</h5>
            <button @click="next" class="mx-4 focus:outline-none">
              <img class="transform rotate-180" src="/maps/left.svg" alt="left icon" />
            </button>
          </div>
        </div>
        <div class="block lg:hidden">
          <div
            class="w-full d-maps hidden"
            :class="{active: activeClass === index}"
          >
            <ul
              class="mt-8 d-maps"
            >
              <li
                class="mb-2 uppercase text-xxs"
                v-for="marker in location.marker"
                :key="marker.id"
              >
                <div class="flex items-center">
                  <img class="mr-4 w-6" :src="`/maps/${marker.icon}.svg`" alt="maps marker icon" />
                  <span><b class="text-orange-500 font-normal whitespace-normal">&#177; {{marker.estimasi}} </b> KE {{marker.name}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["dataMaps"],
  // async fetch() {
  //   await this.$axios.get("http://localhost:8000/api/location").then((res) => {
  //     this.locations = res.data;
  //   });
  // },
  methods: {
    handleClick(e) {
      this.activeClass = e;
    },
    prev() {
      this.activeClass = this.activeClass - 1 < 0 ? 0 : this.activeClass - 1;
    },
    next() {
      this.activeClass =
        this.activeClass + 1 > this.dataMaps.length - 1
          ? this.dataMaps.length - 1
          : this.activeClass + 1;
    },
  },
  data() {
    return {
      activeClass: 0,
      locations: null,
    };
  },
};
</script>
<style lang="scss">
.map-border-bottom::after {
  content: "";
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background: gray;
  opacity: 0.5;
  display: block;
  height: 0.5rem;
  width: 100%;
  border-radius: 500px;
  margin-top: -1rem;
}
.map-border-bottom {
  button.active {
    color: #12284c;
  }
  button.active::after {
    content: "";
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: #12284c;
    display: block;
    height: 0.5rem;
    width: 10rem;
    border-radius: 500px;
    margin-top: 0.5rem;
    z-index: 1;
  }
}
.d-maps.active {
  display: block !important;
}
</style>