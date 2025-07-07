import type { Metadata } from 'next'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Primedent',
}

export default function AboutUsPage() {

  return (
    <div className="relative text-brand-white overflow-hidden">
      {/* Hero Section */}
      <div className="container my-20 text-center mx-auto">
            <div className="max-w-[48rem] mx-auto">
              <h1 className="text-6xl font-bold mb-4 font-heading">About Us</h1>
            </div>
          </div>
      {/* Who We Are Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:items-center md:gap-10 mb-24">
        <div className="md:w-1/2 w-full">
          <h3 className="text-brand-primary text-lg mb-2"># Who We Are</h3>
          <h2 className="text-4xl font-bold font-heading text-brand-primary mb-4">Redefining Dental Care</h2>
          <p className="text-brand-white">
            PrimeDent Clinics was founded with a clear vision: to elevate the standard of dental care by focusing on patient well-being, innovation, and excellence. Our approach is holistic, providing a warm, patient-centered experience that inspires trust in every interaction. At PrimeDent, we believe dentistry should not just address problems but be transformational.
            <br /><br />
            We’ve built a clinic model that prioritizes trust, transparency, and top-quality results—especially for international visitors seeking clean, effective, and affordable dental care services.
          </p>
        </div>
        <div className="md:w-1/2 w-full mt-10 md:mt-0">
          <Image src="/" alt="" width={400} height={400} className="rounded w-full object-contain" priority />
        </div>
      </div>

      {/* Our Vision & Values Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:items-center md:gap-10 mb-24">
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <Image src="/about-us-our-mission-and-values.jpg" alt="" width={400} height={400} className=" w-full object-contain h-[800px]" priority />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-brand-primary text-lg mb-2"># Our Vision & Values</h3>
          <h2 className="text-4xl font-bold font-heading text-brand-primary mb-4">Driven By Purpose, Guided By Principles</h2>
          <p className="text-brand-white mb-6">
            To provide healthcare and well-being to our community by providing compassionate, high-quality dental solutions with integrity.
          </p>

          <div className="space-y-4">
            <div className="transition-all text-brand-white hover:bg-brand-primary  hover:text-brand-background p-4 rounded group">
              <h4 className="font-bold font-heading text-xl mb-1 text-brand-primary group-hover:text-brand-background">Mission</h4>
              <p className="text-sm">
                We aim to expand dental care by delivering outstanding service, staying at the forefront of technology, and focusing on patients emotional and physical well-being. Our mission is to provide affordable and quality dental services in an inclusive environment that celebrates diversity and prioritizes patient education.
              </p>
            </div>

            <div className="transition-all text-brand-white hover:bg-brand-primary  hover:text-brand-background p-4 rounded group">
              <h4 className="font-bold font-heading text-xl mb-1 text-brand-primary group-hover:text-brand-background">Vision</h4>
              <p className="text-sm">
                To create a world where everyone has access to reliable, compassionate, and innovative dental care. We envision a future where dental wellness is a standard for all, not a privilege for some.
              </p>
            </div>

            <div className="transition-all text-brand-white hover:bg-brand-primary  hover:text-brand-background p-4 rounded group">
              <h4 className="font-bold font-heading text-xl mb-1 text-brand-primary group-hover:text-brand-background">Values</h4>
              <p className="text-sm">
                We operate with deep compassion. We are purpose-driven, honest, and transparent in our work. We strive to empower communities through knowledge, care, and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="max-w-screen-xl mx-auto px-6 text-center mb-16">
        <h3 className="text-lg text-brand-primary mb-2"># What We Do Best</h3>
        <h2 className="text-4xl font-heading text-brand-primary font-bold mb-10">Top Dental Treatments, Delivered with Precision</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Pediatric Dentistry'].map((title) => (
            <div key={title} className="p-6 transition-all border border-brand-primary/30 hover:bg-brand-primary group">
              <h4 className="font-bold font-heading text-2xl text-brand-primary group-hover:text-brand-background mb-2">{title}</h4>
              <p className="text-sm mb-3 text-brand-white group-hover:text-brand-background">Routine Check-ups, Cleanings, And Preventative Care To Enhance Oral Health</p>
              <button className="underline font-bold font-heading text-lg group-hover:text-brand-background">Read more →</button>
            </div>
          ))}
        </div>

        <Link className="inline-block bg-brand-primary text-brand-background font-heading font-bold text-lg py-2 px-6" href="/services">
          View All Services
        </Link>
      </div>

      {/* Call to Action Section */}
      <div className= "flex justify-between max-w-screen-xl mx-auto bg-black text-left py-10 px-6 md:px-20">
        <div className=" items-start">
          <h3 className=" text-lg text-brand-white mb-1"># Not Sure Where To Start?</h3>
          <h2 className="max-w-xl text-3xl font-bold text-brand-primary font-heading mb-4">Let us help you with a personalized dental plan and quote.</h2>
        </div>
        <div className="flex items-center">
          <Link className="inline-block bg-brand-primary text-brand-dark py-3 px-6 font-bold font-heading text-lg " href="/contact">
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative my-20 w-full h-[700px] mb-32">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-full px-2 shadow-lg">
            <button className="text-black p-5 text-lg font-bold">▶</button>
          </div>
        </div>
        <Image
          src="/about-us-play-video.jpg"
          alt="Play Video"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-x-0 -bottom-24 flex items-end justify-center pb-10 z-10">
          <h2 className="text-9xl font-extrabold uppercase text-brand-dark">Play Video</h2>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-wrap max-w-screen-xl mx-auto px-6 md:flex md:items-start md:gap-10 my-32">
        <div className='flex justify-between items-center gap-20 md:flex-row w-full mb-20'>
          <div className="md:w-1/2 w-full mb-10 md:mb-0">
            <Image src="/about-us-why-choose-us.jpg" alt="Why Choose Us" width={400} height={300} className="w-full h-[400px] object-cover" priority />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-lg text-brand-white mb-1"># Why Choose Us</h3>
            <h2 className="text-4xl font-bold font-heading text-brand-primary mb-4">Excellence in Healthcare Rooted in Trust.</h2>
            <p className="text-brand-white mb-6">
              From international patients to returning local families, PrimeDent has been the top choice in dental excellence. We speak your language, embrace your diversity, and welcome you with compassion.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-20 items-center w-full md:mt-0">
          <ul className="text-brand-white text-md list-disc pl-5 space-y-4">
            <li><strong>International Patient Focus</strong> – Bilingual speaking staff, tailored care, and discounted pricing.</li>
            <li><strong>Cutting-edge Technology</strong> – Digital dentistry, 3D imaging, and pain-free procedures.</li>
            <li><strong>Patient-centered Environment</strong> – Trained to reduce fear & anxiety with hospitality practices.</li>
            <li><strong>Transparent Pricing</strong> – No hidden costs, just honest, clear value.</li>
            <li><strong>Creative, Stress-Free Clinic Design</strong> – A welcoming, modern space in the heart of Izmir.</li>
          </ul>

            <div className="md:w-1/2 w-full mb-10 md:mb-0 justify-start flex flex-wrap">
              <Image src="/Google-reviews.png" alt="Google Reviews" width={400} height={200} className="w-[400px] h-[200px] object-contain" priority />
              <Image src="/trustpilot-reviews-dark.png" alt="Trustpilot Reviews" width={400} height={200} className="w-[400px] h-[200px] object-contain" priority />
            </div>
        </div>
      </div>
    </div>
  )
}
