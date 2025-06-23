import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import * as Icons from 'lucide-react'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'

export async function Footer() {
  const footerData: any = await getCachedGlobal('footer', 2)()

  const columns = footerData?.columns || []
  const socialLinks = footerData?.logoSection?.socialLinks || []

  return (
    <>
      {footerData?.cta && (
        <div className="mb-8">
          <CallToActionBlock {...footerData.cta} />
        </div>
      )}
      <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
        <div className="container py-8 flex flex-col gap-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-4">
              <Link className="flex" href="/">
                <Logo />
              </Link>
              {footerData?.logoSection?.text && (
                <p className="text-sm">{footerData.logoSection.text}</p>
              )}
              <div className="flex gap-3 items-center">
                {socialLinks.map(({ icon, link }, i) => {
                  const Icon = Icons[icon as keyof typeof Icons]
                  return (
                    <CMSLink key={i} {...link} className="text-white">
                      {Icon ? <Icon className="w-5 h-5" /> : icon}
                    </CMSLink>
                  )
                })}
              </div>
            </div>
            {columns.map(({ label, links }: any, i: number) => (
              <div key={i} className="flex flex-col gap-2">
                {label && <p className="font-bold mb-2">{label}</p>}
                {(links || []).map(({ link: columnLink }: any, li: number) => (
                  <CMSLink key={li} className="text-white" {...columnLink} />
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4 mt-8 flex flex-col md:flex-row md:justify-between text-sm gap-4">
            <p>{footerData?.bottom?.copyright}</p>
            <div className="flex gap-4 md:justify-end">
              {footerData?.bottom?.legal?.privacyPolicy && (
                <CMSLink className="text-white" {...footerData.bottom.legal.privacyPolicy} />
              )}
              {footerData?.bottom?.legal?.termsAndConditions && (
                <CMSLink className="text-white" {...footerData.bottom.legal.termsAndConditions} />
              )}
              <ThemeSelector />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
