export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  routeRules: {
    "/products/**": {
      swr: true,
    },
    "/cart": {
      prerender: true,
    },
  },
});
