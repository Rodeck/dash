declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string | undefined;
        PORT: string | undefined;
        TRELLO_APIKEY: string | undefined;
        TRELLO_TOKEN: string | undefined;
        SERVICE_ACCOUNT_CONFIG: string | undefined;
      }
    }
  }
export {};
