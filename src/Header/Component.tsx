import { HeaderClient } from './Component.client'
import React from 'react'
import type { Header } from '@/payload-types'

export async function Header() {
  const headerData: Header = {
    navItems: [
      { link: { url: '/', label: 'Home', type: 'custom' } },
      { link: { url: '/about-us', label: 'About Us', type: 'custom' } },
      { link: { url: '/dr-serhat', label: 'Dr. Serhat', type: 'custom' } },
      { link: { url: '/services', label: 'Services', type: 'custom' } },
      { link: { url: '/contact-us', label: 'Contact Us', type: 'custom' } },
    ],
  } as Header

  return <HeaderClient data={headerData} />
}
