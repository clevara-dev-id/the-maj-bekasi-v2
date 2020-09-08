<template>
  <div>
    <div class="bg-orange-500 pt-32 pb-16 lg:py-48">
      <div class="container mx-auto px-2 lg:px-16">
        <img src="/comingsoon.png" alt="coming soon">
      </div>
    </div>
    <Footer :data-socmed="socmed" />
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    let x = await $axios.get("/bekasi-social-media").then((res) => {
      return res.data;
    });
		return {
      socmed:x
    }
  },
}
</script>