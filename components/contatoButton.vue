<template>
    <nuxt-link class="button whatsapp-button" visual="primary" color="primary" :to="contato[0].contato" target="_blank">{{ text }}<img v-if="icon" src="/images/whatsapp-negativo.svg" alt="Ícone WhatsApp" aria-hidden="true"></nuxt-link>
</template>

<script setup>
const contato = await queryContent('contato').find();
    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        icon: {
            type: Boolean,
            default: false
        }
    });
</script>

<style lang="scss" scoped>
    .whatsapp-button {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 20px;
        img {
            width: 20px;
        }
    }
</style>