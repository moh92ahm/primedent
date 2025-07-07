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
          <h2 className="text-lg text-brand-primary mb-2"># Best Dentist</h2>
          <h3 className="text-4xl text-brand-primary font-heading font-bold mb-4">Dr. Serhat</h3>
          <p className="text-brand-white mb-6">
            <strong>Dr. Serhat Çelik</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
          </p>

          <div className="space-y-3">
            <div className="flex items-center bg-black py-3">
              <span className=" text-white px-4 py-1 mr-3 font-medium">Specialty</span>
              <span>Orthodontist Surgeon Specialize</span>
            </div>
            <div className="flex items-center">
              <span className=" text-white px-4 py-1 mr-3 font-medium">Degrees</span>
              <span>MBBS University Of California</span>
            </div>
            <div className="flex items-center bg-black py-3">
              <span className="bg-black text-white px-4 py-1 mr-3 font-medium">Experience</span>
              <span>7 Years, New York Urgent Medical Care Serving California</span>
            </div>
            <div className="flex items-center">
              <span className="text-white px-4 py-1 mr-3 font-medium">Awards</span>
              <span>2018 – 2019: William Allan Award</span>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-1 font-heading text-brand-primary">About Skills</h4>
            <div className="border-t border-gray-300 opacity-50 mb-4" />
            <div className="grid grid-cols-2 gap-2 text-sm text-brand-light">
              <span>Radiant Skin Dermatology</span>
              <span>Eye Services</span>
              <span>Dry Eye Treatment</span>
              <span>Radiant Skin Dermatology</span>
              <span>Eye Services</span>
              <span>Dry Eye Treatment</span>
            </div>
          </div>

          {/* Awards */}
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-1 font-heading text-brand-primary">My Awards</h4>
            <div className="border-t border-gray-300 opacity-50 mb-4" />
            <div className="flex flex-wrap gap-8">
              <div className="bg-brand-primary space-y-2 text-black  p-4 w-48">
                <p className="text-xl font-heading font-bold">Clinic master 2025</p>
                <p className="text-xs">Quality and Accreditation Institute</p>
                <p className="text-xs font-semibold">Best Dentist</p>
              </div>
              <div className="bg-brand-primary space-y-2 text-black  p-4 w-48">
                <p className="text-xl font-heading font-bold">Clinic master 2025</p>
                <p className="text-xs">Quality and Accreditation Institute</p>
                <p className="text-xs font-semibold">Best Dentist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
