import * as Sentry from '@sentry/node';

const initializeSentry = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction && process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
      environment: 'production',
    });
  }
};

const sentryLogger = (error: Error) => {
  if (Sentry.getCurrentHub().getClient()) {
    Sentry.captureException(error);
  } else {
    console.error(error);
  }
};

export { initializeSentry, sentryLogger };
