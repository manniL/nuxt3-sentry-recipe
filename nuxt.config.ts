// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      sentry: {
        dsn: '',
        environment: 'development',
      }
    }
  }
})
