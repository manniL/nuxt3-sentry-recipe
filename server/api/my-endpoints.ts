export default defineEventHandler((event) => {
  if (event.context.$sentry) {
    // Do something here
    event.context.$sentry.captureException(new Error('Test error'))
  }
})
