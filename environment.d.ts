declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_PUBLIC_MODE: "development" | "production"
      readonly NEXT_PUBLIC_API: string
      readonly NEXT_PUBLIC_S_KEY: string
    }
  }
}
export {}
