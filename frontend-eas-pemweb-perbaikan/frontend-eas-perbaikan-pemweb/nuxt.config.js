// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  modules: [
    // '@nuxt/http',
  ],

})
