import { VariantProps } from 'tailwind-variants'
import flexVariants from './flex.variants'
import { ComponentPropsWithoutRef, ElementType } from 'react'

export type FlexProps<T extends ElementType> = VariantProps<
  typeof flexVariants
> & {
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
  flex,
  ...props
}: FlexProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || 'div'

  return (
    <Component
      className={`${flexVariants({ direction, items, justify, gap, flex })} ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </Component>
  )
}
