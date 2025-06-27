import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Services | Primedent',
}

export default function ServicesPage() {
  const services = [
    { title: 'Service One', slug: 'service-one' },
    { title: 'Service Two', slug: 'service-two' },
    { title: 'Service Three', slug: 'service-three' },
  ]

  return (
    <main className="container py-24">
      <h1 className="text-3xl font-bold mb-8">Services</h1>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.slug} className="underline">
            <a href={`/services/${service.slug}`}>{service.title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
