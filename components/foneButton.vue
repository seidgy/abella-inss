<template>
    <nuxt-link class="button whatsapp-button" visual="primary" color="primary" :to="`tel:${replaceSymbols(contato[0].telefone)}`" target="_blank">{{ text }}<img v-if="icon" src="/images/phone-negativo.svg" alt="Ícone telefone" aria-hidden="true"></nuxt-link>
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

    const replaceSymbols = (text) => {
        return text.replace(/[^a-zA-Z0-9]/g, '');
    }
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