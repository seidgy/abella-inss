<template>
  <section>
    <home-hero image="/images/inss-header.webp" :menu="false">
      <div class="hero-content">
        <h2 class="hero-content__title">Conquiste o seu benefício <span>previdenciário</span></h2>
        <p class="hero-content__text">Mais de duas décadas de experiência protegendo os direitos e o futuro de cada cliente!</p>
        <contato-button text="Fale com a gente" />
      </div>
    </home-hero>
    <div class="limiter">
      <section class="proteja">
        <gradient-ornament top="50%" right="-50%" />
        <div class="center col col--center col--40" size="wide">
          <h2 class="proteja__title">Proteja seu futuro agora!</h2>
          <p class="proteja__subtitle">Nosso escritório de advocacia especializado em Direito Previdenciário e benefícios do INSS está pronto para garantir seus direitos previdenciários.</p>
          <div class="servicos-list | col col--40 col--center">
            <h3 class="servicos-list__title">Confira os nossos serviços</h3>
            <div class="categorias-icon">
              <div class="categorias-icon__link" v-for="c in categorias" v-bind:key="c">
                <div class="categorias-icon__icon">
                  <img :src="c.icone" :alt="c.titulo" />
                </div>
                <p class="categorias-icon__text">
                  {{ c.titulo }}
                </p>
              </div>
            </div>
          </div>
          <p class="proteja__cta">Como cobramos? A cobrança ocorre apenas em casos de êxito, ou seja, com a vitória no processo! </p>
          <p class="proteja__text">Não espere, entre em contato hoje mesmo!</p>
          <contato-button text="Fale com a gente" />
        </div>
      </section>
      <section class="beneficios">
        <div class="center | col col--center col--40" size="wide">
          <h2 class="proteja__title">Confira os benefícios mais solicitados:</h2>
          <p class="proteja__subtitle">Nosso escritório de advocacia especializado em Direito Previdenciário e benefícios do INSS está pronto para garantir seus direitos previdenciários.</p>
          <div class="beneficios__list">
            <div class="beneficio" v-for="b in beneficios" v-bind:key="b">
              <h3 class="beneficio__title">{{ b.titulo }}</h3>
              <p class="beneficio__descricao">{{ b.descricao }}</p>
            </div>
          </div>
          <contato-button text="Veja quais benefícios você tem direito!" />
         </div>
      </section>
    </div>
    <image-section image="/images/inss-content2.webp">
      <div class="hero-content">
        <h2 class="hero-content__title">Planejamento <span>previdenciário</span></h2>
        <p class="hero-content__text">Planejamento Previdenciário é a solução para uma aposentadoria mais tranquila! O objetivo geral desse planejamento é garantir a obtenção da melhor aposentadoria possível. Além de identificar o momento ideal para solicitar o benefício, evitando atrasos e imprevistos, nós fazemos uma projeção do valor ideal de contribuição a ser pago até o momento da aposentadoria, maximizando a rentabilidade do investimento. </p>
        <contato-button text="Planeje seu futuro hoje mesmo!" />
      </div>
    </image-section>
    <image-section image="/images/inss-content3.webp">
      <div class="hero-content">
        <h2 class="hero-content__title">Revisão de <span>benefício</span></h2>
        <p class="hero-content__text">Analisamos toda a sua vida previdenciária e trabalhista, para verificar se você pode se enquadrar em alguma revisão de benefício atual. O objetivo dessa ação é aumentar o valor da sua aposentadoria ou benefício do INSS.</p>
        <contato-button text="Converse com um advogado" />
      </div>
    </image-section>
    <section class="time">
      <div class="center | col col--40" size="wide">
        <div class="hero-content">
          <p class="default-brow">Nosso time</p>
          <h2 class="hero-content__title">Tudo é sobre <b>Pessoas</b></h2>
        </div>
        <img src="/images/time.webp" alt="Time Abella Advocacia">
        <div class="col col--center col--40">
          <p class="time__text">Após 20 anos de experiência profissional, o advogado Átila Abella fundou seu próprio escritório. Com sete sócios fundadores, a Abella Advocacia nasceu como referência nacional em Direito Previdenciário, além de possuir profissionais especializados em diversas áreas do direito, que buscam garantir segurança jurídica e resultados de excelência para os clientes, através de soluções personalizadas para cada caso analisado. A Abella Advocacia busca entregar um serviço seguindo diretrizes de qualidade, proporcionando a satisfação de cada cliente. Um escritório estratégico focado em resultados, mas, principalmente, na valorização das relações humanas.</p>
          <nuxt-link class="button" visual="primary" color="primary" to="https://abellaadv.com.br/nosso-time">Conheça nossa equipe</nuxt-link>
        </div>
      </div>
    </section>
    <section class="depoimentos">
      <div class="center | col col--60" size="wide">
        <div class="hero-content">
          <p class="default-brow">Clientes</p>
          <h2 class="hero-content__title">O que dizem <b>sobre nós</b></h2>
        </div>
        <div class="depoimentos__list">
          <div class="depoimento">
            <p class="depoimento__nome">{{ depoimentos[0].nome }}</p>
            <p class="depoimento__depoimento">{{ depoimentos[0].depoimento }}</p>
          </div>
          <div class="depoimentos__column">
            <div class="depoimento">
              <p class="depoimento__nome">{{ depoimentos[1].nome }}</p>
              <p class="depoimento__depoimento">{{ depoimentos[1].depoimento }}</p>
            </div>
            <div class="depoimento">
              <p class="depoimento__nome">{{ depoimentos[2].nome }}</p>
              <p class="depoimento__depoimento">{{ depoimentos[2].depoimento }}</p>
            </div>
          </div>
          <div class="depoimentos__column">
            <div class="depoimento">
              <p class="depoimento__nome">{{ depoimentos[3].nome }}</p>
              <p class="depoimento__depoimento">{{ depoimentos[3].depoimento }}</p>
            </div>
            <div class="depoimentos__logo">
              <img src="/images/logo-min.svg" alt="Abella Advocacia">
            </div>
          </div>
        </div>
      </div>
    </section>
    <contato-section></contato-section>
    <pl-footer></pl-footer>
  </section>
