<template>
  <div class="pt-24">
		<h1 class="text-heading font-bold text-center text-indigo-500 capitalize my-24">kebijakan privasi</h1>
		<div class="container mx-auto px-8">
			<div class="text-base text-black mb-48 in-p-4" v-html="privacy.text"></div>
		</div>
    <Footer :data-socmed="socmed" />
	</div>
</template>
<script>
export default {
	head() {
    return {
      title: "The MAJ Residences Bekasi - privacy policy",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The MAJ Residences Bekasi.",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    let a = await $axios.get('/privacy-policy').then((res) => { return res.data})
    let x = await $axios.get("/bekasi-social-media").then((res) => {
      return res.data;
    });
		return {
      privacy:a,
      socmed:x
    }
	},
};
</script>
<style lang="scss">
  .in-p-4{
    p{
      margin-top: 1rem;
    }
    ul{
      list-style-type: disc;
      margin-left: 2rem;
      li{
        margin-top: 1rem;
      }
    }
  }
</style>