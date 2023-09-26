import { VariantProps } from 'tailwind-variants'
import flex from './flex.variants'
import { ComponentPropsWithoutRef, ElementType } from 'react'

export type FlexProps<T extends ElementType> = VariantProps<typeof flex> & {
  as?: T
}

export default function Flex<T extends ElementType>({
  as,
  children,
  className,
  direction,
  items,
  justify,
  gap,
  ...props
}: FlexProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || 'div'

  return (
    <Component
      className={`${flex({ direction, items, justify, gap })} ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </Component>
  )
}