</template>

<script setup>
const categorias = [
  {
    titulo: 'Concessões de benefícios como aposentadorias, pensões e auxílios',
    icone: '/images/certificate-medal.svg'
  },
  {
    titulo: 'Revisões de Aposentadorias',
    icone: '/images/handshake-deal-square.svg'
  },
  {
    titulo: 'Planejamento de Aposentadoria',
    icone: '/images/legal-friction-talk-users.svg'
  },
  {
    titulo: 'Isenções de imposto de renda',
    icone: '/images/exhibitors-legal-law.svg'
  },
  {
    titulo: 'Restituições de contribuições',
    icone: '/images/user-court-legal-law.svg'
  },
  {
    titulo: 'Emissões de certidões de tempo de contribuição',
    icone: '/images/legal-scale-square.svg'
  }
]

const beneficios = [
  {
    titulo: 'Aposentadoria por Idade',
    descricao: 'Destinada para mulheres que completam 62 anos de idade, e para os homens com 65 anos ou mais.'
  },
  {
    titulo: 'Aposentadoria por Tempo de Contribuição',
    descricao: 'Concedida para mulheres que completarem 30 anos de contribuição ao INSS e para, e para os homens que contribuírem à previdência por 35 anos.'
  },
  {
    titulo: 'Aposentadoria Especial',
    descricao: 'Destinada para trabalhadores que exerceram atividades prejudiciais à saúde e integridade física (insalubridade e periculosidade).'
  },
  {
    titulo: 'Aposentadoria Rural',
    descricao: 'Voltada para trabalhadores do campo, seja em atividade individual ou regime de economia familiar.'
  },
  {
    titulo: 'Aposentadoria da Pessoa com Deficiência',
    descricao: 'Pessoas com deficiência têm direito a regras mais vantajosas de aposentadoria.'
  },
  {
    titulo: 'Aposentadoria dos Professores',
    descricao: 'Concedido aos trabalhadores da área da educação.'
  },
  {
    titulo: 'Auxílio Doença',
    descricao: 'Pago para quem precisa se afastar do trabalho, por mais de 15 dias, devido algum acidente ou doença.'
  },
  {
    titulo: 'Auxílio Acidente',
    descricao: 'Concedidos para as pessoas que sofreram um acidente e tiveram a sua capacidade para o trabalho reduzida.'
  },
  {
    titulo: 'Pensão por Morte',
    descricao: 'Voltado para quem é dependente de algum segurado do INSS que faleceu.'
  },
  {
    titulo: 'Benefício Assistencial (BPC/LOAS)',
    descricao: 'Destinado para idosos de 65 anos de idade, ou mais, e pessoas com deficiência, com dificuldades financeiras.'
  }
]

