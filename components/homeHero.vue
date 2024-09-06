<template>
    <header class="hero" :style="{ backgroundImage: `url(${image})` }">
        <pl-menu :menu="menu"></pl-menu>
        <div class="hero__reel | hero-reel | reel">
          <div class="center" size="wide">
            <slot></slot>
          </div>
        </div>
    </header>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    menu: {
        type: Boolean,
        default: true,
    }
});
</script>

<style lang="scss" scoped>
    .hero {
      background-size: cover;
      background-position: top right;
      padding-block: 190px 115px;
      color: var(--white-color);
      @media screen and (max-width: 1024px) {
        padding-block: 240px 70px;
        background-size: 140% auto;
        background-position: top 55px right;
        background-repeat: no-repeat;
        background-color: var(--base-color);
      }
    }

    .hero-reel__item {
        position: relative;
        width: 102vw;
        height: 450px;
        flex-shrink: 0;
        padding-bottom: 132px;
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-end;
        &::before {
            content: '';	
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background: black;
            opacity: 0.5;
        }
        &::after {
            content: '';	
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background: var(--base-gradient);
            opacity: 0.3;
        }
    }

    .hero-reel__image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: center top;
        background-size: cover;
        z-index: 0;
    }

    .hero-reel__content {
        position: relative;
        z-index: 2;
        display: flex;
        flex-flow: column nowrap;
        gap: 22px;
    }

    .hero-reel__title {
        font-family: var(--display-font);
        font-weight: 500;
        font-size: 1.5em;
        text-decoration: none;
        color: var(--white-color);
        max-width: 675px;
        width: 100%;
        p {
            color: var(--white-color);
        }
    }

    .hero-reel__position-indicators {
        position: absolute;
        left: auto;
        right: auto;
        bottom: 40px;
        @media screen and (max-width: 1024px) {
          width: 100%;
          display: flex;
          justify-content: center;
        }
    }
</style>