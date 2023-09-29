import { tv } from 'tailwind-variants'

export const title = tv({
  base: 'font-bold',
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
      bold: 'font-bold',
      extrabold: 'font-bold',
    },
    font: {
      nunito: 'font-nunito',
    },
  },
  defaultVariants: {
    size: 'lg',
    weight: 'bold',
    font: 'nunito',
  },
})

export default title
