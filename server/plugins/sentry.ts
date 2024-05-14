
import * as Sentry from '@sentry/node';

import { H3Error } from 'h3'

export default defineNitroPlugin((nitroApp) => {


  // Ensure to call this before importing any other modules!
  
  const { public: { sentry } } = useRuntimeConfig()
  Sentry.init({
    dsn: sentry.dsn,
    debug: true,
  
    // Add Performance Monitoring by setting tracesSampleRate
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  
  nitroApp.hooks.hook('error', (error) => {
    // Do not handle 404s and 422s
    if (error instanceof H3Error) {
      if (error.statusCode === 404 || error.statusCode === 422) {
        return
      }
    }

    Sentry.captureException(error)
  })

  nitroApp.hooks.hook('request', (event) => {
    event.context.$sentry = Sentry
  })

  nitroApp.hooks.hookOnce('close', async () => {
    await Sentry.close(2000)
  })
})
