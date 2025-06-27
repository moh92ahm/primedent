import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Us | Primedent',
}

export default function AboutUsPage() {
  return (
    <main className="container py-24">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>This page describes information about the clinic. Update this text with your own content.</p>
    </main>
  )
}
