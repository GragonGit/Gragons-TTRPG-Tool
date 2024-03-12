export const LOCAL_STORAGE_KEYS = {
  LANG: 'lang',
  THEME: 'theme'
} as const

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS]