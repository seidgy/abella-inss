<template>
    <div class="author-card">
        <div class="author-card__bg"></div>
        <div class="author-card__content">
            <p class="author-card__tempo" v-if="data.autor.desde">Colunista desde {{ data.autor.desde }}</p>
            <div class="author-card__image" :style="`background-image:url(${data.autor.picture});`">
                <a :href="data.autor.url" target="_blank" class="author-card__link" v-if="data.autor.url">
                    <img format="webp" src="/images/linkedin-negativo.svg" :alt="`LinkedIn de ${data.autor.name}`" />
                </a>
            </div>
            <p class="author-card__sobre">Sobre o autor desse conteúdo</p>
            <div class="author-card__info">
                <p class="author-card__nome">{{ data.autor.nome }}</p>
                <p class="author-card__cargo" v-if="data.autor.cargo">{{ data.autor.cargo }}</p>
            </div>
                <nuxt-link v-if="data.autor.slug" class="base-link" :to="`/publicacoes/autor/${data.autor.slug}`">Veja todos os artigos <span class="material-symbols-outlined">chevron_right</span></nuxt-link>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    const props = defineProps({
        autor: {
            type: Object,
            default: {},
        },
    });

    const data = reactive({
        autor: props.autor ? props.autor : {
            nome: "Abella Advocacia",
            cargo: "",
            picture: "/OG.jpg",
            desde: "",
            bio: "",
            url: ""
        }
    })
</script>

<style lang="scss" scoped>
    .author-card {
        display: flex;
        flex-flow: column nowrap;
        background-color: white;
        border-radius: 4px;
    }

        .author-card__bg {
            border-radius: 4px 4px 0 0;
            background-image: url('/images/books.webp');
            width: 100%;
            height: 128px;
            background-size: cover;
            background-position: center;
        }

        .author-card__content {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            gap: 16px;
            padding: 24px;
            border-radius: 16px;
            position: relative;
            z-index: 1;
            border-radius: 0 0 4px 4px;
            margin-top: -140px;
        }

        .author-card__tempo {
            font-size: 0.75em;
            color: white;
        }

        .author-card__image {
            height: 160px;
            width: 160px;
            border-radius: 50%;
            background-size: cover;
            background-position: center top;
            border: 8px solid white;
        }

        .author-card__sobre {
            font-size: 0.75em;
            color: hsla(0, 0%, 0%, 0.7);
        }

        .author-card__info {
            text-align: center;
            color: hsla(0, 0%, 0%, 0.9);
        }

        .author-card__nome {
            font-size: 1.375em;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .author-card__cargo {
            font-size: 0.875em;
        }

        .author-card__link {
            width: 100%;
            height: 100%;
            padding: 12px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-end;
            align-items: center;
            opacity: 0;
            transition: opacity 0.2s ease-out;
            &:hover {
                opacity: 1;
            }
            img {
                width: 24px;
                height: 24px;
            }
        }
</style>