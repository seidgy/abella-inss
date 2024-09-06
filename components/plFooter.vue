<template>
    <footer class="footer">
        <div class="center | footer__content" size="wide">
            <div>
                <img src="/images/logo-transparente.png" alt="Abella Advocacia" class="footer__logo">
            </div>
            <div class="footer__socials">
                <social-list :negativo="true" size="small"></social-list>
            </div>
            <div class="footer__enderecos">
                <div class="footer__endereco col col--16">
                    <p class="footer__title">Santa Maria | RS </p>
                    <p class="footer__text">Rua dos Andradas, n°1449, Sala 101-B - Térreo, Boulevard Espírito Santo, Bairro Centro,  CEP: 97010-033</p>
                </div>
                <div class="footer__endereco col col--16">
                    <p class="footer__title">Porto Alegre | RS </p>
                    <p class="footer__text">Av. Goethe, 122, Bairro Moinhos de Vento.. CEP: 90430-100</p>
                </div>
            </div>
            <div class="footer__info col col--32">
                <div class="footer__phones">
                    <p class="footer__text">Santa Maria: (55) 4001-8001</p>
                    
                    <p class="footer__text">Porto Alegre: (51) 3209-4202</p>
                </div>
                <nuxt-link class="footer__text | footer__mail" to="mailto:contato@abellaadv.com.br">
                    <img src="/images/email-negativo.svg" alt="Ícone e-mail" aria-hidden="true" />
                    contato@abellaadv.com.br (Santa Maria)
                </nuxt-link>
                <nuxt-link class="footer__text | footer__mail" to="mailto:atendimento@abellaadv.com.br">
                    <img src="/images/email-negativo.svg" alt="Ícone e-mail" aria-hidden="true" />
                    atendimento@abellaadv.com.br (Porto Alegre)
                </nuxt-link>
                <ul class="footer__nav">
                    <li><nuxt-link to="https://abellaadv.com.br/" class="footer__link">Home</nuxt-link></li>
                    <li><nuxt-link to="https://abellaadv.com.br/atuacao" class="footer__link">Atuação</nuxt-link></li>
                    <li><nuxt-link to="https://abellaadv.com.br/publicacoes" class="footer__link">Publicações</nuxt-link></li>
                    <li><nuxt-link to="https://abellaadv.com.br/nosso-time" class="footer__link">Nosso time</nuxt-link></li>
                    <li><nuxt-link to="https://abellaadv.com.br/contato" class="footer__link">Contato</nuxt-link></li>
                </ul>
            </div>
            <div class="footer__copyright">
                <p class="footer__text">Copyright © 2024 Abella Advocacia. Todos os direitos reservados.</p>
            </div>
        </div>
    <a href="https://wa.me/+5551980400909" target="_blank" class="whatsapp" style="
        position: fixed;
        bottom: 16px;
        right: 16px;
        transform: scale(0.8);
        z-index: 99;
    ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="2619 506 120 120" width="70" height="70"><defs>
            </defs><g data-name="Group 36" id="Group_36" transform="translate(2300 73)"><circle class="cls-1" cx="60" cy="60" data-name="Ellipse 18" id="Ellipse_18" r="60" transform="translate(319 433)"></circle><g data-name="Group 35" id="Group_35" transform="translate(254 386)"><g data-name="Group 34" id="Group_34"><g class="cls-2" data-name="Ellipse 19" id="Ellipse_19" transform="translate(94 75)"><circle class="cls-4" cx="31.5" cy="31.5" r="31.5"></circle><circle class="cls-5" cx="31.5" cy="31.5" r="29"></circle></g><path class="cls-3" d="M1424,191l-4.6,16.3,16.9-4.7.9-5.2-11,3.5,2.9-10.5Z" data-name="Path 126" id="Path_126" transform="translate(-1325 -68)"></path><path class="cls-1" d="M1266,90c0-.1,3.5-11.7,3.5-11.7l8.4,7.9Z" data-name="Path 127" id="Path_127" transform="translate(-1165 43)"></path></g><path class="cls-3" d="M1439.3,160.6a9.4,9.4,0,0,0-3.9,6.1c-.5,3.9,1.9,7.9,1.9,7.9a50.876,50.876,0,0,0,8.6,9.8,30.181,30.181,0,0,0,9.6,5.1,11.378,11.378,0,0,0,6.4.6,9.167,9.167,0,0,0,4.8-3.2,9.851,9.851,0,0,0,.6-2.2,5.868,5.868,0,0,0,0-2c-.1-.7-7.3-4-8-3.8s-1.3,1.5-2.1,2.6-1.1,1.6-1.9,1.6-4.3-1.4-7.6-4.4a15.875,15.875,0,0,1-4.3-6s.6-.7,1.4-1.8a5.664,5.664,0,0,0,1.3-2.4c0-.5-2.8-7.6-3.5-7.9A11.852,11.852,0,0,0,1439.3,160.6Z" data-name="Path 128" id="Path_128" transform="translate(-1326.332 -68.467)"></path></g></g>
        </svg>
    </a>
    </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
    background: var(--base-color);
    padding: 55px 0 80px;
    * {
        color: var(--white-color);
    }
}

    .footer__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px 90px;
        @media (max-width: 1024px) {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
        }
    }

    .footer__logo {
        width: 170px;
    }

    .footer__title,
    .footer__text,
    .footer__link {
        line-height: 1.625em;
        letter-spacing: 0.04em;
        text-decoration: none;
    }

    .footer__title {
        font-weight: 700;
    }

    .footer__text {
        font-weight: 300;
    }

    .footer__link {
        font-weight: 400;
    }

    .footer__socials {
        display: flex;
        align-items: flex-end;
    }

    .footer__enderecos {
        display: flex;
        gap: 45px;
        @media (max-width: 1024px) {
            flex-direction: column;
        }
    }

    .footer__phones {
        display: flex;
        align-items: center;
        gap: 3px;
        img {
            width: 19px;
        }
        p:first-child {
            padding-right: 16px;
            margin-right: 13px;
            border-right: 1px solid var(--white-color);

        }
    }

    .footer__mail {
        display: flex;
        align-items: center;
        gap: 16px;
        img {
            width: 19px;
        }
    }

    .footer__copyright {
        grid-column: 1 / -1;
        padding-top: 16px;
        border-top: 1px solid var(--white-color);
        @media (max-width: 1024px) {
            text-align: center;
        }
    }

    .footer__nav {
        display: flex;
        gap: 32px;
        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        li {
            list-style: none;
        }
    }



    .cls-1 {
        fill: #27d045;
      }

      .cls-2, .cls-5 {
        fill: none;
      }

      .cls-2 {
        stroke: #fff;
        stroke-width: 5px;
      }

      .cls-3 {
        fill: #fff;
      }

      .cls-4 {
        stroke: none;
      }
</style>