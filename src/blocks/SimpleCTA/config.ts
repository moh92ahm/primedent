import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const SimpleCTA: Block = {
  slug: 'simpleCTA',
  interfaceName: 'SimpleCTABlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      label: false,
    },
    {
      name: 'actionType',
      type: 'radio',
      options: [
        { label: 'Link', value: 'link' },
        { label: 'Media', value: 'media' },
        { label: 'Form', value: 'form' },
      ],
      defaultValue: 'link',
      admin: {
        layout: 'horizontal',
      },
    },
    link({
      overrides: {
        admin: {
          condition: (_, { actionType }) => actionType === 'link',
        },
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, { actionType }) => actionType === 'media',
      },
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      admin: {
        condition: (_, { actionType }) => actionType === 'form',
      },
    },
  ],
  labels: {
    singular: 'Simple CTA',
    plural: 'Simple CTAs',
  },
}