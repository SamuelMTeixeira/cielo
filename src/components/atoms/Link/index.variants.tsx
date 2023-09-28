import { tv } from 'tailwind-variants'

export const linkVariants = tv({
  base: 'font-bold font-raleway rounded-lg px-4 py-1 hover:bg-gray-200',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    size: 'lg',
    weight: 'bold',
  },
})

export default linkVariants
