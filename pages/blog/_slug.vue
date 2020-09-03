<template>
  <div class="container mx-auto px-8 py-40">
    <div class="heading">
			<h5 class="verlag text-base text-gray-600 tracking-widest uppercase"><nuxt-link class="hover:text-orange-500" to="/">home</nuxt-link> / <nuxt-link class="hover:text-orange-500" to="/blogs">blog</nuxt-link> / <span class="text-orange-500">{{slug}}</span></h5>
      <h5
        class="verlag text-base text-orange-500 tracking-widest uppercase mt-24"
      >{{blog.categories.replace(/["']/g, '').replace(/\[/g, '').replace(/\]/g, '')}}</h5>
      <h1 class="text-heading font-bold text-indigo-500 lg:w-1/2 capitalize my-6">{{blog.heading}}</h1>
    </div>
    <div class="flex flex-wrap mt-14 py-4">
      <div class="flex justify-between lg:justify-start w-full lg:w-5/6">
        <div class="flex items-center lg:mr-8">
          <img class="p-2 mr-2" src="/blog/person.svg" alt="person icon" />
          <h6 class="text-sm lg:text-base text-gray-300 proxima-nova">{{blog.author}}</h6>
        </div>
        <div class="flex items-center">
          <img class="p-2 mr-2" src="/blog/calendar.svg" alt="person icon" />
          <h6 class="text-sm lg:text-base text-gray-300 proxima-nova">{{blog.created_at}}</h6>
        </div>
      </div>
      <div class="flex flex-row-reverse w-full flex-end lg:w-1/6 py-4 lg:py-0">
				<div class="tooltip-box p-2">
					<button @click="copy" class="p-2 focus:outline-none">
            <img src="/blog/link.svg" alt="link" />
          </button>
					<div class="tooltip" :class="{'hidden': isShow === false}">
						<input ref="copyUrl" hidden type="text" :value="`${$nuxt.$route.path}`" />
						Copied.
					</div>
				</div>

        <a
          target="_blank"
          :href="`https://twitter.com/intent/tweet?text=${blog.heading}&url=https://themajbekasi.com${$nuxt.$route.path}&hashtags=#${slug}`"
          class="p-3 mr-2"
        >
          <img src="/blog/twitter.svg" alt="twitter" />
        </a>
        <a
          class="p-3 mr-2"
          target="_blank"
          :href="`https://www.facebook.com/sharer/sharer.php?u=https://themajbekasi.com${$nuxt.$route.path};sdkpreparse`"
        >
          <img src="/blog/facebook.svg" alt="facebook" />
        </a>
      </div>
    </div>
    <div class>
      <img class="w-full" :src="$store.state.storage_url+blog.image" :alt="blog.heading" />
      <h6 class="image-description proxima-nova text-gray-300 py-4">{{blog.img_desc}}</h6>
    </div>

    <div class="grid lg:grid-cols-12 gap-8 mt-24">
			<div class="col-span-12 lg:col-span-8">
				<div v-html="blog.text"></div>
			</div>
			<div class="col-span-12 lg:col-span-4 mt-24 lg:mt-0">
				<h5 class="verlag text-base uppercase text-orange-500 tracking-widest font-bold">
					artikel terkait
				</h5>
				<div class="grid grid-cols-3 gap-4 mt-12" v-for="artikel in artikels.slice(0,4)" :key="artikel.id">
					<div class="col-span-3 lg:col-span-1">
						<img :src="$store.state.storage_url+artikel.image.replace(`.jpg`, `-thumbnail.jpg`)" :alt="artikel.heading">
					</div>
					<div class="col-span-3 lg:col-span-2">
						<nuxt-link :to="`/blog/${artikel.heading.replace(/\s/g, '-')}`"><h5 class="text-indigo-500 capitalize text-sm lg:text-lg py-4 lg:py-0">{{artikel.heading}}</h5></nuxt-link>
						<h6 class="proxima-nova text-orange-500 text-xxs tracking-wider lg:pt-2">Posted On {{artikel.created_at}}</h6>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    // return {data:params.slug}
    let a = await $axios.get(`/blog/${params.slug}`).then((res) => {
      return res.data;
		});
		let b = await $axios.get(`/blog-bekasi`).then((res) => {
      return res.data;
    });
    return {
			blog: a,
			artikels: b,
      slug: params.slug,
    };
  },
  methods: {
    copy() {
      let copyText = this.$refs.copyUrl;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
			this.isShow = true
			window.setTimeout(() => {
					this.isShow = false
				}, 3000)
    },
	},
	data() {
		return {
			isShow:false
		}
	},
};
</script>
<style lang="scss" scoped>
// h5{
// 	font-family: verlag !important;
// }
.image-description {
  font-size: 10pt;
}
.tooltip {
  width: 80px;
  background: #202020;
  color: #ffffff;
  text-align: center;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  left: -80%;
	font-size: 8pt;
	position: absolute;
  transform: translate-x(-50%);
}
.tooltip-box {
  position: relative;
}
</style>
