<template>
  <div>
    <div class="container mx-auto px-8 lg:px-16 pt-32">
      <Heading
        class="w-full lg:w-1/3"
        data-title="Tipe Unit"
        data-caption="Hunian Flexibel Untuk Generasi 'Zaman Now'"
      />
    </div>
    <div class="mx-auto container px-8 lg:px-16 mt-24">
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
  </div>
</template>
<script>
import axios from "@nuxtjs/axios";
const baseUrlImg = "https://backend.themajbekasi.com/storage/";
const components = {
  tTabs: () => import("@/components/Tabs/Tabs.vue"),
  tTab: () => import("@/components/Tabs/Tab.vue"),
};
export default {
  components,
  props: {
    dataUnits: { type: Array, default: null },
  },
  data() {
    return {
      base_img: baseUrlImg,
    };
  },

  methods: {
    toPrice(ctx) {
      const context = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
      });
      return context.format(ctx);
    },
  },
};
</script>
<style lang="scss" scoped>
$activeColor: #232323;
$activeBg: #e9e9e9;
$inActiveColor: #c4c9d2;
$inActiveBg: #fbf7f6;

::v-deep .tabs-component-tab {
  padding: 0.5rem 1rem !important;
}
::v-deep .deep-2 {
  .is-active{
    .tabs-component-tab-a::after{
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
  .border-bottom::after{
    content: "";
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: #c4c9d2;
    opacity: 0.5;
    display: block;
    height: 0.5rem;
    width: calc(100%/2);
    border-radius: 500px;
    margin-top: -.5rem;
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