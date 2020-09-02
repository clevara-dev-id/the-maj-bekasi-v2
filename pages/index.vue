<template>
  <div>
    <Hero :data-heroes="heroes" />
    <!-- <Fasilitas /> -->
    <!-- <TipeUnit :data-units="units" /> -->
    <!-- <Lokasi :data-locations="locations" /> -->
    <!-- <Galeri :data-galleries="galleries" /> -->
    <!-- <Visi :data-abouts="abouts" /> -->
    <!-- <Partner :data-partners="partners" /> -->
    <!-- <HomeBlog :data-blogs="blogs" /> -->
    <TurVirtual />
    <HubungiKami />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "The MAJ Residences Bekasi",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The MAJ Residences Bekasi.",
        },
      ],
    };
  },
  // components,
  async asyncData({ $axios }) {
    let a = await $axios.get("/head-slider").then((res) => {
      return res.data;
    });
    let b = await $axios.get("/location").then((res) => {
      return res.data;
    });
    let c = await $axios.get("/gallery").then((res) => {
      return res.data;
    });
    let d = await $axios.get("/about-bekasi").then((res) => {
      return res.data;
    });
    let e = await $axios.get("/partnership").then((res) => {
      return res.data;
    });
    let f = await $axios.get("/blog-bekasi").then((res) => {
      return res.data;
    });
    let g = await $axios.get("/units").then((res) => {
      return res.data;
    });

    return {
      heroes: a,
      locations: b,
      galleries: c,
      abouts: d,
      partners: e,
      blogs: f,
      units: g,
    };
  },
};
</script>
<style lang="scss">
</style>