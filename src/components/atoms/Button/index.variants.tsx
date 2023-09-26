import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'flex gap-2 items-center px-4 py-2 rounded-lg text-white focus:outline-none focus:ring',
  variants: {
    color: {
      primary:
        'bg-blue-400 hover:bg-blue-600 active:bg-blue-500 focus:ring-blue-200',
      secondary: '',
      success:
        'bg-green-500 hover:bg-green-700 active:bg-green-600 focus:ring-green-200',
      error: 'bg-red-400 hover:bg-red-600 active:bg-red-500 focus:ring-red-200',
      transparent: 'bg-transparent text-gray-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

export default buttonVariants
