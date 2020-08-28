<template>
  <div class="mx-auto my-10 container">
    <t-tabs
      tag-items="div"
      tag-item="div"
      :options="{useUrlFragment: false}"
      class="mx-auto"
      tabs-class="flex capitalize justify-start mx-auto"
      tab-class="px-10"
    >
      <template v-for="(d, i) in data">
        <t-tab v-bind:name="d.unit_name" v-bind:key="i">
          <template>
          <!-- specs -->
            <t-tabs
              tag-items="div"
              tag-item="div"
              :options="{useUrlFragment: false}"
              tabs-class="children flex uppercase"
              panels-class="children flex"
            >
              <t-tab name="spesifikasi">
                <div class="grid grid-cols-5">
                  <div class="col-start-1 col-end-4">
                    <h1 class="text-h1" >{{ d.unit_name }}</h1>
                    <h5 class="text-h5">{{ d.specs.luas }}<sup>2</sup></h5>
                    <!-- room list -->
                    <div class="room-list">
                      <ul class="">
                        <li
                          v-for="(l, i) in d.room_list"
                          v-bind:key="i"
                        >{{ l.name }}</li>
                      </ul>
                    </div>
                  </div>
                  <!-- denah -->
                  <div class="col-start-4">
                    <img class="denah-ruang" v-bind:src="`${base_img + d.specs.denah_ruang}`" alt="denah ruang" />
                  </div>
                  <div class="col-auto">
                    <img class="denah-bangunan" v-bind:src="`${base_img + d.specs.denah_bangunan}`" alt="denah bangunan">
                  </div>
                </div>
              </t-tab>

          <!-- preview unit -->
              <t-tab name="preview unit">
                <!-- galeri -->
                {{ d.gallery}}
              </t-tab>

          <!-- siimulasi -->
              <t-tab name="simulasi kpa">
                <div>harga : {{ toPrice(d.unit_price) }}</div>
                <div>dp 20% : {{ toPrice((d.unit_price * 20 / 100))}}</div>
              </t-tab>
            </t-tabs>
          </template>
        </t-tab>
      </template>
    </t-tabs>

  </div>
