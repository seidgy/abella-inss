<template>
    <nuxt-link :to="`/publicacoes/${publicacao.slug}`" class="pub-card" :class="{'pub-card--alt': alt}">
        <div class="pub-card__image" :style="`background-image:url(${publicacao.imagem?publicacao.imagem:'/OG.jpg'})`"></div>
        <div class="pub-card__info col col--20">
            <p class="pub-card__autor">{{ publicacao.autor?publicacao.autor.nome:'Abella Advocacia' }}</p>
            <h3 class="pub-card__title">{{ publicacao.titulo }}</h3>
            <p class="pub-card__cta">Ver mais</p>
        </div>
    </nuxt-link>
</template>

<script setup>
    const props = defineProps({
        publicacao: {
            type: Object,
            required: true
        },
        alt: {
            type: Boolean,
            default: false
        }
    });
</script>

<style lang="scss" scoped>
    .pub-card {
        text-decoration: none;
        background: var(--primary-color);
        padding-bottom: 50px;
        position: relative;
    }

    .pub-card__image {
        height: 246px;
        width: 100%;
        background-size: cover;
        background-position: center;
        
    }

    .pub-card__info {
        padding: 16px;
        background-color: var(--white-color);
        background: var(--primary-color);
        & > * {
            color: var(--white-color);
            text-decoration-color: var(--white-color);
            line-height: 1.75em;
        }
    }

    .pub-card__autor {
        font-weight: 400;
        border-bottom: 1px solid var(--white-color);
    }

    .pub-card__title {
        font-size: 1.25em;
        font-weight: 400;
    }

    .pub-card__cta {
        position: absolute;
        bottom: 16px;
        right: 16px;
        text-decoration: underline;
        font-size: 1.125em;
        font-weight: 600;
    }

    .pub-card--alt {
        background-color: var(--white);

        .pub-card__image {
            border-radius: 8px;
            
        }

        .pub-card__info {
            padding-top: 16px;
            background: var(--white);
            & > * {
                color: var(--base-color);
                text-decoration-color: var(--base-color);
                line-height: 1.75em;
            }
        }
    }
</style>