'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { FormBlock } from '@/blocks/Form/Component'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText, form }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative text-brand-white overflow-hidden min-h-screen">
      {/* <div className="absolute top-0 left-0 w-full h-px bg-brand-accent z-20" />
      <div className="absolute top-0 left-0 h-full w-px bg-brand-accent z-20" /> */}

      <div className="max-w-screen-xl mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* RichText & CTA */}
        <div className="text-center mb-6 md:text-left md:max-w-md z-10">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex justify-center md:justify-start gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Doctor Image */}
        <div className="md:mt-0 z-10 hidden md:flex md:justify-end w-full md:max-w-2xl">
          {media && typeof media === 'object' && (
            <Media imgClassName="object-contain w-full h-auto max-h-[80vh]" priority resource={media} />
          )}
        </div>
      </div>

      {form && typeof form === 'object' && (
        <div className="py-8 bg-brand-dark">
          <FormBlock form={form} enableIntro={false} />
        </div>
      )}
    </div>
  )
}
