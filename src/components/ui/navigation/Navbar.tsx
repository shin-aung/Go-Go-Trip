import React from 'react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { cn } from '@/libs'
// import { OnifyTechLogo } from '@/assets/logos'
import MobileMenuToggle from './MobileMenuToggle'

const Navbar = async () => {
  const t = await getTranslations('navBar')

  const menuList = [
    { title: t('home'), url: '#home' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 py-2 px-6',
        'font-geist-sans hover:bg-consultancy bg-consultancy/60 text-white transition-all duration-300'
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          {/* <Image src={OnifyTechLogo} alt="IFG Logo" width={130} height={65} /> */}
        </Link>
        <MobileMenuToggle menuList={menuList} />
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-6">
            {menuList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="text-white font-medium text-base hover:text-gray-400 transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
