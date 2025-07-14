import React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AppLink } from '@/components/Link'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import { NAV_LINKS } from '@/constants/navLinks'

export async function Footer() {
  const services = ['Hollywood Smile', 'All-on-4/6', 'Dental Implant', 'Zirconium Crown']
  const navItems = NAV_LINKS

  return (
    <footer className="relative overflow-hidden font-body text-white bg-gradient-to-t from-brand-dark to-transparent">
      {/* call to action */}
      <div className="bg-brand-primary text-brand-dark py-10 px-6 md:px-20 mx-4 md:mx-12 lg:mx-26 2xl:mx-52 relative z-10">
        <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left md:max-w-md max-w-sm">
            <p className="text-sm uppercase mb-2">Start Your Smile Journey Today</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-snug">
              Get in touch — our <br /> coordinators speak your language.
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="bg-brand-dark text-white px-6 py-3 flex items-center gap-2 mt-4 md:mt-0 hover:bg-gray-800 transition"
          >
            Get Free Consultation <span>→</span>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-6 md:px-20 relative z-10">
        <div className="max-w-screen-xl mx-auto gap-10 flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Logo and Social Links */}
          <div>
            <div className="mb-4 md:basis-1/4 lg:basis-1/5 flex flex-col items-start">
              <Logo className="h-auto mb-2" />
            </div>
            <p className="text-sm text-brand-white mb-4">
              we are committed to delivering exceptional healthcare with compassion, expertise, and innovation. Our dedicated.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.instagram.com/primedentada/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition"
              >
                <FaInstagram size={18} className="text-white hover:text-brand-background" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577891274230"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition"
              >
                <FaFacebookF size={18} className="text-white hover:text-brand-background" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition"
              >
                <FaLinkedinIn size={18} className="text-white hover:text-brand-background" />
              </a>
            </div>
          </div>

          <div className="md:basis-3/4 lg:basis-4/5 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-3 font-heading">Our Pages</h3>
              <nav className="flex flex-col space-y-2 text-sm text-brand-white hover:text-brand-primary">
                {navItems.map(({ link }, i) => (
                  <AppLink className="text-white" key={i} href={link.url}>
                    {link.label}
                  </AppLink>
                ))}
              </nav>
            </div>
            {/* Services */}
            <div>
              <h3 className="font-bold mb-3 font-heading">Services</h3>
              <ul className="space-y-2 text-sm text-brand-white">
                {services.map((title, idx) => (
                  <li key={idx}>{title}</li>
                ))}
              </ul>
            </div>
            {/* Contact Information */}
            <div>
              <h3 className="font-bold mb-3 font-heading ">Contact Us </h3>
              <ul className="space-y-2 text-sm text">
                <li>
                  <strong>Address</strong>
                  <br />
                  Selçuk Blv No:14, Kuşadası, Turkey
                </li>
                <li>
                  <strong>Phone Number</strong>
                  <br />
                  0549 681 54 13
                </li>
                <li>
                  <strong>Email Address</strong>
                  <br />
                  info@primedentada.com
                </li>
              </ul>
            </div>
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
            <a href="#" className="text-brand-white hover:text-brand-primary">
              Terms & Conditions
            </a>
            <a href="#" className="text-brand-white hover:text-brand-primary">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
