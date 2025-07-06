declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      /** Optional database connection string used when building or running the app.
       * When absent the app falls back to a local Postgres instance. During static
       * builds (for example on Vercel) this may be left undefined to skip database
       * connections entirely. */
      DATABASE_URI?: string
      NEXT_PUBLIC_SERVER_URL: string
      VERCEL_PROJECT_PRODUCTION_URL: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
