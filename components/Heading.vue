<template>
    <div>
        <h4 class="text-sm uppercase tracking-widest text-orange-500 mb-4">{{dataTitle}}</h4>
        <h1 class="text-heading text-indigo-500 leading-7 font-bold capitalize">{{dataCaption}}</h1>
    </div>
</template>
<script>
export default {
    props: {
        dataTitle: String,
        dataCaption: String,
    }
}
</script>
<style lang="scss">
    
</style>