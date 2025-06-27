import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home | Primedent',
}

export default function Page() {
  return (
    <main className="container py-24">
      <h1 className="text-3xl font-bold mb-4">Welcome to Primedent</h1>
      <p>This is a placeholder homepage. Replace this content with your own.</p>
    </main>
  )
}
