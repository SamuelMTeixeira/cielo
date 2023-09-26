import { ComponentProps } from 'react'
import text from './text.variants'
import { VariantProps } from 'tailwind-variants'

export type TextProps = VariantProps<typeof text> & ComponentProps<'p'>

export default function Text({ children, size, weight, className }: TextProps) {
  return <p className={`${className} ${text({ size, weight })}`}>{children}</p>
}
