'use client'

import title from './title.variants'
import { VariantProps } from 'tailwind-variants'
import { Heading, HeadingLevel } from '@ariakit/react'

export type TitleProps = VariantProps<typeof title> & {
  children: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export default function Title({
  children,
  level,
  size,
  className,
  weight,
}: TitleProps) {
  return (
    <HeadingLevel level={level}>
      <Heading className={`${title({ size, weight })} ${className}`}>
        {children}
      </Heading>
    </HeadingLevel>
  )
}
