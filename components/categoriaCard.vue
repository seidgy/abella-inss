<template>
    <div class="categoria-card">
        <div class="categoria-card__background" :style="`background-image:url(${categoria.imagem})`"></div>
        <div class="center" size="wide">
            <div class="categoria-card__title">
                <p>{{ categoria.splitTitle[0] }}</p>
                <p>{{ categoria.splitTitle[1] }}</p>
            </div>
            <p class="categoria-card__text">{{ categoria.descricao }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        categoria: {
            type: Object,
            required: true
        }
    })
</script>

<style lang="scss" scoped>
.categoria-card {
    display: block;
    width: 100%;
    padding-block: 90px 60px;
    border-top: 5px solid var(--white-color);
    text-decoration: none;
    position: relative;
    overflow: hidden;
}

    .categoria-card__background {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: all 0.3s ease-out;
    }

    .categoria-card__title {
        position: relative;
        z-index: 1;
        p {
            font-size: 6em;
            line-height: 0.97em;
            @media (max-width: 1024px) {
                font-size: 2em;
            }
        }
        p:not(:last-child) {
            color: var(--white-color);
        }
        p:last-child {
            color: var(--primary-color);
            font-weight: 700;
        }
    }

    .categoria-card__text {
        position: relative;
        z-index: 1;
        margin-top: 24px;
        max-width: 600px;
        color: var(--white-color);
        letter-spacing: 0.04em;
        line-height: 1.6em;
        @media (max-width: 1024px) {
            font-size: 0.875em;
        }
    }
</style>