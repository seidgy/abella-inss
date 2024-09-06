<template>
    <section class="contato">
      <div class="center col col--60 col--center" size="wide">
        <h3 class="contato__title">Entre em contato conosco hoje  para uma consulta inicial</h3>
        <div class="row row--center">
          <contato-button text="Fale com a gente" />
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.contato {
  padding: 90px 0 70px;
  background: var(--secondary-color);
}

  .contato__title {
    font-size: 4.275em;
    text-align: center;
    font-weight: 400;
    @media (max-width: 1024px) {
      font-size: 2.5em;
    }
  }

</style>