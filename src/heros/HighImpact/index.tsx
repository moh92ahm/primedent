'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import Image from 'next/image'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
//import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { SimpleCTABlock } from '@/blocks/SimpleCTA/Component'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, richText, cta }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <div className="relative text-brand-white min-h-screen h-screen flex flex-col">
      {/* Hero Section (75%) */}
      <section className="flex-1 basis-2/4 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full h-full px-6 gap-8 items-center">
          {/* Left: RichText & CTA */}
          <div className="flex-1 text-center md:text-left md:max-w-md z-10 flex flex-col justify-center items-center md:items-start">
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex justify-center md:justify-start gap-4">
                {links.map(({ link }, i) => (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Right: Doctor Image */}
          {/* <div className="min-h-[80vh] select-none">
            {media && typeof media === 'object' && (
              <Media
                fill
                imgClassName="object-contain w-full h-auto max-h-[60vh]"
                priority
                resource={media}
              />
            )}
          </div> */}
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

      {Array.isArray(cta) && cta.length > 0 && (
        <div className="basis-1/4 max-w-screen-xl mx-auto w-full px-6">
          <SimpleCTABlock {...(cta[0] as any)} />
        </div>
      )}
    </div>
  )
}
