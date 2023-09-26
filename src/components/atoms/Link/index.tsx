import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { ComponentProps } from 'react'

export type LinkProps = NextLinkProps & ComponentProps<'a'>

export default function Link({ href, children, className }: LinkProps) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  )
}
