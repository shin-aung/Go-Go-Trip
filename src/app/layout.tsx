import type { BaseLayoutProps } from '@/types/component'
import type { BaseParams } from '@/types/params'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import './globals.css'

export async function generateMetadata({
  params,
}: BaseParams): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t('metaData.title'),
    description: t('metaData.description'),
  }
}

async function RootLayout({ children, params }: BaseLayoutProps) {
  const { locale } = await params

  return (
    <html
      lang={locale || 'en'}
      className={`antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </head>
      <body className="min-h-dvh bg-white">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
