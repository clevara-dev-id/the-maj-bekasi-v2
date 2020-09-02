<template>
  <div class="pt-24 container mx-auto px-8">
    <div
      class="border-b py-16 lg:grid lg:grid-cols-2 lg:gap-4"
      v-for="expertise in expertices"
      :key="expertise.id"
    >
      <div class="lg:py-8">
        <img
          class="w-28 mx-auto lg:mr-auto lg:ml-0 mb-12"
          :src="`${$store.state.storage_url+JSON.parse(expertise.logo)[0].download_link}`"
          alt="expertise logo"
        />
        <img
          class="w-28 mx-auto mb-12 lg:hidden"
          :src="`${$store.state.storage_url+JSON.parse(expertise.images)[0].download_link}`"
          alt="expertise image"
        />
        <p class="text-base text-black">{{expertise.description}}</p>
      </div>
      <div class="hidden lg:block">
        <img
          class="w-28 mx-auto mb-12"
          :src="`${$store.state.storage_url+JSON.parse(expertise.images)[0].download_link}`"
          alt="expertise image"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "The MAJ Residences Bekasi - Expertise",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The MAJ Residences Bekasi.",
        },
      ],
    };
  },
  async fetch() {
    await this.$axios.get("/expertices").then((res) => {
      this.expertices = res.data;
    });
  },
  data() {
    return {
      expertices: null,
    };
  },
};
</script>