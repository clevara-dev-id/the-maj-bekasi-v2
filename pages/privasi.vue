<template>
  <div class="pt-24">
		<h1 class="text-heading font-bold text-center text-indigo-500 capitalize my-24">kebijakan privasi</h1>
		<div class="container mx-auto px-8">
			<p class="text-base text-black mb-48" v-html="privacy.text"></p>
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
<style lang="scss" scoped>
  p{
    font-family: proxima-nova;
    font-weight: bold;
  }
  strong{
    font-weight: bolder;
  }
</style>