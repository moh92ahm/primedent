import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us | Primedent',
}

export default function ContactUsPage() {
  return (
    <main className="container py-24">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>Feel free to reach out to us using the information on this page.</p>
    </main>
  )
}
