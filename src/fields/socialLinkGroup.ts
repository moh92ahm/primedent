import type { ArrayField, Field } from 'payload'

import type { LinkAppearances } from './link'
import deepMerge from '@/utilities/deepMerge'
import { link } from './link'

export type SocialLinkGroupArgs = {
  appearances?: LinkAppearances[] | false
  overrides?: Partial<ArrayField>
}

export const socialLinkGroup = ({ appearances, overrides = {} }: SocialLinkGroupArgs = {}): Field => {
  const socialLinks: Field = {
    name: 'socialLinks',
    type: 'array',
    fields: [
      {
        name: 'icon',
        type: 'text',
        required: true,
      },
      link({ appearances }),
    ],
    admin: {
      initCollapsed: true,
    },
  }

  return deepMerge(socialLinks, overrides)
}
