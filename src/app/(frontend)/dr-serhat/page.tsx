import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dr. Serhat | Primedent',
}

export default function DrSerhatPage() {
  return (
    <main className="container py-24">
      <h1 className="text-3xl font-bold mb-4">Dr. Serhat</h1>
      <p>Introduce Dr. Serhat here. Replace this text with the doctor's biography.</p>
    </main>
  )
}
