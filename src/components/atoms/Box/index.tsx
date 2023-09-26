import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type BoxProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
}

function Box<T extends ElementType>({
  as,
  children,
  className,
  ...props
}: BoxProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || 'div'

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}

export default Box
