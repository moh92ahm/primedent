import type { Metadata } from 'next'
import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import BeforeAfterSlider from '@/components/BeforeAfter'
import TestimonialSlider from '@/components/Testimonials/TestimonialSlider'

import ContactForm from '@/components/Forms/SimpleContactForm'


import ServicesSection from '@/components/ServicesSection'


export const metadata: Metadata = {
  title: 'Home | Primedent',
}

export default function Page() {
  return (
    <div className="relative text-brand-white overflow-hidden">
        <div className="text-brand-white min-h-screen flex flex-col">

          {/* Hero Section (75%) */}
          <section className="flex-1 basis-2/4 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full h-full gap-8 items-center">
              {/* Left: RichText & CTA */}
              <div className="flex-1 text-center md:text-left md:max-w-md z-10 flex flex-col justify-center items-center md:items-start">
                  <h1 className="text-6xl font-bold font-heading text-brand-primary mb-4">
                    Perfect Smiles Prime Dent Clinics.
                  </h1>
                  <p className="text-lg text-brand-white mb-4">
                    With a focus on holistic well-being, we aim to provide personalized care that improves your smile.
                  </p>
                  <Link href="/contact-us" className="bg-brand-primary text-brand-dark font-heading font-bold text-lg py-2 px-6 rounded hover:bg-brand-accent transition">
                    Get Free Consultation
                  </Link>
              </div>

              {/* Right: Hero Image */}
              <div className="flex-1 flex justify-end items-end">
                <Image
                  src="/dtserhatcelik.png"
                  alt="hero"
                  width={400}
                  height={600}
                  className="object-contain w-full max-h-[75vh]"
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
              <div className="flex-1 w-full font-body">
                <ContactForm />
               
              </div>
            </div>
          </section>
        </div>


      {/* Services Section */}
      <ServicesSection 
        heading="Top Dental Treatments, Delivered with Precision"
        subheading="#What We Do Best"
        services={[
          { title: 'General Dentistry', description: 'Routine Check-ups, Cleanings, And Preventative Care To Enhance Oral Health', link: '/services' },
          { title: 'Cosmetic Dentistry', description: 'Transform Your Smile With Teeth Whitening, Veneers, And More', link: '/services' },
          { title: 'Restorative Dentistry', description: 'Repair Damaged Teeth With Crowns, Bridges, And Implants', link: '/services' },
          { title: 'Pediatric Dentistry', description: "Gentle Care For Children's Dental Needs From Infancy Through Adolescence", link: '/services' },
        ]}
        viewAllLink='/services'
      />


      {/* About Us Section */}
      <section className=" text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          
          {/* Image*/}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="w-[70%] mb-10 md:mb-0">
              <Image src="/about-us-our-mission-and-values.jpg" alt="" width={400} height={400} className=" w-full object-contain md:h-[800px]" priority />
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
            <Link href="/about-us" className="bg-brand-primary text-brand-dark font-heading font-bold text-xl px-6 py-2 rounded hover:bg-brand-accent transition">
              More About Us →
            </Link>
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
            <Link href="dr-serhat" className="bg-brand-primary text-brand-dark font-heading font-bold text-xl px-6 py-2 rounded hover:bg-brand-accent transition">
              Learn More →
            </Link>
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
            { name: 'Darren Mears', role: 'Patient', quote: "Perfect couldn't fault them on anything very friendly. Everything done in a few days and the results are amazing I would definitely recommend them to anyone", star: 5 },
            { name: 'Jade Dean', role: 'Patient', quote: "The service was very professional from the start to the end, all the arrangements were made absolutely excellent. The Dentist and dental nurses were very friendly and their work was excellent. I can't believe how good my teeth look and I have no hesitation in recommending them whoheartedly." , star: 5 },
            { name: 'Galya Valentinova', role: 'Patient', quote: "Absolutely number 1 place to do Hollywood smile! From 1st day we contacted them, they were Absolutely perfect with us! They organised everything very quick and good! All doctors and people who worked there was Absolutely spot on! 100 percent helpful and made perfect job!", star: 5 },
            { name: 'Elizabeth Oyenike Babalola', role: 'Patient', quote: "Wow at my new teeth!!! It all began when I was looking to have my teeth done for medical reason (and was a fortune to do in the UK) and amongst many clinics in Turkey. Overall the care I received here was super amazing, Their review on Trustpilot stood out. The best dentist I have ever met, patient with me all the way and kept tweaking until I was satisfied. I have a new smile and I’m super proud…" , star: 5 },
            { name: 'Bjorn van der Louw', role: 'Patient', quote: "Great experience. Lovely People. Help you a lot with everything. Its clean. Its great. When you want do your teeths. Then i say yes go to them. Greatfull.", star: 5 },
          ]} />
        </div>
      </section>

      {/* <div>
        <RecentBlogSection />
      </div> */}


    </div>
  )
}
