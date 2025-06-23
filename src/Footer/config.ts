import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'
import { socialLinkGroup } from '@/fields/socialLinkGroup'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'richText',
          type: 'richText',
        },
        link({
          appearances: ['default', 'outline'],
          overrides: { name: 'link' },
        }),
      ],
    },
    {
      name: 'logoSection',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'textarea',
        },
        socialLinkGroup(),
      ],
    },
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        linkGroup(),
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'bottom',
      type: 'group',
      fields: [
        {
          name: 'copyright',
          type: 'text',
        },
        {
          name: 'legal',
          type: 'group',
          fields: [
            link({ overrides: { name: 'privacyPolicy' } }),
            link({ overrides: { name: 'termsAndConditions' } }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
