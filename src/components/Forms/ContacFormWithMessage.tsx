'use client'


export default function ContactFormWithMessage() {
  return (
     <form action="https://formsubmit.co/mohamad92ahm@gmail.com" method="POST" className="max-w-2xl mx-auto space-y-4" >
        <input type="text" name="name" placeholder="Full Name" required className="w-full border bg-transparent text-brand-white p-2 rounded"></input>
        <input type="email" name="email" placeholder="Email Address"  className="w-full border bg-transparent  text-brand-white p-2 rounded"></input>
        <input type="tel" name="number" placeholder="Phone Number" required className="w-full border bg-transparent  text-brand-white p-2 rounded"></input>
        <textarea name="message" placeholder="Your Message"  className="w-full border bg-transparent  text-brand-white p-2 rounded h-32"></textarea>
        <button type="submit" className="md:w-1/2 w-full bg-brand-dark hover:bg-brand-primary hover:text-brand-dark font-heading font-bold px-6 py-2 rounded">Send</button>
    </form>
  )
}