export default defineNuxtConfig({
  ssr: true,

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  css: ["~/assets/css/tailwind.css"],

  routeRules: {
    "/products/**": {
      swr: 3600,
    },
    "/cart": {
      prerender: true,
    },
  },
});
