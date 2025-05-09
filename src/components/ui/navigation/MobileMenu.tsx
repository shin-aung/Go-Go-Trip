'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/libs'

interface MobileMenuProps {
  menuList: { title: string; url: string }[]
  isOpen: boolean
  onMenuItemClick: () => void
  menuRef: React.RefObject<HTMLDivElement | null>
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuList,
  isOpen,
  onMenuItemClick,
  menuRef,
}) => {
  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      className={cn(
        'fixed inset-y-0 right-0 z-50 w-1/2 bg-[#2c1e4a] transform transition-transform duration-300 ease-in-out lg:hidden',
        isOpen
          ? 'translate-x-0 shadow-gray-900 shadow-2xl border-gray-800 border-s-2'
          : 'translate-x-full'
      )}
    >
      <nav className="flex flex-col items-center justify-center h-full">
        <ul className="space-y-8 w-full px-4">
          {menuList.map((item, index) => (
            <li key={index} className="text-center">
              <Link
                href={item.url}
                className="text-white text-xl font-bold hover:text-gray-300 transition-colors block w-full py-2"
                onClick={onMenuItemClick}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu
