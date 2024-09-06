<template>
    <section class="image-section" :style="`background-image: url(${image})`">
        <div class="center" size="wide">
            <slot />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.image-section {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-block: 95px;
}

:deep(.hero-content) {
    max-width: 550px;
}
</style>