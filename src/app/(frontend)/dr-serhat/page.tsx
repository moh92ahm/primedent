import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Dr. Serhat | Primedent',
}

export default function DrSerhatPage() {

  return (
    <div className="relative text-brand-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <div className="container my-20 text-center mx-auto">
        <div className="max-w-[48rem] mx-auto">
          <h1 className="text-6xl font-bold mb-4 font-heading">Dr. Serhat</h1>
        </div>
      </div>
      {/* Doctor Profile */}
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:gap-10 md:items-start mb-16 mt-20">
        {/* Doctor Image */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0 bg-brand-white bg-opacity-80 overflow-hidden">
          <Image src="/dtserhatcelik.png" alt="Dr. Serhat" width={400} height={800} className="w-full h-auto object-cover" />
        </div>

        {/* Doctor Info */}
        <div className="md:w-1/2 w-full">
          <p className="text-lg text-brand-primary mb-2"># Best Dentist</p>
          <h3 className="text-4xl text-brand-primary font-heading font-bold mb-4">Dr. Serhat</h3>
          <p className="text-brand-white mb-6">
            Dr. Serhat Çelik was born in 1982 in İzmir. He graduated from Süleyman Demirel University Faculty of Dentistry in 2007. After gaining experience in private practice, he founded Dentapark Oral and Dental Health Polyclinic in 2012, which he continues to operate. In 2016, he established Dentapark Digital Laboratory, and in 2024, co-founded SvS Oral and Dental Health Polyclinic. He is also the founder of Primedent Poland, launched in 2025. Dr. Serhat has performed over 15,000 successful dental implant surgeries and is widely recognized for his excellence in dental aesthetics and implantology.
          </p>

          <div className="space-y-3">
            <div className="flex items-center bg-black py-3">
              <span className=" text-white px-4 py-1 mr-5 font-medium">Specialty</span>
              <span>Aesthetic & Implant Dentistry</span>
            </div>
            <div className="flex items-center">
              <span className=" text-white px-4 py-1 mr-5 font-medium">Degrees</span>
              <span>Faculty of Dentistry, Süleyman Demirel University</span>
            </div>
            <div className="flex items-center bg-black py-3">
              <span className="bg-black text-white px-4 py-1 font-medium">Experience</span>
              <ul>
              <li>17+ Years in Clinical Practice</li>
              <li>Founder of 3 Dental Clinics in Turkey and Europe</li>
              </ul>
            </div>
            <div className="flex items-start">
              <span className="text-white px-4 py-1 font-medium">Awards</span>
              <ul className="pl-6">
                <li>2022 – Turkish Dental Aesthetics Association Achievement Award</li>
                <li>2023 – Best Implant Practitioner, Aegean Region Dental Summit</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-1 font-heading text-brand-primary">About Skills</h4>
            <div className="border-t border-gray-300 opacity-50 mb-4" />
            <div className="grid grid-cols-2 gap-2 text-sm text-brand-light">
              <span>Dental Implants</span>
              <span>Smile Design</span>
              <span>Hollywood Smile</span>
              <span>Zirconium Crowns</span>
              <span>Guided Implant Surgery</span>
              <span>Full Mouth Rehabilitation</span>
            </div>
          </div>

          {/* Awards */}
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-1 font-heading text-brand-primary">My Awards</h4>
            <div className="border-t border-gray-300 opacity-50 mb-4" />
            <div className="flex flex-wrap gap-8">
              <div className="bg-brand-primary space-y-2 text-black  p-4 w-48">
                <p className="text-xl font-heading font-bold">Clinic Master 2022</p>
                <p className="text-sm">Turkish Dental Aesthetics Association</p>
                <p className="text-sm font-semibold">Best Dental Aesthetic Clinic</p>
              </div>
              <div className="bg-brand-primary space-y-2 text-black  p-4 w-48">
                <p className="text-xl font-heading font-bold">Implant Excellence Award 2023</p>
                <p className="text-sm">Aegean Implantology Forum</p>
                <p className="text-sm font-semibold">Top Implant Surgeon – Region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
