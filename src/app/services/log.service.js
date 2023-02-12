import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

function init() {
  Sentry.init({
    dsn: 'https://9775024dea9c43edbdb615484d669957@o4504648560017408.ingest.sentry.io/4504648564146176',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}

function log(error) {
  Sentry.captureException(error)
}

const logger = {
  init,
  log,
}
export default logger
