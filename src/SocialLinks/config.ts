import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateSocialLinks } from './hooks/revalidateSocialLinks'

export const SocialLinks: GlobalConfig = {
  slug: 'social-links',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
        link(),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/SocialLinks/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateSocialLinks],
  },
}
