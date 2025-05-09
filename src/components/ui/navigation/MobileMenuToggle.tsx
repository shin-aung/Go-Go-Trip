'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/libs'
import MobileMenu from './MobileMenu'

interface MobileMenuToggleProps {
  menuList: { title: string; url: string }[]
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ menuList }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={cn(
          'inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg',
          'lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300'
        )}
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <MobileMenu
        menuList={menuList}
        isOpen={isMenuOpen}
        onMenuItemClick={handleMenuItemClick}
        menuRef={menuRef}
      />
    </>
  )
}

export default MobileMenuToggle
