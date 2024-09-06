<template>
    <nuxt-link class="button whatsapp-button" visual="primary" color="primary" :to="`mailto:${contato[0].email}`" target="_blank">{{ text }}<img v-if="icon" src="/images/email-negativo.svg" alt="Ícone e-mail" aria-hidden="true"></nuxt-link>
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