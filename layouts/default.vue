<template>
  <div>
    <NavigationBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
  body{
    background-color: #FAFAFA;
  }
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
