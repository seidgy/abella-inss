<template>
    <section class="conteudo">
        <gradient-ornament top="50%" right="-50%" />
        <div class="center" size="wide">
            <div class="hero-content">
            <p class="default-brow">Blog</p>
            <h2 class="hero-content__title">Conteúdos para <b>você</b></h2>
            <p class="hero-content__text">Uma área completa de conteúdos feitos para você tirar todas as suas dúvidas em várias áreas do direito, confira! </p>
            </div>
            <div class="row row--between conteudo__actions">
                <nuxt-link class="button" visual="primary" color="primary" to="/publicacoes">Veja mais</nuxt-link>
                <ul class="conteudo__nav not-mobile">
                <li v-for="(group, index) in data.publicacoes" v-bind:key="index"><nuxt-link :class="{'active': data.activeGroup == index}" @click.prevent="data.activeGroup = index">0{{index+1}}</nuxt-link></li>
                </ul>
            </div>
            <div class="conteudo__group" v-for="(group, index) in data.publicacoes" v-bind:key="index">
            <div class="conteudo__line" :class="{'not-mobile': index >= 1}" v-if="data.activeGroup == index">
                <pub-card v-for="pub in group" v-bind:key="pub.slug" :publicacao="pub" style="flex-grow: 1;"></pub-card>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const publicacoes = await queryContent('publicacoes').sort({data: -1}).limit(9).find();

const data = reactive({
  publicacoes: [],
  activeGroup: 0
});

for (let i = 0; i < publicacoes.length; i += 3) {
  data.publicacoes.push(publicacoes.slice(i, i + 3));
}


</script>

<style lang="scss" scoped>

.conteudo {
  background: var(--base-color);
  padding: 50px 0 150px;
  position: relative;
  @media (max-width: 1024px) {
    padding-bottom: 72px;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50px;
    height: 650px;
    width: 100%;
    border-left: 1px solid var(--white-color);
    border-bottom: 1px solid var(--white-color);
    @media (max-width: 1024px) {
      display: none;
    }
  }
}

  .conteudo__actions {
    width: 100%;
    padding: 50px 0 70px;
    @media (max-width: 1024px) {
      justify-content: center;
    }
  }

  .conteudo__nav {
    display: flex;
    gap: 32px;
    li {
      list-style: none;
    }
    a{
      color: var(--white-color);
      font-size: 1.25em;
      font-weight: 600;
      transition: color 0.2s ease-out;
      cursor: pointer;
      &.active{
        color: var(--primary-color);
      }
      &:hover {
        color: var(--primary-color-80);
      }
    }
  }

  .conteudo__group {
    width: 100%;
  }

  .conteudo__line {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

</style>