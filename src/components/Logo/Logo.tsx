import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
     alt="Primedent Logo"
      width={914}
      height={118}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[12rem] w-full h-[40px]', className)}
      src="/primedent-logo-dark.png" 
    />
  )
}