const depoimentos = [
  {
    nome: 'Daniela Callegaro',
    depoimento: 'A equipe da Abella Advocacia é extremamente atenciosa e competente. Solicitei um estudo relacionado ao Direito Previdenciário e rapidamente me atenderam, superando as minhas expectativas! Super recomendo o trabalho destes ótimos profissionais, para todos que necessitem saber mais informações sobre o processo de aposentadoria. Muito obrigada, Abella Advocacia, por esclarecerem todas as minhas dúvidas! Vocês estão de parabéns!'
  },
  {
    nome: 'Sandra  Leal',
    depoimento: 'Ótimo atendimento, profissionais competentes, gentileza e profissionalismo. Solidariedade e humanidade no atendimento são itens necessários na hora que procuramos um profissional em advocacia.'
  },
  {
    nome: 'Fábio Militão',
    depoimento: 'Foi excelente as minhas experiências. São bons e ótimos profissionais, recomendo de olhos fechados!'
  },
  {
    nome: 'Claudionara Duarte',
    depoimento: 'Ótimo trabalho com determinação profissional e dedicação ao cliente excelente todos que estão atendendo nossa causa. Obrigada!!! Sucesso!!!'
  }
]
</script>

<style scoped lang="scss">
.hero-content {
  max-width: 839px;
}

  .hero-content__text {
    max-width: 480px;
  }

.proteja {
  background-color: var(--base-color);
  padding-block: 80px;
  position: relative;
  *:not(.ornament) {
    position: relative;
    z-index: 1;
  }
}

  .proteja__title {
    color: var(--white-color);
    font-size: 3.75em;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 2.5em;
      text-align: center;
    }
  }

  .proteja__subtitle {
    color: var(--white-color);
    font-size: 2.25em;
    font-weight: 700;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 1.5em;
    }
  }

  .proteja__cta {
    color: var(--white-color);
    font-size: 1.875em;
    font-weight: 700;
    text-align: center;
    max-width: 850px;
    @media (max-width: 1024px) {
      font-size: 1.5em;
    }
  }

  .proteja__text {
    color: var(--white-color);
    font-size: 1.25em;
    text-align: center;
  }

.servicos-list {
  padding-block: 20px;  
}

  .servicos-list__title {
    color: var(--white-color);
    font-size: 1.25em;
    font-weight: 600;
  }

.beneficios {
  padding-block: 80px;
  background-color: var(--base-color);
  background-image: url('/images/inss-content1.webp');
  background-size: 100% auto;
  background-position: bottom right;
  background-repeat: no-repeat;
  * {
    position: relative;
    z-index: 1;
  }
}

  .beneficios__list {
    padding-block: 20px 90px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .beneficio {
    background-color: var(--primary-color);
    padding: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

    .beneficio__title {
      color: var(--white-color);
      font-size: 1.5em;
      font-weight: 700;
      min-height: 60px;
    }

    .beneficio__descricao {
      color: var(--white-color);
      font-size: 1.25em;
    }

.time {
  background-color: var(--base-color);
  padding: 70px 0 140px;
  .hero-content {
    max-width: 660px;
    padding-bottom: 40px;
  }
    .center {
      .col {
        width: 100%;
      }
    }
}

.time__text {
  color: var(--white-color);
  font-size: 1.25em;
  text-align: center;
  max-width: 1125px;
}

.depoimentos {
  padding-block-end: 140px;
  background-color: var(--base-color);
  .hero-content {
    max-width: 650px;
  }
}

.depoimentos__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.depoimentos__column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.depoimento {
  position: relative;
  background-color: var(--primary-color);
  padding: 24px;
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  justify-content: space-between;
  flex-grow: 1;
  * {
    position: relative;
    z-index: 1;
  }
  &::after {
    content: '“';
    position: absolute;
    bottom: -0.5em;
    right: 0.1em;
    font-size: 88px;
    color: var(--white-color);
    line-height: 1em;
    opacity: 0.4;
  }
}

  .depoimento__depoimento {
    color: var(--white-color);
    font-size: 1.25em;
    line-height: 1.6;
  }

  .depoimento__nome {
    color: var(--white-color);
    font-size: 1.25em;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
  }

  .depoimentos__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
    @media (max-width: 1024px) {
      padding-top: 80px;
    }
    img {
      width: 185px;
    }
  }
</style>