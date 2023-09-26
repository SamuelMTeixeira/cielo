import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'
import buttonVariants from './index.variants'

export type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<'button'>

export default function Button({
  children,
  className,
  color,
  size,
}: ButtonProps) {
  return (
    <button className={`${buttonVariants({ color, size })} ${className || ''}`}>
      {children}
    </button>
  )
}
