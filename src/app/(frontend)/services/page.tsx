import type { Metadata } from 'next'
import React from 'react'

import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services | Primedent',
}

export default function ServicesPage() {

  const services = [
    {
      title: 'Dental Implants',
      description: 'Permanent solutions for missing teeth with natural aesthetics.',
      image: '/03.jpeg',
    },
    {
      title: 'Hollywood Smile',
      description: 'Transform your smile with veneers and cosmetic enhancements.',
      image: '/02.jpg',
    },
    {
      title: 'Zirconium Crowns',
      description: 'Strong, metal-free crowns for durability and beauty.',
      image: '/01.jpg',
    },
    {
      title: 'Root Canal Treatment',
      description: 'Save natural teeth with painless root canal procedures.',
      image: '/05.jpeg',
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening for a brighter, cleaner smile.',
      image: '/04.jpeg',
    },
    {
      title: 'Orthodontics',
      description: 'Invisible aligners for discreet and comfortable orthodontics.',
      image: '/06.jpeg',
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden my-28 w-max-screen-xl mx-auto px-6 justify-items-center">
        <h1 className="text-brand-white justify-center font-heading font-bold text-6xl">Services</h1>
      </div>
      {/* Services Grid */}
      <section className=" max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 group border border-border bg-brand-primary transition-colors hover:bg-brand-dark text-foreground hover:text-brand-primary"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-heading font-bold mb-1 transition-colors text-brand-background group-hover:text-brand-primary">{service.title}</h3>
              <p className="text-sm transition-colors text-brand-background group-hover:text-white">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
