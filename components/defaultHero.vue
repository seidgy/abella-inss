<template>
    <header class="hero | default-hero">
        <div class="center" size="wide">
            <pl-menu></pl-menu>
        </div>
    </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
    .default-hero {
        height: auto;
        min-height: auto;
        background: var(--base-color);
        position: relative;
        padding-block: 48px;
        display: flex;
        flex-flow: column nowrap;
    }
</style>