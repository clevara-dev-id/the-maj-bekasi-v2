<template>
  <div>
    <div id="blog" class="container mx-auto px-8 pt-32">
    <div class="grid grid-cols-3 gap-8">
      <!-- <div class="col-start-1 col-end-3"> -->
        <vue-slick-carousel class="col-span-3 lg:col-span-2" ref="blogcarousel"  v-bind="settings" @afterChange="handleSwipe">
          <div v-for="(d, i) in blogs" :key="i">
            <img
              class="w-full blog--img-banner"
              :src="$store.state.storage_url+d.image"
              :alt="d.heading"
            />
          </div>
        </vue-slick-carousel>
      <div class="col-span-3 lg:col-span-1 inline-block">
        <h5 class="verlag text-orange-500 text-base uppercase tracking-widest">{{ activeBlog.categories.replace(/"]/g, '').replace(/\["/g, '') }}</h5>
        <nuxt-link :to="`/blog/${toSlug(activeBlog.heading)}`">
        <h1 class="text-heading text-indigo-500 tracking-wide my-6">
          {{ activeBlog.heading }}
        </h1>
        </nuxt-link>
        <p class="proxima-nova text-base">
          <strong class="font-bold">{{ activeBlog.lokasi }}, {{ activeBlog.sumber }}</strong> - {{ activeBlog.preview_text }}
        </p>
        <!-- <span>{{ activeBlog.author }}</span> <br/> <span>{{ activeBlog.created_at }}</span> -->
        <div class="w-full mt-4">
          <div class="flex my-2 items-center">
            <img class="w-5" src="/blog/person.svg" alt="author icon">
            <div class="ml-4">
              <h6 class="text-base text-gray-400">{{activeBlog.author}}</h6>
            </div>
          </div>
          <div class="flex my-2 items-center">
            <img class="w-5" src="/blog/calendar.svg" alt="calendar icon">
            <div class="ml-4">
              <h6 class="text-base text-gray-400">{{activeBlog.created_at}}</h6>
            </div>
          </div>
          <div class="hidden lg:block flex mt-8">
            <button @click="prev" class="py-2 px-3 bg-orange-500 rounded-full focus:outline-none"><img src="/blog/cevron-left.svg" alt="left icon"></button>
            <button @click="next" class="py-2 px-3 bg-orange-500 rounded-full focus:outline-none ml-4"><img class="transform rotate-180" src="/blog/cevron-left.svg" alt="left icon"></button>
          </div>
        </div>
        <!-- {{ activeBlog }} -->
      </div>
    </div>
    <div class="my-24">
      <Tabs
        tag-items="div"
        tag-item="div"
        tabs-class="flex uppercase items-center overflow-x-auto"
        tab-class="px-8 text-center"
        :useUrlFragment="false"
      >
        <Tab name="Semua">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(all, i) in blogs" :key="i">
              <nuxt-link :to="`/blog/${toSlug(all.heading)}`">
                <img class="w-full" :src="$store.state.storage_url+all.image.replace('.jpg', '-thumbnail.jpg').replace('.png', '-thumbnail.png').replace('.jpeg', '-thumbnail.jpeg')" :alt="all.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${toSlug(all.heading)}`">
                <h1 class="text-lg mt-4 text-indigo-500">{{ all.heading }}</h1>
              </nuxt-link>
              <small class="text-orange-500">Posted On {{ all.created_at }}</small>
            </div>
          </div>
        </Tab>

        <Tab name="news">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(news, i) in getNews" :key="i" >
              <nuxt-link :to="`/blog/${toSlug(news.heading)}`">
                <img class="w-full" :src="$store.state.storage_url+news.image.replace('.jpg', '-thumbnail.jpg').replace('.png', '-thumbnail.png').replace('.jpeg', '-thumbnail.jpeg')" :alt="news.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${toSlug(news.heading)}`">
                <h1 class="text-lg mt-4 text-indigo-500">{{ news.heading }}</h1>
              </nuxt-link>
              <small class="text-orange-500">Posted On {{ news.created_at }}</small>
            </div>
          </div>
        </Tab>

        <Tab name="event">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(event, i) in getEvent" :key="i" >
              <nuxt-link :to="`/blog/${toSlug(event.heading)}`">
                <img class="w-full" :src="$store.state.storage_url+event.image.replace('.jpg', '-thumbnail.jpg').replace('.png', '-thumbnail.png').replace('.jpeg', '-thumbnail.jpeg')" :alt="event.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${toSlug(event.heading)}`">
                <h1 class="text-lg mt-4 text-indigo-500">{{ event.heading }}</h1>
              </nuxt-link>
              <small class="text-orange-500">Posted On {{ event.created_at }}</small>
            </div>
          </div>
        </Tab>

        <Tab name="media coverage">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(media, i) in getMedia" :key="i" >
              <nuxt-link :to="`/blog/${toSlug(media.heading)}`">
                <img class="w-full" :src="$store.state.storage_url+media.image.replace('.jpg', '-thumbnail.jpg').replace('.png', '-thumbnail.png').replace('.jpeg', '-thumbnail.jpeg')" :alt="media.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${toSlug(media.heading)}`">
                <h1 class="text-lg mt-4 text-indigo-500">{{ media.heading }}</h1>
              </nuxt-link>
              <small class="text-orange-500">Posted On {{ media.created_at }}</small>
            </div>
          </div>
        </Tab>
      </Tabs>

    </div>
    <Footer :data-socmed="socmed" />
  </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
