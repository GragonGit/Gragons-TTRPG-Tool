export const LOCAL_STORAGE_KEYS = {
  LANG: 'lang'
} as const

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS]