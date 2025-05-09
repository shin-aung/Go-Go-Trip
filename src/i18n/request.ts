import type { SupportedLocales } from '../locales'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as SupportedLocales

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../../src/locales/${locale}.json`)).default,
  }
})
