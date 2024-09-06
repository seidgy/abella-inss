<template>
    <section class="publicacoes-header">
        <div class="center col col--60" size="wide">
            <div class="publicacoes-header__header col col--24">
                <h1 class="publicacoes-header__title col">
                    <span>Publicações</span>
                    para te ajudar
                </h1>
                <p class="publicacoes-header__text">
                    Uma área completa de conteúdos feitos para você tirar todas as suas dúvidas em várias áreas do direito, confira! 
                </p>
            </div>
            <div class="row row--24">
                <nuxt-link to="/publicacoes" class="button" visual="primary" :color="activeTab === 'blog' ? 'primary' : 'tertiary'" size="lg">Blog</nuxt-link>
                <nuxt-link to="/videos" class="button" visual="primary" :color="activeTab === 'videos' ? 'primary' : 'tertiary'" size="lg">Videos</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        activeTab: {
            type: String,
            default: 'blog',
        },
    });
</script>

<style lang="scss" scoped>
.publicacoes-header {
    background: var(--base-color);
    padding-block: 96px 115px;
}

    .publicacoes-header__title {
        font-size: 4.5em;
        color: var(--white-color);
        font-weight: 400;
        line-height: 1.25em;
        span {
            color: var(--white-color);
            font-weight: 700;
        }
        @media (max-width: 1024px) {
            font-size: 2.5em;
        }
    }

    .publicacoes-header__text {
        font-size: 1em;
        color: var(--white-color);
        font-weight: 300;
        line-height: 1.6em;
        max-width: 650px;
    }
</style>