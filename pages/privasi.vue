<template>
  <div class="pt-24">
		<h1 class="text-heading font-bold text-center text-indigo-500 capitalize my-24">kebijakan privasi</h1>
		<div class="container mx-auto px-8">
			<p class="text-base text-black mb-48" v-html="privacy.text"></p>
		</div>
	</div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
		let a = await $axios.get('/privacy-policy').then((res) => { return res.data})
		return {privacy:a}
	},
};
</script>