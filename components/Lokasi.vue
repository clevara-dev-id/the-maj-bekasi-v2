<template>
    <div id="lokasi" class="container mx-auto px-8 lg:px-16 pt-24 lg:pt-40">
        <Heading class="w-11/12 lg:w-5/12" data-title="lokasi" data-caption="Kenyamanan dan kemudahan menantimu di 'planet' Bekasi" />
        <MobileMaps :data-maps="dataLocations" class="mt-6 block lg:hidden" />
        <DesktopMap :data-maps="dataLocations" class="mt-6 hidden lg:block" />
    </div>
</template>
<script>
export default {
    props:['dataLocations']
}
</script>
<style lang="scss">
    
</style>