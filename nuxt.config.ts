import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

const description = 'Um escritório de pessoas e não de processos Nosso compromisso final é com a busca pela satisfação e por uma solução personalizada para cada um de nossos clientes. Fale com a gente (55) 4001-8001 Um escritório de pessoas e não de processos Nosso compromisso final é com a busca pela satisfação e por uma solução… Continuar lendo Home'
const title = 'Abella Advocacia'
const OG = '/OG.jpg'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Abella Advocacia",
      meta: [
        { name: "description", content: description },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: 'og:site_name',  content: title},
        { property: 'og:title',  content: title},
        { property: 'og:description',  content: description},
        { property: 'og:image',  content: OG},
        { property: 'og:image:alt',  content: `Imagem de página para ${title}`},
        { name: 'twitter:image',  content: OG},
        { name: 'twitter:image:alt',  content: `Imagem de página para ${title}`},
        { name: 'twitter:description', content: description }
      ],
      script: [
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KLT6DFJ');`
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
      ],
    }
  },
  css: [
    '/public/css/theme.scss',
    '/public/css/style.scss',
  ],
  components: {
    "dirs": [
      "~/components"
    ]
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
  ],
  generate: {
    routes: [
      '/rss.xml',
    ]
  },
});
