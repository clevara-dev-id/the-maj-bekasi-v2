<template>
  <div>
    <Hero :data-heroes="heroes" />
    <Fasilitas />
    <!-- <TipeUnit /> -->
    <Lokasi :data-locations="locations" />
    <Galeri :data-galleries="galleries"/>
    <Visi :data-abouts="abouts" />
    <Partner :data-partners="partners" />
    <HomeBlog :data-blogs="blogs" />
    <!-- <TurVirtual /> -->
    <HubungiKami />
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    let a = await $axios.get("/head-slider").then(res => {return res.data})
    let b = await $axios.get("/location").then(res => {return res.data})
    let c = await $axios.get("/gallery").then(res => {return res.data})
    let d = await $axios.get("/about-bekasi").then(res => {return res.data})
    let e = await $axios.get("/partnership").then(res => {return res.data});
    let f = await $axios.get("/blog-bekasi").then(res => {return res.data});
    
    return {
      heroes: a,
      locations: b,
      galleries: c,
      abouts: d,
      partners: e,
      blogs: f,
    }
  },
}
</script>
<style lang="scss">
  @font-face {
    font-family: gilroy bold;
    src: url('/fonts/Gilroy/Gilroy-bold.ttf');
  }
  @font-face {
    font-family: verlag;
    src: url('/fonts/Verlag/VerlagCondensed-Book.ttf');
  }
  @font-face {
    font-family: proxima nova;
    src: url('/fonts/ProximaNova/ProximaNova-Regular.otf');
  }
  h1, h5, .gilroy-bold{
    font-family: gilroy bold;
  }
  p, h6, .proxima-nova{
    font-family: proxima nova;
  }
  button, .verlag{
    font-family: verlag;
  }
</style>