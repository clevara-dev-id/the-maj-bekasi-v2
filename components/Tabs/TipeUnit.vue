<template>
  <div>
    <div class="container mx-auto px-8 lg:px-16 pt-32">
      <Heading
        class="w-full lg:w-1/3"
        data-title="Tipe Unit"
        data-caption="Hunian Flexibel Untuk Generasi 'Zaman Now'"
      />
    </div>
    <div class="mx-auto container px-8 lg:px-16 mt-24 hidden lg:block">
      <t-tabs
        tag-items="div"
        tag-item="div"
        :options="{useUrlFragment: false}"
        class="mx-auto"
        tabs-class="flex capitalize justify-start mx-auto"
        tab-class="px-10"
      >
        <template v-for="(d, i) in dataUnits">
          <t-tab v-bind:name="d.unit_name" v-bind:key="i">
            <template>
              <!-- specs -->
              <t-tabs
                class="deep-2"
                tag-items="div"
                tag-item="div"
                :options="{useUrlFragment: false}"
                tabs-class="children flex uppercase"
                panels-class="children flex"
              >
                <t-tab name="spesifikasi">
                  <div class="grid grid-cols-5">
                    <div class="col-start-1 col-end-4">
                      <h1 class="text-h1">{{ d.unit_name }}</h1>
                      <h5 class="text-h5">
                        {{ d.specs.luas }}
                        <sup>2</sup>
                      </h5>
                      <!-- room list -->
                      <div class="room-list">
                        <ul class>
                          <li v-for="(l, i) in d.room_list" v-bind:key="i">{{ l.name }}</li>
                        </ul>
                      </div>
                    </div>
                    <!-- denah -->
                    <div class="col-start-4">
                      <img
                        class="denah-ruang"
                        v-bind:src="`${base_img + d.specs.denah_ruang}`"
                        alt="denah ruang"
                      />
                    </div>
                    <div class="col-auto">
                      <img
                        class="denah-bangunan"
                        v-bind:src="`${base_img + d.specs.denah_bangunan}`"
                        alt="denah bangunan"
                      />
                    </div>
                  </div>
                </t-tab>

                <!-- preview unit -->
                <t-tab name="preview unit">
                  <!-- galeri -->
                  <TabGallery :data-galeries="d.gallery" />
                </t-tab>

                <!-- <t-tab name="360° view"> -->
                <!-- galeri -->
                <!-- <iframe class="w-full" height="480px" src="" frameBorder="0"></iframe> -->
                <!-- </t-tab> -->

                <!-- siimulasi -->
                <t-tab name="simulasi kpa">
                  <Simulasi :data-simulations="d.unit_price" :data-identifier="d.id" />
                </t-tab>
              </t-tabs>
            </template>
          </t-tab>
        </template>
      </t-tabs>
    </div>
    <div class="block lg:hidden container mx-auto px-8 mt-24 bg-gray-100 pt-8">
      <h6
        class="verlag text-center text-xxs text-black font-bold tracking-wider uppercase my-4"
      >pilih unit</h6>
      <div class="text-center py-2">
        <select
          v-model="activeIndex"
          ref="changeUnit"
          class="gilroy-bold text-lg w-2/5 mx-auto text-black uppercase bg-gray-100 focus:outline-none"
        >
          <option v-for="(s, i) in dataUnits" :key="s.id" :value="i">{{s.unit_name}}</option>
        </select>
      </div>
    </div>

    <div class="active-index hidden lg:hidden container mx-auto px-8 bg-gray-100 pb-8">
      <div class="pb-8">
        <h6
          class="verlag text-center text-xxs text-black tracking-wider uppercase"
        >{{(activeData.specs ? activeData.specs.luas : '')}}</h6>
        <div class="w-full py-4">
          <VueSlickCarousel :ref="`denah${activeData.id}`" v-bind="settings">
            <div>
              <img
                class="focus:outline-none text-center mx-auto w-1/2"
                :src="$store.state.storage_url+(activeData.specs? activeData.specs.denah_ruang : '')"
                :alt="(activeData.specs ? activeData.unit_name : '')"
              />
            </div>
            <div>
              <img
                class="focus:outline-none text-center mx-auto w-1/2"
                :src="$store.state.storage_url+(activeData.specs? activeData.specs.denah_bangunan : '')"
                :alt="(activeData.specs ? activeData.unit_name : '')"
              />
            </div>
          </VueSlickCarousel>
        </div>
        <div class="spesification mt-8">
          <h6
            class="text-xxs gilroy-bold tracking-wider uppercase text-indigo-500 font-bold"
          >spesifikasi :</h6>
          <ul class="mt-4 list-disc">
            <li
              class="proxima-nova text-xxs tracking-wider my-2"
              v-for="room in activeData.room_list"
              :key="room.id"
            >{{room.name}}</li>
          </ul>
        </div>
        <div class="review-unit my-16">
          <h5
            class="text-base font-bold text-indigo-500 uppercase tracking-wider gilroy-bold text-center my-2"
          >review unit</h5>
          <VueSlickCarousel v-bind="settingsOne" ref="c2">
            <div v-for="gl in activeData.gallery" :key="gl.id">
              <img
                class="focus:outline-none w-full"
                :src="$store.state.storage_url+gl.gambar"
                :alt="gl.nama"
              />
              <h5
                class="text-center uppercase my-3 font-bold proxima-nova text-base text-indigo-500"
              >{{gl.nama}}</h5>
            </div>
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="settingsTwo" ref="c1">
            <div v-for="(g, index) in activeData.gallery" :key="index" class="focus:outline-none px-2">
              <img
                class="focus:outline-none w-full"
                :src="$store.state.storage_url+g.gambar"
                :alt="g.nama"
              />
            </div>
          </VueSlickCarousel>
        </div>
        <MobileSimulasi :data-simulations="activeData.unit_price" :data-name="activeData.unit_name" />
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "@nuxtjs/axios";
import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
import tTabs from "@/components/Tabs/Tabs.vue"
import tTab from "@/components/Tabs/Tab.vue"
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
const baseUrlImg = "https://backend.themajbekasi.com/storage/";
export default {
  name: "TabDenahUnitComponent",
  components: {
    VueSlickCarousel,
    tTabs,
    tTab
  },
  props: {
    dataUnits: { type: Array, default: null },
  },
  data() {
    return {
      base_img: baseUrlImg,
      activeData: this.dataUnits[0],
      activeIndex: 0,
      settings: {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settingsOne: {
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settingsTwo: {
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    };
  },
  mounted () {
    this.$nextTick(() => {
      const c1 = this.$refs.c1
      const c2 = this.$refs.c2
      c1.asNavFor = c2
      c2.asNavFor = c1
    })
  },
  watch: {
    activeIndex (n, o) {
      if (n !== o) {
        this.activeData = this.dataUnits[n]
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$activeColor: #232323;
$activeBg: #e9e9e9;
$inActiveColor: #c4c9d2;
$inActiveBg: #fbf7f6;
.active-index {
  display: block !important;
}
@media screen and (min-width: 1024px) {
  .active-index {
    display: none !important;
  } 
}
.spesification {
  ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
}

::v-deep .tabs-component-tab {
  padding: 0.5rem 1rem !important;
}
::v-deep .deep-2 {
  .is-active {
    .tabs-component-tab-a::after {
      content: "";
      position: relative;
      bottom: 0;
      left: 0;
      right: 0;
      background: #12284c;
      display: block;
      height: 0.5rem;
      border-radius: 500px;
      margin-top: 0.5rem;
      z-index: 1;
    }
  }
  .border-bottom::after {
    content: "";
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: #c4c9d2;
    opacity: 0.5;
    display: block;
    height: 0.5rem;
    width: calc(100% / 2);
    border-radius: 500px;
    margin-top: -0.5rem;
  }
}

::v-deep .tabs-component-tabs:not(.children) {
  width: 100%;
  max-width: 980px !important;
  .tabs-component-tab {
    width: 150px !important;
    text-align: center;
    &.is-active {
      color: $activeColor !important;
      background: $activeBg !important;
    }
    color: $inActiveColor !important;
    background: $inActiveBg !important;
  }
}

::v-deep .tabs-component-panels:not(.children) {
  padding: 43px 60px !important;
  background: rgb(233, 233, 233) !important;
  min-height: 680px !important;
}

::v-deep .tabs-component-tabs.children {
  max-width: max-content;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 13px;
  .tabs-component-tab {
    width: 167px !important;
    margin-bottom: -5px;
    color: rgba(18, 40, 76, 0.51);
    &.is-active {
      color: #12284c;
    }
  }
}

::v-deep .tabs-component-panels.children {
  margin: 10rem 0rem;
  .tabs-component-panel {
    margin-left: -15px;
    margin-right: -15px;
    .text-h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 34px !important;
      line-height: 41px !important;
      color: rgb(195, 199, 209) !important;
      margin-bottom: 10px !important;
    }
    .text-h5 {
      font-family: Proxima Nova !important;
      font-style: normal;
      font-weight: bold;
      font-size: 16px !important;
      line-height: 16px !important;
      letter-spacing: 2px;
      color: rgb(0, 0, 0) !important;
    }
    .room-list {
      margin-top: 50px;
      width: 100%;
      padding: 0px;
      column-count: 2;
      ul > li {
        padding: 0px;
        margin-bottom: 10px;
        list-style-type: none;
        font-family: "Proxima Nova";
        font-style: normal;
        font-weight: bold;
        font-size: 11px;
        line-height: 13px;
        text-transform: uppercase;
        color: rgb(45, 45, 45);
      }
    }
    .denah {
      &-ruang {
        max-width: 200px !important;
      }
      &-bangunan {
        max-width: 150px !important;
      }
    }
  }
}
</style>