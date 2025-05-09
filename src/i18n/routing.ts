import { defaultLocale, supportedLocales } from '../locales'
import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale,
  localePrefix: 'never',
})

export type Locale = (typeof routing.locales)[number]

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
