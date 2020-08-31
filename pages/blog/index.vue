<template>
  <div id="blog" class="container mx-auto">
    <div class="grid grid-cols-3 gap-4 brd">
      <!-- <div class="col-start-1 col-end-3 brd"> -->
        <vue-slick-carousel class="col-start-1 col-end-3 brd"  v-bind="settings" @afterChange="handleSwipe">
          <div v-for="(d, i) in blogs" :key="i">
            <img
              class="w-full blog--img-banner"
              :src="$store.state.storage_url+d.image"
              :alt="d.heading"
            />
          </div>
        </vue-slick-carousel>
      <div class="col-start-3 inline-block brd">
        <h5>{{ activeBlog.categories.replace(/"]/g, '').replace(/\["/g, '') }}</h5>
        <h1>{{ activeBlog.heading }}</h1>
        <p>
          <strong>{{ activeBlog.lokasi }}, {{ activeBlog.sumber }}</strong> - {{ activeBlog.preview_text }}
        </p>
        <span>{{ activeBlog.author }}</span> <br/> <span>{{ activeBlog.created_at }}</span>
        <!-- {{ activeBlog }} -->
      </div>
    </div>
    <div style="margin-top: 100px">
      <Tabs
        tag-items="div"
        tag-item="div"
        tabs-class="flex uppercase justify-start mx-auto"
        tab-class="pr-10"
        :useUrlFragment="false"
      >
        <Tab name="Semua">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div v-for="(all, i) in blogs" :key="i">
              <nuxt-link :to="`/blog/${all.id}`">
                <img class="blog--img-list" :src="$store.state.storage_url+all.image" :alt="all.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${all.id}`">
                <h1>{{ all.heading }}</h1>
              </nuxt-link>
              <small>Posted On {{ all.created_at }}</small>
            </div>
          </div>
        </Tab>

        <Tab name="news">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div v-for="(news, i) in getNews" :key="i" >
              <nuxt-link :to="`/blog/${news.id}`">
                <img class="blog--img-list" :src="$store.state.storage_url+news.image" :alt="news.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${news.id}`">
                <h1>{{ news.heading }}</h1>
              </nuxt-link>
              <small>Posted On {{ news.created_at }}</small>
            </div>
          </div>
        </Tab>

        <Tab name="event">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div v-for="(event, i) in getEvent" :key="i" >
              <nuxt-link :to="`/blog/${event.id}`">
                <img class="blog--img-list" :src="$store.state.storage_url+event.image" :alt="event.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${event.id}`">
                <h1>{{ event.heading }}</h1>
              </nuxt-link>
              <small>Posted On {{ event.created_at }}</small>
            </div>
          </div>
        </Tab>

        <Tab name="media coverage">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div v-for="(media, i) in getMedia" :key="i" >
              <nuxt-link :to="`/blog/${media.id}`">
                <img class="blog--img-list" :src="$store.state.storage_url+media.image" :alt="media.heading" loading="lazy" />
              </nuxt-link>
              <nuxt-link :to="`/blog/${media.id}`">
                <h1>{{ media.heading }}</h1>
              </nuxt-link>
              <small>Posted On {{ media.created_at }}</small>
            </div>
          </div>
        </Tab>
      </Tabs>

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
    return { blogs: data }
  },

  methods: {
    handleSwipe(event, slick, direction) {
      console.log(event)
      this.activeClass = event;
    },
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
  }
}
</script>

<style lang="scss" scoped>
  $activeColor: #cc9980;
  $inActiveColor: #c8c8c8;
  #blog {
    height: 100%;
    padding-top: 103.2px;
  }

  ::v-deep .blog {
    &--img-banner {
      height: 460px !important;
      object-fit: cover !important;
    }
    &--img-list {
      max-width: 330px !important;
      height: 330px !important;
      object-fit: cover !important;
    }
  }

  ::v-deep .brd {
    border: 1px solid black !important;
  }

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

/blog/categories/