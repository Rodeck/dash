declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string | undefined;
        PORT: string | undefined;
        TRELLO_APIKEY: string | undefined;
        TRELLO_TOKEN: string | undefined;
        SERVICE_ACCOUNT_CONFIG: string | undefined;
        DB_URL: string | undefined;
        DB_USERNAME: string | undefined;
        DB_PASSWORD: string | undefined;
      }
    }
  }
export {};
