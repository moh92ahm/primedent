import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us | Primedent',
}

export default function ContactUsPage() {

  return (
    <div className="relative text-brand-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <div className="container my-20 text-center mx-auto">
        <div className="max-w-[48rem] mx-auto">
          <h1 className="text-6xl font-bold mb-4 font-heading">Contact Us</h1>
        </div>
      </div>
      {/* Contact Form + Info */}
      <div className="max-w-screen-xl mx-auto mt-20 px-6 md:flex md:gap-20 md:items-start mb-10">
        {/* Contact Form */}
        <div className="md:w-1/2 w-full">
          <h4 className="text-xl font-bold mb-4"># Get In Touch</h4>
          <h2 className="mb-6 text-brand-primary text-4xl font-bold font-heading">
            Stay Connected <br /> for Better Health.
          </h2>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-transparent border border-brand-light text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-transparent border border-brand-light text-white"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 bg-transparent border border-brand-light text-white"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 bg-transparent border border-brand-light text-white"
              />
            </div>
            <textarea
              placeholder="Write a Message..."
              className="w-full px-4 py-2 bg-transparent border border-brand-light text-white h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-brand-primary font-heading text-xl text-brand-dark px-6 py-3"
            >
              Book An Appointment →
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 bg-black p-6 text-white">
          <h3 className="text-3xl font-bold font-heading mb-8">Contact Information:</h3>

          <h4 className="text-xl font-heading font-bold mb-2">Email Address:</h4>
          <p className="mb-4 font-xl">Email: info@primedent.com</p>
          <div className="border-t border-gray-300 opacity-40 my-6" />
          <h4 className="text-xl font-heading font-bold mb-2">Contact Us:</h4>
          <p className="mb-8 font-xl">Phone: 031 354 213 - 92132</p>
          <div className="border-t border-gray-300 opacity-40 my-6" />
          <h4 className="text-xl font-heading font-bold mb-2">Address:</h4>
          <p className="mb-8 font-xl">Address: 1907 Thornridge Cir. Shiloh</p>
          <div className="border-t border-gray-300 opacity-40 my-6" />
          <h4 className="text-xl font-heading font-bold mb-2">Subject:</h4>
          <p className="mb-8 font-xl">Service: Medical and Dental</p>
        </div>
      </div>

      {/* Google Maps Locations */}
      <div className="max-w-screen-xl mx-auto mt-20 px-6 pb-20">
        <h2 className="text-3xl font-bold font-heading mb-6 text-brand-primary">All Locations</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Replace the iframe src with your actual embedded map URLs */}
          <div className="bg-brand-primary text-brand-dark  p-4">
            <iframe
              src="https://maps.google.com/maps?q=New York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-52 mb-3"
              loading="lazy"
            ></iframe>
            <p className="font-heading text-2xl font-bold mt-4">Canada</p>
            <p className="text-md mt-2">
              621 Heathway St, Suite 456 Cityville, Province AB 2323 Canada
            </p>
            <p className="text-sm mt-2">Mon–Sat: 7:00 – 17:00</p>
          </div>
          <div className="bg-brand-primary text-brand-dark  p-4">
            <iframe
              src="https://maps.google.com/maps?q=Chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-52 mb-3"
              loading="lazy"
            ></iframe>
            <p className="font-heading text-2xl font-bold mt-4">United States</p>
            <p className="text-md mt-2">123 Heathway St, Suite 456 Cityville, CA 92831 USA</p>
            <p className="text-sm mt-2">Mon–Sat: 7:00 – 17:00</p>
          </div>
          <div className="bg-brand-primary text-brand-dark  p-4">
            <iframe
              src="https://maps.google.com/maps?q=Toronto&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-52 mb-3"
              loading="lazy"
            ></iframe>
            <p className="font-heading text-2xl font-bold mt-4">Canada</p>
            <p className="text-md mt-2">
              72 Heathway St, Suite 456 Cityville, Province AB 2323 Canada
            </p>
            <p className="text-sm mt-2">Mon–Sat: 7:00 – 17:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
