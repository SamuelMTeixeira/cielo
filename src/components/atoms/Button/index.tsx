import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'
import buttonVariants from './index.variants'

export type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<'button'>

export default function Button({
  children,
  className,
  schema,
  size,
  rounded,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonVariants({ schema, size, rounded })} ${
        className || ''
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
