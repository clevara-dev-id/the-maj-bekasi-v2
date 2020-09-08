<template>
  <div>
    <NavigationBar />
    <FloatingIcon />
    <Nuxt />
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  body{
    background-color: #FAFAFA;
  }
  @media screen and (max-width: 320px) {
    .text-heading{
      font-size:1.5rem;
    }
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
  strong {
    font-family: proxima nova bold;
  }
</style>
