<template>
    <img class="ornament" :style="`top: ${top}; right: ${right}`" src="/images/gradient-ornament.svg" alt="Ornament" aria-hidden="true" >
</template>

<script setup>
    const props = defineProps({
        top: {
            type: String,
            required: true
        },     
        right: {
            type: String,
            required: true
        }
    });
</script>

<style lang="scss" scoped>
 .ornament {
    position: absolute;
    z-index: 0;
 }
</style>