import React from 'react'

import type { SimpleCTABlock as SimpleCTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { FormBlock } from '@/blocks/Form/Component'

export const SimpleCTABlock: React.FC<SimpleCTABlockProps> = (props) => {
  const { actionType, richText, link, media, form } = props

  return (
    <section className="bg-brand-dark text-white py-16">
      <div className="container flex flex-col md:flex-row gap-8 items-center">
        {richText && (
          <div className="flex-1">
            <RichText data={richText} enableGutter={false} />
          </div>
        )}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          {actionType === 'link' && link && <CMSLink {...link} />}
          {actionType === 'media' && media && <Media resource={media} />}
          {actionType === 'form' && form && (
            <FormBlock enableIntro={false} form={form as any} />
          )}
        </div>
      </div>
    </section>
  )
}