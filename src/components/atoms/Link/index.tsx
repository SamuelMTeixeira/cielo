import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'
import linkVariants from './index.variants'

export type LinkProps = VariantProps<typeof linkVariants> &
  NextLinkProps &
  ComponentProps<'a'>

export default function Link({
  href,
  children,
  className,
  size,
  weight,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`${linkVariants({ size, weight })} ${className}`}
    >
      {children}
    </NextLink>
  )
}
