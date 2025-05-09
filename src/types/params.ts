import type { SupportedLocales } from '@/locales'

export interface BaseParams {
  params: Promise<{ locale: SupportedLocales }>
}