</template>
<script>
import axios from '@nuxtjs/axios';
const baseUrlImg = 'https://backend.themajbekasi.com/storage/'
const components = {
  tTabs: () => import('@/components/Tabs/Tabs.vue'),
  tTab: () => import('@/components/Tabs/Tab.vue')
}
export default {
  components,

  data () {
    return {
      base_img: baseUrlImg,
      data: [
        {
          "id": 1,
          "unit_name": "Studio A",
          "unit_price": "344000000",
          "created_at": "2020-03-02 01:17:00",
          "updated_at": "2020-07-16 05:31:30",
          "specs": {
            "id": 2,
            "unit_id": 1,
            "deskripsi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\nIn hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam. Vestibulum magna mauris, cursus ullamcorper ultrices quis, feugiat \r\nut turpis. Sed vel blandit tortor. Fusce scelerisque ut \r\nenim et pulvinar.",
            "luas": "20.42",
            "created_at": "2020-03-02 01:19:00",
            "updated_at": "2020-03-30 16:43:36",
            "denah_ruang": "unit-specs/March2020/Pdt9oVg2MNQcqefTVhJx.png",
            "denah_bangunan": "unit-specs/March2020/i6OPiDBbUdh3P9XUgwHh.png"
          },
          "gallery": [
            {
              "id": 14,
              "unit_id": 1,
              "nama": "Kamar Tidur",
              "deskripsi": "Kamar TIdur",
              "gambar": "unit-galleries/March2020/eGqW9yNeNp03x6aEl4at.png",
              "created_at": "2020-03-19 13:35:00",
              "updated_at": "2020-03-24 04:17:37",
              "gambar_mobile": "unit-galleries/March2020/JfSn1r69aa3PWjAY8SQY.png"
            },
            {
              "id": 15,
              "unit_id": 1,
              "nama": "Kamar Mandi",
              "deskripsi": "Kamar Mandi",
              "gambar": "unit-galleries/March2020/KvVLAZQCwNQ44pgrtMFy.png",
              "created_at": "2020-03-19 13:47:00",
              "updated_at": "2020-03-24 03:03:39",
              "gambar_mobile": "unit-galleries/March2020/0JaTEu6ePJc7pwsu0v9e.png"
            },
            {
              "id": 17,
              "unit_id": 1,
              "nama": "Dapur",
              "deskripsi": "Dapur",
              "gambar": "unit-galleries/March2020/0KyI3Z5yBeZc9LbEknZ4.png",
              "created_at": "2020-03-19 14:00:00",
              "updated_at": "2020-03-24 03:53:46",
              "gambar_mobile": "unit-galleries/March2020/jQQ0hmgqj0tBrryuZOje.png"
            }
          ],
          "room_list": [
            {
              "id": 8,
              "name": "Double Bed",
              "created_at": "2020-03-19 13:11:11",
              "updated_at": "2020-03-19 13:11:11",
              "unit_id": 1
            },
            {
              "id": 9,
              "name": "Tempat Tv",
              "created_at": "2020-03-19 13:11:27",
              "updated_at": "2020-03-19 13:11:27",
              "unit_id": 1
            },
            {
              "id": 10,
              "name": "1 Kamar Mandi",
              "created_at": "2020-03-19 13:11:41",
              "updated_at": "2020-03-19 13:11:41",
              "unit_id": 1
            },
            {
              "id": 11,
              "name": "Tempat Kompor dan Wastafel",
              "created_at": "2020-03-19 13:11:54",
              "updated_at": "2020-03-19 13:11:54",
              "unit_id": 1
            },
            {
              "id": 12,
              "name": "Tempat Lemari Baju",
              "created_at": "2020-03-19 13:12:06",
              "updated_at": "2020-03-19 13:12:06",
              "unit_id": 1
            },
            {
              "id": 13,
              "name": "Balkon",
              "created_at": "2020-03-19 13:12:17",
              "updated_at": "2020-03-19 13:12:17",
              "unit_id": 1
            }
          ],
          "embed_links": {
            "id": 5,
            "embed_links": "https://my.matterport.com/show/?m=QkKWVhwxX8V&brand=0",
            "unit_id": 1,
            "name": "Studio A",
            "created_at": "2020-05-31 13:34:00",
            "updated_at": "2020-06-03 13:55:30"
          }
        },
        {
          "id": 2,
          "unit_name": "Studio B",
          "unit_price": "369000000",
          "created_at": "2020-03-02 01:24:00",
          "updated_at": "2020-07-16 05:31:19",
          "specs": {
            "id": 1,
            "unit_id": 2,
            "deskripsi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\nIn hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam. Vestibulum magna mauris, cursus ullamcorper ultrices quis, feugiat \r\nut turpis. Sed vel blandit tortor. Fusce scelerisque ut \r\nenim et pulvinar.",
            "luas": "24.13",
            "created_at": "2020-03-02 01:19:00",
            "updated_at": "2020-03-30 16:43:55",
            "denah_ruang": "unit-specs/March2020/409coEu1MESAHHKOvHbY.png",
            "denah_bangunan": "unit-specs/March2020/FAFNMPluzQsVWlprbZEM.png"
          },
          "gallery": [
            {
              "id": 18,
              "unit_id": 2,
              "nama": "Kamar",
              "deskripsi": "Kamar",
              "gambar": "unit-galleries/March2020/Mkd7WdweXdfp0GuYIeEv.png",
              "created_at": "2020-03-19 14:04:00",
              "updated_at": "2020-03-24 02:55:02",
              "gambar_mobile": "unit-galleries/March2020/e2zDQC78LFZKMrcyOvFE.png"
            },
            {
              "id": 19,
              "unit_id": 2,
              "nama": "Kamar Mandi",
              "deskripsi": "Kamar Mandi",
              "gambar": "unit-galleries/March2020/erMe7LhJ84KMU7MnmY0k.png",
              "created_at": "2020-03-19 14:04:00",
              "updated_at": "2020-03-24 02:53:34",
              "gambar_mobile": "unit-galleries/March2020/P5jmInCOWz9qhNypfSJH.png"
            },
            {
              "id": 20,
              "unit_id": 2,
              "nama": "Dapur",
              "deskripsi": "Dapur",
              "gambar": "unit-galleries/March2020/MSboHzANnDeqoVlkMCrk.png",
              "created_at": "2020-03-19 14:05:00",
              "updated_at": "2020-03-24 02:54:28",
              "gambar_mobile": "unit-galleries/March2020/CHNIJd5rAUzFrrCGOfRr.png"
            }
          ],
          "room_list": [
            {
              "id": 14,
              "name": "Double Bed",
              "created_at": "2020-03-19 13:13:23",
              "updated_at": "2020-03-19 13:13:23",
              "unit_id": 2
            },
            {
              "id": 15,
              "name": "1 Kamar Mandi",
              "created_at": "2020-03-19 13:13:40",
              "updated_at": "2020-03-19 13:13:40",
              "unit_id": 2
            },
            {
              "id": 17,
              "name": "Tempat Lemari Baju",
              "created_at": "2020-03-19 13:14:57",
              "updated_at": "2020-03-19 13:14:57",
              "unit_id": 2
            },
            {
              "id": 18,
              "name": "Tempat Tv",
              "created_at": "2020-03-19 13:15:08",
              "updated_at": "2020-03-19 13:15:08",
              "unit_id": 2
            },
            {
              "id": 19,
              "name": "Tempat Kompor dan Wastafel",
              "created_at": "2020-03-19 13:15:22",
              "updated_at": "2020-03-19 13:15:22",
              "unit_id": 2
            },
            {
              "id": 20,
              "name": "Balkon",
              "created_at": "2020-03-19 13:15:30",
              "updated_at": "2020-03-19 13:15:30",
              "unit_id": 2
            }
          ],
          "embed_links": {
            "id": 6,
            "embed_links": "https://my.matterport.com/show/?m=QkKWVhwxX8V&brand=0",
            "unit_id": 2,
            "name": "Studio B",
            "created_at": "2020-05-31 13:34:00",
            "updated_at": "2020-06-03 13:55:38"
          }
        },
        {
          "id": 3,
          "unit_name": "2 Bedroom C",
          "unit_price": "535000000",
          "created_at": "2020-03-02 01:24:00",
          "updated_at": "2020-07-16 05:32:28",
          "specs": {
            "id": 3,
            "unit_id": 3,
            "deskripsi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\nIn hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam. Vestibulum magna mauris, cursus ullamcorper ultrices quis, feugiat \r\nut turpis. Sed vel blandit tortor. Fusce scelerisque ut \r\nenim et pulvinar.",
            "luas": "32.49",
            "created_at": "2020-03-02 01:25:00",
            "updated_at": "2020-03-30 17:33:37",
            "denah_ruang": "unit-specs/March2020/KYWzCITUefkASoYYEyY8.png",
            "denah_bangunan": "unit-specs/March2020/ye99SIeLC1cTp1aL3QMs.png"
          },
          "gallery": [
            {
              "id": 22,
              "unit_id": 3,
              "nama": "Kamar Tidur Utama",
              "deskripsi": "Kamar Tidur Utama",
              "gambar": "unit-galleries/March2020/OQaziZWWvZ8ahsvN7cCD.png",
              "created_at": "2020-03-19 14:08:00",
              "updated_at": "2020-03-24 02:57:04",
              "gambar_mobile": "unit-galleries/March2020/CUQhJ0yDoLSRbdPqufhG.png"
            },
            {
              "id": 23,
              "unit_id": 3,
              "nama": "Ruang Tamu",
              "deskripsi": "Ruang Tamu",
              "gambar": "unit-galleries/March2020/Oo8R7WyjIvbiDxT5AsNL.png",
              "created_at": "2020-03-19 14:08:00",
              "updated_at": "2020-03-24 02:57:54",
              "gambar_mobile": "unit-galleries/March2020/pbd9DjLft3v9UcmekZQE.png"
            },
            {
              "id": 25,
              "unit_id": 3,
              "nama": "Kamar Tidur 2",
              "deskripsi": "Kamar Tidur 2",
              "gambar": "unit-galleries/March2020/VAZqTeu674R7YLwGNujK.png",
              "created_at": "2020-03-19 14:09:00",
              "updated_at": "2020-03-24 02:59:25",
              "gambar_mobile": "unit-galleries/March2020/e1i8ckZEXiepoAtEkKad.png"
            },
            {
              "id": 26,
              "unit_id": 3,
              "nama": "Kamar Mandi",
              "deskripsi": "Kamar Mandi",
              "gambar": "unit-galleries/March2020/TmMMuH2PuaQVQlwZuNdV.png",
              "created_at": "2020-03-19 14:09:00",
              "updated_at": "2020-03-24 03:00:07",
              "gambar_mobile": "unit-galleries/March2020/Kj1QiIS6yCcS8Wsd5Ne4.png"
            }
          ],
          "room_list": [
            {
              "id": 21,
              "name": "2 Kamar Tidur",
              "created_at": "2020-03-19 13:16:07",
              "updated_at": "2020-03-19 13:16:07",
              "unit_id": 3
            },
            {
              "id": 22,
              "name": "1 Kamar Mandi",
              "created_at": "2020-03-19 13:16:17",
              "updated_at": "2020-03-19 13:16:17",
              "unit_id": 3
            },
            {
              "id": 23,
              "name": "Tempat Meja Makan",
              "created_at": "2020-03-19 13:16:33",
              "updated_at": "2020-03-19 13:16:33",
              "unit_id": 3
            },
            {
              "id": 24,
              "name": "Tempat 2 Lemari Baju",
              "created_at": "2020-03-19 13:16:48",
              "updated_at": "2020-03-19 13:16:48",
              "unit_id": 3
            },
            {
              "id": 25,
              "name": "Tempat TV, Meja, Sofa",
              "created_at": "2020-03-19 13:17:00",
              "updated_at": "2020-03-19 13:17:00",
              "unit_id": 3
            },
            {
              "id": 26,
              "name": "Tempat Kompor dan Wastafel",
              "created_at": "2020-03-19 13:17:15",
              "updated_at": "2020-03-19 13:17:15",
              "unit_id": 3
            },
            {
              "id": 27,
              "name": "Balkon",
              "created_at": "2020-03-19 13:17:27",
              "updated_at": "2020-03-19 13:17:27",
              "unit_id": 3
            }
          ],
          "embed_links": {
            "id": 4,
            "embed_links": "https://my.matterport.com/show/?m=8Hq58emEwf6",
            "unit_id": 3,
            "name": "2 Bedroom C",
            "created_at": "2020-05-31 13:34:00",
            "updated_at": "2020-06-03 13:55:58"
          }
        },
        {
          "id": 4,
          "unit_name": "2 Bedroom D",
          "unit_price": "591000000",
          "created_at": "2020-03-02 01:24:00",
          "updated_at": "2020-07-16 05:32:57",
          "specs": {
            "id": 4,
            "unit_id": 4,
            "deskripsi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\nIn hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam. Vestibulum magna mauris, cursus ullamcorper ultrices quis, feugiat \r\nut turpis. Sed vel blandit tortor. Fusce scelerisque ut \r\nenim et pulvinar.",
            "luas": "38.67",
            "created_at": "2020-03-02 01:25:00",
            "updated_at": "2020-03-30 17:33:19",
            "denah_ruang": "unit-specs/March2020/c4OCrdczq70AaEn0f11b.png",
            "denah_bangunan": "unit-specs/March2020/XaPjhg0Ba4AKLGRQiD1O.png"
          },
          "gallery": [
            {
              "id": 28,
              "unit_id": 4,
              "nama": "Kamar Utama",
              "deskripsi": "Kamar Utama",
              "gambar": "unit-galleries/March2020/SVuFYPAzRqnyu0UUS0Jy.png",
              "created_at": "2020-03-19 14:12:00",
              "updated_at": "2020-03-24 03:00:55",
              "gambar_mobile": "unit-galleries/March2020/AVv9TG2skToEo3NyGFcf.png"
            },
            {
              "id": 29,
              "unit_id": 4,
              "nama": "Kamar Tidur 2",
              "deskripsi": "Kamar Tidur 2",
              "gambar": "unit-galleries/March2020/JkAh6PipT4T6KFAle0Kl.png",
              "created_at": "2020-03-19 14:12:00",
              "updated_at": "2020-03-24 03:01:54",
              "gambar_mobile": "unit-galleries/March2020/yDBYyqYXOp4cpMA9aT6D.png"
            },
            {
              "id": 30,
              "unit_id": 4,
              "nama": "Kamar Mandi",
              "deskripsi": "Kamar Mandi",
              "gambar": "unit-galleries/March2020/XqUsgN5cuLV8Ecw4PiTk.png",
              "created_at": "2020-03-19 14:12:00",
              "updated_at": "2020-03-24 03:02:39",
              "gambar_mobile": "unit-galleries/March2020/6uC5t4pIhxnGlpqxokG2.png"
            }
          ],
          "room_list": [
            {
              "id": 28,
              "name": "2 Kamar Tidur",
              "created_at": "2020-03-19 13:18:00",
              "updated_at": "2020-04-03 06:09:06",
              "unit_id": 4
            },
            {
              "id": 29,
              "name": "1 Kamar Mandi",
              "created_at": "2020-03-19 13:18:22",
              "updated_at": "2020-03-19 13:18:22",
              "unit_id": 4
            },
            {
              "id": 30,
              "name": "Tempat Meja Makan",
              "created_at": "2020-03-19 13:18:34",
              "updated_at": "2020-03-19 13:18:34",
              "unit_id": 4
            },
            {
              "id": 31,
              "name": "Tempat 2 Lemari Baju",
              "created_at": "2020-03-19 13:18:48",
              "updated_at": "2020-03-19 13:18:48",
              "unit_id": 4
            },
            {
              "id": 32,
              "name": "Tempat TV, Meja, Sofa",
              "created_at": "2020-03-19 13:19:00",
              "updated_at": "2020-03-19 13:19:00",
              "unit_id": 4
            },
            {
              "id": 33,
              "name": "Tempat Kompor dan Wastafel",
              "created_at": "2020-03-19 13:19:12",
              "updated_at": "2020-03-19 13:19:12",
              "unit_id": 4
            },
            {
              "id": 34,
              "name": "Balkon",
              "created_at": "2020-03-19 13:19:26",
              "updated_at": "2020-03-19 13:19:26",
              "unit_id": 4
            }
          ],
          "embed_links": {
            "id": 3,
            "embed_links": "https://my.matterport.com/show/?m=8Hq58emEwf6",
            "unit_id": 4,
            "name": "2 Bedroom D",
            "created_at": "2020-05-31 13:33:00",
            "updated_at": "2020-06-03 13:56:07"
          }
        }
      ]
    }
  },

  methods: {
    toPrice (ctx) {
      const context = new Intl.NumberFormat('ID', { style: 'currency', currency: 'IDR' })
      return context.format(ctx)
    }
  }
}
</script>
<style lang="scss" scoped>
  $activeColor: #232323;
  $activeBg: #e9e9e9;
  $inActiveColor: #c4c9d2;
  $inActiveBg: #fbf7f6;

  ::v-deep .tabs-component-tab {
    padding: .5rem 1rem !important;
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
      color: rgba(18,40,76,.51);
      &.is-active {
        color: #12284c;
      }
    }
  }

  ::v-deep .tabs-component-panels.children {
    margin-top: 127px;
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
          font-family: 'Proxima Nova';
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