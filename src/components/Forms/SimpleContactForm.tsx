'use client'


export default function SimpleContactForm() {
  return (
     <form action="https://formsubmit.co/mohamad92ahm@gmail.com" method="POST" className="max-w-2xl mx-auto space-y-4" >
      <div className="flex flex-col md:flex-row gap-4">
        <input type="text" name="name" placeholder="Full Name" required className="w-full md:w-1/2 border bg-brand-dark text-brand-white p-2 rounded"></input>
        <input type="email" name="email" placeholder="Email Address"  className="w-full md:w-1/2 border bg-brand-dark text-brand-white p-2 rounded"></input>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input type="tel" name="number" placeholder="Phone Number" required className="md:w-1/2 w-full border bg-brand-dark text-brand-white p-2 rounded"></input>
        <button type="submit" className="md:w-1/2 w-full bg-brand-primary text-brand-dark font-heading font-bold px-6 py-2 rounded">Send</button>
      </div>
    </form>
  )
}