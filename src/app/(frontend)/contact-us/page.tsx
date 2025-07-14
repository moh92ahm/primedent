import type { Metadata } from 'next'
import React from 'react'

import ContactFormWithMessage from '@/components/Forms/ContacFormWithMessage'

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
          <div>
          <ContactFormWithMessage />
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 bg-black p-6 text-white">
          <h3 className="text-3xl font-bold font-heading mb-8">Contact Information:</h3>

          <h4 className="text-xl font-heading font-bold mb-2">Email Address:</h4>
          <p className="mb-4 font-xl">Email: info@primedent.com</p>
          <div className="border-t border-gray-300 opacity-40 my-6" />
          <h4 className="text-xl font-heading font-bold mb-2">Contact Us:</h4>
          <p className="mb-8 font-xl">Phone: 0549 681 54 13</p>
          <div className="border-t border-gray-300 opacity-40 my-6" />
          <h4 className="text-xl font-heading font-bold mb-2">Address:</h4>
          <p className="mb-8 font-xl">Address: Selçuk Blv No:14, Kuşadası, Turkey</p>
          <div className="border-t border-gray-300 opacity-40 my-6" />
          <h4 className="text-xl font-heading font-bold mb-2">Subject:</h4>
          <p className="mb-8 font-xl">Service: Dental Treatments</p>
        </div>
      </div>

      {/* Google Maps Locations */}
      <div className="max-w-screen-xl mx-auto mt-20 px-6 pb-20">
        <h2 className="text-3xl font-bold font-heading mb-6 text-brand-primary">All Locations</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Replace the iframe src with your actual embedded map URLs */}
          <div className="bg-brand-primary text-brand-dark  p-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.9698149046526!2d27.2714134!3d37.8843886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14beafbb2a46def3%3A0xf03d244b40157ed1!2sPrime%20Dent%20Ada!5e0!3m2!1sen!2str!4v1752051950570!5m2!1sen!2str"
            className="w-full h-52 mb-3"
            loading="lazy"
            ></iframe>
            <p className="font-heading text-2xl font-bold mt-4">Kuşadası</p>
            <p className="text-md mt-2">
              Bayraklıdede, Selçuk Blv No:14, 09400 Kuşadası/Aydın, Türkiye
            </p>
            <p className="text-sm mt-2">Mon–Sat: 7:00 – 17:00</p>
          </div>
          <div className="bg-brand-primary text-brand-dark  p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12501.20042681588!2d27.151004289953573!3d38.43453650162894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1752058160021!5m2!1sen!2str"
              className="w-full h-52 mb-3"
              loading="lazy"
            ></iframe>
            <p className="font-heading text-2xl font-bold mt-4">Izmir</p>
            <p className="text-md mt-2">Coming Soon</p>
            {/* <p className="text-sm mt-2">Mon–Sat: 7:00 – 17:00</p> */}
          </div>
          <div className="bg-brand-primary text-brand-dark  p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.24144806774!2d20.89661555955334!3d52.233097377592124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2str!4v1752058284921!5m2!1sen!2str"
              className="w-full h-52 mb-3"
              loading="lazy"
            ></iframe>
            <p className="font-heading text-2xl font-bold mt-4">Warsaw</p>
            <p className="text-md mt-2">
              Coming Soon
            </p>
            {/* <p className="text-sm mt-2">Mon–Sat: 7:00 – 17:00</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
