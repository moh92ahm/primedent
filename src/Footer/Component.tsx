import React from 'react'

import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'

import type { Footer as FooterType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: FooterType = {
    navItems: [
      { link: { url: '/', label: 'Home', type: 'custom' } },
      { link: { url: '/about-us', label: 'About Us', type: 'custom' } },
      { link: { url: '/dr-serhat', label: 'Dr. Serhat', type: 'custom' } },
      { link: { url: '/services', label: 'Services', type: 'custom' } },
      { link: { url: '/contact-us', label: 'Contact Us', type: 'custom' } },
    ],
  } as FooterType

  const services = [
    'Hollywood Smile',
    'All-on-4/6',
    'Dental Implant',
    'Zirconium Crown',
  ]

  const navItems = footerData?.navItems || []

  return (
    <footer className="relative overflow-hidden font-body text-white bg-gradient-to-t from-brand-dark to-transparent">
      <div className="bg-brand-primary text-brand-dark py-10 px-6 md:px-20 mx-4 md:mx-12 lg:mx-26 2xl:mx-52 relative z-10">
        <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left md:max-w-md max-w-sm">
            <p className="text-sm uppercase mb-2">Start Your Smile Journey Today</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-snug">
              Get in touch — our <br /> coordinators speak your language.
            </h2>
          </div>
          <button className="bg-brand-dark text-white px-6 py-3 flex items-center gap-2 mt-4 md:mt-0 hover:bg-gray-800 transition">
            Get Free Consultation <span>→</span>
          </button>
        </div>
      </div>

      <div className="py-12 px-6 md:px-20 relative z-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Logo className="h-auto mb-2" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              We Are Committed To Delivering Exceptional Healthcare With Compassion, Expertise, And
              Innovation. Our Dedicated...
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition"
              >
                <FaInstagram size={18} className="text-white hover:text-brand-background" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition"
              >
                <FaFacebookF size={18} className="text-white hover:text-brand-background" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition"
              >
                <FaYoutube size={18} className="text-white hover:text-brand-background" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 font-heading">Our Pages</h3>
            <nav className="flex flex-col space-y-2 text-sm text-brand-white hover:text-brand-primary">
              {navItems.map(({ link }, i) => {
                return <CMSLink className="text-white" key={i} {...link} />
              })}
            </nav>
          </div>

          <div>
            <h3 className="font-bold mb-3 font-heading">Services</h3>
            <ul className="space-y-2 text-sm text-brand-white">
              {services.map((title, idx) => (
                <li key={idx}>{title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 font-heading ">Contact Us </h3>
            <ul className="space-y-2 text-sm text">
              <li>
                <strong>Address</strong>
                <br />
                1901 Thornridge Cir. Shiloh
              </li>
              <li>
                <strong>Phone Number</strong>
                <br />
                013 354 213 - 92132
              </li>
              <li>
                <strong>Email Address</strong>
                <br />
                info123@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-primary text-sm py-4 px-6 md:px-20 relative z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            Copyright © 2025 <span className="text-brand-primary">Primedent</span>. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
