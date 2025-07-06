'use client'

import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'

import { Quote, Star } from 'lucide-react';


interface Testimonial {
  name: string
  role: string
  quote: string
  star: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0)
  const length = testimonials.length
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [length])

  return (
    <div className="w-full max-w-3xl mx-auto p-6 text-start">
      {testimonials[current] && (
        <>
        <Quote className="w-8 h-8 text-brand-primary mb-4" />
          {/* <div className="mb-4">
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              width={80}
              height={80}
              className="rounded-full mx-auto object-cover"
            />
          </div> */}
          <blockquote className="text-lg italic text-brand-white">“{testimonials[current].quote}”</blockquote>
          <p className="mt-4 font-bold font-heading text-2xl text-brand-primary">{testimonials[current].name}</p>
          <p className="text-md text-brand-white">{testimonials[current].role}</p>
          
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-yellow-500' : 'fill-white-400'}`} />
            ))}
          </div>
        </>
      )}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-brand-primary scale-125' : 'bg-gray-300'
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
