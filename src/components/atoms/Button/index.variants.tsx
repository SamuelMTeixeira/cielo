import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'flex gap-2 items-center px-4 py-2 rounded-lg text-white focus:outline-none focus:ring',
  variants: {
    schema: {
      primary:
        'bg-blue-500 hover:bg-blue-700 active:bg-blue-600 focus:ring-blue-300',
      success:
        'bg-green-500 hover:bg-green-700 active:bg-green-600 focus:ring-green-300',
      error: 'bg-red-500 hover:bg-red-700 active:bg-red-600 focus:ring-red-300',
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
    schema: 'primary',
  },
})

export default buttonVariants
