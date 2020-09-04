<template>
  <div>
    <div class="pt-24 container mx-auto px-2 lg:px-8">
      <div
        class="flex py-16 border-b border-grey-500"
        :class="{'flex-row-reverse' : index % 2 === 1}"
        v-for="(expertise, index) in expertices"
        :key="expertise.id"
      >
        <div class="w-full lg:w-2/5 lg:py-24 mx-4">
          <img
            class="w-28 mx-auto lg:mr-auto lg:ml-0"
            :src="`${$store.state.storage_url+JSON.parse(expertise.logo)[0].download_link}`"
            :alt="JSON.parse(expertise.logo)[0].original_name"
          />
          <img
            class="w-full mt-12 mx-auto mb-12 block lg:hidden"
            :src="$store.state.storage_url+expertise.images"
            :alt="JSON.parse(expertise.logo)[0].original_name"
          />
          <p class="text-base text-black lg:mt-8">{{expertise.description}}</p>
        </div>
        <div class="w-full lg:w-3/5 hidden mx-4 lg:block">
          <img
            class="w-full mt-12 mx-auto mb-12"
            :src="$store.state.storage_url+expertise.images"
            :alt="JSON.parse(expertise.logo)[0].original_name"
          />
        </div>
      </div>
    </div>
    <Footer :data-socmed="socmed" />
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
  async asyncData({ $axios }) {
    let a = await $axios.get("/expertices").then((res) => {
      return res.data;
    });
    // await this.$axios.get("/expertices").then((res) => {
    //   this.expertices = res.data;
    // });
    let x = await $axios.get("/bekasi-social-media").then((res) => {
      return res.data;
    });

    return {
      expertices: a,
      socmed: x,
    };
  },
  data() {
    return {
      expertices: null,
    };
  },
};
</script>