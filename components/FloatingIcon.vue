<template>
  <div class="fixed wa-me">
    <a class="bg-transparent" target="_blank" href="https://wa.me/628118868909?text=Halo%21%20Saya%20ingin%20tahu%20lebih%20banyak%20mengenai%20apartemen%20The%20MAJ%20Residences%20Bekasi.">
      <Img class="w-16 h-16 hover:scale-110" src="/wa.svg" alt="whatsapp" />
    </a>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .wa-me{
    right: 1.5%;
    bottom: 5%;
    max-width:60px;
    width:100%;
    z-index:15;
    background:transparent;
    @media only screen and (max-width:450px){
        max-width: 50px;
        right:5%;
    }
  }
</style>