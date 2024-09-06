export default defineNuxtPlugin((nuxtApp) => {
  
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  window.dataLayer = window.dataLayer || [];
  
  gtag("js", new Date());
  gtag("config", 'G-9RZP3HWRR6');
  
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=G-9RZP3HWRR6`,
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9RZP3HWRR6');`
      }
    ],
  });
});