const components = {
  VueSlickCarousel,
  Tabs: () => import('@/components/Tabs/Tabs.vue'),
  Tab: () => import('@/components/Tabs/Tab.vue'),
}
export default {
  name: 'blog',
  data () {
    return {
      currentIndex: null,
      activeClass: 0,
      settings: {
        dots: false,
        // arrows: false,
        infinite: true,
        // centerMode: true,
        // centerPadding: "250px",
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  },
  components,
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/blog-bekasi')
    let x = await $axios.get("/bekasi-social-media").then(res => {return res.data});
    return { 
      blogs: data,
      socmed: x
    }
  },
  methods: {
    handleSwipe(event, slick, direction) {
      console.log(event)
      this.activeClass = event;
    },
    next(){
      this.$refs.blogcarousel.next()
    },
    prev(){
      this.$refs.blogcarousel.prev()
    },
    toSlug (params) {
      if (!params) { return }
      return params.toLowerCase().replace(/\s/g, '-').replace(/\(/g, '').replace(/\)/g, '')
    }
  },
  computed: {
    activeBlog () {
      if (!this.blogs) return
      return this.blogs[this.activeClass]
    },
    getNews () {
      if (!this.blogs) return
      return this.blogs.filter(d => d.categories.replace(/"]/g, '').replace(/\["/g, '').includes('News'))
    },
    getEvent () {
      if (!this.blogs) return
      return this.blogs.filter(d => d.categories.replace(/"]/g, '').replace(/\["/g, '').includes('Event'))
    },
    getMedia () {
      if (!this.blogs) return
      return this.blogs.filter(d => d.categories.replace(/"]/g, '').replace(/\["/g, '').includes('Media Coverage'))
    }
  },
}
</script>

<style lang="scss" scoped>
  $activeColor: #cc9980;
  $inActiveColor: #c8c8c8;
  #blog {
    height: 100%;
  }
  ::v-deep .blog {
    &--img-banner {
      height: 460px !important;
      object-fit: cover !important;
    }
    // &--img-list {
    //   max-width: 330px !important;
    //   height: 330px !important;
    //   object-fit: cover !important;
    // }
  }
  // ::v-deep  {
  //   border: 1px solid black !important;
  // }
  ::v-deep .tabs-component {
    &-tabs {
      border-bottom: 1px solid #cc9980;
      font-size: 14px;
      line-height: 28px;
      letter-spacing: 2px;
      .tabs-component-tab {
        text-align: left;
        &.is-active {
          color: $activeColor !important;
        }
        color: $inActiveColor !important;
      }
    }
    &-panels {
      margin-top: 40px !important;
      padding-right: 15px;
      padding-left: 15px;
    }
  }
</style>