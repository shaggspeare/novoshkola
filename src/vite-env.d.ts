/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SCRIPT_URL: string
  readonly VITE_TELEGRAM_BOT_TOKEN: string
  readonly VITE_TELEGRAM_CHAT_IDS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
