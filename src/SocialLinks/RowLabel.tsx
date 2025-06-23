'use client'
import { SocialLinks as SocialLinksType } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<SocialLinksType['links']>[number]>()

  const label =
    data?.data?.name ||
    data?.data?.link?.label ||
    `Row ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}
