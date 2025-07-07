import type { Metadata } from 'next'
import React from 'react'

// import Image from 'next/image'
import Link from 'next/link'

import Image from 'next/image'

import BeforeAfterSlider from '@/components/BeforeAfter'
import TestimonialSlider from '@/components/Testimonials/TestimonialSlider'

import ContactForm from '@/components/ContactForm'


export const metadata: Metadata = {
  title: 'Home | Primedent',
}

export default function Page() {
  return (
    <div className="relative text-brand-white overflow-hidden">
        <div className="text-brand-white min-h-screen flex flex-col">

          {/* Hero Section (75%) */}
          <section className="flex-1 basis-2/4 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full h-full px-6 gap-8 items-center">
              {/* Left: RichText & CTA */}
              <div className="flex-1 text-center md:text-left md:max-w-md z-10 flex flex-col justify-center items-center md:items-start">
                  <h1 className="text-6xl font-bold font-heading text-brand-primary mb-4">
                    Perfect Smiles Prime Dent Clinics.
                  </h1>
                  <p className="text-lg text-brand-white mb-4">
                    With a focus on holistic well-being, we aim to provide personalized care that improves your smile.
                  </p>
                  <Link href="/services" className="bg-brand-primary text-brand-dark font-heading font-bold text-lg py-2 px-6 rounded hover:bg-brand-accent transition">
                    Get Free Consultation
                  </Link>
              </div>

              {/* Right: Hero Image */}
              <div className="flex-1 flex justify-end items-end">
                <Image
                  src="/hero-doctor-image.png"
                  alt="hero"
                  width={400}
                  height={600}
                  className="object-contain w-full max-h-[70vh]"
                />
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="bg-brand-dark text-white py-16">
            <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
              {/* CTA Text */}
              <div className="flex-1">
                <p className="text-lg text-brand-white mb-4">
                  # Get In Touch
                </p>
                <h1 className="text-4xl font-heading font-bold text-brand-primary mb-4">
                  Stay Connected <br />for Better Dental Health.
                </h1>
              </div>

              {/* Contact Form */}
              <div className="flex-1 w-full">
                <ContactForm />
              </div>
            </div>
          </section>

        </div>


      {/* Services Section */}
      <div className="max-w-screen-xl mx-auto px-6 text-center my-24">
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

      <section className=" text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          
          {/* Image*/}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="w-[70%] mb-10 md:mb-0">
              <Image src="/about-us-our-mission-and-values.jpg" alt="" width={400} height={400} className=" w-full object-contain h-[800px]" priority />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-brand-white text-lg mb-4"># About Us</p>
            <h2 className="text-brand-primary text-4xl font-bold font-heading mb-4">
              Trusted by Thousands,<br />
              Designed for Comfort
            </h2>
            <p className="text-brand-white mb-6">
              At Primedent Clinics, we’re redefining dental care in Turkey. With advanced technologies,
              internationally trained dentists, and a warm, welcoming environment, we help patients from
              across Europe transform their smiles — safely and affordably. Our clinic combines precision,
              hospitality, and aesthetic results in one experience.
            </p>
            <button className="bg-brand-primary text-brand-dark font-heading font-bold text-xl px-6 py-2 rounded hover:bg-brand-accent transition">
              More About Us →
            </button>
          </div>
        </div>
      </section>

      <section className=" text-white py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-brand-white text-lg mb-4"># Meet Our Doctor</p>
            <h2 className="text-4xl font-bold font-heading text-brand-primary mb-4">Dr. Serhat</h2>
            <p className="text-brand-white mb-6">
              As a dentist, I strive to make my office a comfortable and welcoming place where patients
              feel completely at home. I am passionate about helping my patients achieve and maintain
              beautiful, healthy smiles that they are proud to show off. My patients are an integral part
              of my community, and I am committed to providing them with the most gentle and effective
              dental care possible. Our team understands that dental anxiety can prevent patients from
              scheduling appointments, so we aim to ensure that your visit to Primedent is unlike any other.
            </p>
            <button className="bg-brand-primary text-brand-dark font-heading font-bold text-xl px-6 py-2 rounded hover:bg-brand-accent transition">
              Learn More →
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className='relative w-full max-w-lg h-[600px] bg-brand-white bg-opacity-80 flex items-end'>
              <Image src="/dtserhatcelik.png" alt="Dr. Serhat" width={400} height={400} className="w-full object-contain h-[600px]" priority />
            </div>
          </div>
        </div>
      </section>

      <section className=" text-white py-16">
        <div className="container mx-auto px-6">
          <p className="text-brand-white text-lg mb-2"># Dental Project</p>
          <h2 className="text-4xl font-bold font-heading text-brand-primary mb-6">A Portfolio of Smiles.</h2>

          <div className="grid md:grid-cols-2 gap-20 p-2">
            <BeforeAfterSlider before="/before-01.jpg" after="/after-01.jpg" />
            <BeforeAfterSlider before="/before-02.jpg" after="/after-02.jpg" />
          </div>
        </div>
      </section>

      <section className=" text-white py-16">
        <div className="container mx-auto px-6">
          {/* <RotatingImageStrip images={images} /> */}
          <div className="text-center mt-10">
            <p className="text-brand-white text-lg mb-2 mt-10"># Testimonials</p>
            <h2 className="text-4xl font-bold font-heading text-brand-primary mb-4 justify-center">What Our Patients Say</h2>
            <p className="text-brand-white mb-6 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
          <TestimonialSlider testimonials={[
            { name: 'John Doe', role: 'Patient', quote: 'Amazing experience! The staff was friendly and the treatment was top-notch.', star: 5 },
            { name: 'Jane Smith', role: 'Patient', quote: 'Highly recommend! The clinic is clean and the doctors are very professional.' , star: 5 },
            { name: 'Alice Johnson', role: 'Patient', quote: 'I had a great experience at Primedent. The team was very attentive and made me feel comfortable.', star: 5 },
            { name: ' ', role: 'Patient', quote: ' I was nervous about my dental work, but the team at Primedent made it a breeze. Highly satisfied!' , star: 5 },
            { name: ' ', role: 'Patient', quote: ' I love my new smile! The results exceeded my expectations and the care was exceptional.', star: 5 },
          ]} />
        </div>
      </section>

      {/* <div>
        <RecentBlogSection />
      </div> */}


    </div>
  )
}
