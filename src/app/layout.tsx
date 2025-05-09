import type { BaseLayoutProps } from '../types/component'
import type { BaseParams } from '../types/params'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Commissioner, Orbitron, Poppins } from 'next/font/google'
import './globals.css'

const commissioner = Commissioner({
  variable: '--font-commissioner',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
})

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

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
      className={`${orbitron.variable} ${commissioner.variable} ${poppins.variable} antialiased`}
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
