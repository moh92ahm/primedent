'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', number: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('Message sent successfully!')
      setForm({ name: '', email: '', number: '' })
    } else {
      setStatus('Error sending message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      {/* Row 1: Name + Phone */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full md:w-1/2 border bg-brand-dark text-brand-white p-2 rounded"
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Your phone"
          value={form.number}
          onChange={e => setForm({ ...form, number: e.target.value })}
          className="w-full md:w-1/2 border bg-brand-dark text-brand-white p-2 rounded"
          required
        />
      </div>

      {/* Row 2: Email + Button */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          name="email"
          placeholder="Your email (optional)"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="md:w-1/2 w-full border bg-brand-dark text-brand-white p-2 rounded"
        />
        <button
          type="submit"
          className="md:w-1/2 w-full bg-brand-primary text-brand-dark font-heading font-bold px-6 py-2 rounded"
        >
          Send
        </button>
      </div>

      {status && <p className="text-sm text-gray-700 mt-2 text-center">{status}</p>}
    </form>
  )
}
