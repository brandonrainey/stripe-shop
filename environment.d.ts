export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      stripe_public_key: string;
      STRIPE_SECRET_KEY: any;
      
    }
  }
}
