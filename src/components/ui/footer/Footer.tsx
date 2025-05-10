import React from 'react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import ContactFormSection from '@/components/questionnaire/ContactFormSection'
import Image from 'next/image'
import { FavIcon } from '@/assets/logos'

const Facebook_Link =
  'https://www.facebook.com/share/1BXu3ht4bZ/?mibextid=wwXIfr'

const Footer = async () => {
  const t = await getTranslations('contact')

  return (
    <footer id="contact" className="footer-gradient-bg text-white py-12">
      <section className="content-container flex flex-col gap-10">
        <div>
          <h1>{t('footer.title')}</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-20">
          <div className="w-full md:w-1/2">
            <ContactFormSection />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
          <Link
            href={Facebook_Link}
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src={FavIcon} alt="LinkedIn Icon" width={28} height={28} />
          </Link>
          <p className="text-sm text-white/80">
            &copy; GO GO TRIP {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
